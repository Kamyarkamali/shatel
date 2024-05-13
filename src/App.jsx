import "./App.css";

import HomePage from "./components/templates/Home/HomePage";

// custom hook
import { changetitleName } from "./hook/useChangetitle";

function App() {
  changetitleName("تسک شاتل");
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
