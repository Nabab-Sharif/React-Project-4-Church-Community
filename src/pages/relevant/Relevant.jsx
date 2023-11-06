
import './relevant.css'
import { FaHandsHoldingChild, FaHandHoldingHeart } from 'react-icons/fa6'
import { GrBeacon } from 'react-icons/gr'



const Relevant = () => {
  return (
    <>

      <section id="relevantCard_part">
        <div className="container">

          <div className="common_text">
            <h4>sub-headline</h4>
            <h5>a church that relevant</h5>
          </div>

          <div className="cards">

            {/* ------ card start here ------- */}
            <div className="card">
              <div className="icon">
                <FaHandsHoldingChild className="i" />
              </div>
              <h3>About us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            {/* ------ card end here ------- */}


            {/* ------ card start here ------- */}
            <div className="card">
              <div className="icon">
                <GrBeacon />
              </div>
              <h3>Get involved</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            {/* ------ card end here ------- */}


            {/* ------ card start here ------- */}
            <div className="card">
              <div className="icon">
                <FaHandHoldingHeart />
              </div>
              <h3>Giving back</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            {/* ------ card end here ------- */}


          </div>

        </div>
      </section>



    </>
  )
}

export default Relevant
