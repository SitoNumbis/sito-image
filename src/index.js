import { css } from "@emotion/react";
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import SitoImage from "./App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <StrictMode>
    <SitoImage
      sx={{ width: "250px", height: "250px" }}
      src="https://source.unsplash.com/random/800x600"
      alt="shimmer-example"
    />
  </StrictMode>
);
