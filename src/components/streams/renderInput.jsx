const renderInput = ({ input, label, meta }) => {
  const renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const field = `field ${meta.touched && meta.error ? "error" : ""}`;
  return (
    <div className={field}>
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      {renderError(meta)}
    </div>
  );
};

export default renderInput;
