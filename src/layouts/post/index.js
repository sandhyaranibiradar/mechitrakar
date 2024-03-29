// @mui material components
import Grid from "@mui/material/Grid";
import { FormControl, Input, InputLabel, FormHelperText, TextField } from "@mui/material";
// me-chitrakar React components
import MDBox from "components/MDBox";
import styles from "./index.module.css";
// me-chitrakar React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Post components

import text from "../../auther-data/text";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import { useState } from "react";
function Post() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const handleOnChange = (id) => (e) => {
    setData({ ...data, [id]: e.target.value });
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3} className={styles.base}>
        <div className={`${styles.wrapper}`}>
          <FormControl className={`${styles.card} ${styles.mb - 4} ${styles.form}`}>
            <MDTypography htmlFor="my-input">{text.addPost}</MDTypography>
            <TextField
              variant="outlined"
              value={data?.mainCategory}
              label={text?.mainCategory}
              onChange={handleOnChange("mainCategory")}
            ></TextField>
            <TextField
              variant="outlined"
              value={data?.subCategory}
              label={text?.subCategory}
              onChange={handleOnChange("subCategory")}
            ></TextField>
            <TextField
              variant="outlined"
              value={data?.searchKeyword}
              label={text?.searchKeyword}
              onChange={handleOnChange("searchKeyword")}
            ></TextField>
            <TextField type="file"></TextField>
            <TextField
              id="outlined-controlled"
              type="file"
              onChange={(event) => {
                setFile(event.target.value);
              }}
            />
          </FormControl>
        </div>
      </MDBox>
    </DashboardLayout>
  );
}

export default Post;
