import React from 'react';



const Contact = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-4 my-3'>Contact Me</h2>
            <form action="https://formsubmit.co/dfb0bc375d53b3dba8f1008e8fb49179" method="POST">
                <input type="text" placeholder="Your name" name="name" className="input input-bordered input-primary w-full max-w-xs" required /><br />
                <input type="email" placeholder="Example@gmail.com" name="email" className="input input-bordered input-primary w-full max-w-xs mt-5" required /><br />
                <textarea style={{ height: '170px' }} name="message" placeholder='write Your Email' className='input input-bordered input-primary w-full max-w-xs mt-5' cols="42" rows="18" id="" ></textarea> <br />
                <input className='btn btn-primary mt-5 px-16' type="submit" value="Send" />
            </form>
        </div>

    );
};

export default Contact;