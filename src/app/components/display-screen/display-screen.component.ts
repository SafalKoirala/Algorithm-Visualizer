import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.scss']
})
export class DisplayScreenComponent implements OnInit {

  public value: string = '';
  public minBars: number = 5;
  public maxBars: number = 150;
  public barsCount: number[] = [];

  NUMBER_OF_ARRAY_BARS = 100;
  constructor() { }

  ngOnInit(): void {
    this.randomizeBar();
  }

  public selectedAlgortihm($event: string): void {
    this.value = $event;
  }

  public randomizeBar(): void {
    const array = []
    for (let i = 0; i < this.NUMBER_OF_ARRAY_BARS; i++) {
      array.push(this.randomIntFromInterval(this.minBars, this.maxBars));
    }
    this.barsCount = array;
    this.value = '';
  }

  randomIntFromInterval(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
