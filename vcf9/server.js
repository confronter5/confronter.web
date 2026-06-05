const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const multer = require("multer");
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

/* --------------------------
   CREATE REQUIRED FOLDERS
--------------------------- */

if (!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads");
}

/* --------------------------
   DATABASE
--------------------------- */

const db = new sqlite3.Database("confronter.db");

db.serialize(() => {

    db.run(`
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fullname TEXT,
        email TEXT,
        phone TEXT UNIQUE,
        country TEXT,
        verifiedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    `);

    db.run(`
    CREATE TABLE IF NOT EXISTS settings(
        id INTEGER PRIMARY KEY,
        verifiedCount INTEGER DEFAULT 0,
        remainingCount INTEGER DEFAULT 10000,
        countdownDays INTEGER DEFAULT 30,
        vcfEnabled INTEGER DEFAULT 1,
        uploadedFile TEXT DEFAULT ''
    )
    `);

    db.run(`
    INSERT OR IGNORE INTO settings
    (
        id,
        verifiedCount,
        remainingCount,
        countdownDays,
        vcfEnabled
    )
    VALUES
    (
        1,
        0,
        10000,
        30,
        1
    )
    `);

});

/* --------------------------
   MIDDLEWARE
--------------------------- */

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: "confronter-secret-key",
        resave: false,
        saveUninitialized: true
    })
);

/* --------------------------
   STATIC FILES
--------------------------- */

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "admin.html"));
});

app.get("/styles.css", (req, res) => {
    res.sendFile(path.join(__dirname, "styles.css"));
});

app.get("/app.js", (req, res) => {
    res.sendFile(path.join(__dirname, "app.js"));
});

/* --------------------------
   ADMIN PASSWORD
--------------------------- */

const ADMIN_PASSWORD = "confronter1";

/* --------------------------
   LOGIN
--------------------------- */

app.post("/api/admin/login", (req, res) => {

    const { password } = req.body;

    if (password === ADMIN_PASSWORD) {

        req.session.admin = true;

        return res.json({
            success: true
        });
    }

    res.json({
        success: false,
        message: "Wrong Password"
    });

});

/* --------------------------
   VERIFY USER
--------------------------- */

app.post("/api/verify", (req, res) => {

    const {
        fullname,
        email,
        phone,
        country
    } = req.body;

    if (
        !fullname ||
        !email ||
        !phone ||
        !country
    ) {

        return res.json({
            success: false,
            message: "Fill all fields"
        });

    }

    db.get(
        "SELECT * FROM users WHERE phone=?",
        [phone],
        (err, existingUser) => {

            if (existingUser) {

                return res.json({
                    success: false,
                    message: "Number already verified"
                });

            }

            db.run(
                `
                INSERT INTO users
                (
                    fullname,
                    email,
                    phone,
                    country
                )
                VALUES
                (?,?,?,?)
                `,
                [
                    fullname,
                    email,
                    phone,
                    country
                ],
                function (err) {

                    if (err) {

                        return res.json({
                            success: false,
                            message: "Database error"
                        });

                    }

                    db.run(`
                    UPDATE settings
                    SET
                    verifiedCount = verifiedCount + 1,
                    remainingCount = remainingCount - 1
                    `);

                    res.json({
                        success: true
                    });

                }
            );

        }
    );

});

/* --------------------------
   STATS
--------------------------- */

app.get("/api/stats", (req, res) => {

    db.get(
        "SELECT * FROM settings WHERE id=1",
        (err, row) => {

            res.json(row);

        }
    );

});

/* --------------------------
   ADMIN USERS
--------------------------- */

app.get("/api/users", (req, res) => {

    if (!req.session.admin) {

        return res.status(403).json({
            success: false
        });

    }

    db.all(
        "SELECT * FROM users ORDER BY id DESC",
        (err, rows) => {

            res.json(rows);

        }
    );

});

/* --------------------------
   DELETE USER
--------------------------- */

app.delete("/api/user/:id", (req, res) => {

    if (!req.session.admin) {

        return res.status(403).json({
            success: false
        });

    }

    db.run(
        "DELETE FROM users WHERE id=?",
        [req.params.id],
        function () {

            res.json({
                success: true
            });

        }
    );

});

/* --------------------------
   UPDATE COUNTDOWN
--------------------------- */

app.post("/api/countdown", (req, res) => {

    if (!req.session.admin) {

        return res.status(403).json({
            success: false
        });

    }

    const { days } = req.body;

    db.run(
        `
        UPDATE settings
        SET countdownDays=?
        `,
        [days],
        () => {

            res.json({
                success: true
            });

        }
    );

});

/* --------------------------
   VCF STATUS
--------------------------- */

app.post("/api/vcf-status", (req, res) => {

    if (!req.session.admin) {

        return res.status(403).json({
            success: false
        });

    }

    const { enabled } = req.body;

    db.run(
        `
        UPDATE settings
        SET vcfEnabled=?
        `,
        [enabled],
        () => {

            res.json({
                success: true
            });

        }
    );

});

/* --------------------------
   FILE UPLOAD
--------------------------- */

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, "./uploads");

    },

    filename: function (req, file, cb) {

        cb(
            null,
            Date.now() +
            "-" +
            file.originalname
        );

    }

});

const upload = multer({
    storage
});

app.post(
    "/api/upload-vcf",
    upload.single("vcf"),
    (req, res) => {

        if (!req.session.admin) {

            return res.status(403).json({
                success: false
            });

        }

        const filename = req.file.filename;

        db.run(
            `
            UPDATE settings
            SET uploadedFile=?
            `,
            [filename]
        );

        res.json({
            success: true,
            filename
        });

    }
);

/* --------------------------
   DOWNLOAD VCF
--------------------------- */

app.get("/api/download-vcf", (req, res) => {

    db.get(
        "SELECT * FROM settings WHERE id=1",
        (err, row) => {

            if (!row) {

                return res.status(404).send(
                    "Not found"
                );

            }

            if (
                row.vcfEnabled !== 1
            ) {

                return res.status(403).send(
                    "Download disabled"
                );

            }

            if (
                !row.uploadedFile
            ) {

                return res.status(404).send(
                    "No VCF uploaded"
                );

            }

            const filePath =
                path.join(
                    __dirname,
                    "uploads",
                    row.uploadedFile
                );

            res.download(filePath);

        }
    );

});

/* --------------------------
   EXPORT CSV
--------------------------- */

app.get("/api/export-csv", (req, res) => {

    if (!req.session.admin) {

        return res.status(403).json({
            success: false
        });

    }

    db.all(
        "SELECT * FROM users",
        (err, rows) => {

            let csv =
                "ID,NAME,EMAIL,PHONE,COUNTRY,DATE\n";

            rows.forEach(user => {

                csv +=
                    `${user.id},"${user.fullname}","${user.email}","${user.phone}","${user.country}","${user.verifiedAt}"\n`;

            });

            res.setHeader(
                "Content-Type",
                "text/csv"
            );

            res.setHeader(
                "Content-Disposition",
                "attachment; filename=verified-users.csv"
            );

            res.send(csv);

        }
    );

});

/* --------------------------
   RESET COUNTERS
--------------------------- */

app.post("/api/reset-counters", (req, res) => {

    if (!req.session.admin) {

        return res.status(403).json({
            success: false
        });

    }

    db.run(`
    UPDATE settings
    SET
    verifiedCount=0,
    remainingCount=10000
    `);

    res.json({
        success: true
    });

});

/* --------------------------
   SERVER START
--------------------------- */

app.listen(PORT, () => {

    console.log(
        `Confronter Server Running:
http://localhost:${PORT}`
    );

});
