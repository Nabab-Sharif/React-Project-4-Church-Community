
import './navbar.css'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineBars } from 'react-icons/ai'
import src from "../../../src/assets/images/logo.png"
import { Link, NavLink } from 'react-router-dom'



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

          {/* Sidebar Here */}
          <ul className="sidebar">
            <li className="hidebar" onClick={hideSidebar}>
              <Link>
                <AiOutlineClose />
              </Link>
            </li>

            <li>
              <NavLink to="">Home</NavLink>
            </li>

            <li>
              <NavLink to="relevant">About us</NavLink>
            </li>

            <li>
              <NavLink to="love">Sermon</NavLink>
            </li>

            <li>
              <NavLink to="benefits">Benefit</NavLink>
            </li>

            <li>
              <NavLink to="joinUs">join Us</NavLink>
            </li>

            <li>
              <NavLink to="visit">visit</NavLink>
            </li>

            <li>
              <NavLink to="blog">blog</NavLink>
            </li>

            <button className="btn"><a href="#">Contact us</a></button>
          </ul>


          {/* Nav item Here */}
          <ul className="items">

            <li>
              <img src={src} alt="logo.png" />
            </li>

            <li className="hideOnMobile">
              <NavLink to="">Home</NavLink>
            </li>

            <li className="hideOnMobile">
              <NavLink to="relevant">About</NavLink>
            </li>

            <li className="hideOnMobile">
              <NavLink to="love">Sermon</NavLink>
            </li>

            <li className="hideOnMobile">
              <NavLink to="benefits">Benefit</NavLink>
            </li>

            <li className="hideOnMobile">
              <NavLink to="joinUs">join</NavLink>
            </li>

            <li className="hideOnMobile">
              <NavLink to="visit">visit</NavLink>
            </li>

            <li className="hideOnMobile">
              <NavLink to="blog">blog</NavLink>
            </li>


            <li className="menu-button" onClick={showSidebar}><a href="#"><AiOutlineBars /></a></li>

            <a className=" btn hideOnMobile">Contact us</a>
          </ul>

        </div>

      </nav>
    </>
  )
}

export default Navbar
