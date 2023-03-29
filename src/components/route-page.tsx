import { useOutlet } from "react-router-dom";
import { PropsWithChildren } from "react";

const RoutePage = ({ children }:PropsWithChildren) => {
  const Node = useOutlet();
  return <>{Node || children}</>;
};

export default RoutePage;