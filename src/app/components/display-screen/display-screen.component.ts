import { Component, OnInit } from '@angular/core';
import { getMergeSortAnimations } from '../algorithms/merge-sort';

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

  algorithms = ['merge', 'heap', 'quick', 'bubble']

  NUMBER_OF_ARRAY_BARS = 100;
  PRIMARY_COLOR = '#0080FF';
  SECONDARY_COLOR = 'red';
  ANIMATION_SPEED_MS = 10;
  PIVOT_COLOR = "green";

  constructor() { }

  ngOnInit(): void {
    this.randomizeBar();
  }

  public selectedAlgortihm($event: string): void {
    switch ($event) {
      case this.algorithms[0]:
        this.value = this.algorithms[0];
        this._mergeSort();
        break;

      case this.algorithms[1]:
        //merge sort function
        this.value = this.algorithms[1];
        break;

      case this.algorithms[2]:
        //merge sort function
        this.value = this.algorithms[2];
        break;

      case this.algorithms[3]:
        //merge sort function
        this.value = this.algorithms[3];
        break;

      default:
        this.value = '';
    }
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

 private _mergeSort(): void{
    const arrayBars = document.getElementsByClassName('bars');
    let animations = getMergeSortAnimations(this.barsCount);
  
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = <HTMLElement>arrayBars[barOneIdx];
        const barTwoStyle = <HTMLElement>arrayBars[barTwoIdx];
        const color = i % 3 === 0 ? this.SECONDARY_COLOR : this.PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.style.backgroundColor = color;
          barTwoStyle.style.backgroundColor = color;
        }, i * this.ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = <HTMLElement>arrayBars[barOneIdx];
          barOneStyle.style.height = `${newHeight}px`;
        }, i * this.ANIMATION_SPEED_MS);
      }
    }
   }
}
