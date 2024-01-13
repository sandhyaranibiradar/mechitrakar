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
function Post() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3} className={styles.base}>
        <div className={`${styles.wrapper}`}>
          <FormControl className={`${styles.card} ${styles.mb - 4} ${styles.form}`}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Please enter email</FormHelperText>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </FormControl>
        </div>
      </MDBox>
    </DashboardLayout>
  );
}

export default Post;
