import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Container,
  Backdrop,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Pagination from "@material-ui/lab/Pagination";
import Masonry from "react-masonry-css";
import CharacterCard from "../../components/CharacterCard";
import useStyles from "./use-styles";
import { getWhere } from "../../api";

const breakpoints = {
  default: 2,
  1000: 1,
};

const handleErrorClose = () => {
  window.location.reload();
};

export default function Characters() {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    search: "",
  });
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorDetails, setErrorDetails] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const {
          data: { results, info },
        } = await getWhere("character", {
          page: searchParams.get("page"),
          name: searchParams.get("search"),
        });
        setTotalPages(info.pages);
        setCharacters(results);
      } catch (ignored) {
        setErrorDetails("Error while fetching data, try again.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchParams]);

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className={styles.masonry}
        columnClassName={styles.masonryColumn}
      >
        {characters.map((character) => (
          <div className={styles.masonryItem} key={character.id}>
            <CharacterCard data={character} />
          </div>
        ))}
      </Masonry>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={parseInt(searchParams.get("page"))}
          onChange={(event, value) =>
            setSearchParams({ page: value, search: searchParams.get("search") })
          }
          showFirstButton
          showLastButton
        />
      )}
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
