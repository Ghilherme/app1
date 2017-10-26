import { Component, OnInit, OnChanges, Input } from '@angular/core';

import {Coracao} from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativa: number

  public coracoes: Coracao[] =[new Coracao(true), new Coracao(true), new Coracao(true)  ]

  constructor() {
     
  }

  ngOnChanges(){
    if(this.tentativa !== this.coracoes.length){
      let i: number = this.coracoes.length - this.tentativa

      this.coracoes[i-1].cheio = false

    }

  }
  
  ngOnInit() {
    
  }

  

  

}
