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
    Title: "How I got into coding?",
    sub_title: "About my journey to web development.",
    paragraph: `I was in grade 4 when I girst gort introduced to computer science subject. It was the first time ever I got to use computer. At that time I felt like, "Waauuu" I was so amaized to just look at it. Time went by and at grade I was introduced to QBASIC and it was the first time that I got familier or say introduced to coding. Just writing printf() and scanf() facionated me. It was the time or say the first time I started getting interest in coding and programming. When, I was in grade 8 it was the time of COVID-19 due to which our classes where helled online, In grade 8 I was introduced to HTML web development which facionated me even more. Just learning simple HTML & CSS, making simple tables made me soo interested and facionated for programming. I still remember when I wrote my very first HTML codes and displayed "Hello world!" I was soo excited and happy that in the middle of the class I ran to my mother just to show what I had succeed to do. This was the first time I really thought of pursuing my career in IT sector but still I wasn't very familier with all the branches of IT. In grade 9, we were introduced to c programming learning an actual programming language for the very firsty time was very very exciting. I was super excited and was always one step ahead then my friends when it came to coding. My computer teacher would also praise me for my excellence and whenever anyone need help. Sir always would send me to help them. I was so facionated to coding that I used to write "#include<stdio.h>" and "#include<conio.h>" on my hands and walk with it. In grade 11 again back to basic c programming and HTML going back to basic I was so confident that I used to think I was the champ in the class when it came to coding. I was so over confident that I used to think that I knew more than teacher himself. But (lol) got the reality check, it turned out that I had forgotten quiet a lot (lol). But still I was the champ among all in the calss when it came to coding. It was the very first time that I knew which field to pursue in, I found my self more passionated for web development so I thought to pursue my career in web development. so I took my basic HTML, CSS & JS  course online from 'apna college' channel. When it comes to learning basic, I feel apna college is the best. There Shradha dee explains everything very clearly with good examples and simple words. After learning the course, I builed my first rock, paper scissors game using simple HTML, CSS & JS. Then I tried cloning many websites. I tried cloning the landing page of Google as well and I actually cloned it. This was how my journey started and talking about how it's going. I recently completed my MERN stack development course and currently I'm working on my self skill development. As a MERN stack developer till now I've made an expense tracker, to do list and a calculator and a portfolio for my friend. Now I'm currently working on a chatting app.`,
  },
];
