import subtle from "./utils/subtle";
import { encode } from "./utils/base64";
import textEncode from "./utils/textEncode";

export default async function(key, text) {
  try {
    
    // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt

    let buffer = await subtle.encrypt(
      {
        name: "RSA-OAEP",
        hash: { name: "SHA-256" } // has was added because MS Edge
      },
      key,
      textEncode(text)
    );

    return encode(buffer);
  }

  catch (err) {
    throw err;
  }
}
