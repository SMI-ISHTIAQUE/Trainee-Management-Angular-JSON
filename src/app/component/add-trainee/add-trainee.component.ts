import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {TraineesService} from '../../trainees.service';

@Component({
  selector: 'app-add-trainee',
  templateUrl: './add-trainee.component.html',
  styleUrls: ['./add-trainee.component.css']
})
export class AddTraineeComponent implements OnInit {

  constructor(private trainee: TraineesService) { }

  addTrainee = new FormGroup({
    id : new FormControl(''),
    name : new FormControl(''),
    email : new FormControl(''),
    cell : new FormControl(''),
  });
  message : boolean = false;
  ngOnInit(): void {
  }

  SaveData(){

    // console.log(this.addTrainee.value);
    this.trainee.saveTraineeData(this.addTrainee.value).subscribe((result)=>{
      console.log(result);
      
      this.message=true;
      this.addTrainee.reset( {} );
    });

  }

  removeMessage(){

    this.message= false;
  }

}
