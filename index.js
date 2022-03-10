function exportAll(lib) {
  for (const name in lib) {
    if (!exports.hasOwnProperty(name)) exports[name] = lib[name];
  }
}

exportAll(require('./dist/js/rand'));
exportAll(require('./dist/js/randcolor'));
exportAll(require('./dist/js/randstr'));
exportAll(require('./dist/js/randstr64'));
exportAll(require('./dist/js/randtext'));
exportAll(require('./dist/js/randvalue'));
exportAll(require('./dist/js/rand-custom-string'));
exportAll(require('./dist/js/dict'));
exportAll(require('./dist/js/generate-password'));
exportAll(require('./dist/js/shuffle'));
