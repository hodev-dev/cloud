
const Navbar = (props: any) => {
  return (
    <div className={"flex items-center w-full h-16 bg-white border border-l-0 border-r-0 border-gray-200"}>
      {props.children}
    </div>
  )
}

export default Navbar
