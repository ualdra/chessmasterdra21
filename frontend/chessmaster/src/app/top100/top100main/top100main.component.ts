import { Component, OnInit } from '@angular/core';
import { Ajedrecista } from '../ajedrecista';
import { AJEDRECISTAS } from '../mock-ajedrecistas';

@Component({
  selector: 'app-top100main',
  templateUrl: './top100main.component.html',
  styleUrls: ['./top100main.component.css']
})
export class Top100mainComponent implements OnInit {
 ajedrecistas=AJEDRECISTAS;
 selectedAjedrecista?: Ajedrecista;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(ajedrecista: Ajedrecista): void {
    this.selectedAjedrecista = ajedrecista;
  }

}
