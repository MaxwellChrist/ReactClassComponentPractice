import React from "react";

const FormComponent = (props) => {
  return (
    <form>
      <input placeholder="change state" onChange={props.updateStateMessage} />
    </form>
  );
};

export default FormComponent;
