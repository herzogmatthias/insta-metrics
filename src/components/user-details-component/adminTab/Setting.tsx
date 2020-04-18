import React from "react";
import {
  Typography,
  Input,
  IconButton,
  Grid,
  makeStyles,
  Theme,
  createStyles,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import clsx from "clsx";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";

export interface Props {
  canBeModified: boolean;
  type: string;
  value: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    spacing: {
      padding: theme.spacing(2),
    },
    notModifyFlex: {
      display: "flex",
      alignItems: "center",
    },
  })
);

export default function Setting(props: Props) {
  const classes = useStyles();
  const [modify, setModify] = React.useState(false);
  return (
    <Grid item xs={12}>
      <Grid container spacing={5} justify="center" alignItems="center">
        <Grid item xs={2}>
          <Typography align="right" variant="h6">
            {props.type}:
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <div className={clsx(classes.spacing, classes.notModifyFlex)}>
            {modify ? (
              <FormControl variant="outlined">
                <OutlinedInput
                  id="standard-adornment-password"
                  value={props.value}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setModify(false)}
                        aria-label="toggle password visibility"
                      >
                        <CloseIcon></CloseIcon>
                      </IconButton>
                      <IconButton
                        onClick={() => setModify(false)}
                        aria-label="toggle password visibility"
                      >
                        <SaveIcon></SaveIcon>
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            ) : (
              <Typography align="center" variant="subtitle1">
                {props.value}
              </Typography>
            )}
            {modify ? null : (
              <IconButton onClick={() => setModify(true)}>
                <EditIcon></EditIcon>
              </IconButton>
            )}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

Setting.defaultProps = {
  canBeModified: false,
} as Partial<Props>;
