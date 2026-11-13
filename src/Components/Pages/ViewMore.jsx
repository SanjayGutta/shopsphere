import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';

const ViewMore = () => {
    
        let params=useParams()
        let productId=params.id

        const location=useLocation()
       let bool= location.pathname.startsWith('/adminportal')
        let [product,setProduct]=useState({})
        let fetchSingleProduct= async()=>{
            const apiResp=await axios.get(`http://localhost:4000/products/${productId}`)
            setProduct(apiResp.data)
            
        }
        useEffect(()=>{
            fetchSingleProduct()
        },[])
        // console.log(product);

        let{id,title,price,description,category,image,rating}=product
        let navigate=useNavigate()
        let goback=()=>{
          bool ?
          navigate(`/adminportal/products/`)
          :
          navigate(`/usersportal/products/`)
        }
        let deleteProduct=async(id)=>{
          let bool=window.confirm("Do you want to delete this product")
          if(bool)
          {
            await axios.delete(`http://localhost:4000/products/${id}`)
            toast.error(`product is delete`)
            navigate(`/adminportal/products`)
          }
          else
          {
            toast.warn(`not delete`)
          }
        }
        
        let addtocart= async()=>{
          try {
            let bool=window.confirm(`add the product`)
            if(bool){
              await axios.post("http://localhost:4000/cartitems",product)
            toast.success(`Product is Added to Cart`)
            navigate(`/usersportal/cartitems`)
            }
            else
            {
              toast.warn(`product not add`)
            }
          } catch (error) {
            toast.error(`Product is Not Added:${error}`)
          }
        }
  return (
    <>
    <div className="view-more">
        <div className="card">
          <div className="left">
            <h3>{category}</h3>
            <img src={image} alt="" />
          </div>
          <div className="right">
            <button className='back' onClick={goback}>
              <CloseIcon/>
            </button>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div className="box">
              <div className="rating">{rating?.rate}⭐</div>
               {/* <div className="rating">{rating?.count}</div> */}
              <div className="price">Rs: {Math.floor(price * 96)}  </div>
            </div>
            {bool
            ?
          <button onClick={()=>deleteProduct(id)}>Delete</button>
        :
        <button className='cart' onClick={addtocart}>Add to cart</button>
        }
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewMore
