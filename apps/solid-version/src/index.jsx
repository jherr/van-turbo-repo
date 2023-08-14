/* @refresh reload */
import "styles/globals.css";
import "styles/theme.css";

import { render } from "solid-js/web";

import App from "./App";

const root = document.getElementById("root");

render(() => <App />, root);
