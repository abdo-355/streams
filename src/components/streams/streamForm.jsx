import React from "react";
import { Field, reduxForm } from "redux-form";
import renderInput from "./renderInput";

const StreamForm = (props) => {
  return (
    <form
      onSubmit={props.handleSubmit(props.onSubmit)}
      className="ui form error"
    >
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui black button">Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
