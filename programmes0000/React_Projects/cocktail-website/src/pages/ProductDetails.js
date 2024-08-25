import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Spinner from '../components/shared/Spinner';
import { fetchSingleCocktail } from '../redux/features/cocktailSlice';
const ProductDetails = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([]);
  // const [ingredients,SetIngredients]=useState([])
  const { id } = useParams();
  const { loading, cocktail, error } = useSelector(state => ({ ...state.app }));
  const dispatch = useDispatch();
  // console.log(cocktail);
  useEffect(() => {
    dispatch(fetchSingleCocktail(id))
  }, [])

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strCategory: category,
        strAlcoholic: info,
        strGlass: glass,
        strDrinkThumb: img,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5
      } = cocktail[0];
      const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]
      const newCocktail = [name, category, info, glass, img, ingredients]
      setmodifiedCocktails(newCocktail);
      console.log(modifiedCocktails);
    } else {
      setmodifiedCocktails(null)
    }
  }, [id, cocktail])

  if (!modifiedCocktails) {
    return <h2>No cocktail Details</h2>
  } else {
    const [name, category, info, glass, img, ingredients] = modifiedCocktails;

    return (
      <>
        <Layout>
          {
            loading ?
              (
                <Spinner />
              ) : (
                <div className='container mt-4'>
                  <Link to="/" className='btn btn-info'>GO BACK</Link>
                  <div className='row mt-4' >
                    <div className='col-md-5'>
                      <img src={img} alt={name} height={300} width={400} />
                    </div>
                  </div>
                  <div className='col-md-5'>
                    <h2> Name: {name}</h2>
                    <p className='mt-1'>category: {category}</p>
                    <p>info: {info}</p>
                    <p>Glass: {glass}</p>
                    <p>ingredients :{ingredients + "."}</p>
                  </div>
                </div>
              )
          }
        </Layout>
      </>
    )
  }
}

export default ProductDetails
