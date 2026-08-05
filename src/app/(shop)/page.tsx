import HomeBanner from '@/features/shop/home/components/home-banner'
import HomeCategory from '@/features/shop/home/components/home-category'
import HomeDiscountedProducts from '@/features/shop/home/components/home-discounted'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <HomeCategory />
      <HomeDiscountedProducts />
    </div>
  )
}

export default HomePage
