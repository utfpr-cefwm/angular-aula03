import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[artigariaSrcDebounce]',
})
export class SrcDebounceDirective implements OnChanges, OnDestroy {

  private srcDebounced: string = '';

  private src$: Subject<string> = new Subject();

  private subUnsubscribe: Subject<void> = new Subject();

  @Input()
  public artigariaSrcDebounce?: string;

  constructor(
  ) {
    this.src$.pipe(
      takeUntil(this.subUnsubscribe),
      debounceTime(1000),
    ).subscribe(
      (src: string) => this.srcDebounced = src,
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.artigariaSrcDebounce) {
      this.src$.next(this.artigariaSrcDebounce);
    }
  }

  public ngOnDestroy(): void {
    this.subUnsubscribe.next();
    this.subUnsubscribe.complete();
  }

  @HostBinding('attr.src')
  public get src(): string {
    return this.srcDebounced;
  }

}
