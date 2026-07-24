import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom'
import { ThemeContext } from './ThemeContext';

const NAV_LINKS = [
  { name: 'My Orders', path: '/user/orders' },
  {name:"shop",path:"/user/shop"},
  {name:"Wallet",path:"/user/Wallet"},
  {name:"data",path:"/user/data"}
  
];

export const UserNavbar = () => {
  const themeHandler=()=>
  {
    settheme(theme=="light"?"dark":"light")
    localStorage.setItem("theme",theme=="light"?"dark":"light")
  }

  const {theme,settheme} = useContext(ThemeContext)
   console.log("theme--->",theme)


  const state=useSelector(state=>state)
  {
    console.log("cart..",state.cart.cart)
    console.log("bank..",state.bank.balance)
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Example indicators
  const cartItemCount = 3;
  const notificationCount = 1;

  // Toggle handlers
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans">
      {/* Fixed Glassmorphic Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/60 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <button onClick={()=>{themeHandler()}}>{theme=="light"?"dark":"light"}</button>
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/user" className="flex items-center space-x-2 group">
                <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent tracking-tight">
                  EcoMart
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Link Array */}
            <div className="hidden md:flex space-x-1 items-center">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-600 shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right Action Icons & Profiles */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Notifications bell */}
              <div className="relative">
                <button
                  onClick={toggleNotifications}
                  className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-full transition-all duration-200 relative"
                  aria-label="Notifications"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {notificationCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown menu */}
                {isNotificationsOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsNotificationsOpen(false)}></div>
                    <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-20 transition-all duration-200">
                      <div className="px-4 py-2.5 border-b border-slate-100 font-semibold text-sm text-slate-700 flex justify-between items-center">
                        <span>Notifications</span>
                        <span className="text-xs font-normal text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">New Updates</span>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        <div className="px-4 py-3.5 hover:bg-slate-50 cursor-pointer border-b border-slate-50 transition-colors">
                          <p className="text-xs text-slate-600"><strong className="text-slate-800">Order Placed</strong> - Your order #9872 has been confirmed.</p>
                          <span className="text-[10px] text-slate-400 mt-1 block">5 mins ago</span>
                        </div>
                        <div className="px-4 py-3.5 hover:bg-slate-50 cursor-pointer transition-colors">
                          <p className="text-xs text-slate-600"><strong className="text-slate-800">New Promotion</strong> - Save 15% this weekend with coupon <span className="font-mono text-indigo-600 bg-indigo-50 px-1 rounded">WEEKEND15</span></p>
                          <span className="text-[10px] text-slate-400 mt-1 block">2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Shopping Cart button with Badge */}
              <Link
                to="/user/cart"
                className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-full transition-all duration-200 relative"
                aria-label="Shopping Cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {state.cart.cart.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-indigo-600 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-sm">
                    {state.cart.cart.length}
                  </span>
                )}
              </Link>

                <p>
                {state.bank.balance}
              </p>

              {/* Thin vertical separator */}
              <div className="h-6 w-px bg-slate-200"></div>

              {/* Profile Avatar / Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center space-x-2 p-1.5 rounded-full hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isProfileDropdownOpen}
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover border border-slate-200 shadow-sm"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="User Profile"
                  />
                  <svg className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isProfileDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsProfileDropdownOpen(false)}></div>
                    <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-20 transition-all duration-200">
                      <div className="px-4 py-2 border-b border-slate-100">
                        <p className="text-sm font-semibold text-slate-800">Sarah Jenkins</p>
                        <p className="text-xs text-slate-500 truncate">sarah.j@example.com</p>
                      </div>
                      <Link to="/user/profile" onClick={() => setIsProfileDropdownOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                        My Profile
                      </Link>
                      <Link to="/user/orders" onClick={() => setIsProfileDropdownOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                        Orders
                      </Link>
                      <Link to="/user/settings" onClick={() => setIsProfileDropdownOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                        Settings
                      </Link>
                      <hr className="border-slate-100 my-1" />
                      <button
                        onClick={() => {
                          setIsProfileDropdownOpen(false);
                          console.log('Logout clicked');
                        }}
                        className="w-full text-left block px-4 py-2 text-sm text-rose-600 hover:bg-rose-50/50 transition-colors cursor-pointer"
                      >
                        Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Header Buttons (Menu & Cart) */}
            <div className="flex md:hidden items-center space-x-2">
              {/* Mobile Shopping Cart Link */}
              <Link
                to="/user/cart"
                className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-full transition-colors relative"
                aria-label="Shopping Cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 bg-indigo-600 text-white text-[9px] font-bold rounded-full h-4.5 w-4.5 flex items-center justify-center border border-white">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* Mobile hamburger menu toggle */}
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none transition-colors cursor-pointer"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-200 bg-white ${isMobileMenuOpen ? 'max-h-[380px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/user'}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Profile & Extra actions section */}
          <div className="pt-4 pb-3 border-t border-slate-100">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full border border-slate-200 shadow-sm"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="User Avatar"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-semibold text-slate-800">Sarah Jenkins</div>
                <div className="text-sm font-medium text-slate-500">sarah.j@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link
                to="/user/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                My Profile
              </Link>
              <Link
                to="/user/settings"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                Settings
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  console.log('Logout clicked');
                }}
                className="w-full text-left block px-3 py-2 rounded-lg text-base font-medium text-rose-600 hover:bg-rose-50/50 transition-colors cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Child layout router content wrapper (with padding-top to account for fixed navbar) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/60 p-6 md:p-8 min-h-[calc(100vh-12rem)] animate-fade-in">
          <Outlet/>
        </div>
      </main>
    </div>
  );
}
