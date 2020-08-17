function ordena(ordem, entrada) {
  if (
    entrada &&
    entrada instanceof Array &&
    entrada.length > 0 &&
    ordem &&
    ordem instanceof Array &&
    ordem.length > 0
  ) {
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
module.exports = { ordena };
