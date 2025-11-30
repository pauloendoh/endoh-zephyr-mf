import ReactDOM from "react-dom/client";

import { TodoPage } from "./pages/TodoPage/TodoPage";

const App = () => (
  <div>
    <TodoPage />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
