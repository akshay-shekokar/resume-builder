import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography, Paper, Divider } from "@material-ui/core";
import { DragEventDto } from "../../dto/dto";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      color: theme.palette.text.primary,
      cursor: "grab",
      userSelect: "none",
    },
    heading: {
      padding: "0.5rem 1rem 0",
    },
  })
);

export default function ControlsContainer({ onDragStart }: ControlsContainerProps) {
  const classes = useStyles();

  return (
    <div className={`${classes.root} border`}>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={`p-1 ${classes.heading}`}
      >
        Controls
      </Typography>
      <Divider />
      <Grid container spacing={1} className="p-1">
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            draggable
            onDragStart={() => onDragStart({ component: "Heading" })}
          >
            Heading
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Divider</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Label</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Paragraph</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Link</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>List</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

type ControlsContainerProps = {
  onDragStart: (event: DragEventDto) => void,
};
