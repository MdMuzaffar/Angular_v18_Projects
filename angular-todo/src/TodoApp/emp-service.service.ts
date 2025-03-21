import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from './task';

@Injectable({
  providedIn: 'root',
})
export class EmpServiceService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'https://freeapi.gerasim.in/api/JWT';

  getAllTaskList(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(this.apiUrl + 'GetAllTaskList');
  }
}
