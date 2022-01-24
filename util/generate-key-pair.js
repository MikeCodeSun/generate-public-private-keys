const crypto = require("crypto");
const fs = require("fs");

const generateKeys = () => {
  const keypair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });
  // console.log(keypair);

  fs.writeFileSync(__dirname + "/public_key.pem", keypair.publicKey);
  fs.writeFileSync(__dirname + "/private_key.pem", keypair.privateKey);
};

generateKeys();
