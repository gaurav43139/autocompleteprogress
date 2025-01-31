import "./styles.css";
import AutoComplete from "./AutoComplete";

export default function App() {
  const data = ["gaurav", "gauri", "milk", "maggie"];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <AutoComplete dataaa={data} />
    </div>
  );
}
