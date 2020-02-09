import React, { Component, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/reducer";
import { getBasicInformation } from "../../redux/actions/sidebarActions";
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemIcon
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuIcon from "@material-ui/icons/Menu";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Skeleton } from "@material-ui/lab";
import { openNewUserModal } from "../../redux/actions/newUserAction";

type Props = ConnectedProps<typeof connector>;

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    skeletonBackground: {
      backgroundColor: "lightgrey"
    },
    listItemTextOverflow: {
      overflow: "hidden",
      wordBreak: "break-word",
      textOverflow: "ellipsis"
    },
    skeletonCircle: {
      height: "40px",
      width: "40px"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(8) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

export function DoubleNavigation(props: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const renderList = () => {
    if (props.loaded) {
      return props.users.map((val, ind) => {
        return (
          <ListItem key={ind}>
            <ListItemAvatar>
              <Avatar src={val.avatar}></Avatar>
            </ListItemAvatar>
            <ListItemText
              className={classes.listItemTextOverflow}
              secondary={<span title={val.username}>"@" + val.username</span>}
              primary={<span title={val.name}>val.name</span>}
            ></ListItemText>
            {open ? (
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            ) : null}
          </ListItem>
        );
      });
    } else {
      return [1, 2, 3].map((val, ind) => {
        return (
          <ListItem key={ind}>
            <ListItemAvatar>
              <Avatar>
                <Skeleton
                  className={clsx(
                    classes.skeletonBackground,
                    classes.skeletonCircle
                  )}
                  animation="wave"
                  variant="circle"
                ></Skeleton>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              secondary={
                <Skeleton
                  animation="wave"
                  className={classes.skeletonBackground}
                  variant="text"
                ></Skeleton>
              }
              primary={
                <Skeleton
                  animation="wave"
                  className={classes.skeletonBackground}
                  variant="text"
                ></Skeleton>
              }
            ></ListItemText>
          </ListItem>
        );
      });
    }
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    async function init() {
      props.initData();
      console.log(props.users);
    }
    init();
  }, []);
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>{renderList()}</List>
        <Divider></Divider>
        <List>
          <ListItem onClick={props.openModal}>
            <ListItemAvatar>
              <Avatar>
                <PersonAddIcon></PersonAddIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={"Add User"}></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  loaded: state.sidebar.loaded,
  users: state.sidebar.users
});

const mapDispatchToProps = {
  initData: getBasicInformation,
  openModal: openNewUserModal
};
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connect(mapStateToProps, mapDispatchToProps)(DoubleNavigation);
