import logo from './logo.svg';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import MyRouter from "./Component/MyRouter";
import {BrowserRouter} from "react-router-dom";
function App() {
 
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
      <MyRouter></MyRouter>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
