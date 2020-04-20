import subtle from "./utils/subtle";
import { decode } from "./utils/base64";
import unwrap from "./utils/unwrap";

export default async function(keyBuffer, format, usage) {
  try {
    
    // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey
    let key = await subtle.importKey(
      format, //format
      decode(unwrap(keyBuffer)), //keyData
      {   
          name: "RSA-OAEP", //algorithm
          hash: "SHA-512"
      },
      false, //extractable
      usage
    );

    return key;
  }

  catch (err) {
    throw err;
  }
}
