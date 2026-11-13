import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Products = () => {
    let [products, setProducts] = useState([])
    let fetchApi = async () => {
        let apiresp = await axios.get("http://localhost:4000/products")
        setProducts(apiresp.data);
    }
    useEffect(() => {
        fetchApi()
    }, [])

    const navigate = useNavigate()
    const location=useLocation()
   let bool= location.pathname.startsWith(`/adminportal`)
    let viewmore = (productId) => {
        bool ?
        navigate(`/adminportal/viewmore/${productId}`)
        : navigate(`/usersportal/viewmore/${productId}`);
    }

    let[filterproducts,setFilterProducts]=useState(products)
     let categoryArray=[
        "All",
        "men's clothing",
        "jewelery",
        "electronics",
        "women's clothing"
    ]
    let filtercategory=(e)=>{
        let categoryname=e.target.innerText
        if(categoryname==="All")
        {
            setFilterProducts(products)
        }
        else
        {
            let res=products.filter((elem)=>{
                return elem.category===categoryname
            })
            setFilterProducts(res)
        }
    }
    useEffect(()=>{
        setFilterProducts(products)
    },[products])

    return (
        <>
            <div className="products">
                {/* <div className="heading">Products</div> */}
                <div className="category">
                    {categoryArray.map((Eleme,index)=>{
                        return <button key={index} onClick={filtercategory}>
                            {Eleme}</button>
                    })}
                </div>
                <div className="cards">
                    {filterproducts.map((elem, index) => {
                        let { id, title, price, category, image, rating } = elem
                        return (
                            <div className="card" key={index}>
                                <div className="cat">{category}</div>
                                <img src={image} alt="NO-Image" />
                                <div className="title">{title}</div>
                                <div className="box">
                                    <div className="rating">
                                        ⭐ {rating?.rate ?? 0} ({rating?.count ?? 0})
                                    </div>
                                    <div className="price">price: {Math.floor(price * 95.12)}</div>
                                </div>
                                <button onClick={() => viewmore(id)}>View More</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Products
