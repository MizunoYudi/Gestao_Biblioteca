import { Emprestimo } from "../model/Emprestimo"


export class EmprestimoRepository {
    private static instance: EmprestimoRepository
    private emprestimoList: Emprestimo[] = []

    private constructor() {}

    public static getInstance(): EmprestimoRepository {
        if(!this.instance){
            this.instance = new EmprestimoRepository()
        }
        return this.instance
    }

    inserirEmprestimo(emprestimo: Emprestimo){
        this.emprestimoList.push(emprestimo)
    }

    buscarEmprestimoPorId(id: number){
        const emprestimo = this.emprestimoList.findIndex(eId => eId.id == id)
        if(emprestimo == -1){
            throw new Error("Emprestimo não encontrado")
        }
        return emprestimo
    }
}