import React from "react";
import { Box } from "@mui/material";
import { useGetOneByIdQuery } from "../../features/api/Api";

const RefField = (props) => {
  const { resource, value, optionName } = props;

  const { data: res } = useGetOneByIdQuery({
    resource: resource,
    id: value,
  });

  if (!res) return null;

  return <Box>{res[optionName ?? "name"]}</Box>;
};

export default RefField;
