
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddProduct = () => {
    let categories = [
        "men's clothing",
        "jewelery",
        "electronics",
        "women's clothing"
    ]

    let [newproduct, newProduct] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: {
            rate: "",
            count: ""
        }
    })

    let handleInput = (e) => {
        let key = e.target.name
        let val = e.target.value

        if (key === "rate" || key === "count") {
            newProduct({
                ...newproduct,
                rating: {
                    ...newproduct.rating,
                    [key]: val
                }
            })
        } else {
            newProduct({
                ...newproduct,
                [key]: val
            })
        }
    }

    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:4000/products`, newproduct)
            toast.success("product is added")
            
        } catch (error) {
            toast.error(`product is not added :${error}`)     
        }
    }

    return (
        <>
            <div className="add-product">
                <div className="formbox">
                    <h1>Add Product Details</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="inputfields">

                            <input
                                type="text"
                                placeholder="Enter Title"
                                onChange={handleInput}
                                name="title"
                                value={newproduct.title}
                                required
                            />

                            <input
                                type="number"
                                placeholder="Enter Price"
                                onChange={handleInput}
                                name="price"
                                value={newproduct.price}
                                required
                            />

                            <input
                                type="text"
                                placeholder="Enter Description"
                                onChange={handleInput}
                                name="description"
                                value={newproduct.description}
                                required
                            />

                            <select
                                name="category"
                                onChange={handleInput}
                                value={newproduct.category}
                                required
                            >
                                <option value="">Select Category</option>

                                {categories.map((Eleme, index) => {
                                    return (
                                        <option key={index} value={Eleme}>
                                            {Eleme}
                                        </option>
                                    )
                                })}
                            </select>

                            <input
                                type="text"
                                placeholder="Enter Image Url"
                                onChange={handleInput}
                                name="image"
                                value={newproduct.image}
                                required
                            />

                            <input
                                type="number"
                                placeholder="Enter Rating"
                                onChange={handleInput}
                                name="rate"
                                value={newproduct.rating.rate}
                                required
                                
                            />

                            <input
                                type="number"
                                placeholder="Enter Count"
                                onChange={handleInput}
                                name="count"
                                value={newproduct.rating.count}
                                required
                            />

                        </div>

                        <div>
                            <button type="submit">
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProduct
