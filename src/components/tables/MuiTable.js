import React, { useState } from "react";
import { DataGrid, trTR } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export const MuiTable = (props) => {
  const { columns, rows, styles, isLoading } = props;
  const [pageSize, setPageSize] = useState(10);

  const componentProps = {
    pagination: {
      labelDisplayedRows: ({ from, to, count }) =>
        `${count} kayıttan ${from} - ${to}`,
    },
  };

  return (
    <Box>
      <DataGrid
        rows={rows ?? []}
        columns={columns}
        sx={{ ...styles }}
        pagination
        pageSize={pageSize}
        rowsPerPageOptions={[10, 20, 50, 100]}
        onPageSizeChange={(size) => setPageSize(size)}
        autoHeight
        disableSelectionOnClick
        componentsProps={componentProps}
        disableVirtualization={true}
        loading={isLoading}
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
      />
    </Box>
  );
};
