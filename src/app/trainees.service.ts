import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TraineesService {

url ='http://localhost:3000/trainee/';

  constructor(private http : HttpClient) { }

  getAllTrainee(){
   return this.http.get(this.url);
  }

  saveTraineeData(data : any){
    console.log(data);
    return this.http.post(this.url, data);
    

  }

  deleteTrainee(id:any){
    return this.http.delete(`${this.url}/${id}`);


  }

  getTraineeById(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  updateTraineeData(id: number, data : any){
    return this.http.put(`${this.url}/${id}`, data);

  }


}
