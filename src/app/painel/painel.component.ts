import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES }  from './frase-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao: string = "Traduza a frase:"
  public frase: Frase[] = FRASES
  public resp: string;
  public rodada: number = 0
  public fraseDaRodada: Frase
  public progresso: number = 0
  public tentativa : number = 3
  @Output() public encerrarJogo = new EventEmitter()

  constructor() {
     this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{
    this.resp = (<HTMLInputElement>resposta.target).value
  }

  public verificaResposta(): void {

    if(this.fraseDaRodada.fraseBr == this.resp){
      
      
      //Atualiza rodada
      this.rodada++

      //Atualiza progresso
      this.progresso = this.progresso + (100 / this.frase.length)

      if( this.rodada === 4){
        this.encerrarJogo.emit("vitoria")

      }


      if (this.rodada < this.frase.length){
        
        this.atualizaRodada()
        
      }


    }
    else{
      //decrementa tentativa
      this.tentativa--

      if(this.tentativa === -1){
        this.encerrarJogo.emit("derrota")
      }
    }    
  }
  
  public atualizaRodada(): void {
    this.fraseDaRodada = this.frase[this.rodada]
    this.resp = ''
  }

}
