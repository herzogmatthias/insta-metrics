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
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import BurstModeIcon from "@material-ui/icons/BurstMode";
import VideocamIcon from "@material-ui/icons/Videocam";
import format from "date-fns/format";
import "./ImageCarousel.scss";
//@ts-ignore
import ItemsCarousel from "react-items-carousel";
import {
  ImagePreview,
  ImageDetails,
} from "../../../redux/types/advancedStatsTypes";

interface Props {
  image: ImageDetails;
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
    smallImagePreview: {
      padding: "56.25%",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    carouselWrapper: {
      display: "flex",
      justifyContent: "center",
      maxWidth: "100%",
    },
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    chevronIcon: {
      color: "#9e9e9e",
      fontSize: "5rem",
      "@media(max-width: 750px)": {
        fontSize: "3rem",
      },
    },
    carousel: {
      padding: 0,
      maxWidth: "90%",
      margin: "0 auto",
      position: "absolute",
    },
  })
);

export default function ImageDetailsCard(props: Props) {
  const classes = useStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const _renderCards = () => {
    return props.image.images.map((val, ind) => {
      return (
        <div key={ind} className={classes.flex}>
          {val.isVideo ? (
            <video
              muted
              controls
              width={300}
              height={375}
              src={val.display_url}
            ></video>
          ) : (
            <img width={300} height={375} src={val.display_url}></img>
          )}
        </div>
      );
    });
  };
  const matches = useMediaQuery("(max-width: 750px)");
  return (
    <div>
      <Card elevation={4}>
        <CardHeader
          avatar={
            <Avatar
              src={props.image.owner.avatar}
              aria-label="recipe"
              className={classes.avatar}
            ></Avatar>
          }
          action={<div></div>}
          title={props.image.owner.name}
          subheader={format(
            new Date(props.image.timeStamp * 1000),
            "MMMM, d yyyy"
          )}
        />
        <div style={{ position: "relative", marginBottom: "400px" }}>
          <div className={classes.carouselWrapper}>
            <div className={classes.carousel}>
              <ItemsCarousel
                infiniteLoop={false}
                gutter={1}
                activePosition={"center"}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={false}
                numberOfCards={1}
                slidesToScroll={1}
                outsideChevron={false}
                showSlither={false}
                firstAndLastGutter={false}
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                rightChevron={
                  <ChevronRightIcon
                    className={classes.chevronIcon}
                  ></ChevronRightIcon>
                }
                leftChevron={
                  <ChevronLeftIcon
                    className={classes.chevronIcon}
                  ></ChevronLeftIcon>
                }
              >
                {_renderCards()}
              </ItemsCarousel>
            </div>
          </div>
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.image.caption}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title={props.image.likes}>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={props.image.comments}>
            <IconButton>
              <CommentIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </div>
  );
}
