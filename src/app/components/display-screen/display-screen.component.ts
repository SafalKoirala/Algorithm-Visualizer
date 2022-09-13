import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.scss']
})
export class DisplayScreenComponent implements OnInit {

  public value: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public selectedAlgortihm($event: string): void {
    this.value = $event;
  }
}
