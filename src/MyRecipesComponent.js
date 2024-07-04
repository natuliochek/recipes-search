// function MyRecipesComponent ({calories, label, image, ingredients, url}) {

function MyRecipesComponent ({calories, label, image, ingredients}) {
    return(
        <div>
            <div className='container'>
                <h2>{ label }</h2>
            </div>

            {/* <div className='container'>
                <button type="button" onClick={(e)=> {
                    e.preventDefault();
                    window.location.href={url};
                }}
                >way to prepare</button>
            </div> */}

            <div className='container url'>
                <img src={ image } alt="dish" />
            </div>

            <div className='container'>
                <h3>{ calories.toFixed() } кал</h3>
            </div>

                <ul className="container">
                    { ingredients.map(element => (
                        <li>
                            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/checked--v1.png" alt="checked--v1"/>
                            --- { element }</li>
                    ))}
                    
                </ul>
            
        </div>
    )
}

export default MyRecipesComponent;