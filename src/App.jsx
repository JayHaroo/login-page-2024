import { useState } from "react";
import "./App.css";
import bg from "./assets/office.jpg";
import { Button, Input } from "@material-tailwind/react";

function App() {
  return (
    <div className="flex h-screen">
      <div
        className="w-2/4 min-h-screen bg-black"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      ></div>

      <div className="w-2/4 flex items-center justify-center">
        <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex-col space-y-4">
            <div className="text-center font-custom text-[70px]">Hello!</div>
            <Input label="Username" />
            <Input label="Password" />
            
            <div className="pt-2 flex justify-center">
              <Button className="w-[150px] bg-green-900 mr-3">Login</Button>
              <Button className="w-[150px] bg-blue-900">Register</Button>
            </div>

          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
