import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { myEmotionCache } from "@shared/myEmotionCache";
import { myTheme } from "@shared/myTheme";
import ReactDOM from "react-dom/client";
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
  </MantineProvider>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
