import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "mobx-react";
import store from "./stores/TodosStore";
import { I18nextProvider } from "react-i18next";
import i18n from "./common/i18n";
const App = React.lazy(() => import("./App"));
ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
