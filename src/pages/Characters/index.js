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
import useFetch from "../../hooks/useFetch";

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
  const [totalPages, setTotalPages] = useState(1);
  const { data, isLoading, error } = useFetch("get", "character", searchParams);

  useEffect(() => {
    data && setTotalPages(data.info.pages);
  }, [data]);

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className={styles.masonry}
        columnClassName={styles.masonryColumn}
      >
        {data &&
          data.results.map((character) => (
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
      <Snackbar open={error} autoHideDuration={5000} onClose={handleErrorClose}>
        {error && (
          <Alert onClose={handleErrorClose} severity="error">
            Error while fetching data, try again.
          </Alert>
        )}
      </Snackbar>
    </Container>
  );
}
