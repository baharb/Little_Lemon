import React from "react";
import {Box, Flex, Heading} from "@chakra-ui/react";
import Card from "./Card";
import "../styles/highlights.css";

const specials = [
  {
    title: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    getImageSrc: () => require("../assets/greek salad.jpg"),
    price: "$12.99",
  },
  {
    title: "Bruchetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    getImageSrc: () => require("../assets/bruchetta.jpg"),
    price: "$5.99",
  },
  {
    title: "Lemmon Desert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../assets/lemondessert.jpg"),
    price: "$5.00",
  },
];

const Highlights = () => {
  return (
    <Box      
      alignItems="flex-start"
      spacing={8}
      className="specials"
    >
      <Heading as="h1" id="specials-section">
        This weeks specials!
      </Heading>
      <div className="cards">
        {specials.map((special) => (
          <Card
            className={"card"}
            key={special.title}
            title={special.title}
            description={special.description}
            price={special.price}
            imageSrc={special.getImageSrc()}
          />
        ))}
      </div>
    </Box>

  );
};
export default Highlights;
