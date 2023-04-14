import { Collapse, ListItem, ListItemText, List } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStylesNestedListItem } from "./nested-listitem.styles";

const NestedListItem = ({ name, subsection }) => {
  // router
  const history = useHistory();

  // styles
  const classes = useStylesNestedListItem();

  // local states
  const [open, setOpen] = useState(false);

  // custom functions
  const handleClick = () => {
    setOpen(!open);
  };

  const changeRoute = (text) => {
    history.push(`/experiments/${text}/visualisation`);
  };

  return (
    <>
      <ListItem button onClick={handleClick} style={{ color: '#090C02', fontWeight: 'bolder' }}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className={classes.listRoot} component="div" disablePadding style={{ color: '#004E89'}}>
          {subsection.map((i, idx) => (
            <ListItem
              key={idx}
              button
              className={classes.nested}
              onClick={() => changeRoute(i.route)}
            >
              <ListItemText primary={i.name} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default NestedListItem;