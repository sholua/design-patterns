const Tesla = require('./Tesla');
const Bmw = require('./Bmw');

function exportVisitor(auto) {
  if (auto instanceof Tesla)
    auto.export = console.log(`Exported data: ${auto.info()}`);
  if (auto instanceof Bmw)
    auto.export = console.log(`Exported data: ${auto.info()}`);
}

module.exports = exportVisitor;
