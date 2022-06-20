import { Box } from "@mui/material";
import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";

const TimeAgoField = (props) => {
  const { value } = props;

  if (!value) return null;

  const date = parseISO(value);
  const timePeriod = formatDistanceToNow(date);

  return <Box> {timePeriod} ago </Box>;
};

export default TimeAgoField;
