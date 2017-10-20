import { Component, OnInit } from '@angular/core';
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

  constructor() {
     this.fraseDaRodada = this.frase[this.rodada]
     console.log( this.fraseDaRodada)
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{
    this.resp = (<HTMLInputElement>resposta.target).value
  }

  public verificaResposta(): void {

    if(this.fraseDaRodada.fraseBr == this.resp){
      
      alert("Tradução correta!")
      //Atualiza rodada
      this.rodada++
      this.fraseDaRodada = this.frase[this.rodada]
    }
    else{
      alert("Tradução incorreta!")
    }
    
    


  }

}
