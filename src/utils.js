const { json } = require("express");
const fs = require("fs/promises");
const path = require("path");
const dbPath = path.resolve("data", "data.json");

exports.readFile = async () => {
  let data = await fs.readFile(dbPath);
  let output = JSON.parse(data);
  return output;
};

exports.writeFile = async (db, data) => {
  await fs
    .writeFile(db, data)
    .then(() => console.log("Data successfully written to file"))
    .catch((err) => console.error(`Error writing data to file: ${err}`));
};
