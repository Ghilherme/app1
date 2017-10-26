export class Coracao{
    constructor(
         public cheio = true,
         private urlCoracaoCheio: string = "/assets/coracao_cheio.png",
         private urlCoracaoVazio: string = "/assets/coracao_vazio.png"
    ){}


    public exibeCoracao(): string{
        if(this.cheio){
            return this.urlCoracaoCheio
        }else{
            return this.urlCoracaoVazio
        }
    }
}