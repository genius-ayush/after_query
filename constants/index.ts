import { file02, homeSmile, notification2, notification3, notification4, plusSquare, searchMd, benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4, benefitImage2, yourlogo, figma, notion, discord, slack, photoshop, protopie, framer, raindrop, recording03, recording01, disc02, chromecast, sliders04, roadmap1, roadmap2, roadmap3, roadmap4, discordBlack, twitter, instagram, telegram, facebook } from "@/public/assets";
import card1 from "@/public/assets/benefits/card-1.svg";
import card2 from "@/public/assets/benefits/card-2.svg"
import card3 from "@/public/assets/benefits/card-3.svg";
import card4 from "@/public/assets/benefits/card-4.svg";
import card5 from "@/public/assets/benefits/card-5.svg";
import card6 from "@/public/assets/benefits/card-6.svg"
export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
    onlyMobile: false,
  },

  {
    id: "1",
    title: "Our Philosophy",
    url: "#ourPhilosophy",
    onlyMobile: false,
  },

  {
    id: "2",
    title: "Careers",
    url: "#careers",
    onlyMobile: false,
  },


  {
    id: "3",
    title: "Contact Us",
    url: "#contactUs",
    onlyMobile: true,
  },


]

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: card1.src,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Gap Identification",
    text: "Empirical testing to identify specific performance deficiencies in current models.",
    backgroundUrl: card2.src,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Research Design",
    text: "Development of specialized data collection frameworks targeting identified gaps",
    backgroundUrl: card3.src,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Expert Network Deployment",
    text: "We activate our network of domain specialists to generate high-quality, real-world insights and examples",
    backgroundUrl: card4.src,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Quality Assurance",
    text: "Every data point undergoes rigorous validation, cleaning, and enrichment while preserving critical context and metadata",
    backgroundUrl: card5.src,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Model Integration",
    text: "Creation of production-ready datasets.formatted to custom specifications and ready to enhance model performance",
    backgroundUrl: card6.src,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const collabText =
  "Great models start with great data. Our AI evolves with curated, high-quality datasets for unmatched performance.";

export const collabContent = [
  {
    id: "0",
    title: "Data-Driven Intelligence",
    text: collabText,
  },
  {
    id: "1",
    title: "Research-Backed Performance",
  },
  {
    id: "2",
    title: "Smarter Starts Here",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const Services1 = [
  "Reasoning Limitations",
  "Knowledge Representation",
  "Context Processing",
];

export const Services2 = [
  "Expert Decision Pathways",
  "Tool Interaction Patterns",
  "Tacit Knowledge Extraction",
];

export const Services3 = [
  "Specificity Metrics",
  "Contextual Richness",
  "Targeted Diversity",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const pricing = [
  {
    id: "0",
    title: "Connect with our Team",
    description: "Our research findings are advancing foundational model capabilities through human-generated, specialized datasets.",
    // price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  // {
  //   id: "1",
  //   title: "Premium",
  //   description: "Advanced AI chatbot, priority support, analytics dashboard",
  //   price: "9.99",
  //   features: [
  //     "An advanced AI chatbot that can understand complex queries",
  //     "An analytics dashboard to track your conversations",
  //     "Priority support to solve issues quickly",
  //   ],
  // },
  // {
  //   id: "2",
  //   title: "Enterprise",
  //   description: "Custom AI chatbot, advanced analytics, dedicated account",
  //   price: null,
  //   features: [
  //     "An AI chatbot that can understand your queries",
  //     "Personalized recommendations based on your preferences",
  //     "Ability to explore the app and its features without any cost",
  //   ],
  // },
];

export const roadmap = [
  {
    id: "0",
    title: "Empirical Iteration",
    text: "Our research embraces rapid hypothesis testing and continuous refinement, prioritizing methodical iteration on findings over single interventions",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Human Expertise Primacy",
    text: "AWe hold that human-generated data contains cognitive patterns and expertise that cannot be replicated through synthetic generation or web scraping.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Practitioner Verification",
    text: "We maintain rigorous standards for domain experts, ensuring validation by individuals with demonstrated field expertise.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Adaptive Methodology",
    text: "Our approach scales dynamically to address both targeted capability gaps and broader questions about AI functionality.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];