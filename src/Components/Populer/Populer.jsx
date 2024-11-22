
import PobulerCard from "./PobulerCard"
import img3 from "../../assets/Untitled.jpg"
import img4 from "../../assets/Untitled 1.jpg"
import img5 from "../../assets/Untitled2.jpg"

import { FaBookOpen, FaUser } from 'react-icons/fa';









export default function Pobuler(){
  
   
    return(
        <>

            <div className="w-100 mb-5 mt-5 bg-primary" style={{position:"relative", height:'120vh',color:"white"}} >
             
               <div style={{position:'absolute' ,left:'5rem',right:'5rem'}}>
                    <div className="text-center mt-5 fs-3 fw-bold">
                        Our Pobuler Courses
                    </div>
                    <div className="text-center mt-5 mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur aperiam odit beatae provident.
                        Natus vitae eligendi aspernatur architecto, sit quibusdam!
                    </div>
               </div>  <br/>

              <div className="mt-5 mb-5 d-flex justify-content-center ">
                  
                    <PobulerCard img={img3} text= 'Wep Design & Development'title='Web Design' icon={<FaBookOpen/>} icon2={<FaUser/>} desc="25 Clases" desc2=" 185 Students"
                     />


                    <PobulerCard img={img4} text="Wireframing & Prototyping " title='UI/UX Design' icon={<FaBookOpen />} icon2={<FaUser />} desc="8 Clases" desc2=" 400 Students" />


                    <PobulerCard img={img5} text='Python For Data science' title='Data Science' icon={<FaBookOpen />} icon2={<FaUser />} desc="18 Clases" desc2=" 160 Students" />

                    
              </div>

               
               
                



       </div>
            
        </>
    )
}