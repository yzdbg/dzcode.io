import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { GridSpacing } from "@material-ui/core";
import { Project } from "t9/types/fullstack";
import React from "react";
import Skeleton from "@material-ui/lab/Skeleton/Skeleton";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingBottom: theme.spacing(4),
    },
    searchRoot: {
      paddingTop: 100,
      width: "90%",
      maxWidth: 300,
      "& > *": {
        width: "100%",
        height: 200,
      },
    },
    cardRoot: {
      maxWidth: 300,
      width: "90vw",
    },
    media: {
      height: 300,
    },
  }),
);

export const Catalog = (props: { projectsList: Project[] | null }) => {
  const [spacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root} spacing={spacing}>
      <form className={classes.searchRoot} noValidate autoComplete="off">
        <TextField label="Search Projects" />
      </form>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {props.projectsList
            ? props.projectsList.map((project) => (
                <Grid key={`project-${project.slug}`} item>
                  <Card className={classes.cardRoot}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={project.image}
                        title={project.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {project.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            : [1, 2, 3].map((id) => (
                <Grid key={`project-${id}`} item>
                  <Card className={classes.cardRoot}>
                    <CardActionArea>
                      <Skeleton
                        animation="wave"
                        variant="rect"
                        className={classes.media}
                      />
                      <CardContent>
                        <React.Fragment>
                          <Skeleton
                            animation="wave"
                            height={10}
                            style={{ marginBottom: 6 }}
                          />
                          <Skeleton animation="wave" height={10} width="80%" />
                        </React.Fragment>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
