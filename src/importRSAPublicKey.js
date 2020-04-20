import importRSAKey from "./importRSAKey";

export default async function(publicKey) {
  return await importRSAKey(publicKey, "spki", ["encrypt"]);
}
