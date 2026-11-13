
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="home-page">

                <section className="hero" id="home">
                    <div className="hero-content">
                        <p className="tagline">
                            WELCOME TO SHOPSPHERE
                        </p>

                        <h1>
                            Discover Your
                            <span> Perfect Style</span>
                            With Us.
                        </h1>

                        <p className="description">
                            Explore the latest trends, discover
                            quality products, and enjoy a seamless
                            online shopping experience.
                        </p>

                        <button
                            className="shop-btn"
                            onClick={() => navigate('/usersportal/products')}
                        >
                            Shop-Now
                        </button>

                        <div className="stats">
                            <div>
                                <h3>Quality</h3>
                                <p>Premium Products</p>
                            </div>

                            <div>
                                <h3>Style</h3>
                                <p>Latest Trends</p>
                            </div>

                            <div>
                                <h3>Trust</h3>
                                <p>Customer First</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="circle">
                            <div className="shopping-card">
                                <span className="bag">🛍️</span>
                                <h2>ShopSphere</h2>
                                <p>Everything you love, in one place.</p>
                                <div className="items">
                                    <span>👕</span>
                                    <span>🪎</span>
                                    <span>📱</span>
                                    <span>👗</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="categories" id="categories">
                    <p>EXPLORE OUR COLLECTION</p>
                    <h2>Shop By Category</h2>

                    <div className="category-list">
                        <div className="category">
                            <span>👕</span>
                            <h3>Men's Fashion</h3>
                        </div>

                        <div className="category">
                            <span>📱</span>
                            <h3>Electronics</h3>
                        </div>

                        <div className="category">
                            <span>🪎</span>
                            <h3>Jewellery</h3>
                        </div>

                        <div className="category">
                            <span>👗</span>
                            <h3>Women's Shopping</h3>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <h2>Shop<span>Sphere.</span></h2>
                    <p>Your style. Your choice. Your shopping destination.</p>
                    <p>© 2026 ShopSphere. All rights reserved.</p>
                </footer>

            </div>
        </>
    )
}

export default Home
