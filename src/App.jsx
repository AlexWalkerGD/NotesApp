import { Outlet } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
