import { List, ListItem, Typography } from "@mui/material";
import { Children } from "react";
import { Link } from "react-router-dom";

const ProjectsList = () => {
  const projects = [{id:'123'},{id:'2146'},{id:'42'}]
  return(
    <List>
      { 
        Children.toArray(
          projects
          .map(({id},i)=>
            <ListItem>{`${i+1}. `} 
              <Link to={`../${id}`}>
                <Typography variant="body1" color={'primary'}>
                  {`Project ${id}`}
                </Typography>
              </Link>
            </ListItem>)
          ) 
      }
    </List>
  )
}

export default ProjectsList;