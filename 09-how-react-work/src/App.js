import { useState } from "react";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

// console.log(<DifferentContent />);
// console.log(DifferentContent());

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tabs-cover">
      <div className="tabs">
        <div>
          {content.map((_, i) => (
            <Tab num={i} key={i} activeTab={activeTab} onClick={setActiveTab} />
          ))}
          <Tab
            num={content.length}
            activeTab={activeTab}
            onClick={setActiveTab}
          />

          {activeTab < content.length ? (
            <TabContent
              item={content.at(activeTab)}
              key={content.at(activeTab).summary}
            />
          ) : (
            <DifferentContent />
          )}

          {/* {TabContent({ item: content.at(0) })} */}

          {/* <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
          <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
          <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
          <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
        </div>
 
        {activeTab <= 2 ? (
          <TabContent item={content.at(activeTab)} />
        ) : (
          <DifferentContent />
        )} */}
        </div>
      </div>
    </div>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [showContent, setShowContent] = useState(true);
  const [likes, setLike] = useState(0);

  function handleInc() {
    // setLike(likes + 1);
    setLike((likes) => likes + 1);
  }

  function handleUndo() {
    setShowContent(true);
    setLike(0);
  }

  function handleTripleInc() {
    //state update is asychronous setused function are batched together .

    // setLike(likes + 1);
    // setLike(likes + 1);
    // setLike(likes + 1);

    setLike((likes) => likes + 3);
  }
   
  //  timeout function are betched from react 18
  function handleUndoLatter() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showContent && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowContent((open) => !open)}>
          {showContent ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes}❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLatter}>Undo in 2s</button>
      </div>
    </div>
  );
}

function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}
