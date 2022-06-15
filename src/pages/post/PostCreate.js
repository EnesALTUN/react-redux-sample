import React from "react";
import { Formik } from "formik";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "../../features/post/postSlice";
import PostCreateForm from "./common/forms/PostCreateForm";
import { postCreateInitials } from "./common/initials/PostCreateInitials";

const PostCreate = () => {
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    const customValues = { ...values, id: nanoid() };
    dispatch(addPost(customValues));
  };

  return (
    <Box
      style={{
        margin: "auto",
        width: "600px",
        marginTop: "2rem",
      }}
    >
      <Formik initialValues={postCreateInitials} onSubmit={submitHandler}>
        <PostCreateForm />
      </Formik>
    </Box>
  );
};

export default PostCreate;
