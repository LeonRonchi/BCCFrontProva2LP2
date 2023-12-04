import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import TelaCadUser from "./telas/TelaCadUser";
import { Message } from "./message";
import TelaMenu from "./telas/TelaMenu";
import store from "./redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/user" element={<TelaCadUser />} />
            <Route path="/message" element={<Message />} />
            <Route path="/" element={<TelaMenu />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;