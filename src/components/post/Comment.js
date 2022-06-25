import React from "react";
import { Box, Grid } from "@mui/material";

const Comment = ({ comment }) => {
  return (
    <Grid
      item
      md={12}
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.20)",
        p: 1,
        borderRadius: 1,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Box sx={{ fontWeight: "bold" }}>{comment.email.split("@")[0]}</Box>
      <Box sx={{ mt: 1 }}>{comment.body}</Box>
    </Grid>
  );
};

export default Comment;
