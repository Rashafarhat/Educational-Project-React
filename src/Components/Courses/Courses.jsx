
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import CourseCard from './CourseCard';
import { useState } from 'react';
import { CiSearch,CiUser } from "react-icons/ci";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaBookOpen ,FaPlay } from "react-icons/fa";





export default function Courses({img}){
   

    return(

    <>
           <div >
                <div className="text-center mt-5 fs-3 fw-bold">
                    Search Courses
                </div>


                <div style={{ position: 'relative' }}>


                    <div style={{ position: 'absolute', right: '10rem', left: '15rem' }} className="w-50 mt-3">

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><CiSearch /></InputGroup.Text>
                            <Form.Control
                                placeholder="Search for over 50+ courses"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                    </div>

                    <div className='mt-3' style={{ position: 'absolute', right: '10rem' }} >
                        <Button variant='primary' >Search  </Button>
                    </div>
                </div>



                <div className='d-flex justify-content-center mt-5'>

                    <div className="w-50 mt-5" >
                        <img className="w-50 mx-5 mt-5" src={img}></img>
                    </div>

                    <div className='w-50 mt-5  '>
                        <div className='mt-2 mb-3  fs-4 d-flex justify-content-center'>
                            <div style={{ color: 'blue' }} className='mx-1'>
                                Benefits
                            </div>
                            From Our Online Learning
                        </div>
                        <CourseCard icon={<CiUser />} title='Online Degree' des='lorem lorem' />
                        <CourseCard icon={<RiGraduationCapFill />} title='Short Courses' des='lorem lorem' />

                        <CourseCard icon={<FaBookOpen />} title='Training From Experts' des='lorem lorem ' />

                        <CourseCard icon={<FaPlay />} title='1.5k+ Vedio Courses' des='lorem lorem' />

                    </div>

                </div>
           </div>

           
    </>
    )
}