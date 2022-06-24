import { MuiTable, RefField } from "../../components/index";
import { useGetListQuery } from "../../features/api/Api";

const PostListApi = () => {
  const { data: posts, isLoading } = useGetListQuery("posts");

  const postColumns = [
    {
      field: "id",
      headerName: "Id",
      width: 100,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "body",
      headerName: "Body",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "Author",
      flex: 1,
      renderCell: ({ value }) => <RefField resource="users" value={value} />,
    },
  ];

  return (
    <MuiTable
      columns={postColumns}
      rows={posts}
      styles={{ width: "90%", margin: "10px auto" }}
      isLoading={isLoading}
    />
  );
};

export default PostListApi;
