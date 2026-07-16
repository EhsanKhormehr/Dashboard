import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const ShopHeaderForm = () => {
  return (
    <form className="hidden lg:flex">
            <div className="flex items-center mx-10 relative min-w-[320px]">
              <Input
                placeholder="Search For Products..."
                className="bg-background rounded-4xl py-5.5 pl-10"
              />
              <Search className="absolute text-dashboard-text/50 ml-2" />
            </div>
          </form>
  )
}

export default ShopHeaderForm
