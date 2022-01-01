import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import { loadProgressBar } from "axios-progress-bar";

import AppRoutes from "./components/pages/AppRoutes";
import NavBar from "./components/app/NavBar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "axios-progress-bar/dist/nprogress.css";

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

loadProgressBar();

function App() {
    return (
        <Provider store={store}>
            <ToastContainer position="top-right" autoClose={5000} theme="dark" />
            <NavBar />
            <div className="py-28">
                <AppRoutes />
            </div>
        </Provider>
    );
}

export default App;
