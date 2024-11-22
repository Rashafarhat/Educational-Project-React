

export default function Teach({img}){
    const item =['Global Impact','Flexible Schedule','Innovative Teaching Tools',
'Recognaition And Reputation'];
    const listitem= item.map((item)=> <li>{item}</li>)

    const item2 = ['Creative Freedom', 'Monetize Your Expertise',
        'Professional Development', 'Networking Opportunities']
    const listitem2 = item2.map((item2) => <li>{item2}</li>)

    return(
        <>
        <div className="  d-flex justify-content-center pt-5 pb-5">
            <div className="mx-5">
                <div className="w-75 fs-3 fw-bold">
                     If you are a certifide teacher then <div style={{color:"blue"}}> Become An Instructor</div> 
                </div>
                <div className="lead w-75">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi praesentium nostrum saepe laboriosam soluta maxime nobis. Aspernatur consequatur quaerat adipisci,
                    eum ipsum illo labore. Ipsam id nemo, 
                </div>

                    <div className="w-50 fs-3 mt-4 fw-bold">
                    Enjoy many perks
                </div>
                <div className="d-flex justify-content-start" >
                  <ul className="mt-2 mx-3 ">
                    {listitem}
                  </ul>

                        <ul className="mt-2 ">
                            {listitem2}
                        </ul>
                  
                </div>

                <div>
                        <button className="btn btn-primary mx-5 w-40">Become An Instructor</button>
                </div>
            </div>

                <div className="w-75 px-5 "  >
                    <img className="w-100 pr-4  mt-4" src={img}></img>
                </div>
        </div>

        </>
    )
}