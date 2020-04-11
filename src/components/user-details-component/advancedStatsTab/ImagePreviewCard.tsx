import {
  makeStyles,
  Theme,
  createStyles,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Tooltip,
  useMediaQuery,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import BurstModeIcon from "@material-ui/icons/BurstMode";
import VideocamIcon from "@material-ui/icons/Videocam";
import format from "date-fns/format";
import { ImagePreview } from "../../../redux/types/advancedStatsTypes";

interface Props {
  image: ImagePreview;
  noElevation: boolean;
  displayInformation: boolean;
  onSelectImage(image: string | undefined): void;
  openModal(): void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 350,
      minWidth: 80,
      maxHeight: 600,
      "&:hover": {
        boxShadow:
          "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
      },
      boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    },
    displayInfo: {
      boxShadow: "none",
    },
    fadeOut: {
      boxShadow: "none",
      "&:after": {
        zIndex: 1,
        pointerEvents: "none",
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255, 0), rgba(255,255,255, 1) 80%)",
        width: "100%",
        height: "600px",
        position: "absolute",
        bottom: 0,
        left: 0,
        content: "close-quote",
      },
      "&:hover": {
        boxShadow: "none",
      },
      position: "relative",
    },
    media: {
      height: 0,
      paddingTop: "100%", // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
    chevron: {
      position: "absolute",
      fontSize: "6rem",
      zIndex: 10,
      top: "40%",
      left: "55%",
      "@media(max-width: 750px)": {
        top: "15%",
        fontSize: "3rem",
      },
      padding: 0,
    },
    chevronIcon: {
      fontSize: "6rem",
      "@media(max-width: 750px)": {
        fontSize: "3rem",
      },
    },
    smallImagePreview: {
      padding: "56.25%",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    iconFontSize: {
      fontSize: "1.5rem",
      "@media(max-width: 600px)": {
        fontSize: "1rem",
      },
    },
  })
);

export default function ImagePreviewCard(props: Props) {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width: 750px)");
  return (
    <div
      onClick={
        props.displayInformation
          ? undefined
          : () => {
              props.onSelectImage(props.image.id);
              props.openModal();
            }
      }
    >
      <Card
        className={
          props.displayInformation ? classes.displayInfo : classes.root
        }
      >
        {matches && !props.displayInformation ? null : (
          <CardHeader
            avatar={
              <Avatar
                src={props.image.avatarUrl}
                aria-label="recipe"
                className={classes.avatar}
              ></Avatar>
            }
            action={<div></div>}
            title={props.image.author}
            subheader={format(
              new Date(props.image.timeStamp * 1000),
              "MMMM, d yyyy"
            )}
          />
        )}
        {matches && !props.displayInformation ? (
          <div
            style={{ backgroundImage: `url(${props.image.imageUrl})` }}
            className={classes.smallImagePreview}
          ></div>
        ) : (
          <CardMedia
            className={classes.media}
            image={props.image.imageUrl}
            title="Paella dish"
          />
        )}

        {matches && !props.displayInformation ? null : (
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.image.caption}
            </Typography>
          </CardContent>
        )}
        {matches && !props.displayInformation ? null : (
          <CardActions disableSpacing>
            <Tooltip title={props.image.likes}>
              <IconButton>
                <FavoriteIcon className={classes.iconFontSize} />
              </IconButton>
            </Tooltip>
            <Tooltip title={props.image.comments}>
              <IconButton>
                <CommentIcon className={classes.iconFontSize} />
              </IconButton>
            </Tooltip>
            {props.image.isVideo ? (
              <Tooltip title={"Video"}>
                <IconButton>
                  <VideocamIcon className={classes.iconFontSize} />
                </IconButton>
              </Tooltip>
            ) : null}
            {props.image.multipleViews ? (
              <Tooltip title={"Multiple Views"}>
                <IconButton>
                  <BurstModeIcon className={classes.iconFontSize} />
                </IconButton>
              </Tooltip>
            ) : null}
          </CardActions>
        )}
      </Card>
    </div>
  );
}

ImagePreviewCard.defaultProps = {
  noElevation: false,
  displayInformation: false,
} as Partial<Props>;
