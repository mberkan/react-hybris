import React from 'react';
import {
    Link
} from 'react-router-dom';
import {getProducts} from './../services/CategoryService';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: false,
            error: null
        };
    }

    fetchProducts(props) {
        getProducts(props.match.params.categoryId).then(res => res.json()).then(
            res => {
                this.setState(
                    {
                        products: res.products,
                        loading: false
                    }
                )
            },
            error => {
                this.setState({error, loading: false})
            })
    }

    componentWillMount() {
        this.fetchProducts(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.fetchProducts(newProps);
    }

    render() {
        const {products, loading, error} = this.state;
        const {categoryId} = this.props.match.params;
        console.log(products);
        return (
            <div className="products-list">
                <h1>Product list for category {categoryId}</h1>

                {(loading) ?
                    <span>Loading categories</span>
                    :
                    (products.length)
                        ?
                        products.map((product, i) =>
                            <li key={i}><Link to={`/product/${product.code}`}>{product.name}</Link></li>
                        )
                        :
                        <span>0 products loaded...</span>
                }
                {(error) ? <p>Error loading products: {error}</p> : ''}
            </div>
        );
    }
}

export default ProductList;