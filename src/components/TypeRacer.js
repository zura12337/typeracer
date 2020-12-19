/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Timer from "./Timer";

export default function TypeRacer({ quote, setQuote }) {
  const [error, setError] = useState("");
  const [successChars, setSuccessChars] = useState();
  const [wordIndex, setWordIndex] = useState();
  const [charIndex, setCharIndex] = useState();
  const [nextCharIndex, setNextCharIndex] = useState();
  const [quoteArray, setQuoteArray] = useState([]);
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
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
    let currentWord;
    if (wordIndex === quoteArray.length - 1) {
      currentWord = quoteArray[wordIndex];
    } else {
      currentWord = quoteArray[wordIndex] + " ";
    }
    if (e.target.value[e.target.value.length - 1] !== successChars) {
      setError(currentWord[charIndex]);
    }
    if (
      currentWord[charIndex] === e.target.value[e.target.value.length - 1] &&
      charIndex === e.target.value.length - 1
    ) {
      setError("");
      setCharIndex(nextCharIndex);
      setNextCharIndex((nextCharIndex) => nextCharIndex + 1);
      setSuccessChars(
        (successChars) =>
          un(successChars) + un(e.target.value[e.target.value.length - 1])
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
    } else if (e.target.value.length > value.length) {
      setError(currentWord[charIndex]);
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

  const onKeyDown = (e) => {
    if (
      e.keyCode === 8 &&
      value.length > 0 &&
      value.length <= quoteArray[wordIndex].length &&
      successChars &&
      charIndex > 0 &&
      nextCharIndex > 1
    ) {
      if (
        e.target.value.length <=
        successChars.split(" ")[wordIndex].length + 1
      ) {
        setCharIndex((charIndex) => charIndex - 1);
        setNextCharIndex((nextCharIndex) => nextCharIndex - 1);
        if (successChars) {
          setSuccessChars((succesChars) =>
            succesChars.slice(0, succesChars.length - 1)
          );
        }
      }
    }
    if (value.length === 0) {
      setError("");
    }
  };

  const onKeyUp = (e) => {
    if (
      e.keyCode === 8 &&
      value.length > 0 &&
      value.length <= quoteArray[wordIndex].length &&
      successChars &&
      charIndex > 0 &&
      nextCharIndex > 1
    ) {
      if (e.target.value.length <= successChars.length + 1) {
        if (error) {
          setError((error) => error.slice(0, error.length - 1));
        }
      }
    }
    if (value.length === 0) {
      setError("");
    }
  };

  return (
    <>
      <div className="container quotes">
        <Timer isActive={!done && true} />
        {!done ? (
          (quoteArray,
          wordIndex,
          charIndex,
          nextCharIndex && (
            <div className="quote">
              <span className="quote-text success">{successChars}</span>
              {!error ? (
                <span className="quote-text current-word">
                  {quoteArray[wordIndex][charIndex]}
                </span>
              ) : (
                <span className="quote-text error">{error}</span>
              )}
              <span className="quote-text current-word">
                {quoteArray[wordIndex][nextCharIndex]}
              </span>
              <span className="quote-text current-word">
                {quoteArray[wordIndex].slice(nextCharIndex + 1)}{" "}
              </span>
              <span className="quote-text">{quote}</span>
            </div>
          ))
        ) : (
          <div className="quote">
            <span className="quote-text success">{quoteArray.join(" ")}</span>
          </div>
        )}
        {!error ? (
          <input
            type="text"
            id="input"
            value={value}
            onChange={handleChange}
            className="input mt-5"
            onKeyDown={onKeyDown}
            disabled={done && true}
            autoFocus
          />
        ) : (
          <input
            type="text"
            id="input"
            onChange={handleChange}
            value={value}
            className="input mt-5 error"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            disabled={done && true}
            autoFocus
          />
        )}
        {done && (
          <div className="text-center">
            <button
              onClick={() => window.location.reload()}
              id="button"
              className="btn btn-primary mt-5 "
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
