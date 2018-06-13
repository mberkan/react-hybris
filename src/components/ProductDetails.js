import React from 'react';

import {getProduct} from '../services/CategoryService'

class ProductDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: null,
            loading: false,
            error: null
        };
    }

    fetchProduct(props) {
        getProduct(props.match.params.productCode)
            .then(res => res.json())
            .then(res => {
                    this.setState(
                        {
                            product: res,
                            loading: false
                        }
                    )
                },
                error => {
                    this.setState({error, loading: false})
                })
    }

    componentWillMount() {
        this.fetchProduct(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.fetchProduct(newProps);
    }

    render() {
        const {product, loading, error} = this.state;
        const {productCode} = this.props.match.params;
        console.log(product);
        const dispatchState = (state) => {
            if (state.loading) {
                return <span>Loading categories</span>
            } else if(state.product) {
                return <span>TODO</span>
            } else if(state.error) {
                return <span>Error loading products: {state.error}</span>
            } else {
                return <span>...</span>
            }
        }
        return (
            <div className="products">
                <h1>Product list for category {productCode}</h1>
                {dispatchState(this.state)}
            </div>
        );
    }
}

export default ProductDetails;