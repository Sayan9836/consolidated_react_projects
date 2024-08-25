import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import NewsDetails from '../newsdetails/NewsDetails'

const News = ({country,category,pageSize,setProgress}) => {
  const [data,setData]=useState([]);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);
  const[click,setClick]=useState(false);
  
  useEffect(()=>{
    getData();
  },[])
   
  useEffect(()=>{
    getData();
  },[category])


  const getData=()=>{
    const URL=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=84200983da994de6a9f134424ce72d81&page=${page}&pageSize=${pageSize}`
    // setProgress(0);
    axios.get(URL)
    // setProgress(30)
   .then((res)=>{
    // setProgress(60)
    setTotalResults(res.data.totalResults)
    setData(res.data.articles)
   })
   .catch((err)=>console.log(err,'ERROR IN API CALL'))
  //  setProgress(100)
  }

  const fetchMoreData=async()=>{
    const URL=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=84200983da994de6a9f134424ce72d81&page=${page+1}pageSize=${pageSize}`
    setPage(page+1);
   await axios.get(URL)
   .then((res)=>{
    setTotalResults(res.data.totalResults)
     setData(data.concat(res.data.articles))
   })
   .catch((err)=>console.log(err));
 }

  return (
    <div>
      <Navbar click={click} setClick={setClick}/>
      <NewsDetails data={data} category={category} fetchMoreData={fetchMoreData} totalResults={totalResults} click={click}/>
    </div>
  )
}

export default News
