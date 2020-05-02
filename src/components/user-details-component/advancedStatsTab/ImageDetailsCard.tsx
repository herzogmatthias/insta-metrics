import {
  makeStyles,
  Theme,
  createStyles,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  Tooltip,
  useMediaQuery,
  LinearProgress,
  Grid,
  Chip,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import format from "date-fns/format";
import "./ImageCarousel.scss";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
//@ts-ignore
import ItemsCarousel from "react-items-carousel";
import {
  ImagePreview,
  ImageDetails,
} from "../../../redux/types/advancedStatsTypes";
import { Skeleton } from "@material-ui/lab";

interface Props {
  image: ImageDetails | undefined;
  loaded: boolean;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    cardBorder: {
      borderRight: "1px solid rgba(0,0,0,0.2)",
      "@media(max-width: 960px)": {
        borderRight: 0,
      },
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
    if (props.loaded) {
      return props.image!.images.map((val, ind) => {
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
    } else {
      return [];
    }
  };
  const matches = useMediaQuery("(max-width: 960px)");
  return (
    <div>
      <Card elevation={0} className={classes.cardBorder}>
        {props.loaded ? (
          <CardHeader
            avatar={
              <Avatar
                src={props.image!.owner.avatar}
                aria-label="recipe"
              ></Avatar>
            }
            action={<div></div>}
            title={props.image!.owner.name}
            subheader={format(
              new Date(props.image!.timeStamp * 1000),
              "MMMM, d yyyy"
            )}
          />
        ) : (
          <CardHeader
            avatar={<Avatar></Avatar>}
            action={<div></div>}
            title={<Skeleton variant="text"></Skeleton>}
            subheader={<Skeleton variant="text"></Skeleton>}
          />
        )}

        <div style={{ position: "relative", marginBottom: "400px" }}>
          <div className={classes.carouselWrapper}>
            <div
              style={{ width: props.loaded ? "100%" : "300px" }}
              className={classes.carousel}
            >
              <ItemsCarousel
                placeholderItem={
                  <div style={{ height: "200px", width: "200px" }}>
                    <LinearProgress
                      variant="indeterminate"
                      color="secondary"
                    ></LinearProgress>
                    <Typography variant="body2" align="center">
                      Loading Images...
                    </Typography>
                  </div>
                }
                numberOfPlaceholderItems={1}
                infiniteLoop={false}
                enablePlaceholder={true}
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
        {props.loaded ? (
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.image!.caption}
            </Typography>
            <Grid container spacing={2}>
              {props.image?.images[activeItemIndex]!.tagged_users.map(
                (val, ind) => {
                  return (
                    <Grid key={ind} item md={2} xs={4}>
                      <Chip
                        clickable
                        onClick={() =>
                          window.open(
                            `https://www.instagram.com/${val.username}`,
                            "_blank"
                          )
                        }
                        avatar={<Avatar src={val.avatar}></Avatar>}
                        label={val.username}
                      ></Chip>
                    </Grid>
                  );
                }
              )}
            </Grid>
          </CardContent>
        ) : (
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <Skeleton variant="text"></Skeleton>
            </Typography>
          </CardContent>
        )}

        {props.loaded ? (
          <CardActions disableSpacing>
            <Tooltip title={props.image!.likes + " Likes"}>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={props.image!.comments + " Comments"}>
              <IconButton>
                <CommentIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={props.image!.er.toFixed(2) + "% Engagement Rate"}>
              <IconButton>
                <SmartphoneIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        ) : (
          <CardActions>
            <Skeleton height="30px" width="25px" variant="rect" />

            <Skeleton height="30px" width="25px" variant="rect" />

            <Skeleton height="30px" width="25px" variant="rect" />
          </CardActions>
        )}
      </Card>
    </div>
  );
}
