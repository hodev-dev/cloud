const Navbar = (props: any) => {
   return <div className={'relative flex items-center w-full border-warmGray-800 border-b-1 h-14 md:flex'}>{props.children}</div>;
};

export default Navbar;
