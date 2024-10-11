import Header from "../components/header-component/header";
import HeroSection from "../components/hero-section/hero-section";
import Footer from "../components/footer-component/footer";
const AboutPage=()=>{
return(
  <main>
    <Header></Header>
    <HeroSection props='About Page'></HeroSection>
    <Footer></Footer>
  </main>
)
}
export default AboutPage