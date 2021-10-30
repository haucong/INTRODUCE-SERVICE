import React, { useState } from 'react';

function Contact(props) {
    const [data, setData] = useState(
        {
            fullName: '',
            phoneNumber: '',
            Address: '',
            Message: '',
        }
    )

    const InputEvent = (event) => {
        const {name, value} = event.target
         
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert( `Hello ! my name ${data.fullName}, my phone number is ${data.phoneNumber} , my address is ${data.Address} and I want to say with you that ${data.Message}` );
    }

    return (
        <>
            <div className='my-5'> 
                <h1 className='text-center'>
                    Contact Us
                </h1>
                <div className='container contact_div'>
                    <div className='row'>
                        <div className='col-md-6 col-10 mx-auto'>
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name='fullName' value={data.fullName} onChange={InputEvent} placeholder="Fullname.."/>
              
                                </div>
                                 <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Phone number</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name='phoneNumber' value={data.phoneNumber} onChange={InputEvent} placeholder="Phone number.."/>
                                </div>
                                 <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name='Address' value={data.Address} onChange={InputEvent} placeholder="Address.."/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" name='Message' value={data.Message} onChange={InputEvent} rows="3"></textarea>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-secondary mb-3" >Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
}

export default Contact;