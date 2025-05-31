import { Usuario } from "../model/Usuario"


export class UsuarioRepository {
    private static instance: UsuarioRepository
    private usuarioList: Usuario[] = []

    private constructor() {}

    public static getInstance(): UsuarioRepository {
        if(!this.instance){
            this.instance = new UsuarioRepository()
        }
        return this.instance
    }

    inserirUsuario(usuario: Usuario){
        this.usuarioList.push(usuario)
    }

    buscarUsuarioPorId(id: number){
        const usuario = this.usuarioList.findIndex(uId => uId.id == id)
        if(usuario == -1){
            throw new Error("Categoria nao encontrada")
        }
        return usuario
    }

    buscarUsuarioPorCPF(cpf: string){
        const usuario = this.usuarioList.findIndex(CPF => CPF.cpf == cpf)
        if(usuario == -1){
            throw new Error("Categoria nao encontrada")
        }
        return usuario
    }
}