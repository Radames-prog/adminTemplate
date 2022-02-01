import { IconeAjustes, IconeCasa, InconeSair, InconeSino } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"
import useAuth from "../../data/hook/useAuth"

export default function MenuLateral(){

    const {logout} = useAuth()


    return (
        <aside className={`flex flex-col dark:bg-gray-900 dark:text-gray-200 bg-gray-200 text-gray-900`}>
            <div className={`w-20 h-20 bg-gradient-to-r from-indigo-500
             to-purple-900 flex flex-col items-center justify-center`}>
                 <Logo/>

            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" texto="Inicio" icone={IconeCasa}/>
                <MenuItem url="/ajuste" texto="Ajustes" icone={IconeAjustes}/>
                <MenuItem url="/notificacoes" texto="Novidades" icone={InconeSino}/>
            </ul>
            <ul>
                <MenuItem onclick={logout} texto="Sair" icone={InconeSair} className={`text-red-600 hover:bg-red-400 hover:text-slate-200 dark:text-red-50 dark:hover:text-white`}/>
            </ul>


        </aside>
    )
}