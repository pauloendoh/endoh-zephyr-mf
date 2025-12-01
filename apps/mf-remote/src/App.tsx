import ReactDOM from "react-dom/client";

import { MantineProvider } from "@mantine/core";
import { TodoPage } from "./pages/TodoPage/TodoPage";

const App = () => (
  <MantineProvider>
    <TodoPage />
  </MantineProvider>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
