function useConfirm(message, callback, rejecting) {
  if (!callback || typeof callback !== "function") {
    return;
  }
  if (rejecting && typeof rejecting !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejecting();
    }
  };
  return confirmAction;
}

export default function ConfirmComponent() {
  const deleteItem = () => console.log("delete item success");
  const abort = () => console.log("abort");
  const confirmDelete = useConfirm("Are you sure?", deleteItem, abort);
  return <button onClick={confirmDelete}>click please</button>;
}
