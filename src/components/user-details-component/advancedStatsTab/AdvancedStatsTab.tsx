import React, { useEffect, useState } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect, ConnectedProps } from "react-redux";
import {
  makeStyles,
  Grid,
  useMediaQuery,
  Box,
  ClickAwayListener,
  FormControlLabel,
  Checkbox,
  FormGroup,
  TextField,
  MenuItem,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  Select,
} from "@material-ui/core";
import { RootState } from "../../../redux/reducer";
import ImagePreviewCard from "./ImagePreviewCard";
import clsx from "clsx";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//@ts-ignore
import ItemsCarousel from "react-items-carousel";
import { ImagePreview } from "../../../redux/types/advancedStatsTypes";
import { selectImage } from "../../../redux/actions/advancedStatsAction";
import { KeyboardDatePicker } from "@material-ui/pickers";

type Props = ConnectedProps<typeof connector>;

const useStyles = makeStyles((theme) => ({
  inlineCards: {
    width: "100%",
    overflow: "hidden",
    position: "absolute",
    display: "flex",
  },
  flexVerified: {
    display: "flex",
    alignItems: "center",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  iconSize: {
    "@media (min-width:600px)": {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  },
  space: {
    marginBottom: theme.spacing(2),
  },
  cardMargin: {
    margin: "4px",
    flexGrow: 1,
  },
  textDirection: {
    textAlign: "center",
  },
  fadeOut: {
    position: "relative",
    width: "100%",
    margin: 0,
    padding: "30px 0",
    backgroundImage: "linear-gradient(to bottom, transparent, black)",
  },
  chevronIcon: {
    color: "#9e9e9e",
    fontSize: "5rem",
    "@media(max-width: 750px)": {
      fontSize: "2rem",
    },
  },
  absoluteImagePreview: {
    position: "absolute",
    marginBottom: theme.spacing(3),
    top: "200px",
    "@media(max-width: 500px)": {
      top: "125px",
    },
    "@media(max-width: 600px)": {
      top: "150px",
    },
  },
  imagePreviewWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  carouselWrapper: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "90%",
  },
  carousel: {
    padding: 0,
    maxWidth: "70%",
    margin: "0 auto",
    position: "absolute",
  },
  posRelative: {
    position: "relative",
  },
  spacingBottom: {
    marginBottom: theme.spacing(2),
  },
}));

function AdvancedStatsTab(props: Props) {
  const classes = useStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [selectedDate, handleDateChange] = useState(new Date());
  const matches = useMediaQuery("(max-width: 980px)");
  const matchesSm = useMediaQuery("(max-width: 750px)");
  const matchesXl = useMediaQuery("(min-width: 1300px)");
  const items: JSX.Element[] = [];
  const _renderCards = (maxCards: number) => {
    for (var i = 0; i < props.images.length; i++) {
      items.push(
        <div key={i} className={clsx(classes.cardMargin)}>
          <ImagePreviewCard
            onSelectImage={props.onSelectImage}
            image={props.images[i]}
          ></ImagePreviewCard>
        </div>
      );
    }
    return items;
  };
  useEffect(() => {}, []);

  return (
    <ClickAwayListener onClickAway={() => props.onSelectImage(undefined)}>
      <div>
        <div className={classes.posRelative}>
          <div className={classes.spacingBottom}>
            <Grid container justify="space-around" alignItems="center">
              <Grid item xs={12}>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h4">Filter Options</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container justify="space-around" alignItems="center">
                      <Grid item xs={6} md={3}>
                        <FormControlLabel
                          control={<Checkbox name="checkedC" />}
                          label="Uncontrolled"
                        />
                      </Grid>
                      <Grid item xs={6} md={3}>
                        <FormControlLabel
                          control={<Checkbox name="checkedC" />}
                          label="Uncontrolled"
                        />
                      </Grid>
                      <Grid item xs={6} md={3}>
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="Date picker inline"
                          value={selectedDate}
                          onChange={(date) => console.log(date)}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} md={3}>
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="Date picker inline"
                          value={selectedDate}
                          onChange={(date) => console.log(date)}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            </Grid>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Select
            disableUnderline
            value="10"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={10}>Sort By</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <Box className={classes.posRelative}>
          <div className={classes.carouselWrapper}>
            <div className={classes.carousel}>
              <ItemsCarousel
                infiniteLoop={false}
                gutter={12}
                activePosition={"center"}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={false}
                numberOfCards={matches && !matchesSm ? 2 : matchesXl ? 4 : 3}
                slidesToScroll={matches && !matchesSm ? 2 : matchesXl ? 4 : 3}
                outsideChevron={true}
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
                {_renderCards(5)}
              </ItemsCarousel>
            </div>
          </div>
        </Box>
        {matchesSm && props.selectedImage ? (
          <div className={classes.imagePreviewWrapper}>
            <div className={classes.absoluteImagePreview}>
              <ImagePreviewCard
                displayInformation
                image={props.selectedImage}
                noElevation
              ></ImagePreviewCard>
            </div>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
const mapStateToProps = (state: RootState) => ({
  images: state.advancedStats.images,
  selectedImage: state.advancedStats.selectedImage,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onSelectImage: (image: ImagePreview | undefined) => selectImage(image),
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(AdvancedStatsTab);
