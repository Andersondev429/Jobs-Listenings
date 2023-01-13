import { Component, OnInit } from '@angular/core';
import { Conteudo } from './conteudo';
import { ConteudoService } from './conteudo.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  jobs =[    {
    company: "",
    logo: "",
    new: true,
    featured: true,
    position: "",
    role: "",
    level: "",
    postedAt: "",
    contract: "",
    location: "",
    languages: [],
    tools: []
  }];



  constructor(private service: ConteudoService) { }

  ngOnInit(): void{
    this.service.listar().subscribe((Jobs) => {this.jobs = Jobs})
  }
}
