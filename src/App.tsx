import { ChevronUpIcon } from "@heroicons/react/outline"
import ChatUi from "./components/ChatUi";

const App = () => {
  return (
    <div className=' relative w-full h-screen  bg-white  '>
      <div className=" text-center text-xl h-full flex flex-col justify-center ">
        Click the robot button
        <br />
        <span className="font-bold">This webite is made Using React.js, TailwindCSS and HeadlessUI.</span>
        <br />
        <span className="text-lg ">HeadlessUI is made by Tailwindcss and it is used for transitions and dialog purpose in this project</span>
      </div>

      <ChatUi></ChatUi>
    </div>
  );
}

export default App;
