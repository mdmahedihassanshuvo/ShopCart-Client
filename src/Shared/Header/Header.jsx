// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { FaShoppingCart } from "react-icons/fa";

// const Header = () => {

//     const navList = (
//         <>
//             <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                     isActive
//                         ? "text-accent hover:text-orange-600 border-b-2 shadow-lg"
//                         : ""
//                 }
//             >
//                 <p className='text-lg font-medium'>Home</p>
//             </NavLink>
//             <button
//                 // to='/category'
//                 className="hover:text-orange-600 border-b-2 shadow-lg"
//             >
//                 <div className="dropdown">
//                     <label tabIndex={0} className="text-lg font-medium">Categories</label>
//                     <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
//                         <li><Link to='/wireless'>Wireless Headphone</Link></li>
//                         <li><Link to='wired'>Wired Headphone</Link></li>
//                     </ul>
//                 </div>
//             </button>
//             <NavLink
//                 to="/new"
//                 className={({ isActive }) =>
//                     isActive
//                         ? "text-accent "
//                         : "hover:text-orange-600 border-b-2 shadow-lg"
//                 }
//             >
//                 <p className='text-lg font-medium'>What's New</p>
//             </NavLink>
//             <NavLink
//                 to="/delivery"
//                 className={({ isActive }) =>
//                     isActive
//                         ? "text-accent "
//                         : "hover:text-orange-600 border-b-2 shadow-lg"
//                 }
//             >
//                 <p className='text-lg font-medium'>Delivery</p>
//             </NavLink>
//         </>
//     );

//     return (
//         <div className="navbar bg-base-100">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                         {navList}
//                     </ul>
//                 </div>
//                 <Link to='/' className="normal-case text-2xl font-semibold"><span className='text-emerald-900'>Shop</span><span className='text-pink-800'>Cart</span></Link>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {React.Children.map(navList.props.children, (child, index) => (
//                         <li className={index > 0 ? 'ml-4' : ''}>{child}</li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="navbar-end space-x-3">
//                 <div className="indicator">
//                     <span className="indicator-item badge badge-secondary">99+</span>
//                     <Link className="btn btn-ghost"><FaShoppingCart className='text-2xl' /></Link>
//                 </div>
//                 <Link to='/login'><p className='text-lg border-b-2 p-2 shadow-lg rounded hover:text-orange-600 font-medium text-black'>Login</p></Link>
//             </div>
//         </div>
//     );
// };

// export default Header;
