
const Navbar = (props: any) => {
  return (
    <div className={"relative flex items-center w-full bg-white border border-r-0 border-gray-200 h-14 md:flex"}>
      {props.children}
    </div>
  )
}

export default Navbar
