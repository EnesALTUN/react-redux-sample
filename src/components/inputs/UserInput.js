import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/userSlice";
import { Box } from "@mui/material";

const UserInput = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <Box>{author?.name ?? "Unknown author"}</Box>;
};

export default UserInput;
