function usePreventLeave() {
  const listener = (e) => {
    console.log(e);
    e.preventDefault();
    e.returnValue = "";
  };

  const protect = () => window.addEventListener("beforeunload", listener);
  const unprotect = () => window.removeEventListener("beforeunload", listener);

  return { protect, unprotect };
}

export default function PreventComponent() {
  const { protect, unprotect } = usePreventLeave();
  return (
    <div>
      <button onClick={protect}>protect</button>
      <button onClick={unprotect}>unprotect</button>
    </div>
  );
}
