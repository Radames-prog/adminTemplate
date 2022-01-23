import Link from 'next/link'
interface MenuItemProps{
    url?: string
    texto: string
    icone: any
    className?: string
    onclick?: (evento:any) => void
}
export default function ManuItem(props: MenuItemProps){

    function renderizarLink(){
        return(
            <a className={`flex flex-col justify-center items-center w-20 h-20 ${props.className}text-gray-600 dark:text-gray-200`}>
            {props.icone}
            <span className={`text-xs font-light `}>
                {props.texto}
            </span>
            </a>

        )
    }
    return(
        <li onClick={props.onclick} className={`hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800`}>
            {props.url?(
            <Link href={props.url}>
                {renderizarLink()}
              
            </Link>

            ):(
                renderizarLink() 
            )}

        </li>
    )

}