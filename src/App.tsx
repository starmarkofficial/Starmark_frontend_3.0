

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/home/Home";
import NavBar from "./components/shared/navbar/NavBar";


const router = createBrowserRouter([
  {
    path: "/",
    element:<> <Home/>
    </> ,
  },
  
]);


function App() {


  return (
    <>
 <RouterProvider
      router={router}
  
    />
    </>
  )
}

export default App
