import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
//Hola
  @Input() userData = {name:'', firstSurname:'', secondName:'',email:'',password:'', phone:0,secondContact:0,address:''};
  
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  addUser(){
    this.rest.addUser(this.userData).subscribe((result) => {
      this.router.navigate(['/login']);

    }, (err)=>{
      console.log(err);
    });
  }
}