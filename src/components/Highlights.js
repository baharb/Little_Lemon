import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Highlights = () => {
  return (
    <Box backgroundColor="#18181b">
      <highlights>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Pete • © 2022</p>
        </Flex>
      </highlights>
    </Box>
  );
};
export default Highlights;
