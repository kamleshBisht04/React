import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Happy Employee and family😜",
  "Working hard agian😜",
  "Get Bonous ❤️",
  "Gotta permotion😜",
  "New Joining and perfect life😁",
  "Working hard for company 💢",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={2}>
        <p>Passing the prop</p>
        <p>😍🔷</p>
      </StepMessage>

      <StepMessage step={3}>
        <p>stepMessage is using the children prop</p>
        <p>🔷🎉</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const totalStep = messages.length;
  const stepArray = Array.from({ length: totalStep }, (_, i) => i + 1);

  function handleNext() {
    if (step < totalStep) setStep(step + 1);
  }

  function handlePevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleStep(num) {
    setStep(num);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      <div>
        {isOpen && (
          <div className="steps">
            <div className="numbers">
              {stepArray.map((num) => (
                <div
                  key={num}
                  className={step === num ? "active" : ""}
                  onClick={() => handleStep(num)}
                >
                  {num}
                </div>
              ))}
            </div>
            {/* children prop passing the steps */}
            <StepMessage step={step}>
              {messages[step - 1]}
              <div className="buttons">
                <Button
                  bgColor="#e7e7e7"
                  textColor="#333"
                  onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
                >
                  Learn how
                </Button>
              </div>
            </StepMessage>

            <div className="buttons">
              <Button
                bgColor="#7950f2"
                textColor="#fff"
                onClick={handlePevious}
              >
                <span>👈</span>
                Previous
              </Button>

              <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                Next
                <span>👉</span>
                <span>😍</span>
              </Button>

              {/* <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                <span>🎉</span>
                Party
                <span>🎉</span>
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step} :</h3>
      {children}
    </div>
  );
}

//========================================================
//========================================================

// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
//   "Happy Employee and family😜",
//   "Working hard agian😜",
//   "Get Bonous ❤️",
//   "Gotta permotion😜",
//   "New Joining and perfect life😁",
//   "Working hard for company 💢",
// ];

// export default function App() {
//   return (
//     <div>
//       <Steps />
//     </div>
//   );
// }

// function Steps() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   const totalStep = messages.length;
//   const stepArray = Array.from({ length: totalStep }, (_, i) => i + 1);

//   function handleNext() {
//     if (step < totalStep) setStep(step + 1);
//   }

//   function handlePevious() {
//     if (step > 1) setStep(step - 1);
//   }

//   function handleStep(num) {
//     setStep(num);
//   }

//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen(!isOpen)}>
//         &times;
//       </button>
//       <div>
//         {isOpen && (
//           <div className="steps">
//             <div className="numbers">
//               {stepArray.map((num) => (
//                 <div
//                   key={num}
//                   className={step === num ? "active" : ""}
//                   onClick={() => handleStep(num)}
//                 >
//                   {num}
//                 </div>
//               ))}
//             </div>

//             <p className="message">
//               Step {step} : {messages[step - 1]}
//             </p>
//             <div className="buttons">
//               <Button
//                 bgColor="#7950f2"
//                 textColor="#fff"
//                 onClick={handlePevious}
//                 text={"Previous"}
//                 emoji={"👈"}
//               />

//               <Button
//                 bgColor="#7950f2"
//                 textColor="#fff"
//                 onClick={handleNext}
//                 text={"Next"}
//                 emoji={"👉"}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// function Button({ bgColor, textColor, onClick, text, emoji }) {
//   return (
//     <button
//       style={{ backgroundColor: bgColor, color: textColor }}
//       onClick={onClick}
//     >
//       <span>{emoji}</span> {text}
//     </button>
//   );
// }
