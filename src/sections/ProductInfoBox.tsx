import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductAPI } from '../models/productModels'
import { currencyFormatter } from '../utilities/currencyFormatter'

interface IProductInfoBox{
    product: ProductAPI
    products: ProductAPI[]
}

const ProductInfoBox: React.FC <IProductInfoBox> = ( {product, products} ) => {

    const id = useParams().id
    const parseId = id !== undefined ? id : "";

    return (
        <section className='product-info-box'>
            <h3 className='d-flex justify-content-center' style={{ marginTop: "100px" }}>Update Product</h3>
            <div className='container'>
                <div className='info-box'>
                    <p id="current-product">Current Information
                        {
                            products.filter(product => product.id === parseId).map(filteredProduct => (
                            <span key={filteredProduct.id}>
                                id: {filteredProduct.id}
                            </span>
                            ))
                        }
                    </p>
                    <div className="content-holder">
                        <div className='d-flex'>
                            <div className='img-holder'>
                                {
                                    products.filter(product => product.id === parseId).map(filteredProduct => (
                                        <img key={filteredProduct.id} src={filteredProduct.imageName} />
                                    ))
                                }
                            </div>
                            <div className='text-holder'>
                                <span>Product name:</span>
                                {
                                    products.filter(product => product.id === parseId).map(filteredProduct => (
                                    <h3 key={filteredProduct.id}>
                                        {filteredProduct.name}
                                    </h3>
                                    ))
                                }
                                <span>Category:</span>
                                {
                                    products.filter(product => product.id === parseId).map(filteredProduct => (
                                    <h3 key={filteredProduct.id}>
                                        {filteredProduct.category}
                                    </h3>
                                    ))
                                }
                                <span>Price:</span>
                                {
                                    products.filter(product => product.id === parseId).map(filteredProduct => (
                                    <h3 key={filteredProduct.id}>{currencyFormatter(filteredProduct.price)}</h3>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductInfoBox