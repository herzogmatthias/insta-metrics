import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  useMediaQuery,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import React from "react";
import { RootState } from "../../../redux/reducer";
import { bindActionCreators } from "redux";
import { ConnectedProps, connect } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  filterImages,
  changeOnlyVideosFilter,
  changeOnlyMultiviewsFilter,
  changeFromFilter,
  changeToFilter,
} from "../../../redux/actions/advancedStatsAction";
import { KeyboardDatePicker } from "@material-ui/pickers";

type Props = ConnectedProps<typeof connector>;

const useStyles = makeStyles((theme: Theme) => createStyles({}));

function Filter(props: Props) {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width: 750px)");
  return (
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
                  control={
                    <Checkbox
                      onChange={(ev, checked) => {
                        props.changeOnlyVideosFilter(checked);
                        props.filterImages();
                      }}
                      value={props.filterOptions.onlyVideos}
                      name="checkedC"
                    />
                  }
                  label="Only Videos"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(ev, checked) => {
                        props.changeOnlyMultiviewsFilter(checked);
                        props.filterImages();
                      }}
                      value={props.filterOptions.onlyMultiViews}
                      name="checkedC"
                    />
                  }
                  label="Only Multiviews"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <KeyboardDatePicker
                  minDate={
                    new Date(
                      [...props.originalImages].sort(
                        (a, b) => a.timeStamp - b.timeStamp
                      )[0].timeStamp * 1000
                    )
                  }
                  format="dd/MM/yyyy"
                  placeholder="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="From"
                  clearable
                  value={props.filterOptions.fromDate}
                  onChange={(date) => {
                    props.changeFromFilter(date);
                    props.filterImages();
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <KeyboardDatePicker
                  clearable
                  placeholder="dd/MM/yyyy"
                  minDate={props.filterOptions.fromDate}
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="To"
                  value={props.filterOptions.toDate}
                  onChange={(date) => {
                    props.changeToFilter(date);
                    props.filterImages();
                  }}
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
  );
}
const mapStateToProps = (state: RootState) => ({
  filterOptions: state.advancedStats.filterOptions,
  originalImages: state.advancedStats.images,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      filterImages: () => filterImages(),
      changeOnlyVideosFilter: (value: boolean) => changeOnlyVideosFilter(value),
      changeOnlyMultiviewsFilter: (value: boolean) =>
        changeOnlyMultiviewsFilter(value),
      changeFromFilter: (value: Date | null) => changeFromFilter(value),
      changeToFilter: (value: Date | null) => changeToFilter(value),
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Filter);
