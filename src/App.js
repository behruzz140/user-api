import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Table from "./components/Table/table";
import AddUser from "./components/AddUser/AddUser";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route path="/" element={<Table />}/>
<Route path="/adduser" element={<AddUser/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
