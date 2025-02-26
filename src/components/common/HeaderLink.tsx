import Link from 'next/link'

const HeaderLink = ({text, href}: {text: string, href: string}) => {
  return (
    <Link href={href} className=" bg-transparent border-orange-500 border-2 p-1 pl-4 pr-4 text-orange-500 bold flex gap-1 hover:bg-orange-500 hover:text-white justify-center items-center duration-150">
        {text}
    </Link>
  )
}

export default HeaderLink