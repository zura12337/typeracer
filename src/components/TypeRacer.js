/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export default function TypeRacer({ quotes }) {
  const [quote, setQuote] = useState();
  const [succedWords, setSuccedWords] = useState("");
  const [succedChars, setSuccedChars] = useState("");
  const [currentChar, setCurrentChar] = useState();
  const [nextChar, setNextChar] = useState();
  const [currentWord, setCurrentWord] = useState();
  const [nextCharIndex, setNextCharIndex] = useState(1);
  const [value, setValue] = useState();

  useEffect(() => {
    const index = Math.floor(Math.random() * quotes.length);
    let quote = quotes[index].split(" ");
    let currentWord = quote[0] + " ";
    let currentChar = currentWord[0];
    let nextChar = currentWord[1];
    quote.shift();
    quote = quote.join(" ");
    setNextChar(nextChar);
    setCurrentWord(currentWord);
    setCurrentChar(currentChar);
    setQuote(quote);
  }, []);
  const handleChange = (e) => {
    let currentValue = e.target.value;
    setValue(currentValue);
    if (currentValue[currentValue.length - 1] === currentChar) {
      setCurrentChar(nextChar);
      setNextCharIndex((nextCharIndex) => nextCharIndex + 1);
      setNextChar(currentWord[nextCharIndex + 1]);
      setSuccedChars(succedChars + currentValue[currentValue.length - 1]);
    } else {
      setNextChar(currentChar);
      setNextCharIndex((nextCharIndex) => nextCharIndex - 1);
      setCurrentChar(currentWord[nextCharIndex - 2]);
      setSuccedChars(currentValue);
    }
    if (currentValue === currentWord) {
      setSuccedChars("");
      setSuccedWords(succedWords + currentValue);
      let quoteArray = quote.split(" ");
      let currentWord = quoteArray[0] + " ";
      let currentChar = currentWord[0];
      let nextChar = currentWord[1];
      setCurrentChar(currentChar);
      quoteArray.shift();
      quoteArray = quoteArray.join(" ");
      setQuote(quoteArray);
      setNextChar(nextChar);
      setCurrentWord(currentWord);
      setNextCharIndex(1);
      setValue("");
    }
  };

  return (
    <div className="container quotes">
      {quote && (
        <div className="quote">
          <span className="quote-text success">{succedWords}</span>
          <span className="quote-text success">{succedChars}</span>
          <span className="quote-text">{currentChar}</span>
          <span className="quote-text">{nextChar}</span>
          <span className="quote-text">
            {currentWord.slice(nextCharIndex + 1)}
          </span>
          <span className="quote-text">{quote}</span>
        </div>
      )}
      <input
        type="text"
        onChange={handleChange}
        value={value}
        className={`input mt-5`}
      />
    </div>
  );
}
