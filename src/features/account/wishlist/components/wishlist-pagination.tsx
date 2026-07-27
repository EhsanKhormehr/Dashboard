import Pagination from '@/components/common/pagination'
import React from 'react'

const WishlistPagination = () => {
  return (
    <Pagination
    baseHref='account/wishlist'
    currentPage={1}
    pageSize='20'
    totalItemsCount={30}
    
    />
  )
}

export default WishlistPagination
