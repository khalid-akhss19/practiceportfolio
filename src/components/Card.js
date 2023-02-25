import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack style={{border:"2px solid black", borderRadius: "25px", background:"white", color:"black", padding:"5px"}}>
      <Image src={imageSrc} style={{borderRadius: "25px"}} />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <HStack>
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
