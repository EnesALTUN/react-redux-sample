import { useSelector } from "react-redux";
import { MuiTable } from "../../components/index";

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  const postColumns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "title",
      headerName: "Title",
    },
    {
      field: "content",
      headerName: "Content",
    },
  ];

  return (
    <MuiTable
      columns={postColumns}
      rows={posts}
      styles={{ width: 800, margin: "10px auto" }}
    />
  );
};

export default PostList;
