import { Component, Input, OnDestroy, 
  ViewChild, 
  ViewContainerRef, 
  ComponentFactoryResolver, 
  ComponentFactory,
ComponentRef } from '@angular/core';

import { ActionButtonComponent } from '../action-button/action-button.component';

var components = {
  'button': ActionButtonComponent
}

@Component({
  selector: 'app-dynamic-action-component',
  templateUrl: './dynamic-action-component.component.html',
  styleUrls: ['./dynamic-action-component.component.scss']
})
export class DynamicActionComponentComponent implements OnDestroy {

  @ViewChild("actionComponentContainer", { read: ViewContainerRef }) container;

  @Input() set type(type: string){
    if(type)
      this.createActionComponent(type);
    else if(this.componentRef)
      this.componentRef.destroy();
  };
  private onClickCallBack;

  private text: string;

  public componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  createActionComponent(type) {
    this.container.clear(); 
    const factory: ComponentFactory<any> = 
      this.resolver.resolveComponentFactory(components[type]);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.text = this.text;
    let subscription = this.componentRef.instance.onClick.subscribe(
      () => {
        subscription.unsubscribe();
        this.handleClick()
      }
    );
  }

  setText(text){
    this.text = text;
  }

  setOnClickListener(callback) {
    this.onClickCallBack = callback;
  }

  handleClick(){
    this.onClickCallBack();
  }

}
