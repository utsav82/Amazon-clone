import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouterTemp from "./RouterTemp";
// import Header from "./Components/Pages/Home/Header";

import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { useStateValue } from "./Context/StateProvider.js";
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, []);
  useEffect(() => {
    let basket = window.localStorage.getItem("basket");
    if (basket === null) {
      basket = [];
    } else {
      basket = JSON.parse(basket);
    }
    dispatch({
      type: "SET_BASKET",
      payload: basket,
    });
  }, [dispatch]);

  return (
    <div>
      <Router>
        <div className="App">
          {/* <Header></Header> */}
          <RouterTemp></RouterTemp>
        </div>
      </Router>
    </div>
  );
}

export default App;
