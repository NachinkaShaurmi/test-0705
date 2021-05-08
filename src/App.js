import { Provider } from "react-redux";
import store from "./redux/store";
import 'antd/dist/antd.css';
import './App.css';
import RequestForm from "./components/requestForm/RequestForm";
import Response from "./components/response/Response";
import History from "./components/history/History";
import RequestView from "./components/requestView/RequestView";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RequestForm />
        <RequestView />
        <Response />
        <History />
      </div>
    </Provider>
  );
}

export default App;
