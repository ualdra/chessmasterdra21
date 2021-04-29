import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EcoService } from '../eco.service';


@Component({
  selector: 'app-eco100search',
  templateUrl: './eco100search.component.html',
  styleUrls: ['./eco100search.component.css']
})
export class Eco100searchComponent implements OnInit {
   
  
  search: string = 'hola';
  ecos;
  prueba;
  
  constructor(private ecoService:EcoService) { }

  ngOnInit(): void {
  }

  async submit(){
    console.log(this.search);
    this.prueba = await this.ecoService.getEcos();
    console.log(this.ecos);
  }

}
