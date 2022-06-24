import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { useParams } from 'react-router-dom';


export const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false)
    let componentMounted = true;




    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://sourabh-server.herokuapp.com/products")
            if (componentMounted) {

                setData(await response.clone().json());
                setFilter(await response.json())
                setLoading(false);
                // console.log(filter)
            }
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
                Loading..
            </>
        )
    }
    const filterProduct = (cat) => {
       const updatedList = data.filter((e) => e.category == cat);
        setFilter(updatedList)
    }
   const handleSort1=()=>{
   
        const sortCost= [...filter].sort((a,b)=>{
           return a.price>b.price?1:-1
        })
        setFilter(sortCost)
     
   }

   const handleSort2=()=>{
   
    const sortPrice= [...filter].sort((a,b)=>{
       return a.price<b.price?1:-1
    })
    setFilter(sortPrice)
 
}


    const ShowProducts = () => {
        return (
            <>
            <div className='d-flex justify-content-between '>
                <div className="buttons">
                    <p>Filter:</p>
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>jewellery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>




                </div>
                <div>
                   <p>Sort By Price:</p>
                <button className="btn btn-outline-dark me-2" onClick={handleSort1}>low to high</button>
                    <button className="btn btn-outline-dark me-2" onClick={handleSort2}>high to low</button>
                </div>
                </div>
                {filter.map((x) => {
                    return (

                        <div key={x._id} className='col-md-3 mt-3'  >

                            <div className='card h-100 text-center p-4'>

                                <img src={x.image} className="card-img-top" alt="..." height={350} />
                                <h4 className='card-title '>{x.title.substring(0, 16)}</h4>
                                <h6 className="card-text">Rs.{(x.price)}</h6>
                                <NavLink to={`products/${x._id}`} className="btn btn-primary">Buy Now</NavLink>
                                
                            </div>
                        </div>


                    )
                })}
            </>

        )

    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest product</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>

        </div>
    )
}


