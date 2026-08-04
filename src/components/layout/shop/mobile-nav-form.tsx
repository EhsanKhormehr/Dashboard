import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Search } from 'lucide-react'
import React from 'react'

const MobielNavForm = () => {
  return (
    <Sheet>
          <SheetTrigger asChild>
            <Button asChild variant={"ghost"} className="cursor-pointer">
              <div className="py-8">
                <Search strokeWidth={1.3} className="size-[25px]" />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="rounded-t-3xl mx-4 shadow-card !h-[72vh] bg-surface/90"
          >
            <SheetHeader className="border-b border-black/20">
              <SheetTitle className="font-bold">Search</SheetTitle>
            </SheetHeader>
            <form className="mx-4">
              <Input
                placeholder="Search..."
                type="text"
                className="bg-background rounded-2xl py-6"
              />
              <div className="flex justify-center">
                <Button type="submit" className="mt-4 w-[80%] rounded-2xl py-6">
                  Search
                </Button>
              </div>
            </form>
          </SheetContent>
        </Sheet>
  )
}

export default MobielNavForm
