
import './joinUs.css'
import { BsArrowRight } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { MdLocationSearching } from 'react-icons/md'
import src from "../../../../src/assets/images/joinUs_pic.jpg"



const JoinUs = () => {
  return (
    <>
      <section id="joinUs_part">
        <div className="container">

          <div className="common_text">
            <h4>Upcoming SERMONS</h4>
            <h5>join us and become part of something great</h5>
          </div>

          <div className="joinContents">

            <div className="Event">

              <div className="date">
                <h6>Upcoming Event</h6>
                <div className="dates">
                  <h4>20</h4>
                  <h3>JULY</h3>
                </div>
              </div>

              <h2>WATCH AND LISTEN TO OUR SERMONS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

              <div className="Event_dateTime">
                <BiTimeFive className='i' />
                <p>Friday 23:39 IST Saturday 11:20 ISD</p>
              </div>


              <div className="Event_dateTime">
                <MdLocationSearching className="i" />
                <p className="Event_address_p">No 233 Main St. New York, United States</p>
              </div>

              <button className="btn">Register</button>
            </div>

            <div className="image">
              <img src={src} alt="joinUs_pic.jpg" />
            </div>

          </div>

          <p className="view">View all Sermons <BsArrowRight className='i' /> </p>
        </div>

      </section>
    </>
  )
}

export default JoinUs
