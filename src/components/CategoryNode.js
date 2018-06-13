import React from 'react';

class CategoryNode extends React.Component {

    render() {
        const {category} = this.props
        return (
            <li className="categoryNode">
                <span>{category.name}</span>
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