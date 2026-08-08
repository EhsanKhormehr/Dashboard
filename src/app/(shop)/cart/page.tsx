import MaxWidthWrapper from '@/components/common/max-width-wrapper'
import CartWrapper from '@/features/shop/cart/components/cart-wrapper'
import React from 'react'

const Cart = () => {
  return (
    <MaxWidthWrapper className='grid grid-cols-12 my-15'>
        <CartWrapper />
      <div className='col-span-4'></div>
    </MaxWidthWrapper>
  )
}

export default Cart
