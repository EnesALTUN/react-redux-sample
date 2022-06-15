import { useSelector } from "react-redux";
import { MuiTable } from "../../components/index";
import { sentenceSplit } from "../../utils";

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  const customPosts = posts.map((post) => ({
    ...post,
    content: sentenceSplit(post.content, 0, 100),
  }));

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
      rows={customPosts}
      styles={{ width: 800, margin: "10px auto" }}
    />
  );
};

export default PostList;
