const producctions = [
  {
    symbol: {
      key: "A",
      isTerminal: false,
    },
    symbols: [
      {
        key: "T",
        isTerminal: false,
      },
      {
        key: "N",
        isTerminal: false,
      },
      {
        key: "M",
        isTerminal: false,
      },
      {
        key: "-",
        regex: /^;$/,
        isTerminal: true,
        length: 1,
      },
    ],
  },
  {
    symbol: {
      key: "N",
      isTerminal: false,
    },
    symbols: [
      {
        key: "L",
        isTerminal: false,
      },
      {
        key: "R",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "R",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^[a-zA-Z]$/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "R",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^,*$/,
            isTerminal: true,
            length: 1,
          },
        ]
      ]
    ],
  },
  {
    symbol: {
      key: "M",
      isTerminal: false,
    },
    symbols: [
      [
        {
          key: "-",
          regex: /^\[$/,
          isTerminal: true,
          length: 2,
        },
        {
          key: "E",
          isTerminal: false,
        },
        {
          key: "-",
          regex: /^\]$/,
          isTerminal: true,
          length: 2,
        },
      ],
    ],
  },
  {
    symbol: {
      key: "E",
      isTerminal: false,
    },
    symbols: [
      {
        key: "D",
        isTerminal: false,
      },
      {
        key: "C",
        isTerminal: false,
      },
      {
        key: "X",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "C",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^[0-9]$/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "C",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^,*$/,
            isTerminal: true,
            length: 1,
          },
        ],
      ]
    ],
  },
  {
    symbol: {
      key: "T",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^let$/,
        isTerminal: true,
        length: 3,
      }
    ],
  },
  {
    symbol: {
      key: "L",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^[a-z]$/,
        isTerminal: true,
        length: 1,
      },
    ],
  },
  {
    symbol: {
      key: "D",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^[0-9]$/,
        isTerminal: true,
        length: 1,
      },
    ],
  },
  {
    symbol: {
      key: "X",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^,/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "D",
            isTerminal: false,
          },
          {
            key: "C",
            isTerminal: false,
          },
          {
            key: "X",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^,*$/,
            isTerminal: true,
            length: 1,
          },
        ],
      ]
    ],
  },
];

export default producctions;
