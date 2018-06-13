import React from 'react';

import {getCategories} from './../services/CategoryService';
import CategoryNode from './CategoryNode';

class CategoryTree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            loading: false,
            error: null
        };
    }


    componentWillMount() {
        getCategories().then(res => res.json()).then(
            res => {
                this.setState(
                    {
                        categories: res.subcategories,
                        loading: false
                    }
                )
            },
            error => {
                this.setState({error, loading: false})
            })
    }

    render() {
        const {categories, loading, error} = this.state;
        console.log(categories);
        return (
            <div className="category-tree">
                <h1>Category tree</h1>

                {(loading) ?
                    <span>Loading categories</span> :
                    (categories.length) ?
                        categories.map((category, i) =>
                            <CategoryNode category={category}/>
                        )
                        :
                        <span>0 categories loaded...</span>
                }
                {(error) ? <p>Error loading categories: {error}</p> : ''}
            </div>
        );
    }
}

export default CategoryTree;