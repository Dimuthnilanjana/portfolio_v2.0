import { Footer, Navbar } from "@/components";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero2 from "@/components/hero2";
import React from 'react'

interface Props {
    children: React.ReactNode;
}



const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
             <Navbar/>
             <Hero2 />
           
            
            <Footer />
        </div>
    )
};

export default MarketingLayout
