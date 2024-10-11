import Header from "../components/header-component/header";
import HeroSection from "../components/hero-section/hero-section";
import Footer from "../components/footer-component/footer";
const contactPage=()=>{
  return(
   <main>
    <Header></Header>
    <HeroSection props='Contact Page'></HeroSection>
    <Footer></Footer>
   </main>
  )
}
export default contactPage
