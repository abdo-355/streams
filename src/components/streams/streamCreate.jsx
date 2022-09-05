import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStream } from "../../actions";
import StreamForm from "./streamForm";

const StreamCreate = (props) => {
  const navigate = useNavigate();

  const onSubmit = (formValues) => {
    props.createStream(formValues);
    navigate("/");
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);
