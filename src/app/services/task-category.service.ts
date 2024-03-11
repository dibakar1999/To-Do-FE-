import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SaveTask} from "../Data";

@Injectable({
  providedIn: 'root'
})
export class TaskCategoryService {
  HOST_URL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get<any>(`${this.HOST_URL}/category`);
  }

  getTaskByCategoryCode(code: string) {
    return this.http.post(`${this.HOST_URL}/task/list`, {code: code});
  }

  saveTask(data: SaveTask) {
    return this.http.post(`${this.HOST_URL}/task`, data);
  }
}
