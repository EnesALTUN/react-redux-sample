import React from "react";
import { useParams } from "react-router-dom";
import { useGetListQuery, useGetOneByIdQuery } from "../../features/api/Api";
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Comment } from "../../components";

const SinglePost = () => {
  const { postId } = useParams();

  const { data: post } = useGetOneByIdQuery({
    resource: "posts",
    id: postId,
  });

  const { data: author } = useGetOneByIdQuery(
    {
      resource: "users",
      id: post?.userId,
    },
    {
      skip: !post,
    }
  );

  const { data: comments } = useGetListQuery(`posts/${postId}/comments`, {
    skip: !postId,
  });

  if (!post || !comments || !author) return <CircularProgress />;

  return (
    <Box>
      <Grid container spacing={3} sx={{ p: 3 }}>
        <Grid item md={8}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {post.title}
          </Typography>
          <Box sx={{ mt: 3 }}>{post.body}</Box>
        </Grid>
        <Grid
          item
          md={8}
          sx={{
            mt: 2,
            pt: "0px !important",
            pr: 1,
            width: "100%",
            textAlign: "right",
            borderRight: "5px solid red",
          }}
        >
          <Box sx={{ fontWeight: "bold" }}>Author </Box>
          <Box>{author.name}</Box>
        </Grid>

        <Grid item md={8} sx={{ textAlign: "justify" }}>
          <Typography variant="h6">Comments</Typography>
          <Divider />
          <Grid container sx={{ pt: 2 }}>
            {comments.map((comment, index) => (
              <Comment comment={comment} key={index} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SinglePost;
