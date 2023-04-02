import { Link, List, ListItem } from "@mui/material";
import { Children } from "react";

const ProjectsList = () => {
  const projects = [{id:'123'},{id:'2146'},{id:'42'}]
  return(
    <List>
      { Children.toArray(projects.map(({id},i)=><ListItem><Link underline="hover" href={`${id}`}>{`${i+1}. Project ${id}`}</Link></ListItem>)) }
    </List>
  )
}

export default ProjectsList;