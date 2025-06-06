import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { CheckIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";

import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { send } from "@emailjs/browser";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const toast = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    send(
      "service_w8xi4ha", // ganti dengan service ID EmailJS kamu
      "template_vlcddld", // ganti dengan template ID EmailJS kamu
      formState,
      "2YuPBMSb08g7GQbzJ" // ganti dengan public key dari EmailJS
    )
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        toast({
          title: "Message sent.",
          description: "Thank you for reaching out!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        toast({
          title: "Failed to send message.",
          description: "Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.error("EmailJS error:", error);
      });
  };

  const contactInfo = [
    {
      icon: <EmailIcon boxSize={6} color="blue.500" />,
      title: "Email",
      value: "badriana0402@gmail.com",
      link: "mailto:badriana0402@gmail.com",
    },
    {
      icon: <PhoneIcon boxSize={6} color="blue.500" />,
      title: "Phone",
      value: "+62 858-8753-5612",
      link: "tel:+6285887535612",
    },
    {
      icon: <MdLocationOn size={24} color="#3182CE" />,
      title: "Location",
      value: "Kalideres, Indonesia",
      link: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      name: "GitHub",
      link: "https://github.com/badriana400952",
    },
    {
      icon: <FaLinkedin size={20} />,
      name: "LinkedIn",
      link: "hhttps://www.linkedin.com/in/badriana-badrian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: <FaTwitter size={20} />,
      name: "Twitter",
      link: "https://x.com/badrun952",
    },
    {
      icon: <FaDribbble size={20} />,
      name: "Dribbble",
      link: "https://dribbble.com/username",
    },
  ];

  return (
    <Box as="section" id="contact" py={{ base: 16, md: 24 }}>
      <Box textAlign="center" mb={16}>
        <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
          Get In Touch
        </Heading>
        <Text color="gray.500" maxW="2xl" mx="auto">
          Have a project in mind or want to collaborate? Feel free to reach out
          and I'll get back to you as soon as possible.
        </Text>
      </Box>

      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
        {/* Form Box */}
        <Box>
          <Box borderWidth="1px" borderRadius="md" p={6}>
            <Heading fontSize="xl" mb={6}>
              Send Me a Message
            </Heading>
            {isSubmitted ? (
              <VStack spacing={4} py={8} align="center">
                <Center boxSize={16} bg="green.100" borderRadius="full">
                  <CheckIcon color="green.500" boxSize={6} />
                </Center>
                <Text fontWeight="semibold">Message Sent!</Text>
                <Text color="gray.500" textAlign="center">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </Text>
              </VStack>
            ) : (
              <form onSubmit={handleSubmit}>
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                  gap={6}
                >
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid>
                <FormControl isRequired mt={6}>
                  <FormLabel>Subject</FormLabel>
                  <Input
                    name="subject"
                    placeholder="What's this about?"
                    value={formState.subject}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl isRequired mt={6}>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="blue"
                  mt={6}
                  size="lg"
                  isLoading={isSubmitting}
                  leftIcon={isSubmitting ? undefined : <EmailIcon />}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </Box>
        </Box>

        {/* Contact Info & Social */}
        <VStack spacing={6} align="stretch">
          <Box borderWidth="1px" borderRadius="md" p={6}>
            <Heading fontSize="xl" mb={6}>
              Contact Information
            </Heading>
            <VStack spacing={6} align="stretch">
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  isExternal
                  display="flex"
                  alignItems="start"
                  gap={4}
                  _hover={{ textDecoration: "none" }}
                >
                  <Center boxSize={10} bg="blue.100" borderRadius="md">
                    {item.icon}
                  </Center>
                  <Box>
                    <Text fontWeight="medium">{item.title}</Text>
                    <Text color="gray.500">{item.value}</Text>
                  </Box>
                </Link>
              ))}
            </VStack>
          </Box>

          <Box borderWidth="1px" borderRadius="md" p={6}>
            <Heading fontSize="xl" mb={6}>
              Follow Me
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  isExternal
                  display="flex"
                  alignItems="center"
                  gap={2}
                  p={3}
                  borderWidth="1px"
                  borderRadius="md"
                  _hover={{ borderColor: "blue.300", bg: "blue.50" }}
                >
                  {social.icon}
                  <Text>{social.name}</Text>
                </Link>
              ))}
            </Grid>
          </Box>
        </VStack>
      </Grid>
    </Box>
  );
};

export default ContactSection;
