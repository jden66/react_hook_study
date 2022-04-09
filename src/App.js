import { useState } from "react";
import "./styles.css";

/**
 * input의 상태를 관리하는 hook를 만든다.
 * @param {number} initialValue
 * @param {function} validator
 */
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

const sections = [
  {
    name: "section 1",
    context: "This is section 1"
  },
  {
    name: "section 2",
    context: "This is section 2"
  }
];
/**
 * tab의 상태를 반환하는 hook을 만든다.
 * @param {number} initialIndex
 * @param {Array} allTabs
 */
function useTabs(initialIndex, allTabs) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  if (!Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    setCurrentItem: setCurrentIndex
  };
}

export default function App() {
  // const maxLen = (value) => value.length <= 10;
  const limitWord = (value) => !value.includes("@");
  const name = useInput("Mr.", limitWord);

  const { currentItem, setCurrentItem } = useTabs(0, sections);
  return (
    <div className="App">
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input {...name} />
      </div>
      <br />
      <div>
        {sections.map((section, index) => (
          <button key={index} onClick={() => setCurrentItem(index)}>
            {section.name}
          </button>
        ))}
        <div>{currentItem.context}</div>
      </div>
    </div>
  );
}
