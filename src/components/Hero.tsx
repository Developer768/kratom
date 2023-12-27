import React from 'react'
import CustomButton from './CustomUI/CustomButton'

const Hero:React.FC = () => {
  return (
    <section className='hero-section relative py-[40px] md:py-[40px] lg:py-[50px] xl:py-[100px] 2xl:py-[140px] 3xl:py-[150px] 4xl:py-[170px] 4xl:h-[768px]'>
        <div className="content p-4 max-w">
            <h2 className="text-darkGreen font-salome text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[44px] 3xl:text-[56px] 4xl:text-[72px]">Want to Unlock Nature's Potential?</h2>
            <p className="font-dmSans text-black my-5 text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[22px] 4xl:text-[24px] max-w-[70%]">Try Kratom a path to Holistic wellness. Kratom is a natural herbal supplement derived  from the leaves of the Mitragyna speciose tree, which is native to  Southeast Asia.</p>
            <CustomButton variant={'default'} arrowed >Shop Now</CustomButton>
        </div>
        <img src="/assets/images/hero-img.png" alt="products" className='md:absolute lg:absolute xl:absolute 2xl:absolute 3xl:absolute 4xl:absolute sm:ml-auto sm:w-[90%]  w-[50%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%] md:-bottom-[35px] lg:-bottom-[40px] xl:-bottom-[60px] 2xl:-bottom-[80px] 3xl:-bottom-[100px] right-0 -bottom-[120px] z-50' />
    </section>
  )
}

export default Hero