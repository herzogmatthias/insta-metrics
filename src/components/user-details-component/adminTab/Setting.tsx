import React, { ReactNode } from "react";
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
import { Skeleton } from "@material-ui/lab";

export interface Props {
  canBeModified: boolean;
  value: string;
  children: string;
  loaded: boolean;
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
      <Grid container spacing={0} justify="center" alignItems="center">
        <Grid item md={2} lg={1} xs={12}>
          <Typography align="left" variant="h6">
            {props.children}:
          </Typography>
        </Grid>
        <Grid item xs={12} md={10} lg={11}>
          <div className={clsx(classes.spacing, classes.notModifyFlex)}>
            {props.loaded ? (
              <>
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
                {modify || !props.canBeModified ? null : (
                  <IconButton onClick={() => setModify(true)}>
                    <EditIcon></EditIcon>
                  </IconButton>
                )}
              </>
            ) : (
              <Skeleton variant="text" width="50%"></Skeleton>
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
