export const profile = {
  name: "Achmad Dicky Adi Prastian",
  titles: [
    "IT Support Specialist",
    "Technical Support",
    "Bachelor of Informatics",
  ],
  location: "Bandar Lampung, Indonesia",
  photoUrl: "/images/profile.jpg",
  // Add a hosted PDF link to show a "Download CV" button in the hero instead of "Get In Touch".
  cvUrl: "",
  bio: [
    "I am a Bachelor of Informatics graduate from Universitas Teknokrat Indonesia with a strong interest in IT Support and Technical Support. I am skilled in software installation, hardware and software troubleshooting, basic network configuration, and providing technical assistance to users.",
    "I have strong analytical and problem-solving abilities, pay close attention to detail, and can communicate technical solutions clearly. I am committed to continuously learning and improving my skills to keep up with developments in information technology.",
  ],
};

export const contact = {
  email: "achmaddicky195@gmail.com",
  whatsapp: "089605869176",
  whatsappLink: "https://wa.me/6289605869176",
  linkedin: "https://www.linkedin.com/in/achmad-dicky-adi-prastian-26b345414/",
  instagram: "https://www.instagram.com/achmad.dickyy/",
  location: "Bandar Lampung, Indonesia",
};

export type Skill = { name: string; level: number };

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Hardware & Maintenance",
    skills: [
      { name: "Hardware & Software Troubleshooting", level: 90 },
      { name: "Windows Installation & Configuration", level: 90 },
      { name: "Computer & Laptop Maintenance", level: 88 },
      { name: "Printer Installation & Troubleshooting", level: 85 },
      { name: "IT Asset Inventory", level: 80 },
    ],
  },
  {
    title: "Networking",
    skills: [
      { name: "LAN & Wi-Fi Networking", level: 85 },
      { name: "TCP/IP, DNS, DHCP & IP Addressing", level: 82 },
      { name: "Router & Access Point Configuration", level: 80 },
      { name: "Basic Linux Administration", level: 65 },
      { name: "Basic Cybersecurity", level: 65 },
    ],
  },
  {
    title: "Support & Tools",
    skills: [
      { name: "Microsoft Office & Microsoft 365", level: 90 },
      { name: "Remote Technical Support", level: 85 },
      { name: "Help Desk Support", level: 85 },
      { name: "Data Backup & Recovery", level: 78 },
    ],
  },
  {
    title: "Development",
    skills: [
      { name: "Basic HTML, CSS & JavaScript", level: 65 },
      { name: "Basic MySQL", level: 60 },
      { name: "Git & GitHub", level: 60 },
    ],
  },
];

export const softSkills = ["Communication", "Teamwork", "Problem-Solving"];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  githubUrl?: string;
  docUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Gallery Keripik Pisang (E-Commerce)",
    description:
      "An e-commerce storefront for a Lampung banana chips brand, with product browsing by category (Best Seller, New Product, All Product, Reseller Product), product search and sorting, a shopping cart with live quantity and price totals, and a simple checkout flow.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/projects/gallery-keripik-pisang.jpg",
  },
];

export const experience = [
  {
    role: "IT Support",
    company: "Kementerian Agama Kota Bandar Lampung",
    period: "2024 — 2025",
    points: [
      "Resolved hardware, software, network, and peripheral issues.",
      "Installed operating systems, applications, drivers, and supporting software.",
      "Provided on-site and remote technical support to users.",
      "Performed routine maintenance on computers, printers, and network devices.",
      "Documented technical issues, troubleshooting steps, and final solutions.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Informatics",
    school: "Universitas Teknokrat Indonesia",
    faculty: "Faculty of Engineering and Computer Science",
    period: "",
    description:
      "Relevant coursework included computer networks, database systems, programming, information systems, IT support, and computer security.",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  pdf: string;
};

export const certificates: Certificate[] = [
  {
    title: "Certificate of Competency for Computer Network and Troubleshooting",
    issuer: "Universitas Teknokrat Indonesia",
    date: "May 2025",
    image: "/certificates/computer-network-troubleshooting.jpg",
    pdf: "/certificates/computer-network-troubleshooting.pdf",
  },
  {
    title: "Certificate of Competency for Graphic Design",
    issuer: "Universitas Teknokrat Indonesia",
    date: "July 2025",
    image: "/certificates/graphic-design.jpg",
    pdf: "/certificates/graphic-design.pdf",
  },
  {
    title: "Certificate of Competency for Office Administration",
    issuer: "Universitas Teknokrat Indonesia",
    date: "March 2025",
    image: "/certificates/office-administration.jpg",
    pdf: "/certificates/office-administration.pdf",
  },
  {
    title: "2nd Place, Web Programming II — Teknokrat Academic Expo 2024",
    issuer: "Universitas Teknokrat Indonesia",
    date: "January 2024",
    image: "/certificates/academic-expo-2024.jpg",
    pdf: "/certificates/academic-expo-2024.pdf",
  },
  {
    title: 'Webinar Career Series — "RPA Role in the Future of Work"',
    issuer: "Teknokrat Career and Training Center",
    date: "December 2022",
    image: "/certificates/webinar-career-series.jpg",
    pdf: "/certificates/webinar-career-series.pdf",
  },
];
