import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background: "#2E3B55",
  },
}));

export default function Header() {
  const classes = useStyles();
  const menuId = "primary-search-account-menu";

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <Link href="/" passHref>
            <Typography variant="h6" noWrap>
              Clubhouse
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.grow} />
          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <SignedOut>
                <Link href="/login" title="Login" passHref>
                  <LockOpenIcon />
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
