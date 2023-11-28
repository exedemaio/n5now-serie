import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";

import appSerieInstance from "./i18n";
//
// this is the "sole purpose" of this module
// it uses ReactDOM to render the <App> component into <div id="root"> in the HTML
//

ReactDOM.render(
  <I18nextProvider i18n={appSerieInstance}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);
