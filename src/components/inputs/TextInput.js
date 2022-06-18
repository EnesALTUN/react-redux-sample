import React from "react";
import { TextField } from "@mui/material";
import { useFormikContext, useField } from "formik";

const TextInput = (props) => {
  const { name, label, fullWidth } = props;
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <TextField
      name={name}
      label={label}
      value={field.value ?? ""}
      fullWidth={fullWidth ?? true}
      onChange={(e) => setFieldValue(name, e.target.value)}
      error={!!meta.error}
      helperText={meta.error}
    />
  );
};

export default TextInput;
