import { usePathname } from "next/navigation";

const { default: Link } = require("next/link")

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="login-menu border bg-green-400">
        <li>
          <Link href="/login">Login Main</Link>
        </li>
        {pathname === '/login/login-admin' ? <li>
          <Link href="/login/login-admin">Login Admin</Link>
        </li> : <li>
          <Link href="/login/login-user">Login User</Link>
        </li>}
      </ul>
    </nav>
  )
};

export default Navbar;