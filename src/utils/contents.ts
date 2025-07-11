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
  sub_title: string;
  paragraph: string;
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
  head: "Hi, I'm Tufan Rai.  Tufan the storm behind the design",
  body: "I'm a software engineer currently pursuing my MSc in Computer Science (yes, still working on it—no pressure, right?). I specialize in frontend development but have recently started exploring backend development too—because why not learn how the whole system works? It's not always smooth sailing, but I'm here for the challenge (and maybe a few cups of coffee along the way).",
  foot: "When I'm not coding, you might find me signing up for a random marathon, jumping around, or daydreaming about running instead.",
  media1: "https://github.com/tufanrai",
  media2: "https://www.instagram.com/tufan_rai_/",
  media3: "https://www.linkedin.com/in/tufan-rai-03510b299/",
};

// Blogs
export const Blogs: IBlog[] = [
  {
    Title: "How I started my coding journey",
    sub_title: "About my journey in coding as a MERN stack developer.",
    paragraph:
      "I had interest in coding since the day i learned QBASIC in grade 7. Then when in gradi 8 i got introduced to HTML my interest grew even more deeper and deeper..",
  },
  {
    Title: "How I started my coding journey 2",
    sub_title: "About my journey in coding as a MERN stack developer.",
    paragraph:
      "I had interest in coding since the day i learned QBASIC in grade 7. Then when in gradi 8 i got introduced to HTML my interest grew even more deeper and deeper..",
  },
  {
    Title: "How I started my coding journey 3",
    sub_title: "About my journey in coding as a MERN stack developer.",
    paragraph:
      "I had interest in coding since the day i learned QBASIC in grade 7. Then when in gradi 8 i got introduced to HTML my interest grew even more deeper and deeper..",
  },
];
