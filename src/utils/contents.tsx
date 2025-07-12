import calculator from "@/src/public/CalculatorSS.png";

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
  Title: "I'm Tufan Rai",
  subTitle:
    "I'm a MERN Stack web developer with good experience with express.js, node.js, mongoDB and next.js.",
  paragraph:
    " I love turning other's imagination to reality with code. I love to help people start their business and leave their business's presence on the internet.",
  media1: "https://github.com/tufanrai",
  media2: "https://www.instagram.com/tufan_rai_/",
};

// About me page informations.
export const AbtMe: IMe = {
  head: "Hi, I'm Tufan Rai.  Tufan - the storm behind the design",
  body: "I'm a software engineer currently pursuing my MSc in Computer Science (yes, still working on it—no pressure, right?). I specialize in frontend development but have recently started exploring backend development too—because why not learn how the whole system works? It's not always smooth sailing, but I'm here for the challenge (and maybe a few cups of coffee along the way).",
  foot: "When I'm not coding, you might find me signing up for a random marathon, jumping around, or daydreaming about running instead.",
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
    paragraph: `I was in Grade 4 when I was first introduced to the subject of Computer Science. It was also the first time I got to use a computer, and I still remember how amazed I was—just looking at it made me go, “Waauuu.” As time passed, in Grade 6, we were introduced to QBASIC, and that was when I got my first exposure to coding. Even writing simple commands like printf() and scanf() fascinated me. That moment sparked my interest in programming. In Grade 8, during the COVID-19 pandemic, our classes were held online. That year, I got introduced to HTML and web development, which drew me in even more. Learning simple HTML and CSS, creating basic tables, and writing my first “Hello World!” excited me so much that I ran to my mom in the middle of class just to show her what I had created. That was the first time I seriously considered pursuing a career in the IT field, although I wasn’t yet familiar with all its branches. Then in Grade 9, I got to learn C programming — my first real programming language — and I was incredibly excited. I stayed one step ahead of my friends in coding, and my computer teacher would often praise me and even send me to help others who were struggling. I was so passionate about it that I used to write #include<stdio.h> and #include<conio.h> on my hands and walk around like I owned it. In Grade 11, we returned to basics — C programming and HTML — and by then, I felt so confident that I thought I was the champ of the class. I even thought I knew more than the teacher himself (lol), but reality hit when I realized I had forgotten quite a bit (lol). Still, among my classmates, I remained the strongest in coding. That was when I knew for sure which field I wanted to pursue: web development. To sharpen my skills, I took an online course in HTML, CSS, and JavaScript from the ‘Apna College’ YouTube channel. I truly believe it’s one of the best for beginners, and Shradha Didi explains everything clearly, with relatable examples and simple words. After completing the course, I built my first Rock, Paper, Scissors game using basic HTML, CSS, and JS. I also started cloning websites, and one of my proudest moments was successfully cloning Google’s landing page. That’s how my journey began. As for where I am now, I’ve completed a MERN Stack Development course and am currently working on developing my skills further. As a MERN stack developer, I’ve built an expense tracker, a to-do list app, a calculator, and even a portfolio site for a friend. Currently, I’m working on building a real-time chatting app.`,
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
];
