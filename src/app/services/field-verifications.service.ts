import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

export enum FieldVerifications {
  Sight = 'sightVerification',
  Click = 'clickVerification',
  Rekey = 'rekeyVerification',
  Blind = 'blindVerification'
}

@Injectable()
export class FieldVerificationsService {
  private renderer: Renderer2;
  public paymentError = {fieldLogicalId: '', error: {}, validations: {name: '', arguments: ''}};

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  static sightVerificationInterval(elem) {
    const rect = elem.getBoundingClientRect();
    const html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

  static clearSightVerificationInterval(sightVerificationInterval) {
    clearInterval(sightVerificationInterval);
  }

  static rekeyVerification(elem, elemController, renderer) {
    return new Promise((resolve, reject) => {
      const listener = renderer.listen(elem, 'click', () => {
        const elemValue = elemController.value;
        elemController.patchValue('');
        const blurListener = renderer.listen(elem, 'focusout', () => {
          if (elemValue === elemController.value) {
            resolve();
            blurListener();
          }
        });
        listener();
      });
    });
  }

  sightVerification(elem) {
    return new Promise((resolve, reject) => {
      const sightVerificationInterval = setInterval(() => {
        if (FieldVerificationsService.sightVerificationInterval(elem)) {
          FieldVerificationsService.clearSightVerificationInterval(sightVerificationInterval);
          resolve();
        }
      }, 1000);
    });
  }

  clickVerification(elem) {
    return new Promise((resolve, reject) => {
      const listener = this.renderer.listen(elem, 'click', function() {
        listener();
        resolve();
      });
    });
  }

  blindVerification(elem, elemController) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          elemController.patchValue('');
        }, 0);
    });
  }

}
