
import './banner.css'
import image from '../../../src/assets/images/banner.jpg'




const Banner = () => {

  return (
    <>

      <section id="banner_part" style={{ background: `url(${image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", padding: "228px  0" }}>
        <div className="container">
          <div className="banner_text">
            <h4>Welcome to our CHURCH</h4>
            <h2>Become a part of our community</h2>
            <button className="btn">Learn more</button>

            <div className="text">
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Banner
