import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Backdrop,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CharacterDetails from "../../components/CharacterDetails";
import useStyles from "./use-styles";
import { get } from "../../api";

const handleErrorClose = () => {
  window.location.reload();
};

export default function Characters() {
  const styles = useStyles();
  const params = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorDetails, setErrorDetails] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await get("character", params.id);
        debugger;
        setCharacter(data);
      } catch (ignored) {
        setErrorDetails("Error while fetching data, try again.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [params]);

  return (
    <Container>
      {character && <CharacterDetails character={character} />}
      <Backdrop className={styles.backdrop} open={isLoading}>
        <CircularProgress color="primary" />
      </Backdrop>
      <Snackbar
        open={errorDetails}
        autoHideDuration={5000}
        onClose={handleErrorClose}
      >
        <Alert onClose={handleErrorClose} severity="error">
          {errorDetails}
        </Alert>
      </Snackbar>
    </Container>
  );
}
