import { Link } from "@mui/material";
import { useParams } from "react-router-dom";

const ProjecDetails = ()=> {
  let { id } = useParams();
  return (
    <Link href={`${id}/settings`}>Settings</Link>
  );
};

export default ProjecDetails;