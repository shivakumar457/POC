import {Component,OnInit} from "@angular/core";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})

export class LandingComponent implements OnInit {

  
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  DataCtrl = new FormControl();
  filteredJsonData: Observable<string[]>;
  detailedData: string[] = [];
  allData: string[] = ['Stannous Fluoride', 'Acetaminophen', 'Stannous Flouride', 'Aluminium Zirconium', 'Sodium Flouride'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor() {
    this.filteredJsonData = this.DataCtrl.valueChanges.pipe(
      startWith(null),
      map((data: string | null) => data ? this._filter(data) : this.allData.slice()));
  }
  
  
  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      if ((value || '').trim()) {
        this.detailedData.push(value.trim());
      }
      if (input) {
        input.value = '';
      }

      this.DataCtrl.setValue(null);
    }
  }

  remove(singleData: string): void {
    const index = this.detailedData.indexOf(singleData);
    if (index >= 0) {
      this.detailedData.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.detailedData.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.DataCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allData.filter(data => data.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
  }

}
