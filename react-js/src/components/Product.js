import React, { useEffect } from 'react'
import { ProductApi } from '../Api/ProductApi'
import { connect } from 'react-redux';

const Product = ({ ProductApi, ProductReducer, loading, error }) => {

    useEffect(() => {
        ProductApi();
    }, [])

    console.log(ProductReducer);

    return (
        <div>
            {
                loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <ul>
                        {
                            ProductReducer.data.products.map((products, idx) => (
                                <li key={idx}>
                                    {products.title}
                                    <br />
                                    {products.description}
                                    <br />
                                    Rs. {products.price}
                                </li>
                            ))
                        }
                    </ul>
                )
            }

        </div>
    )
}

const mapStateToProps = (state) => ({
    ProductReducer: state.ProductReducer,
})

export default connect(mapStateToProps, { ProductApi })(Product)
