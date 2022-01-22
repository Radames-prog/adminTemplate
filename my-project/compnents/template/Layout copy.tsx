import MenuLateral from "./MenuLateral";

interface LayoutProps{
    titulo: string
    subtitulo: string
    children?: any
}
export default function Layout(props: LayoutProps){
    return (
        <div>
            <MenuLateral/>

        </div>
    )

}