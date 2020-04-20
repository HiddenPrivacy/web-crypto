export default async function() {

  var cryptoKeyPair = await crypto.subtle.generateKey(
    {
        name: "RSA-OAEP",
        modulusLength: 4096,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]), //65537
        hash: "SHA-512"
    },
    true,
    ["encrypt","decrypt"]
  );

  return cryptoKeyPair;
}
