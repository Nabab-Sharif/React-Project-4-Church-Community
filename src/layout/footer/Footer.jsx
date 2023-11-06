
import './footer.css'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import src from "../../../src/assets/images/footerLogo.png"



const Footer = () => {

  return (
    <>
      <footer id="footer_part">
        <div className="container">
          <div className="footer_contents">

            <div className="address">
              <img src={src} alt="footerLogo.png" />
              <p className="copy">© Copyright Finsweet 2022</p>
              <p>(480) 555-0103</p>
              <p className="ad">4517 Washington Ave. </p>
              <p>finsweet@example.com</p>
            </div>

            <div className="menu">
              <h4>Quicklinks</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Sermons</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Blog</a></li>

              </ul>
            </div>

            <div className="contact">
              <h4>Connect</h4>
              <div className="icon">
                <BsFacebook className='i' />
                <BsTwitter className='i' />
                <BsLinkedin className='i' />
              </div>
            </div>


            <div className="subscribe">
              <h2>Subscribe to get Latest Updates and News</h2>
              <div className="form">
                <input className="input" type="email" placeholder="Yourmail@gmail.com" />
                <button className="btn">Subscribe</button>
              </div>

            </div>

          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
