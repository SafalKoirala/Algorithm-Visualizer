import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() selectedAlgorithm: EventEmitter<string> = new EventEmitter<string>();
  @Output() randomizeBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public pickAlgorithm(value: string): void {
    this.selectedAlgorithm.emit(value);
  }

  public randomizeBars(): void {
    this.randomizeBar.emit();
  }
}
