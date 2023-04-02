import { Outlet } from "react-router-dom";
import { INavRoute } from "../model/INavRoute";
import BreadcrumbsBar from "./breadcrumb-bar";
import Navbar from "./navbar";
import { Box, Container, Grid, Typography } from "@mui/material";

const Layout = ({routes}: { routes:INavRoute[]}) =>{
  return(
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <header>
            <Typography variant="h1">Router</Typography>
          </header>
        </Grid>
        <Grid item xs={3}>
          <nav>
            <Navbar routes={routes}/>
          </nav>
        </Grid>
        <Grid item xs={9}>
          <main>
            <BreadcrumbsBar/>
            <Outlet/>
          </main>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;