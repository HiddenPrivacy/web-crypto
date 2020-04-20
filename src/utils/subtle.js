import iesubtle from "./iesubtle";

let subtle;

if(window.crypto)
    subtle = window.crypto.subtle;
else
    subtle = iesubtle;

export default subtle;