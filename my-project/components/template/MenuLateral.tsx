import { IconeAjustes, IconeCasa, InconeSino } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"

export default function MenuLateral(){
    return (
        <aside>
            <div className={`w-20 h-20 bg-gradient-to-r from-indigo-500
             to-purple-900 flex flex-col items-center justify-center`}>
                 <Logo/>

            </div>
            <ul>
                <MenuItem url="/" texto="Inicio" icone={IconeCasa}/>
                <MenuItem url="/ajuste" texto="Ajustes" icone={IconeAjustes}/>
                <MenuItem url="/notificacoes" texto="Novidades" icone={InconeSino}/>
            </ul>

        </aside>
    )
}