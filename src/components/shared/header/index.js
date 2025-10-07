"use client"
import Image from "next/image";
import Link from "next/link";
import Search from "@/components/shared/header/Search";
import Menu from "@/components/shared/header/Menu";
import data from "@/lib/data";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";


const Header = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    console.log("searching", query);
    if (query.trim()) {
      router.push(`/search/${encodeURIComponent(query)}`);
    }
  }
  return (
    <header className=" bg-black text-white">
      <div className="px-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className=" flex items-center header-button font-extrabold text-2xl m-1">
              <Image src="/icons/logo.png" alt="logo" className="rounded" width={60} height={40} />
              <span className="ml-2">Shop</span>
            </Link>
          </div>
          <div className="hidden md:block flex-1 max-w-xl">
            <Search query={query} setQuery={setQuery} onHandleSearch={handleSearch} />
          </div>
          <Menu />
        </div>
      </div>
      {/* categories menus */}
      <div className='flex items-center px-3 mb-[1px] bg-gray-800'>

        <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]'>
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className='header-button !p-2'
            >
              {menu.name}
            </Link>
          ))}
          <div className='header-button !p-2 text-yellow-200'>Sign Out</div>
        </div>
      </div>

    </header>
  )
}

export default Header
