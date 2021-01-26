
import './App.css';
import Typical from 'react-typical'
import Photo from'./imgs/dp.png';
import SpeedyGrocers from './imgs/speedygrocers.png'
import Alqasswa from './imgs/alqasswa.png'
import Horizon from './imgs/horizon-jhssr.png'
import KK from './imgs/khushalkashmir.png'
import OAS from './imgs/oas.png'
import More from './imgs/more.png'


function App() {
  return (
    <div className="container">
      <div className="header row">
        {/* <h3 className="txtH1">Welcome to my portfolio...!</h3> */}
      <div className="col-md-8">
        <Typical
        steps={['Hello, 👋 I am Salman Qureshi', 1500, 'Welcome to my 👨‍💻 portfolio...!', 1500, 'Have Fun.... Explore my work🤭',2000]}
        loop={Infinity}
        wrapper="h1"
        className="txtH1"
      />
      </div>

      <div className="col-md-4 imgContainer">
      <div class="child">
      <img src={Photo} className="rounded-circle photo mx-auto border border-5 border-warning"  />
      </div>
      </div>

      </div>

      <div className="row mainArea pt-4">
        <div className="paddingSpace"></div>
        {/* card */}
        <h1 className="portfolioTxt"><i className="fas fa-briefcase briefCaseIcon"></i> Portfolios:</h1>
        <div className="col-md-4 d-flex align-items-stretch">

        <div className="card item-one mb-4" >
          <img src={SpeedyGrocers} class="card-img-top" alt="Salman's Portfolio Images" />
            <div className="card-body">
            <h5 className="card-title cardHeadingTxt">SpeedyGrocers</h5>
            <p className="card-text cardDetailTxt">
              Developed a full fledged e-commerce (website + Native apps). <br/> <br/>
              <b>Tech Used:</b> PHP, React Native, JavaScript &amp; more...
            </p>
            <center><a href="#" className="btn btn-danger cardBtn-one">Go somewhere</a></center>
          </div>
        </div>

        </div>
        {/* card */}
        <div className="col-md-4 d-flex align-items-stretch">

        <div className="card item-two mb-4" >
          <img src={Alqasswa} class="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title cardHeadingTxt">Office Management System</h5>
            <p className="card-text cardDetailTxt">
              Developed office management system for a travel agency <a href="https://manage.alqasswa.com">Al-Qasswa Tour &amp; Travels</a>,
              <br/> <br/>
              <b>Tech Used:</b> PHP, Bootstrap, JavaScript &amp; more...
            </p>
            <center><a href="#" className="btn btn-primary">Go somewhere</a></center>
          </div>
        </div>

        </div>
        {/* card */}
        <div className="col-md-4 d-flex align-items-stretch">

        <div className="card item-three mb-4" >
          <img src={Horizon} class="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title cardHeadingTxt">Journal Publishing Platform</h5>
            <p className="card-text cardDetailTxt">
              Developed a Journal Publishing platform for <a href="https://manage.alqasswa.com">Horizon Journal</a>
              <br/><br/>
              <b>Tech Used:</b> PHP, Bootstrap, JavaScript, jQuery &amp; more...
            </p>
            <center><a href="#" className="btn btn-primary">Go somewhere</a></center>
          </div>
        </div>

        </div>
        {/* card */}
        <div className="col-md-4 d-flex align-items-stretch">

        <div className="card item-four mb-4" >
          <img src={KK} class="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title cardHeadingTxt">Android App</h5>
            <p className="card-text cardDetailTxt">
             Developed an android app for Newspaper website, which converts RestAPI from WP to new post in the app
              <br/><br/>
              <b>Tech Used:</b>Java, Android Studio, WP-Rest API &amp; more...
            </p>
            <center><a target="_BLANK" href="https://play.google.com/store/apps/details?id=in.khushalkashmir.app&hl=en_IN&gl=US" className="btn btn-primary">View App</a></center>
          </div>
        </div>

        </div>
        {/* card */}
        <div className="col-md-4 d-flex align-items-stretch">

        <div className="card item-five mb-4" >
          <img src={OAS} class="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title cardHeadingTxt">Online Assisment System</h5>
            <p className="card-text cardDetailTxt">
            Developed a platform which evaluates a student based on the assisment given by the teacher.
              <br/><br/>
              <b>Tech Used:</b>PHP, Bootstrap, Apache2 &amp; more...
            </p>
            <center><a target="_BLANK" href="#" className="btn btn-primary">View App</a></center>
          </div>
        </div>

        </div>
        {/* card */}
        <div className="col-md-4 d-flex align-items-stretch">

        <div className="card item-six mb-4" >
          <img src={More} class="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title cardHeadingTxt">More</h5>
            <p className="card-text cardDetailTxt">
            Other Projects I've Developed
              <br/><br/>
              <b>Tech Used:</b>React, React Native, Python, Javascript &amp; more...
            </p>
            <center><a target="_BLANK" href="#" className="btn btn-primary">View App</a></center>
          </div>
        </div>

        </div>

      </div>

      <footer className="footer mt-2">
       <h3>Designed by 😆 <a href="https://isalman.xyz">Salman Qureshi</a></h3>
       <p>
       <a href="https://github.com/hotheadhacker" target="_BLANK"><i className="fab fa-github fa-2x mx-2 github"></i></a>
       <a href="https://twitter.com/salmanually" target="_BLANK"><i className="fab fa-twitter fa-2x mx-2 twitter"></i></a>
       <a href="https://instagram.com/salmanually" target="_BLANK"><i className="fab fa-instagram fa-2x mx-2 instagram"></i></a>
       <a href="https://isalman.xyz" target="_BLANK"><i className="fas fa-mouse-pointer fa-2x mx-2 website"></i></a>
       <a href="mailto:isalmanqureshi@gmail.com" target="_BLANK"><i className="fas fa-envelope fa-2x mx-2 email"></i></a>
       <a href="https://blog.isalman.xyz" target="_BLANK"><i className="fas fa-blog fa-2x mx-2 blog"></i></a>
       </p>
      </footer>
    </div>
  );
}

export default App;
