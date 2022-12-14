import React from 'react';
import cover from '../../../assets/cover.png'
import { TypeAnimation } from 'react-type-animation';



const TopBanner = () => {
    return (
        <div className='grid  mt-14 mb-12  leading-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className='flex justify-center items-center sm:mb-11'>
                <div className='text-left '>
                    <h1 className='text-start font-bold text-3xl mb-3'>Hey</h1>
                    {/* typical work */}
                    <TypeAnimation   
                        sequence={[
                            ` I'm`,1000,  
                            ` Mohammad Ismail Hossen Joney`,2000,
                            
                            () => {
                                console.log('Done typing!');  
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em',fontWeight:'bold' }}
                    />
                    <h1 className='text-start font-bold text-3xl mt-3'>I'm Front-end Developer</h1>
                    <p className='mt-8'>
                        I am experienced using
                        Html5,css3,javascript, React js,Node js, firebase and mongodb . I am also
                        familiar with BootsTrap, Tailwind and DaisyUI. I have the ability to design
                        and develop high quality codes and then test these codes to make sure
                        they work correctly.
                    </p>
                </div>
            </div>
            <div style={{ width: '60%', margin: '0 auto' }} className='flex justify-center items-center'>
                <img style={{ borderRadius: '50%', width: '90%', height: '90%' }} src={cover} alt="Joney" />
            </div>
        </div>
    );
};

export default TopBanner;