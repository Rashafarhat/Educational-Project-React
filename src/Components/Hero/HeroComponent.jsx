
import Button from 'react-bootstrap/Button';

export default function HeroComponent({title,des,icon}) {
    return (
        <>
        <div className='p-4'>
                <div className='fs-2 fw-bold '>
                    {title}
                </div>
                <div className='fs-4 lead mt-2 '>
                    {des}
                </div>

                <div className='mt-3 '>
                    <Button variant='primary' >Entroll now </Button>
                    <a style={{ color: 'black', }} className='mx-5 ' href='#'>{icon} What's Etech?</a>
                   
                </div>
                        
               
                
        </div>
           
        </>
    )
}