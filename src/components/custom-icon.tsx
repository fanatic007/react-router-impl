import { Settings } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import TagIcon from '@mui/icons-material/Tag';
import LayersIcon from '@mui/icons-material/Layers';
import { Color, Icon } from "@mui/material";
import { Theme } from "@mui/material";

const CustomIcon = ({iconName,color}:{iconName:string | undefined, color?: 'primary' | 'secondary' })=>{
  const renderSwitch = (iconName:string | undefined) => {
    switch(iconName?.toLowerCase()) {
      case 'settings':
        return <Settings/>;
      case 'dashboard':
        return <DashboardIcon/>;
      case 'analysis':
        return <AnalyticsIcon/>;
      case 'monitor':
        return <MonitorHeartIcon/>;
      case 'workplace':
        return <WorkspacesIcon/>;
      case 'projects':
        return <LayersIcon/>;
      case 'list':
        return <FormatListNumberedIcon/>;
      case 'number':
        return <TagIcon/>;  
    default:
        return <IndeterminateCheckBoxIcon/>;
        
    }
  }
  return(
    <Icon color={color} sx={{mr:1, verticalAlign:'sub'}}>
      {renderSwitch(iconName)}
    </Icon>
  )
}

export default CustomIcon;