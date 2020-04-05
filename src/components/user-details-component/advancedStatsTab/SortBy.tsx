import {
  makeStyles,
  Theme,
  createStyles,
  useMediaQuery,
  Select,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import { RootState } from "../../../redux/reducer";
import { bindActionCreators } from "redux";
import { ConnectedProps, connect } from "react-redux";
import CheckIcon from "@material-ui/icons/Check";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { SortByOption } from "../../../redux/types/advancedStatsTypes";
import { changeSorting } from "../../../redux/actions/advancedStatsAction";

type Props = ConnectedProps<typeof connector>;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexDisplay: {
      display: "flex",
    },
    flex: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);

function SortBy(props: Props) {
  const classes = useStyles();
  const _renderOptions = () => {
    return props.sortingOptions.map((option, index) => {
      return (
        <MenuItem className={classes.flex} key={index} value={option.id}>
          <div className={classes.flexDisplay}>
            {option.name}
            {option.increase ? (
              <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
            ) : (
              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            )}{" "}
          </div>
          {option.value ? <CheckIcon></CheckIcon> : null}
        </MenuItem>
      );
    });
  };
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Select
        onChange={(ev, node) =>
          props.changeSorting(
            props.sortingOptions.find((so) => so.id === ev.target.value)!
          )
        }
        disableUnderline
        value={"placeholder"}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        <MenuItem value="placeholder" disabled>
          Sort By
        </MenuItem>
        {_renderOptions()}
      </Select>
    </div>
  );
}
const mapStateToProps = (state: RootState) => ({
  sortingOptions: state.advancedStats.sortingOptions,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      changeSorting: (sortingOption: SortByOption) =>
        changeSorting(sortingOption),
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(SortBy);
