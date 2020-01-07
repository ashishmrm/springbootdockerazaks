import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {_throw} from 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';
import {map} from 'rxjs/operators';

@Injectable()
export class CriccBuzzInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
        map(event => {
          if (event instanceof HttpResponse) {
            event = event.clone({
              headers: event.headers.set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods','GET, POST')
            });
          }
          return event;
        })
      );
  }
}
