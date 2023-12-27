import React from 'react'
import CustomButton from './CustomUI/CustomButton'
import Products from './Products';


type Props = {
    image: string;
    name: string;
    desc: string;
    price: string;
    link: string;
  }[];

const FeaturedProducts:React.FC = () => {
    const products:Props = [
        {
            image:"/assets/images/kratom-capsules-prod.png",
            name:"Kratom Capsules",
            desc:"(500 Count)",
            price:"89.99",
            link:"/test"
        },
        {
            image:"/assets/images/hush-kratom-prod.png",
            name:"Hush Kratom K Tropix",
            desc:"(Energy) Capsules (2 Pack)",
            price:"14.99",
            link:"#"
        },
        {
            image:"/assets/images/mit-prod.png",
            name:"MIT 45",
            desc:"Kratom Capsule 2PK",
            price:"29.99",
            link:"#"
        },
        {
            image:"/assets/images/bumblebee-prod.png",
            name:"Bumblebee Kratom Capsule 500mg",
            desc:"(1000 Count)",
            price:"75.99",
            link:"#"
        },
    ]
  return (
    <section className='py-[40px]'>
        <div className="max-w">
            <div className="title border-b border-b-black flex items-center flex-wrap justify-between ">
            <h2 className="section-heading salome-small text-black mb-[20px]">
                Kratom Capsules
            </h2>
            <CustomButton arrowed variant={'blackOutline'} className='mb-[20px]'>Show All</CustomButton>
            </div>
            <div className="products flex items-center flex-wrap justify-center gap-5 py-[50px]">
                {
                    products.map((prod)=>(
                        <Products name={prod.name} desc={prod.desc} image={prod.image} link={prod.link} price={prod.price}  />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts