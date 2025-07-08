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
  Title: "I'm Tufan Rai",
  subTitle:
    "I'm a MERN Stack web developer. I have a good experience with express.js, node.js, mongoDB and next.js.",
  paragraph:
    " I love turning to bring the imagination to reality with code. I love to help people start their business and leave their businesse's presence on the internet. I'n simple words I Love Programming.",
  media1: "https://github.com/tufanrai",
  media2: "https://www.instagram.com/tufan_rai_/",
};

// About me page informations.
export const AbtMe: IMe = {
  head: "Hi! I'm Tufan Rai an 18 year old boy with big dreams in his eyes. He who loves to code.",
  body: "I am from Nepal and currently I am waiting for +2 (high school) result to join Bachelor in IT. Apart form coding I love playing cricket and listening old ever green Nepali musics. I am a very passionated boy at my works.",
  foot: "",
  media1: "https://github.com/tufanrai",
  media2: "https://www.instagram.com/tufan_rai_/",
  media3: "https://www.linkedin.com/in/tufan-rai-03510b299/",
};
