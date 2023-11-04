
import './love.css'
import { BsArrowRight } from 'react-icons/bs'


const Love = () => {


  return (
    <>
      <section id="love_part">
        <div className="container">

          <div className="common_text">
            <h4>SUB-HEADLINE</h4>
            <h5>love and compassion</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.</p>
            <a className="btn">Read more</a>
          </div>


          <div className="loveCards">
            {/* ---- love card start here ---- */}
            <div className="loveCard">
              <img src="../../../../src/assets/images/love_1.jpg" alt="love_1.jpg" />
            </div>
            {/* ---- love card end here ---- */}


            {/* ---- love card start here ---- */}
            <div className="loveCard Card_2">
              <img src="../../../../src/assets/images/love_2.jpg" alt="love_2.jpg" />
            </div>
            {/* ---- love card end here ---- */}


            {/* ---- love card start here ---- */}
            <div className="loveCard">
              <picture>
                <img src="../../../../src/assets/images/love_3.jpg" alt="love_3.jpg" />
              </picture>
            </div>
            {/* ---- love card end here ---- */}

          </div>

          <div className="common_text">
            <h4>our mission & vision</h4>
            <h5>celebrate WITH US</h5>
            <p className="text2_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore
              magna aliqua.</p>
            <a className="love_link">Read More <BsArrowRight className='i' /> </a>
          </div>

        </div>
      </section>
    </>
  )
}

export default Love
