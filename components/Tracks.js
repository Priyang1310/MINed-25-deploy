import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";

export default function Tracks() {
  return (
    <Box marginBlock={16} id="tracks">
      <Heading color={"#4299E1"} marginBlock={"8"}>Previous Tracks</Heading>
      <Grid
        gridAutoRows="1fr"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
        boxShadow="2xl"
      >
        <GridItem p="4">
          <TrackCard
            imageUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/fd25dfdc-c699-4e4b-946c-459405520d52"
            trackName="PeopleMetrics: Shaping the next gen workforce by Revelio Labs"
          />
        </GridItem>
        <GridItem p="4">
          <TrackCard
            imageUrl="https://image.lexica.art/full_jpg/58e2902c-29dd-49ce-9149-3c4975b9d468"
            trackName="Computer Vision by Cactus"
          />
        </GridItem>
        
        <GridItem p="4">
          <TrackCard
            imageUrl="https://image.lexica.art/full_jpg/be1f98f4-31b0-4d8b-b13b-2ed3d4d8f001"
            trackName="AI4Researchers by Cactus"
          />
        </GridItem>
        <GridItem p="4">
          <TrackCard
            imageUrl="https://image.lexica.art/full_jpg/c45219aa-514a-4a2a-9cb8-0c79f59a584b"
            trackName="CodeGenXpert by Intech"
          />
        </GridItem>
        <GridItem p="4">
          <TrackCard
            imageUrl="https://images.unsplash.com/photo-1676676701269-65de47175adf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            trackName="Open Innovations"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

function TrackCard({ imageUrl, trackName }) {
  return (
    <Card
      boxShadow="base"
      position="relative"
      borderRadius="md"
      overflow="hidden"
    >
      <Image src={imageUrl}></Image>
      <CardBody
        width="full"
        position="absolute"
        bottom="0"
        py="2.5"
        color="white"
        boxShadow="inset 0 0 1000px black"
      >
        {trackName}
      </CardBody>
    </Card>
  );
}
