'use client'

import React, { useState, useCallback, useRef, memo, useEffect } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface HoverMenuProps {
  label: string
  items: string[]
}

// Simpler menu item component that uses CSS hover instead of state
const MenuItem = memo(({ item }: { item: string }) => {
  return (
    <div className="w-full">
      <a 
        href="#" 
        className="block w-full px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        onClick={(e) => e.preventDefault()}
        role="menuitem"
      >
        {item}
      </a>
    </div>
  )
})
MenuItem.displayName = 'MenuItem'

const NavHoverMenu = ({ label, items }: HoverMenuProps) => {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  
  // Check if we're on a mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])
  
  const handleMouseEnter = useCallback(() => {
    if (isMobile) return // Don't trigger hover on mobile
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
    }
    setOpen(true)
  }, [isMobile])
  
  const handleMouseLeave = useCallback(() => {
    if (isMobile) return // Don't trigger hover on mobile
    // Clear existing timeout to prevent conflicts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
    }
    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
      timeoutRef.current = undefined
    }, 200)
  }, [isMobile])

  const handleTouchToggle = useCallback(() => {
    if (!isMobile) return
    setOpen(prev => !prev)
  }, [isMobile])

  // Clean up timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleTouchToggle}
        className={cn(
          "relative px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
          open && "bg-gray-100 dark:bg-gray-800"
        )}
        aria-label={`${label} menu`}
        aria-expanded={open}
      >
        <p className="text-center font-medium">{label}</p>
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => e.stopPropagation()}
        className="w-48 p-1 z-50"
        sideOffset={8}
        align="center"
        role="menu"
      >
        <div className="flex flex-col py-1">
          {items.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default memo(NavHoverMenu)
