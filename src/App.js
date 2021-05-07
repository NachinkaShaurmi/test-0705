import { Provider } from "react-redux";
import store from "./redux/store";
import 'antd/dist/antd.css';
import './App.css';
import Request from "./components/request/Request";
import Response from "./components/response/Response";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Request />
        <Response />
      </div>
    </Provider>
  );
}

export default App;
