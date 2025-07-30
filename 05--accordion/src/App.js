import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  const [indexOpen, setIndexOpen] = useState(null);

  function handleToggle(index) {
    setIndexOpen((previousIndex) => (previousIndex === index ? null : index));
  }

  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem
          num={i}
          title={el.title}
          text={el.text}
          isOpen={indexOpen=== i}
          onToggle={()=>handleToggle(i)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, isOpen, onToggle }) {
  return (
    <div className={`item ${isOpen ? `open` : ""}`} onClick={onToggle}>
      <p className="number">{`0${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{text}</p>}
    </div>
  );
}

// ------------------------------------
// ------------------------------------

// export default function App() {
//   return (
//     <div>
//       <Accordion faqs={faqs} />
//     </div>
//   );
// }

// function Accordion({ faqs }) {
//   return (
//     <div className="accordion">
//       {faqs.map((el, i) => (
//         <AccordionItem num={i} title={el.title} text={el.text} />
//       ))}
//     </div>
//   );
// }

// function AccordionItem({ num, title, text }) {
//   const [isOpen, setIsOpen] = useState(false);

//   function handleClick() {
//     setIsOpen(() => !isOpen);
//   }

//   return (
//     <div className={`item ${isOpen ? `open` : ""}`} onClick={handleClick}>
//       <p className="number">{`0${num + 1}`}</p>
//       <p className="title">{title}</p>
//       <p className="icon">{isOpen ? "-" : "+"}</p>
//       {isOpen && <p className="content-box">{text}</p>}
//     </div>
//   );
// }
