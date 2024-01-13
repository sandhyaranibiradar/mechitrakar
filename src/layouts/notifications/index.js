// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// me-chitrakar React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// me-chitrakar React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">Alerts</MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}></MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card></Card>
          </Grid>
        </Grid>
        <img src="./me-chitrakar.png"></img>
        <img src="/assets/images/bg-profile.jpeg"></img>
      </MDBox>
    </DashboardLayout>
  );
}

export default Notifications;
