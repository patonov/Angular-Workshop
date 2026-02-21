import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';

export const secondInterceptor: HttpInterceptorFn = (req, next) => {
  
  const API = '/api';
  const { apiUrl } = environment;

  if(req.url.startsWith(API)){
    req = req.clone({
      url: req.url.replace(API, apiUrl)
    })
  }
  
  return next(req);
};
