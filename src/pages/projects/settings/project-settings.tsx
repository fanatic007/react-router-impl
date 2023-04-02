import { useParams } from "react-router-dom";

const ProjectSettings = () => {
  let { id } = useParams();
  return (
    <>Settings for {id}</>
  );
};

export default ProjectSettings;