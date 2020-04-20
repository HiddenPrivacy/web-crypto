import importRSAKey from "./importRSAKey";

export default async function(privateKey) {
  return await importRSAKey(privateKey, "pkcs8", ["decrypt"]);
}
