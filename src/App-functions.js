import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const headingText = "Academy React News Bulletin";
  const today = new Date().toLocaleDateString();

  return (
    <div className="App">
            
      <header className="App-header">
        <h1>{headingText}</h1>
        <p>Today is {today}</p>
      </header>
      <News
        title="React is the best!"
        preamble="Lorem ipsum dolor..."
        date={today}
      />
      <News title="News with children" date="2020-03-01">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Vestibulum pretium sapien sit amet dui feugiat, nec tempus leo
          aliquam.
        </p>
        <p>Donec mattis lorem nec ante maximus, nec suscipit lacus rutrum.</p>
      </News>
    </div>
  );
}

// ---------------------------------
// CHECKPOINT
// ---------------------------------



function News(props) {
  const [showContent, setShowContent] = useState(false);

  let childrenElement = null;

  if (showContent) {
    childrenElement = <div className="NewsChildren">{props.children}</div>;
  }

  return (
    <div className="News">
      <h1 onClick={() => setShowContent(!showContent)}>{props.title}</h1>
      <p>{props.date}</p>

      {childrenElement}
    </div>
  );
}

export default App;
