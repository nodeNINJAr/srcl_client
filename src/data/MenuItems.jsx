
// import { HomeOutlined } from "@ant-design/icons";
// import { Link } from "react-router";
// import { MdKeyboardArrowDown } from "react-icons/md";

// export const menuItems = [
//   {
//     key: "home",
//     label: <Link to="/">Home</Link>,
//     icon: <HomeOutlined />,
//   },
//   {
//     key: "about-us",
//     label: <span className="flex justify-between items-center gap-1">About Us <MdKeyboardArrowDown className="text-lg hidden lg:flex" /></span>,
//     children: [
//       { key: "organization", label: <Link to="/about/organization">The Organization</Link> },
//       { key: "mission", label: <Link to="/about/mission">Mission</Link> },
//       { key: "vision", label: <Link to="/about/vision">Vision</Link> },
//       { key: "board", label: <Link to="/about/board">Board of Directors</Link> },
//       { key: "professionals", label: <Link to="/about/professionals">Our Professionals</Link> },
//       { key: "alliances", label: <Link to="/about/alliances">Association and Alliances</Link> },
//     ],
//   },
//   {
//     key: "our-departments",
//     label: <span className="flex justify-between items-center gap-1">Departments <MdKeyboardArrowDown className="text-lg hidden lg:flex" /></span>,
//     children: [
//       {
//         key:"training",
//         label: <span className="flex justify-between items-center gap-1"> Training </span>,
//         children: [
//           { key: "upcoming-training", label: <Link to="/training/upcoming">Upcoming Training</Link> },
//           { key: "past-training", label: <Link to="/training/past">Past Training</Link> },
//           { key: "training-facility", label: <Link to="/training/facility">Training Facility</Link> },
//           { key: "training-calendar", label: <Link to="/training/calendar">Training Calendar</Link> },
//         ],
//       },
//     ],
//   },
//   {
//     key: "services",
//     label: <Link to="/services">Services</Link>,
//   },
//   {
//     key: "projects",
//     label: <span className="flex justify-between items-center gap-1">Projects <MdKeyboardArrowDown className="text-lg hidden lg:flex" /></span>,
//     children: [
//       { key: "on-going", label: <Link to="/projects/On-going">On Going Projects</Link> },
//       { key: "all-projects", label: <Link to="/projects/all-projects/completed">All Projects</Link> },
//     ],
//   },
//   {
//     key: "resources",
//     label:<span className="flex justify-between items-center gap-1">Resources <MdKeyboardArrowDown className="text-lg hidden lg:flex" /></span>,
//     children: [
//       { key: "survey-equipment", label: <Link to="/resources/survey-equipment">Precision Survey Equipment</Link> },
//       { key: "software-tools", label: <Link to="/resources/software-tools">Software and Tools</Link> },
//       { key: "publications", label: <Link to="/resources/publications">Publications</Link> },
//     ],
//   },
  
//   {
//     key:"career",
//     label: <span className="flex justify-between items-center gap-1"> Career <MdKeyboardArrowDown className="text-lg hidden lg:flex" /></span>,
//     children: [
//       { key: "vacancies", label: <Link to="/career/vacancies">Vacancies</Link> },
//       { key: "vacancy-status", label: <Link to="/career/vacancy-status">Vacancy Status</Link> },
//       { key: "how-to-apply", label: <Link to="/career/how-to-apply">How to Apply</Link> },
//     ],
//   },
//   {
//     key: "carbon-calculation",
//     label:<span className="flex justify-between items-center gap-1"><Link to={'/carbon-calculation'}>Carbon Calculation</Link></span>
//   },
//   {
//     key: "g-card",
//     label:'G-CARD',
//     // children: [
//     //   { key: "about-us-gcard", label: <Link to="/g-card/about">About US</Link> },
//     //   { key: "mission-gcard", label: <Link to="/g-card/mission">Mission</Link> },
//     //   { key: "vision-gcard", label: <Link to="/g-card/vision">Vision</Link> },
//     //   { key: "contact-gcard", label: <Link to="/g-card/contact">Contact US</Link> },
//     // ],
//   },
//   { key: "news-events-notices", label: <Link to="/news-events-notices"> Notices | Events | News </Link> },
//   { key: "contact", label: <Link to="/contact">Contact Us</Link> }
// ];


