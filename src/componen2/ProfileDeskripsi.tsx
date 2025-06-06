import { Box, Center, Divider, VStack } from "@chakra-ui/react";
import TypewriterSequential from "./TypewriterSequential"; // sesuaikan path

const ProfileDeskripsi = () => {
  const sections = [
    {
      title: "HTML",
      desc: "Saya sangat terampil dalam pengembangan dengan menggunakan HTML. Saya mampu membuat struktur halaman web yang semantik dan mudah dibaca oleh mesin pencari, serta memahami elemen HTML, formulir, multimedia, dan integrasi dengan CSS dan JavaScript.",
    },
    {
      title: "CSS",
      desc: "Saya memiliki keahlian mendalam dalam menggunakan CSS untuk mengatur tampilan dan tata letak halaman web. Saya membuat desain responsif, menyesuaikan tampilan antarmuka untuk berbagai perangkat, serta menggunakan animasi dan transisi.",
    },
    {
      title: "JavaScript",
      desc: "Saya menguasai JavaScript untuk mengembangkan fitur interaktif. Saya dapat memanipulasi elemen halaman, memvalidasi formulir, mengakses API, dan mengimplementasikan logika kompleks. Familiar juga dengan jQuery dan Vue.js.",
    },
    {
      title: "TypeScript",
      desc: "Saya menggunakan TypeScript untuk memastikan kode lebih aman dan scalable, terutama dalam proyek React dan Next.js berskala besar.",
    },
    {
      title: "React JS",
      desc: "Berpengalaman membangun UI interaktif menggunakan React JS. Mengerti komponen reusable, state & props, routing, dan manajemen state dengan Redux/Context API. Mampu menghubungkan React dengan backend API.",
    },
    {
      title: "Next JS",
      desc: "Saya menggunakan Next.js untuk membangun aplikasi web yang cepat, SEO-friendly, dan memiliki kemampuan server-side rendering (SSR).",
    },
    {
      title: "Redux Toolkit",
      desc: "Saya familiar dengan Redux Toolkit untuk manajemen state global yang efisien dan scalable.",
    },
    {
      title: "TanStack",
      desc: "Saya menggunakan TanStack (React Query) untuk data fetching dan manajemen cache yang optimal pada aplikasi React.",
    },
    {
      title: "Tailwind CSS",
      desc: "Terampil menggunakan Tailwind CSS untuk membangun UI yang efisien dan responsif menggunakan pendekatan utility-first.",
    },
    {
      title: "Mantine",
      desc: "Saya menggunakan Mantine UI library untuk membuat antarmuka pengguna yang modern, fleksibel, dan mudah dikustomisasi.",
    },
    {
      title: "Bootstrap",
      desc: "Saya memahami Bootstrap 5 untuk membangun tata letak web yang responsif dan cepat. Terampil menggunakan komponen siap pakai serta melakukan kustomisasi.",
    },
    {
      title: "Chakra UI",
      desc: "Familiar dalam membangun antarmuka pengguna yang menarik dan responsif menggunakan Chakra UI.",
    },
    {
      title: "Remix JS",
      desc: "Pengalaman dalam Remix JS untuk membangun aplikasi web yang cepat dan aman.",
    },
    {
      title: "GitHub",
      desc: "Aktif menggunakan GitHub untuk mengelola proyek, kolaborasi tim, membuat pull request, dan menangani konflik.",
    },
  ];

  const items = [
    {
      text: "Saya memiliki latar belakang dalam bidang IT dengan gelar Sarjana Sains Komputer dari Universitas Pamulang. Selama studi, saya fokus pada frontend development dan telah mengikuti seleksi Bootcamp Dumbways Indonesia. Saya menguasai berbagai teknologi sebagai berikut:",
      props: { textAlign: "justify", mb: 2 },
    },
    {
      text: "Saya juga memiliki pengalaman kerja sebagai Frontend Developer di Ganesha Operation sejak Februari 2024 hingga Juni 2025.",
      props: { textAlign: "justify", mb: 2 },
    },
    ...sections.flatMap((item, i) => [
      {
        text: `${i + 1}. ${item.title}`,
        props: { fontWeight: "bold", mt: 3 },
      },
      {
        text: item.desc,
        props: { textAlign: "justify", mt: 1 },
      },
    ]),
    {
      text: "Keterampilan-keterampilan ini memungkinkan saya membangun antarmuka web yang menarik, interaktif, dan adaptif. Saya yakin pengalaman dan kemampuan saya akan menjadi nilai tambah untuk tim pengembangan perangkat lunak di masa depan.",
      props: { textAlign: "justify", mt: 4 },
    },
    {
      text: "Badriana - 18 Oktober 2023",
      props: { textAlign: "center", mt: 10, lineHeight: "50px" },
    },
  ];

  return (
    <Box w="100%" mt={6}>
      <VStack spacing={4} align="stretch">
        <TypewriterSequential items={items} speed={20} delayBetween={400} />
      </VStack>
      <Divider my={10} />
      <Center>
        <Box width="100%" height="50px" />
      </Center>
    </Box>
  );
};

export default ProfileDeskripsi;
