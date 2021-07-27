import React from "react";
import { useUser } from "@clerk/clerk-react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const GuestHome = () => {
  const { firstName } = useUser();
  const userData = useUser();
  return (
    <Container component="main" maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography component="h1" gutterBottom variant="h3" align="center">
        👋 Hey, {firstName}
      </Typography>
      <Typography gutterBottom variant="subtitle1" align="center">
        Find the trending topics and course contents below.
      </Typography>
    </Container>
  );
};

export default GuestHome;
