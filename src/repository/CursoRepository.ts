import { Curso } from "../model/Curso"


export class CursoRepository {
    private static instance: CursoRepository
    private cursoList: Curso[] = []

    private constructor() {}

    public static getInstance(): CursoRepository {
        if(!this.instance){
            this.instance = new CursoRepository()
        }
        return this.instance
    }

    inserirCurso(curso: Curso){
        this.cursoList.push(curso)
    }

    buscarCursoPorId(id: number){
        const curso = this.cursoList.findIndex(curId => curId.id == id)
        if(curso == -1){
            throw new Error("Categoria nao encontrada")
        }
        return curso
    }
}