export const profile = {
  name: "Achmad Dicky Adi Prastian",
  titles: [
    "IT Support Specialist",
    "Technical Support",
    "Bachelor of Informatics",
  ],
  location: "Bandar Lampung, Indonesia",
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

export const skillGroups = [
  {
    title: "Hardware & Maintenance",
    skills: [
      "Hardware & Software Troubleshooting",
      "Windows Installation & Configuration",
      "Computer & Laptop Maintenance",
      "Application & Driver Installation",
      "Printer Installation & Troubleshooting",
      "IT Asset Inventory",
    ],
  },
  {
    title: "Networking",
    skills: [
      "LAN & Wi-Fi Networking",
      "TCP/IP, DNS, DHCP & IP Addressing",
      "Router & Access Point Configuration",
      "Basic Linux Administration",
      "Basic Cybersecurity",
    ],
  },
  {
    title: "Support & Tools",
    skills: [
      "Microsoft Office & Microsoft 365",
      "Remote Technical Support",
      "Help Desk Support",
      "Data Backup & Recovery",
    ],
  },
  {
    title: "Development",
    skills: [
      "Basic HTML, CSS & JavaScript",
      "Basic MySQL",
      "Git & GitHub",
    ],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Teamwork", "Problem-Solving"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  docUrl?: string;
};

export const projects: Project[] = [
  {
    title: "IT Help Desk Ticketing System",
    description:
      "A web-based system designed to record, manage, and monitor technical support requests. The system includes issue categories, priority levels, ticket statuses, and troubleshooting history.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "IT Asset Inventory System",
    description:
      "An application designed to manage technology assets such as computers, laptops, printers, routers, and other IT equipment. The system records equipment conditions, locations, assigned users, and maintenance schedules.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
  },
  {
    title: "Small Office Network Setup",
    description:
      "A small-office network simulation covering IP address allocation, router configuration, LAN and Wi-Fi connectivity, and communication testing between connected devices.",
    tech: ["Cisco Packet Tracer", "TCP/IP", "DHCP", "DNS", "LAN"],
  },
  {
    title: "Computer Maintenance & Troubleshooting",
    description:
      "A technical documentation project covering computer inspection and maintenance, operating system installation, driver installation, system optimization, hardware cleaning, and hardware or software troubleshooting.",
    tech: ["Windows", "BIOS/UEFI", "Driver Tools", "Diagnostic Tools"],
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
    period: "",
    description:
      "Relevant coursework included computer networks, database systems, programming, information systems, IT support, and computer security.",
  },
];
