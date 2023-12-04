import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import TelaCadUser from "./telas/TelaCadUser";
import { Menssagem } from "./mensagem/message";
import TelaMenu from "./telas/TelaMenu";
import store from "./redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/user" element={<TelaCadUser />} />
            <Route path="/message" element={<Menssagem />} />
            <Route path="/" element={<TelaMenu />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;