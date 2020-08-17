const { ordena } = require("./sortIds");

describe("Ordena um array segundo outro", () => {
  it("ordena entrada vazia", () => {
    const order = [1, 2];
    const input = [];
    const expected = [];

    expect(ordena(order, input)).toEqual(expected);
  });

  it("ordena ordenação vazia", () => {
    const order = [];
    const input = [1, 2];
    const expected = [];

    expect(ordena(order, input)).toEqual(expected);
  });

  it("ordena arrays originais", () => {
    const order = [2, 1, 4, 3, 9, 6];
    const input = [2, 3, 1, 3, 2, 4, 6, 9, 2];
    const expected = [2, 2, 2, 1, 4, 3, 3, 9, 6];

    expect(ordena(order, input)).toEqual(expected);
  });

  it("ordena com entradas ausentes", () => {
    const order = [2, 1, 7, 4, 3, 9, 6];
    const input = [2, 3, 1, 3, 2, 4, 6, 9, 2];
    const expected = [2, 2, 2, 1, 4, 3, 3, 9, 6];

    expect(ordena(order, input)).toEqual(expected);
  });

  it("ordena com ordens ausentes", () => {
    const order = [2, 1, 3, 9, 6];
    const input = [2, 3, 1, 3, 2, 4, 6, 9, 2];
    const expected = [2, 2, 2, 1, 3, 3, 9, 6];

    expect(ordena(order, input)).toEqual(expected);
  });
});
