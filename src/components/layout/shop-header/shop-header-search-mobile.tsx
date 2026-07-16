import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const ShopHeaderSearchMobile = () => {
  return (
    <div>
       <Dialog>
                <DialogTrigger asChild>
                  <Search />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Search</DialogTitle>
                  </DialogHeader>
                  <div className="flex items-center relative w-full">
                    <Input
                      placeholder="Search For Products..."
                      className="bg-background rounded-4xl py-5.5 pl-10"
                    />
                    <Search className="absolute text-dashboard-text/50 ml-2" />
                  </div>
                </DialogContent>
              </Dialog>
    </div>
  )
}

export default ShopHeaderSearchMobile
