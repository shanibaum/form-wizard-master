import {Injectable, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Injectable()
export class FormService implements OnDestroy {
  private lastFormValue;
  protected subscription = new Subscription();

  constructor(private form: FormGroup) {
    this.lastFormValue = this.form.value;

    this.subscription.add(this.form.valueChanges.subscribe((changes) => {
      // this.notifyOnChangedFields(changes);
      this.lastFormValue = changes;
    }));

    this.subscription.add(this.form.statusChanges.subscribe((status) => {
      // console.log(status);
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // notifyOnChangedFields(changes) {
  //   const lastValues = Object.keys(this.lastFormValue);
  //   const diffs: {key: {oldValue, newValue}} = undefined;
  //
  //   for (let i = 0 ; i < lastValues.length ; i++) {
  //     if (this.lastFormValue[lastValues[i]] !== changes[lastValues[i]]) {
  //       diffs[lastValues[i]] = {'oldValue': this.lastFormValue[lastValues[i]], 'newValue': changes[lastValues[i]]}
  //     }
  //   }
  //
  //   this.customService.valueChanges(diffs)
  // }

}
