import subtle from "./utils/subtle";
import { decode } from "./utils/base64";
import textDecode from "./utils/textDecode";

export default async function(key, cypher) {
  try {
    
    // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt

    let buffer = await subtle.decrypt(
      {
        name: "RSA-OAEP",
        hash: { name: "SHA-256" } // has was added because MS Edge
      },
      key,
      decode(cypher)
    );
    return textDecode(buffer);
  }

  catch (err) {
    throw err;
  }
}
