
import './navbar.css'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineBars } from 'react-icons/ai'
import src from "../../../../src/assets/images/logo.png"



const Navbar = () => {

  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }

  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }



  return (
    <>
      <nav>
        <div className="container">

          <ul className="sidebar">
            <li className="hidebar" onClick={hideSidebar}><a href="#"> <AiOutlineClose /> </a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Sermon</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Blog</a></li>
            <button className="btn"><a href="#">Contact us</a></button>
          </ul>


          <ul className="items">

            <li><a href="#">
              <img src={src} alt="logo.png" />
            </a></li>
            <li className="hideOnMobile"><a href="#">Home</a></li>
            <li className="hideOnMobile"><a href="#">About us</a></li>
            <li className="hideOnMobile"><a href="#">Sermon</a></li>
            <li className="hideOnMobile"><a href="#">Blog</a></li>

            <li className="menu-button" onClick={showSidebar}><a href="#"><AiOutlineBars /></a></li>

            <a className=" btn hideOnMobile">Contact us</a>
          </ul>

        </div>

      </nav>
    </>
  )
}

export default Navbar
