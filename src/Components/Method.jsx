import React from "react";
import { useState } from "react";
import "./App.css";

function Form() {
  const [method, setMethod] = useState();

  const onClickMethod = (e) => {
    const buttonValue = e.target.value;

    setMethod(buttonValue);

    console.log(method);
  };

  return (
    <React.Fragment>
      <div class="wrapper">
        <div class="form">
          <div class="title">API EXPLORER</div>
          <div class="author">Joshua Eslava</div>
          <div class="subtitle">Select Method</div>

          <button
            class="button get"
            type="button"
            value="GET"
            onClick={onClickMethod}
          >
            GET
          </button>
          <button
            class="button post"
            type="button"
            value="POST"
            onClick={onClickMethod}
          >
            POST
          </button>
          <button
            class="button put"
            type="button"
            value="PUT"
            onClick={onClickMethod}
          >
            PUT
          </button>
          <button
            class="button delete"
            type="button"
            value="DELETE"
            onClick={onClickMethod}
          >
            DELETE
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Form;
