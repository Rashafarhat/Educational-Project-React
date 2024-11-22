import Hero from "../Components/Hero/Hero";
import NavBar from "../Components/All Components/Nav";
import img1 from "../assets/hero-img.png"
import img2 from "../assets/courses.png"
import img3 from "../assets/teacher.png"
import Courses from "../Components/Courses/Courses";
import Pobuler from "../Components/Populer/Populer";
import Teach from "../Components/Teach/Teach";
import Testimonitial from "../Components/Testimonials/Testimonitial";
import Get from "../Components/Get in touch/Get";
import FooterComponent from "../Components/All Components/Footer";



export default function HomePage(){
    return(
        <>
        
        <NavBar/>
           
           <Hero img={img1}/>
            <Courses img={img2} />
            <Pobuler/>
            <Teach img={img3}/>
            <Testimonitial/>
            <Get/>
           <FooterComponent/>

        </>
    )
}
