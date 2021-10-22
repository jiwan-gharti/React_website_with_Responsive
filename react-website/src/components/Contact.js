import React, { useState } from "react";


const Contact = () =>{
    
    const [data, setData] = useState({
        fullname :'',
        email : '',
        phoneno : '',
        message : ''
    });

    const InputEvent = (event) =>{
        const {name, value} = event.target;
        setData((preValue)=>{
            return {
                ...preValue,
                [name] : value,
            }
        })
    }
    const formSubmit = (e) =>{
        e.preventDefault()
        alert(`${data.fullname} \n ${data.email} \n ${data.phoneno} \n ${data.message}`)
    }
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="fullname" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value = {data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Full Name ..."
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value = {data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneno" className="form-label">Phone Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="phoneno"
                                    name="phoneno"
                                    value = {data.phoneno}
                                    onChange={InputEvent}
                                    placeholder="Phone no. ..."
                                />
                            </div>

                            <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                name="message"
                                value = {data.message}
                                onChange={InputEvent}
                            ></textarea>
                            </div>

                            <div>
                                <button type="submit" class="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;