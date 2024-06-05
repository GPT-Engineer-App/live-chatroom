import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box>
      <Button as={Link} to="/">
        Home
      </Button>
      <Button as={Link} to="/video-chat">
        Video Chat
      </Button>
    </Box>
  );
}

export default Navigation;
