import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { fetchSearchCocktail } from '../redux/features/cocktailSlice';

const SearchBox = () => {
    const searchTerm=useRef();
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();             
    };
    const handleChange=()=>{
        const searchText=searchTerm.current.value;
        dispatch(fetchSearchCocktail(searchText));
    }
    return (
        <div className='d-flex flex-column align-items-center justify-content-center mt-4'>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <input type="email" placeholder='Search here' class="form-control" style={{width:'20rem'}} ref={searchTerm} onChange={handleChange}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBox
