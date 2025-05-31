import { CategoriaUsuario } from "../model/CategoriaUsuario"


export class CategoriaUsuarioRepository {
    private static instance: CategoriaUsuarioRepository
    private categoriaUsuarioList: CategoriaUsuario[] = []

    private constructor() {}

    public static getInstance(): CategoriaUsuarioRepository {
        if(!this.instance){
            this.instance = new CategoriaUsuarioRepository()
        }
        return this.instance
    }

    inserirCategoria(categoria: CategoriaUsuario){
        this.categoriaUsuarioList.push(categoria)
    }

    buscarCategoriaPorId(id: number){
        const categoria = this.categoriaUsuarioList.findIndex(catId => catId.id == id)
        if(categoria == -1){
            throw new Error("Categoria de Usuário não encontrada")
        }
        return categoria
    }
}