
import HeaderComponent from "./HeaderComponent";
import HeroComponent from "./HeroComponent";
import {FaPlay} from "react-icons/fa6"




export default function Hero({img}) {
   
    const description = [' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, temporibus commodi at tempore enim natus sunt quaerat totam consectetur corporis. ']
    return (
        <>
          
          <div className="w-100 d-flex align-item-center ">
            <div className="w-50">
                    <HeroComponent icon={<FaPlay />} title='develop your skills in a new and uniqe way' des={description}/>
            </div>

            <div className="w-50" >
                <img className="w-75 mx-5 mt-5" src={img}></img>
            </div>
          </div>

            <div className="bg-primary d-flex align-item-center">


              <div className="p-2 mx-5 fw-bold">
                Doulingo
              </div>
              
                    <div className="w-100 d-flex  p-2 ">
                      <HeaderComponent  text='Magic label' />
                      <HeaderComponent text='Microsoft' />
                      <HeaderComponent text='Codecove' />
                      <HeaderComponent text='Testing' />

                      </div>
            </div>
        </>
    )
}