import { Component, OnInit } from '@angular/core';
import { getAnimationsForHeapSort } from '../algorithms/heap-sort';
import { getMergeSortAnimations } from '../algorithms/merge-sort';
import { getAnimationsForQuickSort } from '../algorithms/quick-sort';

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

  NUMBER_OF_ARRAY_BARS = 10;
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
        this.value = this.algorithms[1];
        this._heapSort();
        break;

      case this.algorithms[2]:
        this.value = this.algorithms[2];
        this._quickSort();
        break;

      case this.algorithms[3]:
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

  private _mergeSort(): void {
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

  private _heapSort(): void {
    let arrayBars = document.getElementsByClassName('bars');
    let animations = getAnimationsForHeapSort(this.barsCount);
    for (let i = 0; i < animations.length; i++) {
      const [check, v1, v2, v3, v4] = animations[i].slice();
      if (check === "HighLightOn") {
        let barOneStyle = <HTMLElement>arrayBars[v1];
        let barTwoStyle = <HTMLElement>arrayBars[v2];
        setTimeout(() => {
          barOneStyle.style.backgroundColor = this.SECONDARY_COLOR;
          barTwoStyle.style.backgroundColor = this.SECONDARY_COLOR;
        }, i * this.ANIMATION_SPEED_MS);
      }
      else if (check === "HighLightOff") {
        let barOneStyle = <HTMLElement>arrayBars[v1];
        let barTwoStyle = <HTMLElement>arrayBars[v2];
        setTimeout(() => {
          barOneStyle.style.backgroundColor = this.PRIMARY_COLOR;
          barTwoStyle.style.backgroundColor = this.PRIMARY_COLOR;
        }, i * this.ANIMATION_SPEED_MS);
      }
      else if (check === "Swap") {
        let barOneStyle = <HTMLElement>arrayBars[v1];
        let barTwoStyle = <HTMLElement>arrayBars[v3];
        setTimeout(() => {
          barOneStyle.style.height = `${v2}px`;
          barTwoStyle.style.height = `${v4}px`;
        }, i * this.ANIMATION_SPEED_MS);
      }
    }
  }

  private _quickSort() {
    let arrayBars = document.getElementsByClassName('bars');
    let animations = getAnimationsForQuickSort(this.barsCount);

    for (let i = 0; i < animations.length; i++) {
      let check = animations[i][0];
      if (check === "pivoton") {
        let pivotBar = animations[i][1];
        const barPivotStyle = <HTMLElement>arrayBars[pivotBar];
        setTimeout(() => {
          barPivotStyle.style.backgroundColor = this.PIVOT_COLOR;
        }, i * this.ANIMATION_SPEED_MS);
      }
      else if (check === "highLightOn") {
        const [barOneIdx, barTwoIdx] = animations[i].slice(1);
        const barOneStyle = <HTMLElement>arrayBars[barOneIdx];
        const barTwoeStyle = <HTMLElement>arrayBars[barTwoIdx];

        setTimeout(() => {
          barOneStyle.style.backgroundColor = this.SECONDARY_COLOR;
          barTwoeStyle.style.backgroundColor = this.SECONDARY_COLOR;
        }, i * this.ANIMATION_SPEED_MS);
      }
      else if (check === "highLightOff") {
        const [barOneIdx, barTwoIdx] = animations[i].slice(1);
        const barOneStyle = <HTMLElement>arrayBars[barOneIdx];
        const barTwoeStyle = <HTMLElement>arrayBars[barTwoIdx];

        setTimeout(() => {
          barOneStyle.style.backgroundColor = this.PRIMARY_COLOR;
          barTwoeStyle.style.backgroundColor = this.PRIMARY_COLOR;
        }, i * this.ANIMATION_SPEED_MS);
      }
      else if (check === "pivotOff") {
        let pivotBar = animations[i][1];
        const barPivotStyle = <HTMLElement>arrayBars[pivotBar];
        setTimeout(() => {
          barPivotStyle.style.backgroundColor = this.PRIMARY_COLOR;
        }, i * this.ANIMATION_SPEED_MS);
      }
      else if (check === "swap") {
        const [barIndexOne, barValueOne, barIndexTwo, barValueTwo] = animations[i].slice(1);
        const barOneStyle = <HTMLElement>arrayBars[barIndexOne];
        const barTwoeStyle = <HTMLElement>arrayBars[barIndexTwo];

        setTimeout(() => {
          barOneStyle.style.height = `${barValueOne}px`;
          barTwoeStyle.style.height = `${barValueTwo}px`;
        }, i * this.ANIMATION_SPEED_MS);

      }
    }

  }

}
