import { Component, OnInit } from '@angular/core';
import {TraineesService} from '../../trainees.service';

@Component({
  selector: 'app-list-trainee',
  templateUrl: './list-trainee.component.html',
  styleUrls: ['./list-trainee.component.css']
})
export class ListTraineeComponent implements OnInit {

  constructor(private trainee : TraineesService) { }

  traineeData : any =[];
  dtOptions:DataTables.Settings={};


  ngOnInit(): void {

    this.dtOptions = {
      pagingType:'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 15, 20],
      processing: true
    }

    this.trainee.getAllTrainee().subscribe((allData)=> {
      console.log(allData);
      this.traineeData = allData;
    }
    
    );
  }
  
  deleteTrainee(trainee_id: any){


    this.trainee.deleteTrainee(trainee_id).subscribe((result)=>{
      console.log(result);
      this.ngOnInit();

    });
    
  }

}
