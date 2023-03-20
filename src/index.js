import  ReactDOM  from "react-dom/client";
import App from "./app";

const root=document.querySelector("#root")

const createRoot=ReactDOM.createRoot(root)

createRoot.render(<App />)