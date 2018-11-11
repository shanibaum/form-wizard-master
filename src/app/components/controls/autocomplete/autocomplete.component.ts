import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, OnInit, Renderer2} from '@angular/core';
import {Observable} from 'rxjs';
import {AbstractTextControlComponent} from '../abstract-text-control/abstract-text-control.component';
import {map, startWith} from 'rxjs/operators';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true,
    }
    ]
})
export class AutocompleteComponent extends AbstractTextControlComponent implements OnInit, ControlValueAccessor {
  options;
  filteredOptions: Observable<any[]>;
  lastSelectedValue;
  shouldShowAllOption = true;
  allowFreeValue = false;
  private propagateChange = (_: any) => { };

  constructor(elementRef: ElementRef, renderer: Renderer2, private httpClient: HttpClient) {
    super(elementRef, renderer);
  }

  ngOnInit() {
    super.ngOnInit();
    this.allowFreeValue = this.control.allowFreeValue;
    this.lastSelectedValue = this.control.value || '';
    if (this.control.api != null) {
      this.httpClient.get(this.control.api).subscribe((res) => {
        this.options = res;
        this.initializeOptions();
      });
    } else {
      this.options = this.control.options || [];
      this.initializeOptions();
    }
  }

  initializeOptions() {
    if (this.shouldShowAllOption) {
      this.filteredOptions = this.controller.valueChanges
        .pipe(
          startWith(''),
          map(option => option ? this.filterOptions(option) : this.options.slice())
        );
    }
    this.shouldShowAllOption = false;
  }

  private getOptionsFromList(value) {
    for (let i = 0 ; i < this.options.length ; i++) {
      if (this.options[i].value.toLowerCase() === value.toLowerCase()) {
        return this.options[i];
      }
    }

    return null;
  }

  filterOptions(text) {
    return this.options.filter(option => option.value.toLowerCase().indexOf(text.toLowerCase()) === 0);
  }

  onInputChange(event) {
    setTimeout(() => {
      if (event.target.value !== this.control.value) { // means that an option was selected from list
        return;
      }

      if (this.lastSelectedValue != null && event.target.value.toLowerCase() !== this.lastSelectedValue.toLowerCase()) {
        this.onChange(event);
      }
    }, 100);
  }

  onChange(item): void {
    const obj = {
      value: undefined
    };

    const emitValue = () => {
      obj.value = item.option != null ? item.option.value : item.target.value;
      if (this.lastSelectedValue !== obj.value) {
        this.lastSelectedValue = obj.value;
        this.shouldShowAllOption = false;
        this.propagateChange(obj);
      }
    };

    if (!this.allowFreeValue && item.option == null && this.control.value !== '') {
      const itemFromList = this.getOptionsFromList(this.control.value);
      if (itemFromList) {
        item = { option: itemFromList };
        this.control.setValue(itemFromList.value, {emitEvent: false});
        emitValue();
      } else {
        obj.value = this.lastSelectedValue;
        this.control.setValue(obj.value, {emitEvent: true});
      }
    } else {
      emitValue();
    }
  }

  public onBlur() {
    this.shouldShowAllOption = true;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }
}
