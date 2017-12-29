function exportAll(lib) {
  for (var name in lib) {
    if (!exports.hasOwnProperty(name)) exports[name] = lib[name];
  }
}

exportAll(require('./js/rand'));
exportAll(require('./js/randcolor'));
exportAll(require('./js/randstr'));
exportAll(require('./js/randstr64'));
exportAll(require('./js/randtext'));
exportAll(require('./js/randvalue'));
exportAll(require('./js/rand-custom-string'));
exportAll(require('./js/dict'));
