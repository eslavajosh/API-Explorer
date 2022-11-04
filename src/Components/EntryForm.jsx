import React, { useState } from "react";
import "./App.css";

function Form() {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    method: "",
    body: [{ name: "", max: "", min: "" }],
  });

  const onFormFieldChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData((prevState) => {
      const newFormArr = {
        ...prevState,
      };

      newFormArr[name] = value;

      return newFormArr;
    });
  };

  const onClearBtn = (e) => {
    e.preventDefault();
    setFormData({
      title: "",
      url: "",
      method: "",
      body: [{ name: "", max: "", min: "" }],
    });
  };

  return (
    <React.Fragment>
      <div class="wrapper">
        <div class="form">
          <div class="title">API EXPLORER</div>
          <div class="author">Joshua Eslava</div>
          <form method="post" action="successpage.html">
            <div class="input_wrap">
              <label for="input_title">Title</label>
              <div class="input_field">
                <input
                  type="text"
                  name="title"
                  class="input"
                  id="input_title"
                  placeholder="create new user"
                  value={formData.title}
                  onChange={onFormFieldChange}
                />
              </div>

              <label for="input_url">Base URL</label>
              <div class="input_field">
                <input
                  type="text"
                  name="url"
                  class="input"
                  id="input_url"
                  placeholder="https://jsonplaceholder.typicode.com/users"
                  value={formData.url}
                  onChange={onFormFieldChange}
                />
              </div>

              <label for="input_id">Method</label>
              <div class="input_field">
                <input
                  type="text"
                  name="method"
                  class="input"
                  id="input_method"
                  placeholder="post"
                  value={formData.method}
                  onChange={onFormFieldChange}
                />
              </div>

              <label for="input_body">Name</label>
              <div class="input_field">
                <input
                  type="text"
                  name="body"
                  class="input"
                  id="input_body"
                  placeholder="john doe"
                  value={formData.body.name}
                  onChange={onFormFieldChange}
                />
              </div>

              <label for="input_body">Min</label>
              <div class="input_field">
                <input
                  type="text"
                  name="body"
                  class="input"
                  id="input_body"
                  placeholder="0"
                  value={formData.body.min}
                  onChange={onFormFieldChange}
                />
              </div>

              <label for="input_body">Max</label>
              <div class="input_field">
                <input
                  type="text"
                  name="body"
                  class="input"
                  id="input_body"
                  placeholder="100"
                  value={formData.body.max}
                  onChange={onFormFieldChange}
                />
              </div>
            </div>

            <div class="input_wrap">
              <input
                type="button"
                id="login_btn"
                class="btn submit"
                value="send request"
              />
            </div>
            <button class="button" type="button" onClick={onClearBtn}>
              CLEAR
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Form;
