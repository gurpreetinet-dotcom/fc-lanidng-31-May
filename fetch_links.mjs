import https from "https";

const links = [
  "https://share.google/fTXOoNLu1KBm3v3wp",
  "https://share.google/PtpLfdkv3gRRUINQZ",
  "https://share.google/4NzjxWwd8FuodKO0j"
];

links.forEach(url => {
  https.get(url, (res) => {
    console.log(url, res.statusCode, res.headers.location);
  });
});
