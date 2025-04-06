const crypto = require('crypto');
const crypto_orig_creteHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_creteHash(
    algorithm == "md4" ? "sha256" : algorithm
)