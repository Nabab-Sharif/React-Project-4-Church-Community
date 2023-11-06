
import './blog.css'


const Blog = () => {
  return (
    <>
      <section id="blog_part">
        <div className="container">

          <div className="common_text">
            <h4>Read our Blog</h4>
            <h5>SHARE, INSPIRE, INNOVATE</h5>
          </div>

          <div className="blog_cards">

            {/* ---- card start here ---- */}
            <div className="blog_card activeCard">
              <h5>Relationship</h5>
              <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <h4>By Mathew Johnson</h4>
              <h6>Tuesday 13 May, 2021</h6>
            </div>
            {/* ---- card end here ---- */}


            {/* ---- card start here ---- */}
            <div className="blog_card">
              <h5>Relationship</h5>
              <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <h4>By Mathew Johnson</h4>
              <h6>Tuesday 13 May, 2021</h6>
            </div>
            {/* ---- card end here ---- */}


            {/* ---- card start here ---- */}
            <div className="blog_card">
              <h5>Relationship</h5>
              <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <h4>By Mathew Johnson</h4>
              <h6>Tuesday 13 May, 2021</h6>
            </div>
            {/* ---- card end here ---- */}


            {/* ---- card start here ---- */}
            <div className="blog_card">
              <h5>Relationship</h5>
              <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <h4>By Mathew Johnson</h4>
              <h6>Tuesday 13 May, 2021</h6>
            </div>
            {/* ---- card end here ---- */}

          </div>


        </div>
      </section>
    </>
  )
}

export default Blog
