import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";
import useStyles from "./use-styles";

export default function CharacterCard({ data: character }) {
  const styles = useStyles(character);
  const navigate = useNavigate();
  const {
    id,
    image,
    name,
    status,
    species,
    type,
    location: { name: lastSeen },
  } = character;
  return (
    <Card className={styles.root} elevation={1}>
      <div className={styles.details}>
        <CardContent>
          <Typography className={styles.title}>{name}</Typography>
          <Typography
            className={styles.status}
            gutterBottom
          >{`${status} - ${species} (${type ? type : "Regular"})`}</Typography>
          <Typography className={styles.title} color="textSecondary">
            Last known location:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {lastSeen}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="secondary"
            size="small"
            onClick={() => navigate(`/details/${id}`)}
          >
            Learn More
          </Button>
        </CardActions>
      </div>
      <CardMedia className={styles.media} image={image} />
    </Card>
  );
}
