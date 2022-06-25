import React from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ListViewButton = (props) => {
  const { path, id } = props;
  const history = useNavigate();

  if (!path || !id) return null;

  const navigateHandler = () => {
    history(`/${path}/${id}`);
  };

  return (
    <VisibilityIcon
      sx={{
        cursor: "pointer",
        ":hover": {
          color: "#1976d2",
        },
      }}
      onClick={navigateHandler}
    />
  );
};

export default ListViewButton;
