import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { FormDeal } from "./pages/form.page";
import { Deals } from "./pages/deal.page";
import { Navigation } from "./components/navigation";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Deals />}></Route>
            <Route exact path="/form/:id?" element={<FormDeal />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
