import { encode } from "./utils/base64";
import wrap from "./utils/wrap";
import subtle from "./utils/subtle";

export default async function() {
  try {

    // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey
    let cryptoKeyPair = await subtle.generateKey(
      {
          name: "RSA-OAEP",
          modulusLength: 4096,
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]), //65537
          hash: "SHA-512"
      },
      true,
      ["encrypt","decrypt"]
    );

    // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey
    let privateKey = wrap(encode(await subtle.exportKey("pkcs8", cryptoKeyPair.privateKey)), "PRIVATE KEY");
    let publicKey = wrap(encode(await subtle.exportKey("spki", cryptoKeyPair.publicKey)), "PUBLIC KEY");

    return { 
      privateKey,
      publicKey
    };
  
  }

  catch (err) {
    throw err;
  }
}
