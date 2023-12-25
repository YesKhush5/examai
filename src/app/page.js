"use client"
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Pricing from "@/app/components/pricing";
import Testimonials from "@/app/components/testimonials";
import Faq from "@/app/components/faq";
import Commingsoon from "@/app/components/commingsoon";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-scroll space-y-12">
        <Navbar /> <br></br> <br></br> <br></br><br></br>
        <Hero /> <br></br> <br></br>
        <Pricing /> <br></br><br></br><br></br><br></br>
        <Testimonials /><br></br><br></br><br></br><br></br>
        <Faq /><br></br><br></br><br></br><br></br>
        <Commingsoon /><br></br><br></br><br></br><br></br>
        <Footer />
      </div>
    </>
  );
}
