const qr = require("qr-image");

exports.generateQR = async (text) => {
  try {
    var qr_svg = qr.image("I love QR!", { type: "png" });
    qr_svg.pipe(require("fs").createWriteStream("qrcode.png"));

    var svg_string = qr.imageSync("I love QR!", { type: "png" });
  } catch (err) {
    console.error(err);
  }
};
