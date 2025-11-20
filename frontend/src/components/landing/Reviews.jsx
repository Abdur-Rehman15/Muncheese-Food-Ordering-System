import '../../styles/components/landing/Reviews.css'

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Lahore, Pakistan',
      rating: 5,
      comment: 'The food delivery is always on time and the quality is amazing! I\'ve been using Muncheese for 3 months now.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Karachi, Pakistan',
      rating: 5,
      comment: 'Best food delivery service I\'ve ever used. Wide variety of restaurants and super fast delivery.'
    },
    {
      id: 3,
      name: 'Emily Davis',
      location: 'Islamabad, Pakistan',
      rating: 5,
      comment: 'Love the app! Easy to use and the customer service is excellent. Highly recommend to everyone!'
    }
  ]

  return (
    <section className="reviews">
      <div className="reviews-container">
        <h2 className="section-title">What our customers say</h2>
        <p className="section-subtitle">
          Discover why thousands of people trust Muncheese for their daily food delivery
        </p>
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="review-comment">"{review.comment}"</p>
              <div className="review-author">
                <p className="review-name">{review.name}</p>
                <p className="review-location">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews




