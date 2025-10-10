import calculator from "@/src/public/Calculator.png";
import todo from "@/src/public/To Do List App.png";
import userAuth from "@/src/public/LoginRegistrationForm.png";

// Works
interface IWork {
  img: string;
  title: string;
  description: string;
  languages: string[];
  link: string;
}

// Works
export const Work: IWork[] = [
  {
    img: `${calculator.src}`,
    title: "Calculator",
    description:
      "A super simple calculator to perform mathematical opertions or play with numbers.",
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://calculat0r21.netlify.app",
  },
  {
    img: `${userAuth.src}`,
    title: "Login/Registration Form",
    description:
      "A very simple user authentication project that explains working mechanism of user authentication.",
    languages: ["Next.js", "Tailwindcss", "Express.js", "Node.js", "MongoDB"],
    link: "https://login-registration-form-client-nu.vercel.app",
  },
  {
    img: `${todo.src}`,
    title: "To-do-list",
    description:
      "Todoos is a super simple to do list making app that helps you record your all your to do works easily.",
    languages: ["Next.js", "Tailwindcss", "Express.js", "Node.js", "MongoDB"],
    link: "https://to-do-client-hazel.vercel.app",
  },
];

const appPassword = "allb wyys evmb omcv";
