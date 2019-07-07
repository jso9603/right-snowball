import React from 'react';
import './LabelBottomNavigator.css';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SnowIcon from '@material-ui/icons/AcUnitOutlined';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import NavigationPath from "./NavigationPath";

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: 'black'
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction value="home" icon={<HomeIcon />} component={Link} to={NavigationPath[0]}/>
        <BottomNavigationAction value="member" icon={<CameraIcon />} component={Link} to={NavigationPath[2]}/>
        <BottomNavigationAction value="snow" icon={<SnowIcon />} component={Link} to={NavigationPath[1]}/>
        
        {/*<BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />*/}
      </BottomNavigation>
  );
}