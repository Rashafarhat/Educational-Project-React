

import  Button  from 'react-bootstrap/Button'


export default function Get(){
    return(
        <>
        <div style={{position:'relative', width:'100%', height:'80vh'}}>
            <div className='bg-primary' style={{borderRadius:'2rem' ,color:"white" ,position:'absolute' ,right:'10rem', left:"10rem", top:'5rem'}}>
                    <div className="text-center mt-5 fs-3 fw-bold">
                        Get In Touch!
                    </div>
                    <div className='text-center p-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Ea ex a officiis. At, reprehenderit hic?
                    </div>
                    <div className='d-flex justify-content-center pt-2 pb-5'>
                        <input className='w-50' type='email' placeholder='Enter Your Email'></input>
                        <Button style={{ color: "blue" }} className='mx-2' variant='light'>Subscribe </Button>
                    </div>
            </div>

        </div>







            {/* <div style={{ width: '50rem', height: '30rem' }}>
                <div  className='d-flex justify-content-center mt-5 bg-primary'>
                    <input type='email' placeholder='Enter Your Email'></input>
                    <Button style={{ color: "blue" }} className='mx-2' variant='light'>Subscribe </Button>
                </div>
             </div> */}
            
        </>
    )
    
}