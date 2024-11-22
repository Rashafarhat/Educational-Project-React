import { useState } from "react";
import TestCard from "./TestCard";
import Simg1 from "../../assets/testimonials-1.jpg"
import Simg2 from "../../assets/testimonials-2.jpg"
import Simg3 from "../../assets/testimonials-3.jpg"


export default function Testimonitial(){
    const data = [
        { img:Simg1,
          StudentName:" Jamos Johnson",
            text:"Web developer",
            Description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perspiciatis."

        },
        {
            img: Simg2,
            StudentName: "Emily Chen",
            text: "UI/UX desiner",
            Description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perspiciatis."

        }, 
        {
            img: Simg3,
            StudentName: "Alexa Rodriguez",
            text: "Web developer",
            Description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perspiciatis."

        },
    ]
   
    return(
    
        <>
             <div className="bg-primary" style={{height:"100vh"}}>
                <div style={{ position: "relative" , color:'white',top:'2rem'}}>
                    <div className="text-center mt-5 fs-3 fw-bold">
                        Student's Testimonitals
                    </div>
                    <div className="text center " style={{ position: "absolute", right: '8rem', left: '8rem', top: '3rem' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deleniti odio quo repellat distinctio dignissimos maxime,
                        inventore tempore optio perferendis laborum atque amet consectetur corrupti laboriosam fugiat dolorem cumque dicta aperiam libero est sint velit nisi nobis.
                         Harum, veritatis quas?
                    </div>
                </div>



                <div className="d-flex justify-content-around p-5">
                    {
                        data.map((e, i) => {
                            return (
                                <>
                                    <TestCard img={e.img} StudentName={e.StudentName} text={e.text} Description={e.Description} />
                                </>
                            )
                        })
                    }
                </div>

             </div>
        </>
    )
}