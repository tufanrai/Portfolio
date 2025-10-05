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

// Hero or the landing page details.
export const Hero: IHero = {
  Title: "Tufan Rai",
  subTitle: "Hello visitors!",
  paragraph:
    "I'm a MERN Stack web developer specializing in building robust and scalable web applications. With strong experience in Express.js, Node.js, MongoDB, and Next.js, I transform innovative concepts into functional, high performance digital solutions. I am passionate about empowering individuals and businesses to establish and grow their online presence, turning their visions into tangible realities through code.",
  media1: "https://github.com/tufanrai",
  media2: "https://www.instagram.com/tufan_rai_/",
};

// About me page informations.
export const AbtMe: IMe = {
  head: "Hi, Tufan Rai here.",
  body: "As a software engineer currently pursuing a BCSIT degree at Liberty college, I specialize in crafting seamless web experiences. I possess a strong understanding of web development architecture, allowing me to build robust and scalable applications. My expertise spans both frontend and backend development, leveraging Next.js for dynamic user interfaces and Node.js/Express.js for robust server-side logic. MongoDB is my go to for efficient data management.",
  foot: "When it comes to UI/UX, I believe in a user-centered approach. My process typically involves designing wireframes to map out the user journey before translating those concepts into functional, engaging code. All my work is diligently stored and managed on GitHub.",
  media1: "https://github.com/tufanrai",
  media2: "https://www.instagram.com/tufan_rai_/",
  media3: "https://www.linkedin.com/in/tufan-rai-03510b299/",
};
