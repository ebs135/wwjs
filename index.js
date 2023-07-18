const qrterminal = require("qrcode-terminal");
const QRCode = require("qrcode");
const { Client, LocalAuth } = require("whatsapp-web.js");
const express = require("express");
const cors = require("cors");
const multer = require("multer");

//#region Express
const upload = multer();
var app = express();
app.use(cors());
app.use(upload.array());
// Parse x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
//#endregion Express

//#region whatsapp-web.js
var base64DataUrl;
const client = new Client({
  authStrategy: new LocalAuth(),
});

client.initialize();
client.on("qr", (qr) => {
  qrterminal.generate(qr, { small: true });
  QRCode.toDataURL(
    qr,
    {
      errorCorrectionLevel: "H",
    },
    (err, url) => {
      if (err) throw err;
      console.log("QR Code generated");
      base64DataUrl = url;
    }
  );
});

client.on("ready", () => {
  console.log("Client is ready!");
  base64DataUrl = "Perangkat sudah terhubung!";
});

client.on("message", async (msg) => {
  console.log("MESSAGE RECEIVED", msg);
  // Code whatever logic you want here,
  // based on the message body or message type
});
//#endregion whatsapp-web.js

//#region Express API Endpoints
app.get("/api/qrcode", (req, res) => {
  res.send({ qrcode: base64DataUrl });
});

// API for sending message
// using format number (+62xxxxxxxx or 08xxxxxxxx)
app.post("/api/send-message", (req, res) => {
  let { number, message } = req.body;

  // Proccess number format 08xxx => 628xxx
  if (number.slice(0, 1) === "0") {
    number = "62" + number.slice(1);
  } else if (number.slice(0, 1) === "+") {
    number = number.slice(1);
  }

  // Check if number is valid WA Number
  client
    .getNumberId(number)
    .then((contact) => {
      let formattedNumber = contact._serialized;

      client
        .sendMessage(formattedNumber, message)
        .then((response) => {
          let messageId = response.id._serialized;

          res.send({
            success: true,
            message: "Message sent successfully",
            data: {
              messageId,
            },
          });
        })
        .catch((err) => {
          res.send({
            success: false,
            message: "Error sending message",
            data: {
              err,
            },
          });
        });
    })
    .catch((err) => {
      res.send({
        success: false,
        message: "Number not found",
        data: {
          err,
        },
      });
    });
});
//#endregion Express API Endpoints
