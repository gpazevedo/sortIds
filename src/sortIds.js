function ordena(ordem, entrada) {
  if (isValid(ordem) && isValid(entrada)) {
    const mapa = entrada.reduce(
      (mapa, e) => mapa.set(e, (mapa.get(e) || 0) + 1),
      new Map()
    );

    return ordem.reduce(
      (ordenado, o) =>
        mapa.get(o) ? ordenado.concat(Array(mapa.get(o)).fill(o)) : ordenado,
      []
    );
  }
  return [];
}

function isValid(array) {
  return array && array instanceof Array && array.length > 0;
}

module.exports = { ordena };
