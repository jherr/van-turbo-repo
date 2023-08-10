/* @refresh reload */
import "styles/globals.css";
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

const root = document.getElementById("root");

render(() => <App />, root);
