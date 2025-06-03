'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

const SearchBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 border-2 rounded-xl justify-center h-9 md:h-12 px-3 cursor-pointer hover:bg-muted/50 transition"
        >
          <Search className="h-4 w-4" />
          <p className="text-xs">Search</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <Input
          type="text"
          placeholder="Search products..."
          autoFocus
          className="w-full"
        />
      </DialogContent>
    </Dialog>
  )
}

export default SearchBar
