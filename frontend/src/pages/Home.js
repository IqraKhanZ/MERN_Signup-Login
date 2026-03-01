import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:8080/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="home-wrapper">
            <div className="home-container">
                <div className="home-header">
                    <h1 className="welcome-title">Welcome {loggedInUser}!</h1>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
                <div className="products-section">
                    <h2 className="products-title">Available Products</h2>
                    <div className="products-grid">
                        {
                            products && products?.map((item, index) => (
                                <div key={index} className="product-card">
                                    <span className="product-name">{item.name}</span>
                                    <span className="product-price">${item.price}</span>
                                </div>
                            ))
                        }
                        {(!products || products.length === 0) && (
                            <div className="loading">Loading products...</div>
                        )}
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Home