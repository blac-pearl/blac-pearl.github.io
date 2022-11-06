import Linktree from "./Linktree";
import { BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./Contact";

const App = () => {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Linktree />} />
      <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;