import { Counter } from "mf-remote/Counter";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Counter />
    <div>Name: mf-host</div>
    <div>Framework: react-19</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
