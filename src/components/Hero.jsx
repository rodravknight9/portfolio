
import React from 'react'
import { Plane } from './Plane'

const Hero = ({ scrollPosition }) => {

    const parallaxStyles = {
        background: {
            transform: `translateY(${scrollPosition * 0.1}px) translateZ(-20px) scale(3)`,
        },
        bottom: {
            //transform: `translateY(${scrollPosition * 1}px) translateZ(0px) scale(1)`,
            zIndex: 2
        },
        upperleft: {
            transform: `translateY(${scrollPosition * 0.7}px) translateZ(-20px) scale(3)`,
        },
        leftcenter: {
            transform: `translateY(${scrollPosition * 0.05}px) translateZ(-20px) scale(3)`
        },
        upperright: {
            transform: `translateY(${scrollPosition * 0.5}px) translateZ(-10px) scale(2)`
        },
        // center: {
        //      transform: `translateY(${scrollPosition * 0.0001}px) translateZ(-19px) scale(3)`,
        //      zIndex: 5
        // },
        // rightcenter: {
        //      transform: `translateY(${scrollPosition * 0.0001}px) translateZ(-19px) scale(3)`,
        //      zIndex: 6
        // }
        banner: {
             transform: `translateY(${scrollPosition * 0.7}px) translateZ(-12px) scale(2)`,
        }
}

    console.log(scrollPosition)

    return (
        <section className="parallax">
            <div
                style={parallaxStyles.banner} 
                className='parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10'>
                <div className="flex-1 lg:mb-0">
                <h1 className='font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[80px] leading-[110px] 2xl:leading-[160px]'>
                    Rodrigo Alarcon
                </h1>
                {/* <Position /> */}
                </div>
                <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
                <div className='font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left'>
                    I love crafting <br/> captivating experiences for the digital world to savor.
                </div>
                </div>
            </div>

            <img className="parallax__background" src="./parallax/background.png" alt="" style={parallaxStyles.background}/>
            <img className="parallax__bottom" src="./parallax/bottom.png" alt="" style={parallaxStyles.bottom}/>
            <img className="parallax__center" src="./parallax/center.png" alt="" style={parallaxStyles.center}/>
            <img className="parallax__leftcenter" src="./parallax/leftcenter.png" alt="" style={parallaxStyles.leftcenter}/> 
            <img className="parallax__rightcenter" src="./parallax/rightcenter.png" alt="" style={parallaxStyles.rightcenter}/>
            <img className="parallax__upperleft" src="./parallax/upperleft.png" alt="" style={parallaxStyles.upperleft}/>
            <img className="parallax__upperright" src="./parallax/upperright.png" alt="" style={parallaxStyles.upperright}/>

            <div className='z-10 w-full h-screen absolute top-0 left-0 bg-transparent'>
                <Plane />
            </div>
        </section>
    )
}

export default Hero
