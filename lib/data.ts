export const profile = {
  name: "Aleem Mudasir Temitope", brand: "BLEMA", title: "Full-Stack Developer & Product Builder",
  email: "blemathegreat@gmail.com",
  links: { github: "https://github.com/Blemathegreat", linkedin: "https://www.linkedin.com/in/aleem-mudathir/" },
  status: "Available for new projects",
};
export type Project = { slug: string; name: string; url: string; image?: string; blurb: string; problem: string; solution: string; features: string[]; decisions: string[]; stack: string[]; role: string };
export const projects: Project[] = [
 { slug: "artisanhub", name: "ArtisanHub", url: "https://artisanhub-ozac.vercel.app/",
   
image: "/projects/artisanhub.png",

   blurb: "A service marketplace that connects customers with reliable artisans nearby.",
   problem: "Finding a trustworthy artisan is inconvenient, especially when you need dependable help close by.",
   solution: "A marketplace where customers browse services, find providers near them and review artisan profiles before they book.",
   features: ["Artisan discovery", "Location-based filtering", "Artisan profiles", "Customer-to-artisan marketplace", "Artisan onboarding", "Dashboard"],
   decisions: [
  "Location-first discovery: customers hire artisans for home visits, so distance matters more than ratings at launch. Each artisan's address is geocoded once, when they onboard, and saved as coordinates. Search then ranks by Haversine distance from the customer's GPS or typed area, and Nominatim lookups are cached in the database.",
  "Onboarding as a resumable 5-step wizard: progress is saved on the server (onboarding_stage), so an artisan who leaves midway continues where they stopped. Validation uses the same Zod rules on the frontend and backend, and the server decides the cover photo inside a transaction, so the browser can't break the rules.",
],
stack: [
  "React 19", "Vite", "Tailwind CSS", "React Router", "react-hook-form + Zod", "Leaflet",
  "Node.js", "Express", "MySQL", "JWT auth", "Cloudinary",
  "Vercel", "Render", "Aiven",
],
role: "Full-stack developer (solo). Designed the MySQL schema, built the Express REST API (auth, onboarding, portfolio, location search, services), connected it to an existing React frontend, and deployed it end to end. Debugged production issues including MySQL trigger conflicts, SSL to a managed database, CORS and Linux file-name casing."},
 { slug: "travora", name: "Travora", url: "https://travora-travel-management-platform-three.vercel.app/",
  image: "/projects/travora.png",
   blurb: "A travel and education consultation management platform with separate admin and ambassador experiences.",
   problem: "Consultancies juggle travel and education enquiries, client progress and referrals across scattered tools.",
   solution: "One responsive platform where administrators run operations and ambassadors bring in clients and track their contributions, each seeing only what is relevant to them.",
   features: ["Role-based experiences for administrators and ambassadors", "Business workflow management", "Travel and education consultation under one roof", "Referral and ambassador functionality", "Responsive, clean frontend architecture"],
   decisions: [
    "Separate interfaces per role so each user sees only relevant tools",
    "Role-specific dashboards keep referral tracking, approval flows, and operations in distinct lanes without creating unnecessary complexity for either audience"
  ],
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Vercel"],
  role: "Designed and delivered the platform, from interface design through to deployment."
},
 { slug: "relixcore-attendance", name: "RelixCore Attendance", url: "https://relixcore-attendance.vercel.app/",
   image: "/projects/relixcore.png",

   blurb: "An employee attendance and HR management application that replaces manual tracking.",
   problem: "Manual attendance tracking is slow, error-prone and hard to verify.",
   solution: "Account-based sign-in and sign-out with location verification, and attendance and lateness calculated automatically from configured work schedules.",
   features: ["Employee authentication", "Sign-in and sign-out", "Geolocation verification", "Attendance history", "HR management", "Records and reporting", "Lateness based on work schedules"],
   "decisions": [
    "Lateness is computed from configured schedules, not entered by hand",
    "Schedules (shift start time, grace period) are stored in MySQL and attached to employees, so changing a schedule never requires editing past records by hand",
    "Check-in timestamps are generated server-side to prevent clients from faking times",
    "Business logic (lateness, status calculation) lives in Express services/controllers, keeping the React frontend focused on display and input",
    "Relational schema with foreign keys linking employees, schedules, and attendance records for consistent reporting"
  ],
  "stack": ["React", "Node.js", "Express.js", "MySQL"],
  "role": "Full-stack developer at RelixCore Digital Agency: built the REST API and MySQL schema, implemented schedule-based lateness logic, and developed the React interface for recording and reviewing attendance."
},
];
export const services = [
 ["Full-stack web applications", "Complete products, frontend to database, built to be used by real people."],
 ["SaaS and MVP development", "Validate your idea with a working product before committing a large budget."],
 ["Business websites and landing pages", "Fast, clear pages that explain what you do and turn visitors into enquiries."],
 ["Admin dashboards and management systems", "Replace spreadsheets and manual processes with tools your team uses."],
 ["API development and integrations", "Reliable backends and connections between the systems you already run."],
 ["Improvement and maintenance", "Take over an existing app: fix it, speed it up, extend it and keep it healthy."],
];
export const stack: [string, string[]][] = [
 ["Frontend", ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]],
 ["Backend", ["Node.js", "Express.js", "REST APIs", "Authentication & authorization", "Middleware", "Database integration"]],
 ["Databases", ["MySQL", "PostgreSQL"]],
 ["Tools", ["Git & GitHub", "Postman", "VS Code", "Vercel", "Render"]],
];
export const experience = [
{
  role: "Full-Stack Developer",
  org: "RelixCore Digital Agency",
  when: "Jan 2026 – Dec 2026",
  text: "Built and deployed RelixCore Attendance, a web app for recording employee attendance from their own phones. Employees sign in and out inside a GPS geofence, checked on the server with the Haversine formula, and HR manages staff, working hours, holidays, corrections and printable monthly reports. Built with React, Vite and Tailwind on the front end, Node.js and Express on the back end, and MySQL, with role-based access, session authentication, hashed passwords, an audit trail for every correction, and database transactions and constraints to prevent duplicate sign-ins. Deployed on Vercel and Render with a cloud MySQL database."
},

{
  role: "Frontend Developer Intern",
  org: "AsteriskRD",
  when: "September 2025 – February 2026",
  text: "Built client and provider dashboards using React, Next.js, and TypeScript to manage user activities and platform operations. Developed reusable and scalable UI components to improve development efficiency and maintain design consistency. Integrated REST APIs for real-time data handling and user interactions using asynchronous programming patterns. Improved application performance by 30% through memoization, code splitting, and profiling with Lighthouse and Chrome DevTools. Collaborated with designers and backend engineers to deliver scalable frontend solutions. Participated in code reviews to improve code quality and maintainability."
},


{
  role: "Frontend Developer Intern",
  org: "Viaggio Abroad",
  when: "Sept 2024 – Dec 2024",
  text: "Built the client-side interface using Next.js, JavaScript, TypeScript, and Tailwind CSS. Developed a booking management system allowing users to submit and track travel bookings. Implemented real-time chat functionality for communication between users and administrators. Built secure file upload and download functionality for document sharing. Integrated backend APIs to support booking workflows, messaging, and file handling. Optimized CSS architecture, reducing bundle size by 40% and improving overall page performance."
},

 { role: "B.Sc. Biochemistry (Second Class Upper)", org: "Federal University of Agriculture, Abeokuta (FUNAAB)", when: "2024", text: "" },
];
export const process = [
 ["Discovery", "We define the problem, the users and what success looks like."],
 ["Planning", "Scope, user flows and architecture, agreed before code is written."],
 ["Development", "Frontend and backend built together in small, reviewable steps."],
 ["Testing", "Real-world checks across devices, roles and edge cases."],
 ["Deployment", "Shipped, monitored and handed over with clear documentation."],
];
