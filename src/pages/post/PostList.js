import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { MuiTable } from "../../components/index";
import { selectAllPosts } from "../../features/post/postSlice";
import { sentenceSplit } from "../../utils";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const customPosts = posts.map((post) => ({
    ...post,
    content: sentenceSplit(post.content, 0, 100),
  }));

  const postColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 220,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "content",
      headerName: "Content",
      flex: 1,
      renderCell: ({ value }) => <Box>{value}</Box>,
    },
  ];

  return (
    <MuiTable
      columns={postColumns}
      rows={customPosts}
      styles={{ width: 800, margin: "10px auto" }}
    />
  );
};

export default PostList;
