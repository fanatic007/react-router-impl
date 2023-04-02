import { Outlet } from "react-router-dom";
import { INavRoute } from "../model/INavRoute";
import BreadcrumbsBar from "./breadcrumb-bar";
import Navbar from "./navbar";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

const Layout = () =>{
  return(
    <Container>
      <Grid container alignContent={'stretch'}>
        <Grid item xs={12}>
          <header>
            <Typography variant="h1" color={'primary'}>Router</Typography>
          </header>          
        </Grid>
        <Grid item xs={3} sx={{border:1, borderColor:'grey.400', borderCollapse:'collapse'}}>
          <nav>
            <Navbar/>
          </nav>
        </Grid>
        <Grid item xs={9} sx={{border:1, borderColor:'grey.400', borderCollapse:'collapse'}}>
          <main>
             <BreadcrumbsBar/>
            <Divider />
            <Outlet/>
          </main>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;