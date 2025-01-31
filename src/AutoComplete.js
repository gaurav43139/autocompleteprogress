import { useState, useRef } from "react";
let index = 0;
function AutoComplete({ dataaa }) {
  console.log(dataaa, "hello");
  const dataa = ["gaurav", "gauri", "milk", "maggie"];

  const [input, setInput] = useState("");
  //const [realinput, setRealInput] = useState("");
  const [data, setData] = useState(dataa);
  //const [neww, setNeww] = useState([]);
  //const ref = useRef();
  //const [selected, setSelected] = useState(null);
  function handleChange(e) {
    setInput(e.target.value);
    if (e.target.value.length === 0) {
      setData(dataa);
      return;
    }
    setData(dataa.filter((item) => item.includes(e.target.value)));
  }

  function handleKeyPress(e) {
    console.log(e.key, "a");
    let val = e.key;

    if (val === "ArrowDown") {
      setInput(data[index]);
      if (index < data.length - 1) {
        index = index + 1;
      }
      //setData((prev) => prev[index]);
      console.log("down");
    } else if (val === "ArrowUp") {
      setInput(data[index]);
      if (index > 0) {
        index = index - 1;
      }

      console.log("up");
    }
  }

  return (
    <div>
      <div>
        <input
          type={"text"}
          value={input}
          placeholder={"Enter Text"}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyPress(e)}
          //ref={ref}
        />
      </div>

      <div>
        {data.length > 0 && (
          <div>
            {data.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default AutoComplete;
