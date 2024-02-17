const grammar = {
  A: [
    { symbol: "T", isTerminal: false },
    { symbol: "N", isTerminal: false },
    { symbol: "M", isTerminal: false },
    { regex: /^;$/, isTerminal: true },
  ],
  N: [
    { symbol: "L", isTerminal: false },
    { symbol: "R", isTerminal: false },
  ],
  R: [
    { symbol: "L", isTerminal: false },
    { symbol: "R", isTerminal: false },
  ],
  M: [
    { regex: /^\[$/, isTerminal: true },
    { symbol: "E", isTerminal: false },
    { regex: /^\]$/, isTerminal: true },
  ],
  E: [
    { symbol: "D", isTerminal: false },
    { symbol: "C", isTerminal: false },
    { symbol: "X", isTerminal: false },
  ],
  C: [
    { symbol: "D", isTerminal: false },
    { symbol: "C", isTerminal: false },
  ],
  T: [{ regex: /^let$/, isTerminal: true }],
  L: [{ regex: /^[a-z]+$/, isTerminal: true }],
  D: [{ regex: /^[0-9]+$/, isTerminal: true }],
  X: [
    { regex: /^,$/, isTerminal: true },
    { symbol: "D", isTerminal: false },
    { symbol: "C", isTerminal: false },
    { symbol: "X", isTerminal: false },
  ],
  vacio: [],
};
const preddict_table = {
  col: [/let/, /[a-z]/, /\[/, /[0-9]/, /\]/, /,/, /;/, /\$/],
  A: ["A", null, null, null, null, null, null, null],
  N: [null, "N", null, null, null, null, null, null],
  R: [null, "R", "vacio", null, null, null, null, null],
  M: [null, null, "M", null, null, null, null, null],
  E: [null, null, null, "E", null, null, null, null],
  C: [null, null, null, "C", "vacio", "vacio", null, null],
  T: ["T", null, null, null, null, null, null, null],
  L: [null, "L", null, null, null, null, null, null],
  D: [null, null, null, "D", null, null, null, null],
  X: [null, null, null, null, "vacio", "X", null, null],
};

export { grammar, preddict_table };
