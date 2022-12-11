import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-4 my-3'>Write Your Email</h2>
            <form action="https://formsubmit.co/dfb0bc375d53b3dba8f1008e8fb49179
" method="POST">
                <input type="text" placeholder="name" name="name" className="input input-bordered input-primary w-full max-w-xs" required /><br />
                <input type="email" placeholder="Email" name="email" className="input input-bordered input-primary w-full max-w-xs mt-5" required /><br />
                <textarea name="message" placeholder='write Your Email' className='bg bg-white mt-5' id="" cols="42" rows="8"></textarea> <br />

                <input className='btn btn-primary mt-5' type="submit" value="Submit" />
            </form>

        </div>

    );
};

export default Contact;