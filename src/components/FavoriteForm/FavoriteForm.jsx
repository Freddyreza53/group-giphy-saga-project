
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function FavoriteForm() {

    const categoryList = useSelector(store => store.giphyCategoryList)
    const dispatch = useDispatch();

    const [newCategory, setNewCategory] = useState('');
    const giphyFavoriteReducer = useSelector(store => store.giphyFavoriteList);

    useEffect(() => {
        dispatch({
            type: 'FETCH_CATEGORIES'
        })
        dispatch({ 
            type: 'GET_FAVORITES' 
        })
    }, []);

    const saveCategory = () => {
        dispatch({
            type: 'SET_CATEGORY',
            payload: newCategory
        })
    }

    return (
        <div>
            <h1>favoriting happens here</h1>

            <div>
                {giphyFavoriteReducer.map((favorite) => {
                    return (
                        <div>
                            <img key={favorite.id} src={favorite.url}/> 
                            <label htmlFor="categories">Choose a category:</label>
                            <select id="categories" name="categories" onChange={(event) => setNewCategory(event.target.value)}>
                            {categoryList.map(category => {
                                return (
                                    <option 
                                        key={category.id} 
                                        value={category.id}
                                    >{category.name}</option>
                                )
                            })}
                            </select>
                            <button onClick={saveCategory}>save Category</button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default FavoriteForm;