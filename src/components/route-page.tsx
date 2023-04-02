import { useOutlet } from "react-router-dom";
import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

const RoutePage = ({ children }:PropsWithChildren) => {
  const Node = useOutlet();
  return <Box sx={{p:2,height:'100%'}}>{Node || children}</Box>;
};

export default RoutePage;