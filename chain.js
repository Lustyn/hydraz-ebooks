const csv = require("./csv");
const markov = require("markov-chain-nlg");

module.exports = (async () => {
    console.log("Processing csv...");
    const results = (await csv("data.csv")).filter(s => s.split("\n").length <= 1);
    console.log(`Finished processing csv, rows: ${results.length}.`);
    console.log("Training markov chain...");
    markov.train(results, true);

    return markov;
})();