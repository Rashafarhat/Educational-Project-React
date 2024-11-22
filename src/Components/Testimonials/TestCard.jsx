import Card from 'react-bootstrap/Card';


export default function TestCard({ img, StudentName, text, Description }){
    return(
        <>
           <div  >
               
                    <Card style={{ width: '20rem', height: '15rem', top: '8rem' }}>
                       
                       <div className='d-flex justify-content-center p-4'>
                        <Card.Img style={{ height: '4rem', width: "4rem", borderRadius: "2rem" }} src={img} />
                        <Card.Title className='fw-bold pt-3 px-4' > {StudentName}</Card.Title>
                      
                       </div>
                    <Card.Text className='lead fs-5 p-2'>
                        {text}
                    </Card.Text>
                      
                    <Card.Body>
                        <Card.Subtitle>
                            {Description}
                        </Card.Subtitle>


                    </Card.Body>

                </Card>
           </div>

        </>
    )
}