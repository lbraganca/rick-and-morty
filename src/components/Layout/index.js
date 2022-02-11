import React from "react";
import { useSearchParams } from "react-router-dom";
import { Typography, AppBar, Toolbar, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./use-styles";

export default function Layout({ children }) {
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={styles.title}>
            Rick and Morty - {new Date().toLocaleDateString()}
          </Typography>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput,
              }}
              value={searchParams.get("search")}
              onChange={({ target: { value } }) =>
                setSearchParams(value ? { search: value } : {})
              }
            />
          </div>
        </Toolbar>
      </AppBar>
      <div className={styles.page}>{children}</div>
    </div>
  );
}
