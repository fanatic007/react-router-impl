import TranslateIcon from '@mui/icons-material/Translate';
import { Container, Divider, FormControl, Grid, InputLabel, Link, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";
import BreadcrumbsBar from "./breadcrumb-bar";
import Navbar from "./navbar";

const Layout = ({defaultRoute}:{defaultRoute:string}) =>{
  const navigate = useNavigate();
  const { t, i18n} = useTranslation('translation');
  const [language, setLanguage]=useState('en');

  useEffect(()=>{
    i18n.changeLanguage(language)
  },[language,i18n])

  useEffect(()=>navigate(defaultRoute),[]);
  return(
    <Container>
      <Grid container alignContent={'stretch'}>
        <Grid item xs={12} sx={{px:1,border:1, borderColor:'grey.400', borderCollapse:'collapse'}}>
          <header>
            <Grid container alignItems={'center'}>
              <Grid item xs={10}>
                <Typography variant="h1" color={'primary'}><Link underline="hover" href={defaultRoute}>Router</Link></Typography>
              </Grid>
              <Grid item xs={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label"><TranslateIcon/></InputLabel>                  
                  <Select
                    value={language}
                    label="Age"
                    onChange={ ( {target}:SelectChangeEvent<string> )=> setLanguage(target?.value ?? 'en') }
                  >
                    <MenuItem value={'en'}>English</MenuItem>
                    <MenuItem value={'sp'}>Spanish</MenuItem>
                  </Select>
                </FormControl>            
              </Grid>
            </Grid>            
            
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