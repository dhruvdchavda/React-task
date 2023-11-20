import React, { useEffect, useState } from "react";
import { db } from "../DB/db";
import { useLiveQuery } from "dexie-react-hooks";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

export default function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      const userList = await db.users.toArray();
      setUserList(userList);
    })();
  }, []);
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "firstname", headerName: "First name", flex: 1 },
    { field: "lastname", headerName: "Last name", flex: 1 },
    {
      field: "username",
      headerName: "Username",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography variant="h3" component="h3" sx={{ mb: 4 }}>
        All users list
      </Typography>
      <DataGrid
        sx={{
          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold !important",
            overflow: "visible !important",
          },
        }}
        rows={userList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
}
