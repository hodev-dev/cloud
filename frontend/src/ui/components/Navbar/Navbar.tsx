
const Navbar = (props: any) => {
  return (
    <div className={"relative items-center hidden w-full h-16 bg-white border border-l-0 border-r-0 border-gray-200 md:flex "}>
      {props.children}
    </div>
  )
}

export default Navbar
