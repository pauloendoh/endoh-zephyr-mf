import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { Counter } from "mf-remote/Counter";
import { HomePage } from "mf-remote/HomePage";
import ReactDOM from "react-dom/client";
import { myEmotionCache } from "../../shared/src/myEmotionCache";
import { myTheme } from "../../shared/src/myTheme";
import "./index.css";
import { MyAppShell } from "./MyAppShell/MyAppShell";

const App = () => (
  <MantineProvider theme={myTheme}>
    <MantineEmotionProvider cache={myEmotionCache}>
      <ColorSchemeScript defaultColorScheme="auto" />

      <MantineProvider stylesTransform={emotionTransform} theme={myTheme}>
        <MyAppShell />
      </MantineProvider>
    </MantineEmotionProvider>

    <Counter />
    <HomePage />
  </MantineProvider>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
