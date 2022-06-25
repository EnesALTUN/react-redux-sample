import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { TimeAgoField, MuiTable, UserInput } from "../../components/index";
import { selectAllPosts } from "../../features/post/postSlice";
import { sentenceSplit } from "../../utils";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const customPosts = posts.map((post) => ({
    ...post,
    content: sentenceSplit(post.content, 0, 100),
  }));

  const orderedPosts = customPosts
    .slice()
    .sort((a, b) => b.createdDate.localeCompare(a.createdDate));

  const postColumns = [
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
    {
      field: "authorId",
      headerName: "Author",
      flex: 1,
      renderCell: ({ value }) => <UserInput userId={value} />,
    },
    {
      field: "createdDate",
      headerName: "Created Date",
      flex: 1,
      renderCell: ({ value }) => <TimeAgoField value={value} />,
    },
  ];

  return (
    <MuiTable
      columns={postColumns}
      rows={orderedPosts}
      styles={{ width: "90%", m: "10px auto" }}
    />
  );
};

export default PostList;
