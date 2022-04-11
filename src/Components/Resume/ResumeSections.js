import {
  faFileCode,
  faUserGraduate,
  faFilePen,
  faTrophy,
  faGlasses,
} from "@fortawesome/free-solid-svg-icons";
const resumeSections = [
  {
    title: "Education",
    icon: faUserGraduate,
    class: "resumeBody-sidebar-content",
    icon_class: "resume-Icon resume-Icon-education",
    id: "education",
  },
  {
    title: "Skills",
    icon: faFileCode,
    class: "resumeBody-sidebar-content",
    icon_class: "resume-Icon resumeBody-Icon-skills",
    id: "skills",
  },
  {
    title: "Projects",
    icon: faFilePen,
    class: "resumeBody-sidebar-content",
    icon_class: "resume-Icon resumeBody-Icon-projects",
    id: "projects",
  },
  {
    title: "Interests",
    icon: faTrophy,
    class: "resumeBody-sidebar-content",
    icon_class: "resume-Icon resumeBody-Icon-interests",
    id: "interests",
  },
  {
    title: "Activities",
    icon: faGlasses,
    class: "resumeBody-sidebar-content",
    icon_class: "resume-Icon resumeBody-Icon-activities",
    id: "activities",
  },
];
export default resumeSections;
