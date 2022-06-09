import "./App.css";
import BuscaInfo from "./components/BuscaInfo";
import Banner from "./components/Banner";
import { ContextProvider } from "./services/Context";
function App() {
  return (
    <ContextProvider>
      <div className="App">
        <BuscaInfo />
        <Banner />
      </div>
    </ContextProvider>
  );
}

export default App;
