import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

import React from "react";
import delivery from "../assets/delivery.svg";

const Card = ({ title, description, imageSrc, price }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div alignItems='left' bg="white" borderRadius="10px" className="card">
      <Image  src={imageSrc}      
      aria-label="Week's special image"
       />
      <HStack>
      <Heading  padding="15px" as='h4' size='md' color="black">{title}</Heading>
      <Text color={"#EE9972"}
      aria-label="Price">{price}</Text>
      </HStack>
      <Text padding="0 15px 10px 15px" marginTop="0px !important" fontSize='md' color="gray"
         aria-label="description image"
      >{description}</Text>
      <HStack padding="0 15px 10px 15px">
        <Text  fontSize='xs' color="black">Order a delivery</Text>
        <Image  src={delivery} aria-label="delivery image icon"/>
      </HStack>
    </div>
  );
};

export default Card;
