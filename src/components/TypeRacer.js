/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export default function TypeRacer({ quotes }) {
  const [error, setError] = useState(false);
  const [succesChars, setSuccessChars] = useState();
  const [quote, setQuote] = useState();
  const [wordIndex, setWordIndex] = useState();
  const [charIndex, setCharIndex] = useState();
  const [nextCharIndex, setNextCharIndex] = useState();
  const [quoteArray, setQuoteArray] = useState([]);
  const [value, setValue] = useState("");
  const [fullValue, setFullValue] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const index = Math.floor(Math.random() * quotes.length);
    const quote = quotes[index];
    let quoteArray = quote.split(" ");
    setWordIndex(0);
    setCharIndex(0);
    setNextCharIndex(1);
    quoteArray = quoteArray.slice(1);
    quoteArray = quoteArray.join(" ");
    setQuote(quoteArray);
    setQuoteArray(quote.split(" "));
  }, []);

  const un = (variable) => {
    if (typeof variable !== "undefined") {
      return variable;
    } else {
      return "";
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setFullValue(e.target.value);
    let currentWord;
    if (wordIndex === quoteArray.length - 1) {
      currentWord = quoteArray[wordIndex];
    } else {
      currentWord = quoteArray[wordIndex] + " ";
    }
    if (
      currentWord[charIndex] === e.target.value[e.target.value.length - 1] &&
      charIndex === e.target.value.length - 1
    ) {
      setError(false);
      setCharIndex(nextCharIndex);
      setNextCharIndex((nextCharIndex) => nextCharIndex + 1);
      setSuccessChars(
        (succesChars) =>
          un(succesChars) + un(e.target.value[e.target.value.length - 1])
      );
      if (e.target.value === currentWord) {
        setValue("");
        setCharIndex(0);
        setNextCharIndex(1);
        if (quoteArray.length - 1 !== wordIndex) {
          setWordIndex((wordIndex) => wordIndex + 1);
        }
        let localQuoteArray = quoteArray.slice(wordIndex + 2);
        localQuoteArray = localQuoteArray.join(" ");
        setQuote(localQuoteArray);
      }
    } else {
      setError(true);
    }
    if (wordIndex + 1 === quoteArray.length) {
      if (e.target.value === quoteArray[wordIndex]) {
        setDone(true);
        setWordIndex(0);
        setCharIndex(0);
        setNextCharIndex(1);
      }
    }
  };

  return (
    <div className="container quotes">
      {!done &&
        (quoteArray,
        wordIndex,
        charIndex,
        nextCharIndex && (
          <div className="quote">
            <span className="quote-text success">{succesChars}</span>
            <span className="quote-text">
              {quoteArray[wordIndex][charIndex]}
            </span>
            <span className="quote-text">
              {quoteArray[wordIndex][nextCharIndex]}
            </span>
            <span className="quote-text">
              {quoteArray[wordIndex].slice(nextCharIndex + 1)}{" "}
            </span>
            <span className="quote-text">{quote}</span>
          </div>
        ))}

      {!error ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="input mt-5"
        />
      ) : (
        <input
          type="text"
          onChange={handleChange}
          value={value}
          className="input mt-5 error"
        />
      )}
    </div>
  );
}
