import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";

const AutoCompleteDropdown = (props) => {
  const { options, label, name, optionName, optionValue } = props;
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const customOptions = options.map((option) => ({
    label: optionName ? option[optionName] : option.name,
    value: optionValue ? option[optionValue] : option.id,
  }));

  return (
    <Autocomplete
      fullWidth
      value={
        field.value
          ? customOptions.find((option) => option.value === field.value)
          : ""
      }
      options={customOptions}
      onChange={(_, value) => setFieldValue(name, value?.value ?? "")}
      isOptionEqualToValue={(_, _v) => true}
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          label={label}
          error={!!meta.error}
          helperText={meta.error}
        />
      )}
    />
  );
};

export default AutoCompleteDropdown;