import { Link } from "react-router"; // Use `react-router-dom` instead of `react-router`
import { MdKeyboardArrowDown, MdHome } from "react-icons/md"; // Replace Ant Design icons with `react-icons`

export const menuItems = [
  {
    key: "home",
    label: <Link title="Sustainable for future" to="/">Home</Link>,
    icon: <MdHome />, // Replaced `HomeOutlined` with `MdHome`
  },
  {
    key: "about-us",
    label: (
      <span className="flex justify-between items-center gap-1">
        About Us <MdKeyboardArrowDown className="text-lg hidden lg:flex" />
      </span>
    ),
    children: [
      { key: "organization", label: <Link to="/about/organization">The Organization</Link> },
      { key: "mission", label: <Link to="/about/mission">Mission</Link> },
      { key: "vision", label: <Link to="/about/vision">Vision</Link> },
      { key: "board", label: <Link to="/about/board">Board of Directors</Link> },
      { key: "professionals", label: <Link to="/about/professionals">Our Professionals</Link> },
      { key: "alliances", label: <Link to="/about/alliances">Association and Alliances</Link> },
    ],
  },
  {
    key: "our-departments",
    label: (
      <span className="flex justify-between items-center gap-1">
        Departments <MdKeyboardArrowDown className="text-lg hidden lg:flex" />
      </span>
    ),
    children: [
      {
        key: "training",
        label: <span className="flex justify-between items-center gap-1">Training</span>,
        children: [
          { key: "upcoming-training", label: <Link to="/training/upcoming">Upcoming Training</Link> },
          { key: "past-training", label: <Link to="/training/past">Past Training</Link> },
          { key: "training-facility", label: <Link to="/training/facility">Training Facility</Link> },
          { key: "training-calendar", label: <Link to="/training/calendar">Training Calendar</Link> },
        ],
      },
    ],
  },
  {
    key: "services",
    label: <Link to="/services">Services</Link>,
  },
  {
    key: "projects",
    label: (
      <span className="flex justify-between items-center gap-1">
        Projects <MdKeyboardArrowDown className="text-lg hidden lg:flex" />
      </span>
    ),
    children: [
      { key: "on-going", label: <Link to="/projects/on-going">On Going Projects</Link> },
      { key: "all-projects", label: <Link to="/projects/all-projects/completed">All Projects</Link> },
    ],
  },
  {
    key: "resources",
    label: (
      <span className="flex justify-between items-center gap-1">
        Resources <MdKeyboardArrowDown className="text-lg hidden lg:flex" />
      </span>
    ),
    children: [
      { key: "survey-equipment", label: <Link to="/resources/survey-equipment">Precision Survey Equipment</Link> },
      { key: "software-tools", label: <Link to="/resources/software-tools">Software and Tools</Link> },
      { key: "publications", label: <Link to="/resources/publications">Publications</Link> },
    ],
  },
  {
    key: "career",
    label: (
      <span className="flex justify-between items-center gap-1">
        Career <MdKeyboardArrowDown className="text-lg hidden lg:flex" />
      </span>
    ),
    children: [
      { key: "vacancies", label: <Link to="/career/vacancies">Vacancies</Link> },
      { key: "vacancy-status", label: <Link to="/career/vacancy-status">Vacancy Status</Link> },
      { key: "how-to-apply", label: <Link to="/career/how-to-apply">How to Apply</Link> },
    ],
  },
  {
    key: "carbon-calculation",
    label: (
      <span className="flex justify-between items-center gap-1">
        <Link to="/carbon-calculation">Carbon Calculation</Link>
      </span>
    ),
  },
  {
    key: "g-card",
    label: "G-CARD",
    // children: [
    //   { key: "about-us-gcard", label: <Link to="/g-card/about">About US</Link> },
    //   { key: "mission-gcard", label: <Link to="/g-card/mission">Mission</Link> },
    //   { key: "vision-gcard", label: <Link to="/g-card/vision">Vision</Link> },
    //   { key: "contact-gcard", label: <Link to="/g-card/contact">Contact US</Link> },
    // ],
  },
  {
    key: "news-events-notices",
    label: <Link to="/news-events-notices">Notices | Events | News</Link>,
  },
  {
    key: "contact",
    label: <Link to="/contact">Contact Us</Link>,
  },
];