// BLogs
export interface IBlog {
  Title: string;
  Date: string;
  sub_title: string;
  paragraph: string[];
}

// Blogs
export const Blogs: IBlog[] = [
  {
    Title: "How I got into coding?",
    Date: "2082-03-26",
    sub_title: "About my journey to web development.",
    paragraph: [
      "I was in Grade 4 when I was first introduced to the subject of Computer Science. It was also the first time I got to use a computer, and I still remember how amazed I was just looking at it made me go, “Waauuu.” As time passed, in Grade 6, we were introduced to QBASIC, and that was when I got my first exposure to coding. Even writing simple commands like printf() and scanf() fascinated me. That moment sparked my interest in programming.",
      "In Grade 8, during the COVID-19 pandemic, our classes were held online. That year, I got introduced to HTML and web development, which drew me in even more. Learning simple HTML and CSS, creating basic tables, and writing my first “Hello World!” excited me so much that I ran to my mom in the middle of class just to show her what I had created. That was the first time I seriously considered pursuing a career in the IT field, although I wasn’t yet familiar with all its branches. Then in Grade 9, I got to learn C programming my first real programming language and I was incredibly excited. I stayed one step ahead of my friends in coding, and my computer teacher would often praise me and even send me to help others who were struggling. I was so passionate about it that I used to write #include<stdio.h> and #include<conio.h> on my hands and walk around like I owned it.",
      "In Grade 11, we returned to basics C programming and HTML and by then, I felt so confident that I thought I was the champ of the class. I even thought I knew more than the teacher himself (lol), but reality hit when I realized I had forgotten quite a bit (lol). Still, among my classmates, I remained the strongest in coding. That was when I knew for sure which field I wanted to pursue: web development. To sharpen my skills, I took an online course in HTML, CSS, and JavaScript from the ‘Apna College’ YouTube channel. I truly believe it’s one of the best for beginners, and Shradha Didi explains everything clearly, with relatable examples and simple words.",
      " After completing the course, I built my first Rock, Paper, Scissors game using basic HTML, CSS, and JS. I also started cloning websites, and one of my proudest moments was successfully cloning Google’s landing page. That’s how my journey began. As for where I am now, I’ve completed a MERN Stack Development course and am currently working on developing my skills further. As a MERN stack developer, I’ve built an expense tracker, a to-do list app, a calculator, and even a portfolio site for a friend. Currently, I’m working on building a real-time chatting app.",
    ],
  },
  {
    Title: "Notes for HTML",
    Date: "2082-03-30",
    sub_title: "Important notes related to HTML, Everything related to tags.",
    paragraph: [
      `HTML (Hyper Text Markup Language) is a standard markup language that is used for creating web pages or say used in web development. It is the backbone of the web development and to clear things out it is not a programming language.
Talking about the tags in HTML, they are the building blocks to structure and format contents of a web page. There are mainly two types of tags, and they are paired (container) tags and unpaired (self-closing) tags. Paired tags as it’s name states are the tags with it’s pair (example, <p>…</p>, <div>…</div>,etc). Where as unpaired tags are those tags which do not have any pair (example, <hr/>, <br/>, etc), these tags are also known as self-closing tags. 
Based on their functioning tags can be categorised into different types. such as basic HTML tags, Formatting tags, List tags, Table tags and Media tags.`,
    ],
  },
  {
    Title: "My Unexpected Start as an Admissions Counselor",
    Date: "2082-04-13",
    sub_title: "One of the most memoriable part of my life",
    paragraph: [
      "My journey as an admissions counselor began on June 29, 2025. That was my very first day in the role. But before diving deep into that experience, let's talk about how I landed this unexpected opportunity.",
      "It all started one fine day (I'm terrible at remembering exact dates!). My program coordinator, Mr. Prajwal Shrestha, called me. Unfortunately, I was in the shower and missed the call. After I got out, I checked my phone and saw a missed call from Global College of Management (GCM). When I first saw the college's name, I was a mix of confused and nervous. So nervous, in fact, that I started replaying all my college days in my mind. I wondered what I could have possibly done wrong for the college to be calling me.",
      `Gathering some courage, I called back. Prajwal sir answered and asked me to come to the college. "Waauuuu!" my nervousness shot up even more. Now, I started remembering every single "kanda" (mischief) I might have done in college (even though I truly hadn't done any!). My mind raced, trying to conjure up every possible reason for the call: incomplete homework, entering the classroom without a program coordinator's signature on a permission slip... I thought of every scenario except for the one he actually called for: admissions counseling.`,
      `Upon reaching the college, I found my old classmate, Saundarya Bhatta, who had also been called. I immediately asked her why we were there, and she simply replied, "I don't know." "Shit," I thought, "Are we in trouble?" With a shared sense of trepidation, we both headed towards the program coordinator's office. We went inside but found no one there. We then asked Jiban dai, one of the staff, about Prajwal sir, and he informed us that he'd gone for lunch. So, we decided to head down to the canteen ourselves. Luckily, we found him there, just finishing his meal. We greeted him, and then we all went back up to the program coordinator's office. Even at that point, I was still scared and completely unaware that we were being asked about our interest in becoming admissions counselors.`,
      "Now, let's talk about my actual experience as an admissions counselor. There were 20 students in total, and I knew absolutely no one among them. Before we started, we had an orientation program designed to introduce us to each other and explain how everything would work. To be honest, there was only one person there I felt somewhat comfortable with. Even Saundarya, my former classmate, and I didn't talk much. During the orientation, I just found myself observing everyone, wondering how I would manage to communicate and work as part of this new team.",
      "",
    ],
  },
];
