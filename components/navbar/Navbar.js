import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = ({ onChange, results = [], search }) => {
  const router = useRouter();
  const active = router.pathname;
  const linkClass = 'block lg:inline-block text-white hover:text-blue-500 mr-4 cursor-pointer';
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-500 p-3">
      <div className="flex item-center text-white mr-6">
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight cursor-pointer">TV Show APP</span>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/shows?page=0">
            <a className={active === '/shows' ? `${linkClass} text-blue-500 font-bold` : linkClass}>Shows</a>
          </Link>
          <Link href="/people">
            <a className={active === '/people' ? `${linkClass} text-blue-500 font-bold` : linkClass}>People</a>
          </Link>
        </div>
        <div className="flex bg-white border border-gray-300 rounded-lg">
          <span className="bg-gray-200 rounded-l-lg py-2 px-3">
            <i className="fas fa-search"></i>
          </span>
          <input
            name="search"
            className="flex-1 focus:outline-none focus:shadow-outline rounded-r-lg leading-none py-2 px-4"
            placeholder="Search"
            onChange={(e) => onChange && onChange(e)}
            type="search"
            value={search}
          />
          {results.length > 0 && (
            <div className={`absolute border border-gray-500 bg-gray-300 rounded-lg ${styles.searchResults}`}>
              <ul>
                {results.map(({ show: { id, name } }, i) => (
                  <li
                    key={id}
                    className={i !== results.length - 1
                      ? "font-bold cursor-pointer border-b border-black"
                      : "font-bold cursor-pointer"
                    }
                    onClick={() => router.push(`/shows/${id}`)}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav >
  )
}

export default Navbar;