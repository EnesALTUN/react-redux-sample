import React from "react";
import { Form } from "formik";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../../../features/users/userSlice";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { TextInput, AutoCompleteDropdown } from "../../../../components/index";

const PostCreateForm = () => {
  const users = useSelector(selectAllUsers);

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
        <Grid item xs={12}>
          <AutoCompleteDropdown
            name="authorId"
            label="Author"
            options={users}
          />
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
