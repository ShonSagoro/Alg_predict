const grammar = {
  A: [
    { symbol: "T", isTerminal: false },
    { symbol: "N", isTerminal: false },
    { symbol: "M", isTerminal: false },
    { regex: /^;$/, isTerminal: true, length: 1 },
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
    { regex: /^\[$/, isTerminal: true, length: 1 },
    { symbol: "E", isTerminal: false },
    { regex: /^\]$/, isTerminal: true, length: 1 },
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
  T: [{ regex: /^let$/, isTerminal: true, length: 3 }],
  L: [{ regex: /^[a-z]$/, isTerminal: true, length: 1 }],
  D: [{ regex: /^[0-9]$/, isTerminal: true, length: 1 }],
  X: [
    { regex: /^,$/, isTerminal: true, length: 1 },
    { symbol: "D", isTerminal: false },
    { symbol: "C", isTerminal: false },
    { symbol: "X", isTerminal: false },
  ],
};
const preddict_table = {
  col: ["let", "a-z", "[", "0-9", "]", ",", ";", "$"],
  A: ["A", null, null, null, null, null, null, null],
  N: [null, "N", null, null, null, null, null, null],
  R: [ null, "R", null, "R", null, null, null, null],
  M: [null, null, "M", null, null, null, null, null],
  E: [null, null, null, "E", null, null, null, null],
  C: [null, null, null, "C", null, "C", "C", null],
  T: ["T", null, null, null, null, null, null, null],
  L: [null, "L", null, null, null, null, null, null],
  D: [null, null, null, "D", null, null, null, null],
  X: [null, null, null, null, "X", "X", null, null],
};

export { grammar, preddict_table };
