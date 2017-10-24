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
  public progresso: number = 0
  public errou : number

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
      
      alert("Tradução correta!") 
      
      //Atualiza rodada
      this.rodada++
      if (this.rodada < this.frase.length){
        
        this.atualizaRodada()
        
      }

       //Atualiza progresso
       this.progresso = this.progresso + (100 / this.frase.length)
       console.log(this.progresso)
       console.log(this.rodada)
      
    }
    else{
      this.errou++
      alert("Tradução incorreta!")
    }    
  }
  
  public atualizaRodada(): void {
    this.fraseDaRodada = this.frase[this.rodada]
    this.resp = ''
  }

}
