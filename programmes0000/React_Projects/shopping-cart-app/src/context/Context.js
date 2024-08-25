import { createContext, useContext, useReducer } from "react";
import { Cartreducer } from "./Reducer";
import {faker} from '@faker-js/faker'
// import { productReducer } from "./Reducer";
const Cart=createContext();
faker.seed(99)
const Context=({children})=>{

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.avatar(),
        inStock: faker.datatype.array([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.datatype.array([1, 2, 3, 4, 5]),
      }));

          const initialState={
            products:products,
            Cart:[]
         }

    const [state,dispatch]=useReducer(Cartreducer,initialState)
    // const [productState,productDispatch]=useReducer(productReducer,{
    //     byStock:false,
    //     byFastDelivery:false,
    //     byRating:0,
    //     searchQuery:'',
    // })
                                                                                                        
    return <Cart.Provider value={{state ,dispatch}}>
        {children}
    </Cart.Provider>
}

 export const CartState=()=>{
  return useContext(Cart)
 }

export default Context