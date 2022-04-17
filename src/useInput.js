import { useState } from "react";

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

export default function InputComponent() {
  // const maxLen = (value) => value.length <= 10;
  const limitWord = (value) => !value.includes("@");
  const name = useInput("Mr.", limitWord);

  return <input {...name} />;
}
