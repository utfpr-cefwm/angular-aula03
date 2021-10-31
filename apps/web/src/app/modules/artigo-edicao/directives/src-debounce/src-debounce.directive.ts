import { Directive, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Directive({
  selector: '[artigariaSrcDebounce]',
})
export class SrcDebounceDirective {

  @Input()
  public artigariaSrcDebounce?: string;

  constructor(
  ) {
  }

  @HostBinding('attr.src')
  public get src(): string {
    return this.artigariaSrcDebounce || '';
  }

}
