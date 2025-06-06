import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import lap3 from "../assets/lap3.png";
import lap5 from "../assets/lap5.png";
import lap6 from "../assets/lap6.png";
import lapSircle from "../assets/lapSircle.png";

const projects = [
  {
    title: "Otocars",
    image: lap3,
    description:
      "Selamat datang di Otocars, rumah bagi para pecinta otomotif dan penggemar mobil. Menggunakan teknologi terdepan seperti Echo Golang, Bootstrap, dan PostgreSQL, kami hadirkan platform blogging yang penuh ketangkasan. Bagikan pengetahuan dan jelajahi dunia otomotif dengan Otocars.",
  },
  {
    title: "Sircle",
    image: lapSircle,
    description:
      "Sircle adalah clone Twitter yang dibuat menggunakan React, Node.js, Express.js, PostgreSQL, dan Chakra UI. Meskipun belum sempurna, aplikasi ini sudah dapat digunakan dan terus dikembangkan agar lebih menyerupai Twitter.",
  },
  {
    title: "Laoke",
    image: lap5,
    description:
      "Laoke adalah aplikasi order online yang dibuat untuk mempermudah masyarakat dalam menjual produk tanpa bergantung pada marketplace seperti Tokopedia atau Lazada.",
  },
  {
    title: "Brimtech",
    image: lap6,
    description:
      "Brimtech adalah aplikasi yang saya kembangkan bersama rekan saya. Meski belum sempurna, pengembangan terus dilakukan untuk menyempurnakannya.",
  },
];

const Projects = () => {
  return (
    <Box px={[4, 8]} py={10}>
      <Heading textAlign={["center", "left"]}>Projects</Heading>
      <Text fontSize={["md", "lg"]} mt={2} textAlign={["center", "left"]}>
        List of projects that I have made in the past.
      </Text>

      <SimpleGrid columns={[1, 1, 2]} spacing={8} mt={8}>
        {projects.map((project, index) => (
          <Card
            key={index}
            shadow="2xl"
            _hover={{ transform: "translateY(-10px)" }}
            transition="0.2s"
          >
            <CardBody>
              <Image
                src={project.image}
                alt={project.title}
                borderRadius="lg"
                width="100%"
                height="250px"
                objectFit="cover"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{project.title}</Heading>
                <Text fontSize={["sm", "md"]}>{project.description}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
