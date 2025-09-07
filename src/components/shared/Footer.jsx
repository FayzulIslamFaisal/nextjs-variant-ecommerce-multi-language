'use client'

import { ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Footer = ()=> {
  return (
    <footer className='bg-black text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full rounded-none'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          Back to top
        </Button>
      </div>

      <div className='p-4'>
        <div className='flex justify-center gap-3 text-sm'>
          <Link href='/page/conditions-of-use'>Conditions of Use</Link>
          <Link href='/page/privacy-policy'>Privacy Notice</Link>
          <Link href='/page/help'>Help</Link>
        </div>
        <div className='flex justify-center gap-3 text-sm'>
          <span>© {new Date().getFullYear()} inc. or its affiliates</span>
        </div>
        <div>
          <span className='flex justify-center gap-3 text-sm'>
            123, Street, City, State, Country | 0123456789
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
