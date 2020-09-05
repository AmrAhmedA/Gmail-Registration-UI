import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = (props) => {
  const { label, name, value, id, helperText, placeholder, onChange } = props;
  return (
    <TextField
      variant="outlined"
      size="small"
      id={id}
      name={name}
      value={value}
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      onChange={onChange}
    />
  );
};

export default Input;
