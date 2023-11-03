import Banner from './component/section/banner/Banner'
import Benefit from './component/section/benefit/Benefit';
import Blog from './component/section/blog/Blog';
import Footer from './component/section/footer/Footer';
import JoinUs from './component/section/joinUs/JoinUs';
import Love from './component/section/love/Love';
import Navbar from './component/section/navbar/Navbar'
import Relevant from './component/section/relevant/Relevant';
import Visit from './component/section/visit/Visit';



const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Relevant />
      <Love />
      <Benefit />
      <JoinUs />
      <Visit />
      <Blog />
      <Footer />
    </>
  )
}

export default App
