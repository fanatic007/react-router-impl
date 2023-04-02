import { Outlet, useNavigate } from "react-router-dom";
import { INavRoute } from "../model/INavRoute";
import BreadcrumbsBar from "./breadcrumb-bar";
import Navbar from "./navbar";
import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";
import { useEffect } from "react";

const Layout = ({defaultRoute}:{defaultRoute:string}) =>{
  const navigate = useNavigate();
  useEffect(()=>navigate(defaultRoute),[])
  return(
    <Container>
      <Grid container alignContent={'stretch'}>
        <Grid item xs={12} sx={{px:1,border:1, borderColor:'grey.400', borderCollapse:'collapse'}}>
          <header>
            <Typography variant="h1" color={'primary'}><Link underline="hover" href={defaultRoute}>Router</Link></Typography>
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