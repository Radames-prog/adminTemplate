import MenuLateral from "./MenuLateral";

interface TituloProps{
    titulo: string
    subtitulo: string
    children?: any
}
export default function Titulo(props: TituloProps){
    return (
        <div>
          <h1 className={` `}>{props.titulo}</h1>
          <h2 className={` `}>{props.subtitulo}</h2>

        </div>
    )

}