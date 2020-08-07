import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProject } from './interface/project.interface';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  private _baseUrl: string = 'https://api.spacexdata.com/v3/';

  constructor(private _http: HttpClient) { }

  /** GET launches from the server */
  public getLaunches(query: string): Observable<IProject[]> {
    let url = this._baseUrl + 'launches';
    if(query) {
      url += `${query}`
    }
    return this._http.get<IProject[]>(url);
  }

  public getNativeWindow(): Window {
    return window;
  }

}
