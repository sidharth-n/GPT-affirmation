import React, { useState } from "react";
import InputPage from "./InputPage";
import ResultPage from "./ResultPage";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValidWorry, setIsValidWorry] = useState(false);
  const [inputWorry, setInputWorry] = useState(0);

  const handlePaste = (text: string) => {
    if (text.length) {
      setInputValue(text);
      setIsValidWorry(true);
      setInputValue(text);
    } else {
      window.alert("Please enter something");
    }
  };

  return (
    <>
      {isValidWorry ? (
        <ResultPage worry={inputValue} />
      ) : (
        <InputPage onPaste={handlePaste} />
      )}
    </>
  );
};

export default App;
