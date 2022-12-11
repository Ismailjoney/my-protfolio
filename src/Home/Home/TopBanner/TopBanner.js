import React from 'react';
import cover from '../../../assets/cover.png'
const TopBanner = () => {
    return (
        <div className='grid  mt-14 mb-12  leading-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className='flex justify-center items-center sm:mb-11'>
                <div className='text-left p-14'>
                    <h1 className='text-start font-bold text-3xl'>Hey</h1>
                    <h1 className='text-start font-bold text-3xl tracking-widest'>I'm Mohammad Ismail Hossen Joney</h1>
                    <h1 className='text-start font-bold text-3xl'>I'm Front-end Developer</h1>
                    <p className='mt-8'>
                        I am experienced using
                        Html5,css3,javascript, React js,Node js, firebase and mongodb . I am also
                        familiar with BootsTrap, Tailwind and DaisyUI. I have the ability to design
                        and develop high quality codes and then test these codes to make sure
                        they work correctly.
                    </p>
                </div>
            </div>
            <div style={{ width: '50%', margin: '0 auto' }} className='flex justify-center items-center'>
                <img style={{ borderRadius: '60%',width:'100%' }} src={cover} alt="Joney" />
            </div>
        </div>
    );
};

export default TopBanner;