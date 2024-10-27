import React from'react';
import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <header className="bg-gray-800 py-4">
        <nav className="flex justify-between items-center px-6">
          <div className= "text-2xl text-gray-200">M&M Clothing</div>
          <ul className ="flex gap-5">
<li>
  <Link href= "/home" passHref>
   className="text-white underline decoration-red-500 hover:text-red-500"Home
  </Link>
  </li>
<li>
  <Link href= "/articles" passHref>
   className="text-white underline decoration-red-500 hover:text-red-500"Articles
</Link>
</li>
<li>
  <Link href= "/categories" passHref>
   className="text-white underline decoration-red-500 hover:text-red-500"Categories
  </Link>
  </li>
<li>
  <Link href= "/contact-us" passHref>
   className="text-white underline decoration-red-500 hover:text-red-500"Contact Us
  </Link>
  </li>

          </ul>

          

        </nav>
      </header>
    </div>
  )
}

export default Navbar