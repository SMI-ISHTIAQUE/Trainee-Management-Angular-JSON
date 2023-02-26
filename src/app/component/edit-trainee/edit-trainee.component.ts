import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {TraineesService} from '../../trainees.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-trainee',
  templateUrl: './edit-trainee.component.html',
  styleUrls: ['./edit-trainee.component.css']
})
export class EditTraineeComponent implements OnInit {

  constructor(private trainee: TraineesService, private router: ActivatedRoute) { }

  editTrainee = new FormGroup({
    id : new FormControl(''),
    name : new FormControl(''),
    email : new FormControl(''),
    cell : new FormControl(''),
  });
  message : boolean = false;
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.trainee.getTraineeById(this.router.snapshot.params['id']).subscribe((result: any)=>{
      console.log(result);
      
      this.editTrainee = new FormGroup({
        id : new FormControl(result['id']),
        name : new FormControl(result['name']),
        email : new FormControl(result['email']),
        cell : new FormControl(result['cell']),
      });

    });
  }

  UpdateData(){

    // console.log(this.editTrainee.value);
    this.trainee.updateTraineeData(this.router.snapshot.params['id'],this.editTrainee.value).subscribe((result)=>{
      console.log(result);
      
      this.message=true;
      this.editTrainee.reset( {} );
    });

  }

  removeMessage(){

    this.message= false;
  }
}
