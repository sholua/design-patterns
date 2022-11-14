const Memento = require('./Memento');

const creator = {
  save: (val) => new Memento(val),
  restore: (memento) => memento.value,
};

module.exports = creator;
