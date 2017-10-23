import { Component, Element } from '@stencil/core';


@Component({
  tag: 'ion-buttons',
  host: {
    theme: 'bar-buttons'
  }
})
export class Buttons {
  @Element() private el: HTMLElement;

  protected ionViewDidLoad() {
    const buttons = this.el.querySelectorAll('ion-button') as any;
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('button-type', 'bar-button');
    }
  }

  protected render() {
    return <slot></slot>;
  }
}