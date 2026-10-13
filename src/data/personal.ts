// ============================================================
// PERSONAL INFORMATION — Replace all placeholder values below
// ============================================================

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  tagline: string;
  bio: string[];
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeFileName: string | null; // null = resume not yet available
  showAvailabilityBadge?: boolean; // false = hide availability badge unless explicitly enabled
  location: string;
  university: string;
  degree: string;
  graduationYear: string;
  avatarPath: string | null; // null = show initials avatar
  web3FormsAccessKey?: string; // Free access key from https://web3forms.com for background emails
}

export const personalInfo: PersonalInfo = {
  // TODO: Replace with your real first name
  firstName: "Soban",

  // TODO: Replace with your real last name
  lastName: "Ahmad",

  tagline: "Computer Science Engineering Student · AI/ML Enthusiast · Data Science Learner",

  bio: [
    // TODO: Replace with your own paragraphs
    "I am a Computer Science Engineering student with a growing interest in Artificial Intelligence, Machine Learning, and Data Science. I enjoy working with data and building projects that help me understand how real-world problems can be approached through code and analysis.",
    "I am currently practising Python and Pandas for data manipulation, and learning SQL for database querying. My goal is to develop strong foundations in AI/ML engineering and data science through hands-on projects and continuous learning.",
    "I am actively seeking internship opportunities where I can apply what I have learned, contribute to meaningful work, and continue growing as a developer.",
  ],

  // TODO: Replace with your real email
  email: "SobanAhmad@gmail.com",

  // TODO: Replace with your GitHub profile URL (or set to "" to hide)
  githubUrl: "https://github.com/SobanAhmad-28",

  // TODO: Replace with your LinkedIn profile URL (or set to "" to hide)
  linkedinUrl: "https://www.linkedin.com/in/soban-ahmad-162437338/",

  // Place your resume PDF in the /public folder and set the filename here
  // Set to null if you don't have a resume ready yet
  resumeFileName: null,

  // Set to true to show the 'Available for Internships' status badge in hero
  showAvailabilityBadge: true,

  // TODO: Replace with your city and country
  location: "Khandwa, Madhya Pradesh, India",

  // TODO: Replace with your university name
  university: "bhabha University bhopal",

  degree: "B.Tech in Computer Science Engineering",

  // TODO: Replace with your expected graduation year
  graduationYear: "Expected 2029",

  // Place your photo in /public and set the path here (e.g., "/avatar.jpg")
  // Set to null to show initials instead
  avatarPath: null,

  // Web3Forms Access Key for direct background email sending (get free at https://web3forms.com)
  web3FormsAccessKey: "",
};
