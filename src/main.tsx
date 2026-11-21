
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  // Fonts are bundled with the site so no visitor data goes to Google Fonts.
  import "@fontsource/inter/400.css";
  import "@fontsource/inter/500.css";
  import "@fontsource/inter/600.css";
  import "@fontsource/cinzel/400.css";
  import "@fontsource/cinzel/500.css";
  import "@fontsource/cinzel/600.css";
  import "@fontsource/cinzel/700.css";
  import "@fontsource/cormorant-sc/600.css";
  import "@fontsource/cormorant-sc/700.css";
  import "./index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  