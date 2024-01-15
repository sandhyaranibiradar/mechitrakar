// @mui material components
import Grid from "@mui/material/Grid";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  TextField,
  Button,
  Typography,
  Table,
} from "@mui/material";
// me-chitrakar React components
import MDBox from "components/MDBox";
import styles from "./index.module.css";
// me-chitrakar React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// SubAdmins components

import text from "../../auther-data/text";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import { useState } from "react";
function SubAdmins() {
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
            <MDTypography htmlFor="my-input">{text?.addSubAdmin}</MDTypography>
            <TextField
              variant="outlined"
              value={data?.subAdminName || null}
              label={text?.subAdminName}
              onChange={handleOnChange("subAdminName")}
            ></TextField>
            <TextField
              variant="outlined"
              value={data?.subAdminEmail || null}
              label={text?.subAdminEmail}
              type="email"
              onChange={handleOnChange("subAdminEmail")}
            ></TextField>
            <TextField
              variant="outlined"
              value={data?.subAdminPassword || null}
              label={text?.subAdminPassword}
              type="password"
              onChange={handleOnChange("subAdminPassword")}
            ></TextField>
            <TextField
              variant="outlined"
              value={data?.subAdminRetypePass || null}
              label={text?.subAdminRetypePass}
              type="password"
              onChange={handleOnChange("subAdminRetypePass")}
            ></TextField>

            <Button>{text?.save}</Button>
          </FormControl>
        </div>
      </MDBox>
      <MDBox py={3} className={styles.base}>
        <div className={`${styles.wrapper}`}>
          <Typography>{text?.subAdmins}</Typography>
          <Table></Table>
        </div>
      </MDBox>
    </DashboardLayout>
  );
}

export default SubAdmins;
