import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const textOnChange = (event) => {
    setText(event.target.value);
  };

  const changeToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text changed to upper case ", "success");
  };

  const changeToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text changed to lower case ", "success");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text coppied to clipboard", "success");
  };

  const clearText = () => {
    setText("");
  }

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={textOnChange}
            id="text"
            rows="7"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#042743",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={changeToUpperCase}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={changeToLowerCase}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={copyToClipboard}
          disabled={text.length === 0}
        >
          Copy to Clipboard
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={clearText}
          disabled={text.length === 0}
        >
          Clear Text
        </button>


        <div className="my-3">
          <h2>Your text summary </h2>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words, {text.replace(/\s/g, '').length} charachers
          </p>
          <p> {0.008 * text.split(" ").length} Minutes Read</p>
          <h3>Preview</h3>
          <p>
            {text.length > 0 ? text : "Enter some text in above box to preview"}
          </p>
        </div>
      </div>
    </>
  );
}
