import Link from 'next/link'

const HeaderLink = ({text, href}: {text: string, href: string}) => {
  return (
    <Link href={href} className="font-bold bg-orange-500 p-1 pl-4 pr-4 text-white bold flex gap-1 hover:bg-orange-600 hover:text-white justify-center items-center duration-150">
        {text}
    </Link>
  )
}

export default HeaderLink