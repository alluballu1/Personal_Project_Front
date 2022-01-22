import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationItem } from "@mui/material";

export default function BlogPagination({ count, change}) {
    const test = (e, v) => {
        change(v)
    }
  return (
    <div style={{ backgroundColor: "#C8C8C4", borderRadius: 10, padding: 5 }}>
      <Stack spacing={2}>
              <Pagination onChange={test}
          color="primary"
          count={count+1}
        />
      </Stack>
    </div>
  );
}
