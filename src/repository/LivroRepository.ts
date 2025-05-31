import { Livro } from "../model/Livro"


export class LivroRepository {
    private static instance: LivroRepository
    private livroList: Livro[] = []

    private constructor() {}

    public static getInstance(): LivroRepository {
        if(!this.instance){
            this.instance = new LivroRepository()
        }
        return this.instance
    }

    inserirlivro(livro: Livro){
        this.livroList.push(livro)
    }

    buscarLivroPorId(id: number){
        const livro = this.livroList.findIndex(uId => uId.id == id)
        if(livro == -1){
            throw new Error("Categoria nao encontrada")
        }
        return livro
    }

    buscarLivroPorISBN(isbn: string){
        const livro = this.livroList.findIndex(ISBN => ISBN.isbn == isbn)
        if(livro == -1){
            throw new Error("Categoria nao encontrada")
        }
        return livro
    }
}