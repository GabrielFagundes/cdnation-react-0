import React from 'react'

const RecipeItem = ({ recipe, searchString }) => (
    recipe ?
        <div className="col-sm-3 mt-4">
            <div className="card">
                <img className="card-img-top img-fluid" src={recipe.thumbnail} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{ getHighlightedText(searchString, recipe.title) }</h5>
                    <p className="card-text">
                        <strong>Ingredients: </strong>{ getHighlightedText(searchString, recipe.ingredients)}
                    </p>
                </div>
            </div>
        </div>
        : ''
)

const getHighlightedText = (higlight, string) => {
    const splittedString = string.split(new RegExp(`(${higlight})`, 'gi'));
    return <span>{
        splittedString.map((part, idx) => part.toLowerCase() === higlight.toLowerCase() ? <mark key={idx}>{part}</mark> : part)
    }</span>;
}

export default RecipeItem;