import React from "react";
import { TextField } from "@mui/material";
import { useFormikContext, useField } from "formik";

const TextInput = (props) => {
  const { name, label, fullWidth } = props;
  const formik = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <TextField
      name={name}
      label={label}
      value={field.value ?? ""}
      fullWidth={fullWidth ?? true}
      onChange={(e) => formik.setFieldValue(name, e.target.value)}
    />
  );
};

export default TextInput;
