import "./App.css";
import TodoList from "./container/TodoList";

import { Route, Routes } from "react-router-dom/dist";
import Sigin from "./container/Sigin";
import SignUp from "./container/SignUp";
import FetchingProvider from "./context/FetchingData";

function App() {
  return (
    <>
      <FetchingProvider>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/signin" element={<Sigin />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </FetchingProvider>
    </>
  );
}

export default App;
