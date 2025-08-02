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
  const [isCurOpen, setIsCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem
          num={i}
          title={el.title}
          // text={el.text}  // for children prop
          isCurOpen={isCurOpen}
          setIsCurOpen={setIsCurOpen}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        num={23}
        title="What is React ?"
        isCurOpen={isCurOpen}
        setIsCurOpen={setIsCurOpen}
      >
        <p>Allow React devlopers to :</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components resuable</li>
          <li>Place state efficienty</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, children, isCurOpen, setIsCurOpen }) {
  const isOpen = isCurOpen === num;
  function handleClick() {
    setIsCurOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? `open` : ""}`} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1} </p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
}

//====================================================
// +++++++++++++++++++++++++++++++++++++++++++++++++++
//====================================================

// import { useState } from "react";
// import "./index.css";

// const faqs = [
//   {
//     title: "Where are these chairs assembled?",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
//   },
//   {
//     title: "How long do I have to return my chair?",
//     text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
//   },
//   {
//     title: "Do you ship to countries outside the EU?",
//     text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
//   },
// ];

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
//       <p className="number">{num < 9 ? `0${num + 1}` : num + 1} </p>
//       <p className="title">{title}</p>
//       <p className="icon">{isOpen ? "-" : "+"}</p>
//       {isOpen && <p className="content-box">{text}</p>}
//     </div>
//   );
// }

//=====================================================
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//=====================================================

// import { useState } from "react";
// import "./index.css";

// const faqs = [
//   {
//     title: "Where are these chairs assembled?",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
//   },
//   {
//     title: "How long do I have to return my chair?",
//     text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
//   },
//   {
//     title: "Do you ship to countries outside the EU?",
//     text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
//   },
// ];

// export default function App() {
//   return (
//     <div>
//       <Accordion faqs={faqs} />
//     </div>
//   );
// }

// function Accordion({ faqs }) {
//   const [index, setIndex] = useState(null);

//   function handleClick(i) {
//     setIndex((previousIndex) => (previousIndex === i ? null : i));
//   }

//   return (
//     <div className="accordion">
//       {faqs.map((el, i) => (
//         <AccordionItem
//           key={i}
//           num={i}
//           title={el.title}
//           text={el.text}
//           isOpen={index === i}
//           onToggle={() => handleClick(i)}
//         />
//       ))}
//     </div>
//   );
// }

// function AccordionItem({ num, title, text, isOpen, onToggle }) {
//   return (
//     <div className={`item ${isOpen ? `open` : ""}`} onClick={onToggle}>
//       <p className="number">{num < 9 ? `0${num + 1}` : num + 1} </p>
//       <p className="title">{title}</p>
//       <p className="icon">{isOpen ? "-" : "+"}</p>
//       {isOpen && <p className="content-box">{text}</p>}
//     </div>
//   );
// }
