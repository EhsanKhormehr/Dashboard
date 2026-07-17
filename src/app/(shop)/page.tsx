import MaxWidthWrapper from '@/components/common/max-width-wrapper'
import ShopBanner from '@/features/shop/home/components/banner'
import ShopCategoryBrowser from '@/features/shop/home/components/category-browser'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <ShopBanner />
        <ShopCategoryBrowser />
    </div>
  )
}

export default HomePage
