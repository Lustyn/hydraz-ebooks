const csv = require("csv-parser");
const fs = require("fs");

module.exports = function(filename) {
    return new Promise((resolve, reject) => {
        try {
            let results = [];
            fs.createReadStream(filename)
                .pipe(csv({
                    headers: false
                }))
                .on('data', (data) => results.push(data[0]))
                .on('end', () => resolve(results));
        } catch (e) {
            reject(e);
        }
    })
}
