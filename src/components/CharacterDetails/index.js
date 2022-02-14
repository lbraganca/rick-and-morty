import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import useStyles from "./use-styles";

export default function CharacterCard({ character }) {
  const styles = useStyles(character);
  const {
    image,
    name,
    status,
    species,
    type,
    gender,
    created,
    origin: { name: origin },
    location: { name: lastSeen },
  } = character;

  return (
    <Card className={styles.root} elevation={1}>
      <CardMedia className={styles.media} image={image} />
      <CardContent>
        <Typography className={styles.title}>{name}</Typography>
        <Typography
          className={styles.status}
          gutterBottom
        >{`${status} - ${species} (${type ? type : "Regular"})`}</Typography>
        <Typography className={styles.title} color="textSecondary">
          Gender:
        </Typography>
        <Typography className={styles.value} gutterBottom>
          {gender}
        </Typography>
        <Typography className={styles.title} color="textSecondary">
          Origin:
        </Typography>
        <Typography className={styles.value} gutterBottom>
          {origin}
        </Typography>
        <Typography className={styles.title} color="textSecondary">
          Last known location:
        </Typography>
        <Typography className={styles.value} gutterBottom>
          {lastSeen}
        </Typography>
        <Typography className={styles.title} color="textSecondary">
          Created:
        </Typography>
        <Typography className={styles.value} gutterBottom>
          {new Date(created).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
