import { Route, Routes } from "react-router-dom";
import "./App.css";
import Adduser from "./FU/main_compo/Adduser";
import Edituser from "./FU/main_compo/Edituser";
import UserData from "./FU/main_compo/UserData";


function App() {
  return (
    <>
      <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center text-3xl capitalize font-light m-3 md:m-8">
          redux toolkit card update
        </h1>
        <Routes>
          <Route path="/" element={ <UserData />} />
          <Route path="/add-user" element={ <Adduser />} />
          <Route path="/edit-user/:id" element={ <Edituser />} />
        </Routes>
       
      </div>
    </>
  );
}

export default App;
