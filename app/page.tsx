import Header from './components/header-component/header';
import HeroSection from "./components/hero-section/hero-section";
import Footer from "./components/footer-component/footer"
const homePage=()=>{
return (
  <main>
    <Header></Header>
    <HeroSection props='Home Page'></HeroSection>
    <Footer></Footer>
  </main>
)  
}
export default homePage