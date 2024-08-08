import React from "react";
import "../styles/testimonials.css";
import star from "../assets/star.svg";
import Ann from '../assets/Ann.jpg';
import Ann2 from '../assets/images.jpeg';
import Ann3 from '../assets/onl.jpg';
import Ann4 from '../assets/download.jpeg';

const Testimonials = () => {
  return (      
        <div id="testimonials-section">
          <h1 className="header">Testimonials</h1>
          <div className="testimonials">
            <div className="rating">
              <div className="stars">
                <img className="star" src={star} />
                <img className="star"  src={star} />
                <img className="star"  src={star} />
                <img className="star"  src={star} />
              </div>
              <div className="profileRate">
                <div><img className="profile" src={Ann} /></div>
                <div><h6 className="proName">Ann</h6></div>
              </div>
              <div className="comment">
                Little Lemon's Bruschetta is a symphony of flavors; perfectly ...
              </div>
            </div>
            <div className="rating">
              <div className="stars">
                <img className="star" src={star} />
                <img className="star"  src={star} />
                <img className="star"  src={star} />
                <img className="star"  src={star} />
              </div>
              <div className="profileRate">
                <div><img className="profile" src={Ann2} /></div>
                <div><h6 className="proName">Emi</h6></div>
              </div>
              <div className="comment">
                Little Lemon's Bruschetta is a symphony of flavors; perfectly ...
              </div>
            </div>            
            <div className="rating">
              <div className="stars">
                <img className="star" src={star} />
                <img className="star"  src={star} />
                <img className="star"  src={star} />
                <img className="star"  src={star} />
                <img className="star"  src={star} />
              </div>
              <div className="profileRate">
                <div><img className="profile" src={Ann3} /></div>
                <div><h6 className="proName">Sarah</h6></div>
              </div>
              <div className="comment">
                Little Lemon's Bruschetta is a symphony of flavors; perfectly ...
              </div>
            </div>           
            <div className="rating">
              <div className="stars">
                <img className="star" src={star} />
                <img className="star"  src={star} />
              </div>
              <div className="profileRate">
                <div><img className="profile" src={Ann4} /></div>
                <div><h6 className="proName">Ellen</h6></div>
              </div>
              <div className="comment">
              The Greek Salad at Little Lemon was delightfully fresh and ...
              </div>
            </div>
          </div>
        </div>
  );
};
export default Testimonials;
