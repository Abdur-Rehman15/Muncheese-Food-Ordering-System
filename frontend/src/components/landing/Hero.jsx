import { Link } from 'react-router-dom'
import '../../styles/components/landing/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Are you starving?</h1>
          <p className="hero-subtitle">Within a few clicks, find meals that are accessible near you</p>
          
          <div className="hero-order-card">
            <div className="order-tabs">
              <button className="tab active">Delivery</button>
              <button className="tab">Pickup</button>
            </div>
            
            <div className="order-form">
              <div className="address-input">
                <span className="icon">📍</span>
                <input type="text" placeholder="Enter Your Address" />
              </div>
              <button className="find-food-btn">Find Food</button>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="food-image-placeholder">
            <span>🍕</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

