import { ShoppingCartIcon, UserIcon} from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex items-center justify-end">
        <nav className="flex gap-3 w-full items-center ">
            <Link href="/signin" className="header-button flex flex-col justify-center items-center">
                <UserIcon size={20} />
                <span className="">Sign in</span>
            </Link>
            <Link href="/cart" className="header-button flex flex-col justify-center items-center">
                <ShoppingCartIcon size={20} />
                <span className="">Cart</span>
            </Link>
        </nav>
      
    </div>
  )
}

export default Menu
