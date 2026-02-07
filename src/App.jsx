import "./App.css";
import { Navbar } from "./components/navbar";
import { RouteList } from "./Routes";


function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', position: 'relative'}}>
      <Navbar />
      <RouteList />
    </div>
  );
}

export default App;
