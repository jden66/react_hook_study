import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  // if (typeof onClick !== "function") {
  //   return;
  // }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current != null) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};

const ClickComponent = () => {
  const sayHello = () => console.log("hello");
  const say = useClick(sayHello);
  return <h1 ref={say}>H1</h1>;
};

export default ClickComponent;
