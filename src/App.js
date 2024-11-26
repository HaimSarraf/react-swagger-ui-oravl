import SwaggerDocs from "./components/SwaggerDocs";
import PetDetails from './components/PetDetails.js'
import "./App.css";

function App() {
  return (
    <div className="App">
      <PetDetails petId={1} />
      <SwaggerDocs />
    </div>
  );
}

export default App;
