import { useState } from 'react';
// import './App.css';
import Editor from './components/Editor';
import LangSelector from './components/LangSelector';
import ThemeSelector from './components/ThemeSelector';
// import "./App.css";
import "codemirror/lib/codemirror.css";

// import "codemirror/mode/";
function App() {
  const [lang, setLang] = useState("javascript");
  const [theme, setTheme] = useState("material");
  const [langValue, setLangValue] = useState("");
  return (
    <div className="App">
      <div className='selectors'>
        <div>
          <div>
            Language:
          </div>
          <LangSelector setLang={ setLang }></LangSelector>
        </div>
        <div>
          <div>
            Themes:
          </div>
          <ThemeSelector setTheme={ setTheme }></ThemeSelector>
        </div>
      </div>
      <div className='pane pane-top'>
        <Editor
          mode={ lang }
          value={ langValue }
          onChange={ setLangValue }
          theme={ theme }
        ></Editor>
        <div className='code-output-window'>
          <div className='code-output-window-title'>Code Output Window</div>
          <div className='code-output-window-results'> >>Hello World</div>
        </div>
      </div>
    </div>
  );
}

export default App;
