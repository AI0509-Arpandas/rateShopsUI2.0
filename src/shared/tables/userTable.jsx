import { Box, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

const UserTable = () => {
  return(
    <TableContainer>
      <Table>
        <TableHead sx={{}}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell >
              <Box width={"100%"}>
                <strong>Arpan Das</strong>
              </Box>
              <Box width={"100%"}>
                arpan
              </Box>
            </TableCell>
            <TableCell>
              a@g.com
            </TableCell>
            <TableCell>
              7980902397
            </TableCell>
            <TableCell>
              <Switch /> Active
            </TableCell>
            <TableCell>
              Edit Delete
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserTable