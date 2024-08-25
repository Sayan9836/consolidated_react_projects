import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCocktails, getAlldata } from '../redux/features/cocktailSlice'
import Spinner from '../components/shared/Spinner'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import SearchBox from '../components/SearchBox'


const Homepage = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([])
  const { loading, cocktails, error } = useSelector(state=>({...state.app}));
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCocktails());
  }, [])

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } = item
        return {
          id: idDrink, name: strDrink, img: strDrinkThumb, info: strAlcoholic, glass: strGlass
        }
      })
      //******************************************************* */  
      setmodifiedCocktails(newCocktails)
      console.log(modifiedCocktails);

    } else {
      setmodifiedCocktails([]);
    }
  }, [cocktails])
  
  return (
    <div>
      {

        loading ? <Spinner /> :

          <Layout>
            <div className='container'>
              <div className='row'>
                {modifiedCocktails?.map((item) => {
                 return <div className="card" key={item.id}>
                    <img src={item.img} className="card-img-top"alt={item.name}/>
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h5 className="card-title">{item.glass}</h5>
                        <p className="card-text">{item.info}</p>
                        <Link to={`/products/${item.id}`} className="btn btn-primary">Go somewhere</Link>
                      </div>
                  </div>
                })}
              </div>
            </div>
          </Layout>

      }

    </div>
  )
}

export default Homepage
