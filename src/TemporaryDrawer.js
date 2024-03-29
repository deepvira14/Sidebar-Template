import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContinuousSlider from './ContinuousSlider';
import { ColorPicker } from 'material-ui-color';
import Alignment from './Alignment';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['', ''].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 5 === 0 ? <Alignment/> : <ContinuousSlider />}</ListItemIcon>
            <ListItemText  primary={text} />
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      <List>
        {[''].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 5 === 0 ? < ColorPicker /> : <ColorPicker />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            


          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
