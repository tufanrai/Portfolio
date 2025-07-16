import calculator from "@/src/public/CalculatorSS.png";
import todo from "@/src/public/to-do-list.png";
import { link } from "fs";

// Hero interface
interface IHero {
  Title: string;
  subTitle: string;
  paragraph: string;
  media1: string;
  media2: string;
}

// About me interface
interface IMe {
  head: string;
  body: string;
  foot: string;
  media1: string;
  media2: string;
  media3: string;
}

// BLogs
export interface IBlog {
  Title: string;
  Date: string;
  sub_title: string;
  paragraph: string;
}

// Works
interface IWork {
  img: string;
  title: string;
  description: string;
  languages: string[];
  link: string;
}

// Hero or the landing page details.
export const Hero: IHero = {
  Title: "Tufan Rai",
  subTitle: "The storm behind the code.",
  paragraph:
    "I'm a MERN Stack web developer specializing in building robust and scalable web applications. With strong experience in Express.js, Node.js, MongoDB, and Next.js, I transform innovative concepts into functional, high performance digital solutions. I am passionate about empowering individuals and businesses to establish and grow their online presence, turning their visions into tangible realities through code.",
  media1: "https://github.com/tufanrai",
  media2: "https://www.instagram.com/tufan_rai_/",
};

// About me page informations.
export const AbtMe: IMe = {
  head: "Hi, I'm Tufan Rai, the storm behind the code.",
  body: "As a software engineer currently pursuing a BIT degree at Global College of Technology, I specialize in crafting seamless web experiences. I possess a strong understanding of web development architecture, allowing me to build robust and scalable applications. My expertise spans both frontend and backend development, leveraging Next.js for dynamic user interfaces and Node.js/Express.js for robust server-side logic. MongoDB is my go to for efficient data management.",
  foot: "When it comes to UI/UX, I believe in a user-centered approach. My process typically involves designing wireframes to map out the user journey before translating those concepts into functional, engaging code. All my work is diligently stored and managed on GitHub.",
  media1: "https://github.com/tufanrai",
  media2: "https://www.instagram.com/tufan_rai_/",
  media3: "https://www.linkedin.com/in/tufan-rai-03510b299/",
};

// Blogs
export const Blogs: IBlog[] = [
  {
    Title: "How I got into coding?",
    Date: "2082-03-26",
    sub_title: "About my journey to web development.",
    paragraph:
      "I was in Grade 4 when I was first introduced to the subject of Computer Science. It was also the first time I got to use a computer, and I still remember how amazed I was just looking at it made me go, “Waauuu.” As time passed, in Grade 6, we were introduced to QBASIC, and that was when I got my first exposure to coding. Even writing simple commands like printf() and scanf() fascinated me. That moment sparked my interest in programming. \n In Grade 8, during the COVID-19 pandemic, our classes were held online. That year, I got introduced to HTML and web development, which drew me in even more. Learning simple HTML and CSS, creating basic tables, and writing my first “Hello World!” excited me so much that I ran to my mom in the middle of class just to show her what I had created. That was the first time I seriously considered pursuing a career in the IT field, although I wasn’t yet familiar with all its branches. Then in Grade 9, I got to learn C programming my first real programming language and I was incredibly excited. I stayed one step ahead of my friends in coding, and my computer teacher would often praise me and even send me to help others who were struggling. I was so passionate about it that I used to write #include<stdio.h> and #include<conio.h> on my hands and walk around like I owned it. In Grade 11, we returned to basics C programming and HTML and by then, I felt so confident that I thought I was the champ of the class. I even thought I knew more than the teacher himself (lol), but reality hit when I realized I had forgotten quite a bit (lol). Still, among my classmates, I remained the strongest in coding. That was when I knew for sure which field I wanted to pursue: web development. To sharpen my skills, I took an online course in HTML, CSS, and JavaScript from the ‘Apna College’ YouTube channel. I truly believe it’s one of the best for beginners, and Shradha Didi explains everything clearly, with relatable examples and simple words. After completing the course, I built my first Rock, Paper, Scissors game using basic HTML, CSS, and JS. I also started cloning websites, and one of my proudest moments was successfully cloning Google’s landing page. That’s how my journey began. As for where I am now, I’ve completed a MERN Stack Development course and am currently working on developing my skills further. As a MERN stack developer, I’ve built an expense tracker, a to-do list app, a calculator, and even a portfolio site for a friend. Currently, I’m working on building a real-time chatting app.",
  },
  {
    Title: "Notes for HTML",
    Date: "2082-03-30",
    sub_title: "Important notes related to HTML, Everything related to tags.",
    paragraph: `HTML (Hyper Text Markup Language) is a standard markup language that is used for creating web pages or say used in web development. It is the backbone of the web development and to clear things out it is not a programming language.
Talking about the tags in HTML, they are the building blocks to structure and format contents of a web page. There are mainly two types of tags, and they are paired (container) tags and unpaired (self-closing) tags. Paired tags as it’s name states are the tags with it’s pair (example, <p>…</p>, <div>…</div>,etc). Where as unpaired tags are those tags which do not have any pair (example, <hr/>, <br/>, etc), these tags are also known as self-closing tags. 
Based on their functioning tags can be categorised into different types. such as basic HTML tags, Formatting tags, List tags, Table tags and Media tags.`,
  },
];

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
    img: `${todo.src}`,
    title: "To-do-list",
    description:
      "Todoos is a super simple to do list making app that helps you record your all your to do works easily.",
    languages: ["NEXT.js", "Tailwindcss", "Express.js", "Node.js", "MongoDB"],
    link: "https://to-do-client-hazel.vercel.app",
  },
];
