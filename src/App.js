import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./styles.css";
import ClickComponent from "./useClick";
import ConfirmComponent from "./useConfirm";
import InputComponent from "./useInput";
import PreventComponent from "./usePreventLeave";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div style={{ display: "flex", padding: "1rem" }}>
          <nav>
            <NavLink to="/input" style={{ display: "block", margin: "1rem 0" }}>
              input
            </NavLink>
            <NavLink to="/click" style={{ display: "block", margin: "1rem 0" }}>
              click
            </NavLink>
            <NavLink
              to="/confirm"
              style={{ display: "block", margin: "1rem 0" }}
            >
              confirm
            </NavLink>
            <NavLink
              to="/prevent"
              style={{ display: "block", margin: "1rem 0" }}
            >
              prevent
            </NavLink>
          </nav>
        </div>
        <Routes>
          <Route path="/click" element={<ClickComponent />} />
          <Route path="/input" element={<InputComponent />} />
          <Route path="/confirm" element={<ConfirmComponent />} />
          <Route path="/prevent" element={<PreventComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
