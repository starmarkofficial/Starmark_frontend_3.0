import React from 'react'

function NavBar() {
  return (
    <div>
     <nav className="relative px-4 md:py-4 lg:py-4 sm:py-4 2xl:py-4 flex justify-between 
		items-center bg-white shadow md:shadow-lg">
		<a className="text-3xl font-bold leading-none" href="#">
			<img className='h-10 w-32'  alt="" />
		</a>
		<div className="lg:hidden">
			<button className="navbar-burger flex items-center text-blue-600 ">
      <div>
      <div
        id="basic-button"
        // aria-controls={open ? 'basic-menu' : undefined}
        // aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
		className='flex gap-1 items-center'
      >
      	<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
				
      </div>
      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><div className="flex gap-2"><HomeIcon className="h-5 w-5  text-blue-400" />Home</div></MenuItem>
        <MenuItem onClick={handleClose}><div className="flex gap-2"><InformationCircleIcon className="h-5 w-5  text-blue-400" />About Us</div></MenuItem>







        <MenuItem ><Link to="/jobs"><div className="flex gap-2"><BuildingOfficeIcon  className="h-5 w-5  text-blue-400" />Jobs</div></Link></MenuItem>





        <MenuItem ><Link to="/hire"><div className="flex gap-2"><PhoneIcon className="h-5 w-5  text-blue-400" />Hire</div></Link></MenuItem>





{
(!auth.user)?(<><MenuItem ><Link to="/login"><div className="flex gap-2"><ArrowLeftOnRectangleIcon  className="h-5 w-5  text-blue-400" />Login</div></Link></MenuItem>
        <MenuItem ><Link to="/regester"><div className="flex gap-2"><UserPlusIcon  className="h-5 w-5  text-blue-400" />Sign up</div></Link></MenuItem>

</>):(

<>


<MenuItem ><div onClick={logout}  className="flex gap-2">
	<ArrowRightOnRectangleIcon className="h-5 w-5  text-blue-400" />Logout</div>
	</MenuItem>
 </>)
}
		
      </Menu> */}
    </div>
			
			</button>
		</div>
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><a className="text-sm font-bold text-blue-600 " href="#">Home</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm text-gray-400  hover:text-gray-500" href="#">About Us</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>



{/* {
	(auth?.user?.role == 1)?<li><Link className="text-sm text-gray-400 hover:text-gray-500" 
	to="/hire">hire</Link></li>:<li><Link className="text-sm text-gray-400 hover:text-gray-500" 
			to="/jobs">Jobs</Link></li>
} */}
			



			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm text-gray-400 hover:text-gray-500" href="/hire">Employee</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
		</ul>
		

			{/* {
				(!auth.user)?(<div className="">
				<Link to="/login" className='hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200 '>
					Log In</Link>
		
				<Link to="/auth" className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" >
					Sign up</Link>
					</div>):(<>
					
      <Menu
        id="basic-menu"
		anchorEl={anchorE2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
		
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logout} >Logout</MenuItem>
      </Menu>
	 {
		(auth?.user?.role===1)?  <div aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2} className='pointer-cursor  hidden lg:inline-block py-2 pl-6 pr-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-sm text-white font-bold rounded-xl transition duration-200" '>
						{auth?.user?.name}&nbsp;<ArrowDropDownIcon/></div>:  <div aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2} className='pointer-cursor hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 '>
						{auth?.user?.name}&nbsp;<ArrowDropDownIcon/></div>
	 } */}
        {/* <div aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2} className='hidden lg:inline-block py-2 pl-6 pr-1 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" '>
						{auth?.user?.name}&nbsp;<ArrowDropDownIcon/></div> */}
   	
					{/* </>
						
					)
			} */}
	</nav>
	
	
    </div>
    
  )
}

export default NavBar