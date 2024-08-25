import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cards from '../../components/cards/Cards'
import './NewsDetails.css'
const NewsDetails = ({ data, category, fetchMoreData, totalResults,click }) => {
  
  return (
    <div className={click?'news-details active':'news-details'}>
      <h3 style={{ textAlign: 'center', fontWeight: '500', fontSize: '2rem' }}>Get All Latest   <span>{category}</span>News</h3>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={data.length !== totalResults} 
      >
        <div className="items">
          {
            data.map((element) => {
              return <Cards element={element} />
            })
          }
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default NewsDetails
