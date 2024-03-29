import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) { }
    handleError(error: any) {
        const router = this.injector.get(Router);
        if (error instanceof HttpErrorResponse) {
            if (error.status === 404) {
                router.navigate(['error']);
            }
            else if (error.status === 500) {
                router.navigate(['error/error']);
            }
        }
    }
}