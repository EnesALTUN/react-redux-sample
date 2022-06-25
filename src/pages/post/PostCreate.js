import React from "react";
import { Formik } from "formik";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../features/post/postSlice";
import PostCreateForm from "./common/forms/PostCreateForm";
import { postCreateInitials } from "./common/initials/PostCreateInitials";
import { postCreateValidationSchema } from "./common/validations/PostCreateValidation";

const PostCreate = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const submitHandler = (values) => {
    const customValues = { ...values, id: nanoid() };

    dispatch(addPost(customValues));

    history("/posts");
  };

  return (
    <Grid container spacing={3} sx={{ pt: 1 }}>
      <Grid item xs={8} md={6} lg={3}>
        <Formik
          initialValues={postCreateInitials}
          validationSchema={postCreateValidationSchema}
          onSubmit={submitHandler}
        >
          <PostCreateForm />
        </Formik>
      </Grid>
    </Grid>
  );
};

export default PostCreate;
