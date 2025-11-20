import '../../styles/components/landing/PopularItems.css'
const PopularItems = () => {
  const items = [
    { id: 1, name: 'Cheese Burger', location: 'Burger Arena', price: '$3.88', image: '🍔' },
    { id: 2, name: 'Toffe\'s Cake', location: 'Top Sticks', price: '$4.00', image: '🎂' },
    { id: 3, name: 'Dancake', location: 'Cake World', price: '$1.99', image: '🧁' },
    { id: 4, name: 'Crispy Sandwitch', location: 'Fastfood Dine', price: '$3.00', image: '🥪' },
    { id: 5, name: 'Thai Soup', location: 'Foody man', price: '$2.79', image: '🍲' },
  ]
  return (
    <section className="popular-items">
      <div className="popular-items-container">
        <h2 className="section-title">Popular items</h2>
        <div className="items-grid">
          {items.map(item => (
            <div key={item.id} className="item-card">
              <div className="item-image">
                <span className="item-emoji">{item.image}</span>
              </div>
              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-location">📍 {item.location}</p>
                <div className="item-footer">
                  <span className="item-price">{item.price}</span>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularItems

