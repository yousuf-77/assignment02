import Header from "../components/header-component/header";
import HeroSection from "../components/hero-section/hero-section";
import Footer from "../components/footer-component/footer";
const servicesPage=()=>{
  return(
   <main>
      <Header></Header>
      <HeroSection props='Services Page'></HeroSection>
      <Footer></Footer>
   </main>
    
  )
}
export default servicesPage
