import Card from 'react-bootstrap/Card';




export default function PobulerCard({ img, title ,text,icon,icon2 ,desc,desc2}){
    return(
        <>

        <div className='d-flex justify-content-center mx-5 mt-5 mb-5'>
                <Card style={{ width: '18rem', height:'23rem',top:'5rem' }}>
                    <Card.Img style={{height:'10rem'}} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='fw-bold' > {title}</Card.Title>
                        <Card.Text className='lead '>
                            {text}
                        </Card.Text>

                        <div className="d-flex justify-content-between mt-5">

                            <div className='mx-3'>
                                {icon}

                                {desc}
                            </div>

                            <div >
                                {icon2}
                                {desc2}
                            </div>
                        </div>
                        <hr />
                       
                    </Card.Body>
                   
                </Card>
        </div>
        </>
    )
}