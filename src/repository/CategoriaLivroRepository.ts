import { CategoriaLivro } from "../model/CategoriaLivro"


export class CategoriaLivroRepository {
    private static instance: CategoriaLivroRepository
    private categoriaLivroList: CategoriaLivro[] = []

    private constructor() {}

    public static getInstance(): CategoriaLivroRepository {
        if(!this.instance){
            this.instance = new CategoriaLivroRepository()
        }
        return this.instance
    }

    inserirCategoria(categoria: CategoriaLivro){
        this.categoriaLivroList.push(categoria)
    }

    buscarCategoriaPorId(id: number){
        const categoria = this.categoriaLivroList.findIndex(catId => catId.id == id)
        if(categoria == -1){
            throw new Error("Categoria de Livro não encontrada")
        }
        return categoria
    }
}