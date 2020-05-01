import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/reducer";
import {
  getBasicInformation,
  selectUser,
} from "../../redux/actions/sidebarActions";
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
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemSecondaryAction,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuIcon from "@material-ui/icons/Menu";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Skeleton } from "@material-ui/lab";
import { openNewUserModal } from "../../redux/actions/newUserAction";
import { RouteComponentProps } from "react-router-dom";
import { FakeLoadingList } from "../fake-loading-list-component/FakeLoadingList";
import { tabRoutes } from "../user-details-component/tabRoutes";

interface IDoubleNavigationProps extends RouteComponentProps<void> {}

type Props = ConnectedProps<typeof connector> & IDoubleNavigationProps;

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },

    listItemTextOverflow: {
      overflow: "hidden",
      wordBreak: "break-word",
      textOverflow: "ellipsis",
    },

    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(8) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    textColor: {
      backgroundImage:
        "linear-gradient(45deg,#FFDC80,#FCAF45,#F77737,#F56040, #FD1D1D, #E1306C, #C13584, #833AB4, #5851DB, #405DE6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "Yellowtail",
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
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
          <ListItem
            selected={val.username === props.selectedUser?.username}
            onClick={() => {
              props.selectUser(val.username);
              console.log(props.match);
              props.history.push({
                pathname:
                  props.match.url +
                  "/" +
                  val.username +
                  "/" +
                  tabRoutes[props.tab],
                state: {
                  tab: props.tab,
                  username: val.username,
                },
              });
              console.log(props.location);
            }}
            button
            key={ind}
          >
            <ListItemAvatar>
              <Avatar src={val.avatar}></Avatar>
            </ListItemAvatar>
            <ListItemText
              className={classes.listItemTextOverflow}
              secondary={<span title={val.username}>@{val.username}</span>}
              primary={<span title={val.name}>{val.name}</span>}
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
      return <FakeLoadingList length={3}></FakeLoadingList>;
    }
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    async function init() {
      props.initData(props.match, props.history);
    }
    init();
  }, []);
  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.textColor} variant="h4" noWrap>
            Insta-Metrics
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
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
        <List disablePadding>{renderList()}</List>
        <Divider></Divider>
        <List disablePadding>
          <ListItem button onClick={props.openModal}>
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
  users: state.sidebar.users,
  selectedUser: state.sidebar.selectedUser,
  tab: state.userDetails.tab,
});

const mapDispatchToProps = {
  initData: getBasicInformation,
  openModal: openNewUserModal,
  selectUser: selectUser,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connect(mapStateToProps, mapDispatchToProps)(DoubleNavigation);
