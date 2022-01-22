interface MenuItemProps{
    url: string
    texto: string
    icone: any
}
export default function ManuItem(props: MenuItemProps){
    return(
        <li className={``}>
            {props.icone}

        </li>
    )

}