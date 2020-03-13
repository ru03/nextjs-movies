import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-500 p-3">
      <div className="flex item-center text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">TV Show APP</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/shows">
            <a className="block lg:inline-block text-white hover:text-blue-500 mr-4">Shows</a>
          </Link>
          <Link href="/people">
            <a className="block lg:inline-block text-white hover:text-blue-500 mr-4">People</a>
          </Link>
        </div>
        <div className="flex bg-white border border-gray-300 rounded-lg">
          <span className="bg-gray-200 rounded-l-lg py-2 px-3">
            <i className="fas fa-search"></i>
          </span>
          <input
            className="flex-1 focus:outline-none focus:shadow-outline rounded-r-lg leading-none py-2 px-4"
            placeholder="Search"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;