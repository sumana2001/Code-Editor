import './App.css';
import AceEditor from "react-ace-editor";
import 'brace/mode/c_cpp';
import 'brace/theme/terminal'

function App() {
  return(
    <div className="App">
      <AceEditor className="editor" mode="c_cpp" theme="terminal"/>
    </div>
  );
}

export default App;