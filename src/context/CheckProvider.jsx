/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { grammar, preddict_table } from "../data/producctions_stack";

import CheckContext from "./CheckContext";

// eslint-disable-next-line react/prop-types
const CheckProvider = ({ children }) => {
  let stack = [];

  const [consoleMessage, setConsoleMessage] = useState("");
  const [isDebugEnable, setIsDebugEnable] = useState(false);
  const [isQuickEnable, setIsQuickEnable] = useState(false);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const seconds = 0.000001;

  const executeWithDelay = async (fn, args) => {
    fn(args);
    await wait(seconds);
  };

  const addQuickMessage = async (message) => {
    message = `>>>> ${message} \n`;
    await executeWithDelay(setConsoleMessage, JSON.stringify(message));
  };

  const addMessage = async (message) => {
    message = `>> ${message} \n`;
    if (!isQuickEnable) {
      await executeWithDelay(setConsoleMessage, message);
    }
  };

  const addErrorMessage = async (message) => {
    message = `[ERROR] >> ${message} \n`;
    await executeWithDelay(setConsoleMessage, message);
  };


  const addDebugMessage = async (message) => {
    message = "[DEBUG] >> " + message;
    if (isDebugEnable) {
      await executeWithDelay(
        setConsoleMessage,
        message
      );
    }
  };

  async function checkGrammar(code) {
    let stack = [
      { symbol: "EOF", isTerminal: true },
      { symbol: "A", isTerminal: false },
    ];
    let codeStack = code
      .match(/([a-zA-Z_]\w*|\S)/g)
      .join(".")
      .split(".");
    await addMessage("La pila es:" + JSON.stringify(stack));
    await addMessage("La cadena a evaluar es:" + JSON.stringify(codeStack));

    while (stack.length > 0) {
      let x = stack.pop();
      await addDebugMessage(` El simbolo a evaluar es: ${JSON.stringify(x.symbol)}, es terminal?: ${x.isTerminal? "si" : "no"}, su regex es: ${x.regex? x.regex : "no tiene"}`);
      await addDebugMessage("La cadena a evaluar es:" + JSON.stringify(codeStack));
      if (x.symbol === "EOF") {
        return "Code valid";
      } else if (!x.isTerminal) {
        let production = await findProduction(x.symbol, codeStack[0]);
        await addDebugMessage(`La produccion es: ${JSON.stringify(production)}`);
        if (production === null) {
          break;
        }
        for (let i = production.length - 1; i >= 0; i--) {
          stack.push(production[i]);
        }
        await addMessage("La pila es:" + JSON.stringify(stack));
      } else {
        let snippet = codeStack.shift();
        await addMessage("El simbolo a evaluar es:" + JSON.stringify(snippet));
        if (x.regex.test(snippet)) {
          await addDebugMessage(`El simbolo ${x.regex} coincide con el token ${snippet}`);
        } else {
          await addErrorMessage(`El resultado: ${x.regex.test(snippet)}`);
          await addErrorMessage(`El simbolo ${x.regex} no coincide con el token ${snippet}`);
          await addErrorMessage(`La pila es: ${JSON.stringify(stack)}`);
          return "Code invalid";
        }
      }
    }

    return stack.length === 0 ? "Code valid" : "Code invalid";
  }

  async function findProduction(noTerminal, token) {
    let tokenIndex = preddict_table.col.findIndex(regex => regex.test(token));
    await addDebugMessage(`El token es: ${token}, el indice es: ${tokenIndex} y el no terminal es: ${noTerminal}`);
    if (tokenIndex !== -1) {
      let production = preddict_table[noTerminal][tokenIndex];
      await addDebugMessage(`La produccion es: ${JSON.stringify(production)}`);
      if (grammar[production] !== null && grammar[production] !== undefined) {
        return grammar[production];
      }
    }
    return null;
  }

  const value = useMemo(() => {
    return {
      checkGrammar,
      consoleMessage,
      isDebugEnable,
      setIsDebugEnable,
      isQuickEnable,
      setIsQuickEnable,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consoleMessage, isDebugEnable, isQuickEnable]);

  return (
    <CheckContext.Provider value={value}>{children}</CheckContext.Provider>
  );
};

// Move the export statement outside of the function block
export default CheckProvider;

export function UseCheck() {
  const context = React.useContext(CheckContext);
  if (!context) {
    throw new Error("useCheck debe estar dentro del CheckContext");
  }

  return context;
}
