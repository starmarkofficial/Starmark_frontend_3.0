

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/home/Home";
import NavBar from "./components/shared/navbar/NavBar";
import About from "./components/pages/About_us/About"
import JobDetails from "./components/shared/jobdetails/jobdetails";
import Footer from "./components/pages/footer/Footer";
import Contact from "./components/pages/Contact_us/contact";
import CompanyForm from "./components/pages/forms/companyform";
import JobPostForm from "./components/pages/forms/jobpost_form";




const router = createBrowserRouter([
  {
    path: "/",
    element:<><NavBar/> <Home/>

    </> ,
  },
  {
    path: "/About",
    element:<><NavBar/><About/><Footer/> 
    </> ,
  },
  {
    path: "/contact_us",
    element:<><NavBar/> <Contact/>

    </> ,
  },
  {
    path: "/companyform",
    element:<><NavBar/> <CompanyForm/><Footer/>

    </> ,
  },
  {
    path: "/jobpostform",
    element:<><NavBar/> <JobPostForm/><Footer/>

    </> ,
  },
  {
    path: "/jobdetails",
    element:<> <NavBar/><JobDetails     role= {"Software Developer"}
    functionalArea = { "IT Software - Application Programming, Maintenance"}
    ctc={"INR 3,00,000 - 4,00,000 PA."}
    experience={  "1 - 3 years"}
    minQualification={"B.Tech/B.E. in Computers, BCA in Computers, B.Sc in Computers"}
    openings={"2"}
    prefExperience={  "1 - 3 years"}
    prefEducation={"B.Tech/B.E. in Computers, BCA in Computers, B.Sc in Computers"}
    jobType={"Full Time, Permanent"}
    jobDescription={"hjkhjbhjb"}
    stateCity={"Delhi NCR, Gurgaon"}
    jobRole={"developer"}/>
    <Footer/>
    </> ,
  },

])
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
