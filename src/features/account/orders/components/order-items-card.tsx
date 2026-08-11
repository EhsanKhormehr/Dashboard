import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OrderItemsCard = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-surface shadow-soft-card p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-background">
              <Image
                src="/shop/iphone-14.png"
                width={56}
                height={56}
                alt="iPhone 14 Pro Max"
                className="h-14 w-14 object-contain"
              />
            </div>

            <div className="min-w-0">
              <Link
                href="/"
                className="block text-xs sm:text-sm font-medium text-surface-foreground"
              >
                iPhone 14 Pro Max
              </Link>
              <p className="mt-1 text-xs text-muted-foreground">Quantity: 4</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-border pt-3 text-sm sm:border-t-0 sm:pt-0 sm:text-right">
            <div>
              <p className="text-xs text-muted-foreground">Each</p>
              <p className="mt-1 font-medium text-foreground">$200</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Total</p>
              <p className="mt-1 font-semibold text-foreground">$1,000</p>
            </div>
          </div>
        </div>
  )
}

export default OrderItemsCard
