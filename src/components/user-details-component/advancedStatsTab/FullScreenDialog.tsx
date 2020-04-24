import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { RootState } from "../../../redux/reducer";
import { bindActionCreators } from "redux";
import { handleModalClose } from "../../../redux/actions/advancedStatsAction";
import { ConnectedProps, connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Comments from "./Comments";
import ImageDetailsCard from "./ImageDetailsCard";
import HashTags from "./Hashtags";
import CommentLikeRatio from "./CommentLikeRatio";

type Props = ConnectedProps<typeof connector>;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    overflowXPaper: {
      overflowX: "hidden",
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide key={"slideUP"} direction="up" ref={ref} {...props} />;
});

function FullScreenDialog(props: Props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        classes={{ paper: classes.overflowXPaper }}
        fullScreen
        open={props.open}
        onClose={props.handleClose}
        TransitionComponent={Transition as any}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Image Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid style={{ padding: "30px" }} container spacing={4}>
          <Grid xs={12} item md={6}>
            <ImageDetailsCard
              loaded={props.imageDetailsLoaded}
              image={props.imageDetails}
            ></ImageDetailsCard>
          </Grid>
          <Grid item xs={12} md={6} className={classes.flex}>
            <CommentLikeRatio
              loaded={props.imageDetailsLoaded}
              rankings={props.imageDetails.rankings}
            ></CommentLikeRatio>
          </Grid>

          <Grid item xs={12} md={6}>
            <HashTags
              loaded={props.imageDetailsLoaded}
              hashTags={props.imageDetails.hashTags}
            ></HashTags>
          </Grid>
          <Grid item xs={12} md={6}>
            <Comments
              loaded={props.imageDetailsLoaded}
              comments={props.imageDetails.previewComments}
            ></Comments>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  open: state.advancedStats.modalOpen,
  imageDetails: state.advancedStats.selectedImageDetails,
  imageDetailsLoaded: state.advancedStats.imageDetailsLoaded,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      handleClose: () => handleModalClose(),
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(FullScreenDialog);
