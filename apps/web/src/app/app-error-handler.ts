import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, NgZone } from "@angular/core";

import { MessageService } from "primeng/api";

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(
    private ngZone: NgZone,
    private messageService: MessageService,
  ) {
    super();
  }

  public handleError(err: any): void {
    if (err instanceof HttpErrorResponse) {
      this.handleHttpErrorResponse(err);
      return;
    }
    console.error(err);
    this.messageService.add({
      severity: 'error',
      summary: 'Esta aplicação encontrou um erro',
      detail: 'Contate o suporte técnico.',
    });
    // Recomendado: fazer logging desse erro em um serviço de logger online.
  }

  private handleHttpErrorResponse(err: HttpErrorResponse): void {
    this.ngZone.run(() => {
      if (err.status === 401) {
        this.messageService.add({
          severity: 'warn',
          summary: `Usuário não autenticado`,
          detail: 'Redirecionando para a página de login...',
        });
        return;
      }
      this.messageService.add({
        severity: 'error',
        summary: `Erro de servidor: [${err.status}] ${err.statusText}`,
        detail: err.error,
      });
    });
  }

}
