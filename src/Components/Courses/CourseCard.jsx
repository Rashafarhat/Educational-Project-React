




export default function CourseCard({icon,title,des}){
    return(
        <>

            <div className="d-flex justify-content-start ">
                <div  className="p-3 fs-3 " >
                 
                        {icon}
                   
                </div>

                 <div className="text-center mx-5">
                    <div className=" fw-bold">
                        {title}
                    </div>

                    <div className="lead text-center">
                        {des}
                    </div>
                 </div>

            </div>
        </>
    )
}