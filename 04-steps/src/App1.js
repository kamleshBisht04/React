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
      {/* <Steps /> */}
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

              {/* <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        <div className={`${step >= 4 ? "active" : ""}`}>4</div> */}
            </div>

            <p className="message">
              Step {step} : {messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handlePevious}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

//  2 version

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
//     <div>
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

//               {/* <div className={`${step >= 1 ? "active" : ""}`}>1</div>
//         <div className={`${step >= 2 ? "active" : ""}`}>2</div>
//         <div className={`${step >= 3 ? "active" : ""}`}>3</div>
//         <div className={`${step >= 4 ? "active" : ""}`}>4</div> */}
//             </div>

//             <p className="message">
//               Step {step} : {messages[step - 1]}
//             </p>
//             <div className="buttons">
//               <button
//                 style={{ backgroundColor: "#7950f2", color: "#fff" }}
//                 onClick={handlePevious}
//               >
//                 Previous
//               </button>
//               <button
//                 style={{ backgroundColor: "#7950f2", color: "#fff" }}
//                 onClick={handleNext}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
