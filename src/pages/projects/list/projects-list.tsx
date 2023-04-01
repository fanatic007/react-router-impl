import { Children } from "react";
import { Link } from "react-router-dom";

const ProjectsList = () => {
  const projects = [{id:'123'},{id:'2146'},{id:'42'}]
  return(
    <>
      { Children.toArray(projects.map(({id})=><div><Link to={`../${id}`} replace={true}>{id}</Link></div>)) }
    </>
  )
}

export default ProjectsList;