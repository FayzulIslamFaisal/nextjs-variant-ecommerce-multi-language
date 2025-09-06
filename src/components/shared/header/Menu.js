import { ShoppingCartIcon, UserIcon} from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex items-center justify-end">
        <nav className="flex gap-3 w-full items-center ">
            <Link href="/signin" className="header-button">
                <UserIcon size={20} />
                <span className="ml-2">Sign in</span>
            </Link>
            <Link href="/cart" className="header-button">
                <ShoppingCartIcon size={20} />
                <span className="ml-2">Cart</span>
            </Link>
        </nav>
      
    </div>
  )
}

export default Menu
