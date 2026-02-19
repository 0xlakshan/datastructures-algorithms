const fs = require('fs');
const path = require('path');

function loadDataset(filePath) {
  const absolutePath = path.resolve(filePath);
  const data = fs.readFileSync(absolutePath, 'utf8');
  return JSON.parse(data);
}

module.exports = { loadDataset };
