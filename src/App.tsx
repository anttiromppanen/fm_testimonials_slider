import Slider from "./components/Slider/Slider";
import tanyaImg from "./assets/images/image-tanya.jpg";
import johnImg from "./assets/images/image-john.jpg";

const testimonials = [
  {
    text: `
      “ I’ve been interested in coding for a while but never taken the
      jump, until now. I couldn’t recommend this course enough. I’m now in
      the job of my dreams and so excited about the future. ”
    `,
    author: "Tanya Sinclair",
    title: "UX Engineer",
    image: tanyaImg,
  },
  {
    text: `
      “ If you want to lay the best foundation possible I’d recommend taking this course. 
      The depth the instructors go into is incredible. I now feel so confident about 
      starting up as a professional developer. ”
    `,
    author: "John Tarkpor",
    title: "Junior Front-end Developer",
    image: johnImg,
  },
];

function App() {
  return (
    <main
      className="
      flex h-[100dvh] items-center justify-center bg-userContainerBg bg-[length:80%] 
      bg-left-bottom bg-no-repeat px-8
      md:h-screen md:bg-[length:50%]
      "
    >
      <Slider testimonials={testimonials} />
    </main>
  );
}

export default App;
