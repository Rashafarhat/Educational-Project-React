


import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function FooterComponent() {
    return (
        <>
           <div >
                <MDBFooter bgColor='light' className='pt-5 text-center text-lg-start text-muted'>


                    <section className='mt-5'>
                        <MDBContainer className='text-center text-md-start mt-5'>
                            <MDBRow  className='mt-3 justify-content-md-center'>
                                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>
                                        <MDBIcon icon="gem" className="me-3" />
                                        Etech
                                    </h6>
                                    <p>
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sit quae ullam.
                                    </p>
                                    <div className='d-flex justify-content-start text-start'>
                                        <div className='px-2 '><FaFacebook /></div>
                                        <div className='px-2'><FaWhatsapp /></div>
                                        <div className='px-2'> <FaTwitter /></div>
                                    </div>
                                </MDBCol>

                                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            About Us
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Services
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>

                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Community
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Testimonitial
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Help Center
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Tweet @ us
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Webinars
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Feedback
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Courses
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Become Teacher
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>

                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Servicses
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            All in one
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol md="2" lg="2" xl="3" className='mx-auto mb-md-0 mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>

                                    <p>
                                        <MDBIcon icon="envelope" className="me-3" />
                                        info@example.com
                                    </p>
                                    <p>
                                        <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                    </p>

                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>

                    <div className='text-center p-4 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                        Copyright: © 2023
                        <a className='text-reset fw-bold' href='#'>
                            Etech
                        </a>
                        <div> All rights reserved</div>
                    </div>
                </MDBFooter>

           </div>
          




         </>
           
               



           

       
    )
}







