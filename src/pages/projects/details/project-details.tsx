import { Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const ProjecDetails = ()=> {
  let { id } = useParams();
  return (
    <Link to={`settings`}>
      <Typography variant="body1" color={'primary'}>
        Settings
      </Typography>
    </Link>
  );
};

export default ProjecDetails;