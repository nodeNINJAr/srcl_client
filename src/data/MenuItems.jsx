
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";

export const menuItems = [
  {
    key: "home",
    label: <Link to="/">Home</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: "our-departments",
    label: <Link to="/departments">Our Departments</Link>,
  },
  {
    key: "sectors",
    label: <Link to="/sectors">Sectors</Link>,
  },
  {
    key: "services",
    label: <Link to="/services">Services</Link>,
  },
  {
    key: "about-us",
    label: <span className="flex justify-between items-center gap-1">About Us <MdKeyboardArrowDown className="text-lg hidden lg:flex" /></span>,
    children: [
      { key: "organization", label: <Link to="/about/organization">The Organization</Link> },
      { key: "mission", label: <Link to="/about/mission">Mission</Link> },
      { key: "vision", label: <Link to="/about/vision">Vision</Link> },
      { key: "board", label: <Link to="/about/board">Board of Directors</Link> },
      { key: "professionals", label: <Link to="/about/professionals">Our Professionals</Link> },
      { key: "alliances", label: <Link to="/about/alliances">Association and Alliances</Link> },
      { key: "contact", label: <Link to="/about/contact">Contact Us</Link> },
    ],
  },
  {
    key: "projects",
    label: <span className="flex justify-between items-center gap-1">Our Projects <MdKeyboardArrowDown className="text-lg hidden lg:flex" /></span>,
    children: [
      { key: "featured", label: <Link to="/projects/featured">Featured Projects</Link> },
      { key: "all-projects", label: <Link to="/projects/all">All Projects</Link> },
      {
        key: "categorized",
        label: "Categorized according to-",
        children: [
          { key: "sector", label: <Link to="/projects/sector">Sector</Link> },
          { key: "service", label: <Link to="/projects/services">Services</Link> },
          { key: "departments", label: <Link to="/projects/departments">Departments</Link> },
          { key: "ongoing", label: <Link to="/projects/ongoing">Ongoing</Link> },
          { key: "completed", label: <Link to="/projects/completed">Completed</Link> },
          { key: "year-wise", label: <Link to="/projects/year-wise">Year wise</Link> },
        ],
      },
    ],
  },
  {
    key: "resources",
    label:<span className="flex justify-between items-center gap-1">Resources <MdKeyboardArrowDown className="text-lg hidden lg:flex" /></span>,
    children: [
      { key: "survey-equipment", label: <Link to="/resources/survey-equipment">Precision Survey Equipment</Link> },
      { key: "software-tools", label: <Link to="/resources/software-tools">Software and Tools</Link> },
      { key: "publications", label: <Link to="/resources/publications">Publications</Link> },
      {
        key: "training",
        label: "Training",
        children: [
          { key: "upcoming-training", label: <Link to="/training/upcoming">Upcoming Training</Link> },
          { key: "past-training", label: <Link to="/training/past">Past Training</Link> },
          { key: "training-facility", label: <Link to="/training/facility">Training Facility</Link> },
          { key: "training-calendar", label: <Link to="/training/calendar">Training Calendar</Link> },
        ],
      },
    ],
  },
  { key: "news-events-notices", label: <Link to="/news-events-notices">News | Events | Notices</Link> },
  {
    key:"career",
    label: <span className="flex justify-between items-center gap-1"> Career <MdKeyboardArrowDown className="text-lg hidden lg:flex" /></span>,
    children: [
      { key: "vacancies", label: <Link to="/career/vacancies">Vacancies</Link> },
      { key: "vacancy-status", label: <Link to="/career/vacancy-status">Vacancy Status</Link> },
      { key: "how-to-apply", label: <Link to="/career/how-to-apply">How to Apply</Link> },
    ],
  },
  {
    key: "g-card",
    label:<span className="flex justify-between items-center gap-1">G-CARD  <MdKeyboardArrowDown className="text-lg hidden lg:flex" /></span>,
    children: [
      { key: "about-us-gcard", label: <Link to="/g-card/about">About US</Link> },
      { key: "mission-gcard", label: <Link to="/g-card/mission">Mission</Link> },
      { key: "vision-gcard", label: <Link to="/g-card/vision">Vision</Link> },
      { key: "contact-gcard", label: <Link to="/g-card/contact">Contact US</Link> },
    ],
  },
];
