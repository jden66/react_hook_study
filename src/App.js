import { useState } from "react";
import "./styles.css";

function useInput(initialValue, validator) {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const { value } = e.target;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
}

export default function App() {
  // const maxLen = (value) => value.length <= 10;
  const limitWord = (value) => !value.includes("@");
  const name = useInput("Mr.", limitWord);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input {...name} />
    </div>
  );
}
