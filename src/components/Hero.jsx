import { useEffect, useState } from 'react'
import { Plane } from './Plane'

const Hero = ({ scrollPosition }) => {

    const [backgroundScale, setBackgroundScale] = useState(9);

    useEffect(() => {
      if(window.innerWidth < 768){
        setBackgroundScale(7)
      }

    }, [backgroundScale])
    

    const parallaxStyles = {
        background: {
            transform: `translateY(${scrollPosition * 0.1}px) translateZ(-60px) scale(${backgroundScale})`,
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
        banner: {
             transform: `translateY(${scrollPosition * 0.1}px) translateZ(-12px) scale(2)`,
        }
}


    return (
        <section className="parallax">
            <div
                style={parallaxStyles.banner} 
                className='parallax__content absolute sm:top-[5%] w-full mx-auto flex flex-col xl:flex-row items-start z-10 flex-wrap grow '>
                <div className="flex-1 lg:mb-0">
                    <h1 className='font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[75px] leading-[110px] 2xl:leading-[160px] ml-2 md:ml-20'>
                        Rodrigo Alarcon
                    </h1>
                    <h3 className='ml-2 md:ml-20 cedarville-cursive-regular text-[40px] sm:text-[60px] text-white'>
                        Software Developer.
                    </h3>
                </div>
                <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
                    <div className='cedarville-cursive-regular font-bold text-[25px] sm:text-[33px] md:text-[36px] 2xl:text-[46px] sm:leading-[50px] md:leading-[57px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left'>
                        I love building meaningful software <br /> that connects people and ideas.
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
