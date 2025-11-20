import '../../styles/components/landing/CTA.css'

const CTA = () => {
  const stats = [
    { value: '1000+', label: 'Restaurants' },
    { value: '50K+', label: 'Happy Users' },
    { value: '30min', label: 'Avg Delivery' },
    { value: '24/7', label: 'Support' }
  ]

  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">Get started today!</h2>
            <p className="cta-description">
              Download our app and enjoy delicious meals delivered right to your doorstep. Available on iOS and Android.
            </p>
            <div className="cta-buttons">
              <button className="app-btn">
                <span className="btn-icon">📱</span>
                <div className="btn-text">
                  <span className="btn-label">Download on</span>
                  <span className="btn-name">App Store</span>
                </div>
              </button>
              <button className="app-btn">
                <span className="btn-icon">📱</span>
                <div className="btn-text">
                  <span className="btn-label">Get it on</span>
                  <span className="btn-name">Google Play</span>
                </div>
              </button>
            </div>
          </div>
          
          <div className="cta-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

