import React from "react";
import { Form } from "formik";
import { Button, Divider, Grid, Typography } from "@mui/material";
import TextInput from "../../../../components/inputs/TextInput";

const PostCreateForm = () => {
  return (
    <Form>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">Create Post</Typography>
        </Grid>
        <Divider style={{ width: "100%", borderWidth: "1px" }} />
        <Grid item xs={12}>
          <TextInput name="title" label="Title" />
        </Grid>
        <Grid item xs={12}>
          <TextInput name="content" label="Content" />
        </Grid>
        <Grid className="fullFlex" item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default PostCreateForm;
