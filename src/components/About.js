import React from "react";
import {Box, Grid, GridItem} from "@chakra-ui/react";

const About = () => {
  return (
    <Box backgroundColor="#18181b">
      <about>
      <Grid
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(2, 1fr)'
        
      >
        <GridItem rowSpan={2} colSpan={1} bg='#495E57' />
        <GridItem rowSpan={2} colSpan={1} bg='#495E57' />
        <GridItem rowSpan={1} colSpan={1} bg='green' />
        <GridItem rowSpan={1} colSpan={1} bg='black' />
      </Grid>
      </about>
    </Box>
  );
};
export default About;
