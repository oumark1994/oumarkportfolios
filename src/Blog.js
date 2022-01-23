import React from "react";
import "./blog.css";
import Html from './img/htmlcss.png';
import Javascript from './img/javascript.jfif';
import Bootstrap from './img/boo.jfif';
import Reacty from './img/reac.jfif';
import Nodejs from './img/nodejs.jfif';
import PHP from './img/PHP.png';
import Laravel from './img/Laravel.jfif';
import Wordpress from './img/wordpress.png';
import Python from './img/python.jfif';
import Django from './img/django.png';

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h3 className="heading">My Skills</h3>
        <p className="heading p__color">
          My technical skills and expertise
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3" style={{height:'250px',width:'500px'}}>
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Html} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Html/Css</h5>
                         <h4 className="project__text">90%</h4>
                       </div>
                 </div>
              </div>

              <div className="col__3"  style={{height:'250px',width:'500px'}}>
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Javascript} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Javascript</h5>
                         <h4 className="project__text">85%</h4>
                       </div>
                 </div>
              </div>

              <div className="col__3"  style={{height:'250px',width:'500px'}}>
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Bootstrap} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Bootstrap</h5>
                         <h4 className="project__text">80%</h4>
                       </div>
                 </div>
              </div>
              <div className="col__3"  style={{height:'250px',width:'500px'}}>
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Reacty} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Reactjs</h5>
                         <h4 className="project__text">88%</h4>
                       </div>
                 </div>
              </div>
              <div className="col__3"  style={{height:'250px',width:'500px'}}>
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Nodejs} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Nodejs</h5>
                         <h4 className="project__text">80%</h4>
                       </div>
                 </div>
              </div>
              <div className="col__3"  style={{height:'250px',width:'500px'}}>
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={PHP} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Php</h5>
                         <h4 className="project__text">90%</h4>
                       </div>
                 </div>
              </div>
              <div className="col__3"  style={{height:'250px',width:'500px'}}>
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Wordpress} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Wordpress</h5>
                         <h4 className="project__text">90%</h4>
                       </div>
                 </div>
              </div>
              <div className="col__3"  style={{height:'250px',width:'500px'}}>
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Python} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Python</h5>
                         <h4 className="project__text">70%</h4>
                       </div>
                 </div>
              </div>
              <div className="col__3"  style={{height:'250px',width:'500px'}}>
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Django} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Django</h5>
                         <h4 className="project__text">70%</h4>
                       </div>
                 </div>
              </div>
       

          </div>
      </div>
    </div>
  );
}

export default Blog;
