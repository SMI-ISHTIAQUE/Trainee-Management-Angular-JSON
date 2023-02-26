import { Component } from '@angular/core';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  constructor(private user : UsersService) { }

  userData : any =[];
  dtOptions:DataTables.Settings={};


  ngOnInit(): void {

    this.dtOptions = {
      pagingType:'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 15, 20],
      processing: true
    }

    this.user.getAllUsers().subscribe((allData)=> {
      console.log(allData);
      this.userData = allData;
    }
    
    );
  }


}
