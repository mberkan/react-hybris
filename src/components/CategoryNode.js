import React from 'react';
import {
    Link
} from 'react-router-dom';

class CategoryNode extends React.Component {

    render() {
        const {category} = this.props
        return (
            <li className="categoryNode">
                <Link to={`/category/${category.id}`}>{category.name}</Link>
                <ul>
                    {category.subcategories.map((subcategory) =>
                        <CategoryNode category={subcategory}/>
                    )}
                </ul>
            </li>
        )
    }
}

export default CategoryNode;