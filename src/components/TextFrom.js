import React, { useState } from "react";

export default function TextFrom({ heading, mode, showAlert }) {


  const [count, setCount] = useState(0);

  let wordCount = () => {
    if (text.trim() === "") {
    setCount(0);
    return;
  }
    let words = text.split(/\s+/);
    words = words.filter((word) => word !== "");
    setCount(words.length);
  };

  const toLowercaseConvert = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Convert your word Lower Case.", "success");
  };

  const toUppercaseConvert = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Convert your word Upper Case.", "success");
  };

  const toTitlecaseConvert = () => {
    let words = text.split(" ");

    let titleCaseWord = words.map((word) => {
      if (word.length === 0) return word;
      return word[0].toLocaleUpperCase() + word.toLocaleLowerCase();
    });

    let newText = titleCaseWord.join(" ");
    setText(newText);
    showAlert("Convert your word Title Case.", "success");
  };

  const toSentencesConvert = () => {
    let lowerText = text.toLowerCase();
    let sentences2 = lowerText.split(".");

    let result = sentences2
      .map((sentence, index) => {
        let trimmed = sentence.trim();
        if (trimmed.length === 0) return "";

        let capitalized = trimmed[0].toUpperCase() + trimmed.slice(1);

        return index === 0 ? capitalized : ". " + capitalized;
      })
      .join("");

    setText(result);
    showAlert("Convert your word Sentance Case.", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    wordCount();
  };

  const handelCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    showAlert("Text Copied", "success");
  };

  const clearText = () => {
    setText("");
    showAlert("Cleared Text", "success");
  };
  const [text, setText] = useState("");
  return (
    <div
      style={{
        color: mode === "light" ? "black" : "white",
      }}
    >
      <div className="mb-3">
        <h1>{heading}</h1>
        <textarea
          className={`form-control`}
          style={{
            backgroundColor: mode === "light" ? "white" : "gray",
          }}
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={toUppercaseConvert}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-4" onClick={toLowercaseConvert}>
        Convert to Lowercase
      </button>

      <button className="btn btn-primary" onClick={toTitlecaseConvert}>
        Convert to Titles
      </button>
      <button className="btn btn-primary mx-4" onClick={toSentencesConvert}>
        Convert to Sentences
      </button>

      <button className="btn btn-primary" onClick={handelCopy}>
        Copy Text
      </button>

      <button className="btn btn-danger mx-4" onClick={clearText}>
        Clear
      </button>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {count} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h2> {text === "" ? "" : "Preview"}</h2>
        <p>{text === "" ? "" : text}</p>
      </div>
    </div>
  );
}
