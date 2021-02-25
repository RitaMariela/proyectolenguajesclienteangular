import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-see-details',
  templateUrl: './see-details.component.html',
  styleUrls: ['./see-details.component.css']
})
export class SeeDetailsComponent implements OnInit {
  @Input() detailsData: any = { issueCode:0, description:'', registerTimestamp:'', status:''};
  studentForm: FormGroup;
  errorMessage: any;

  constructor(private fb: FormBuilder,public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getDetails(this.route.snapshot.params['issueCode']).subscribe((data: {}) => {
      console.log(data);
      this.detailsData = data;
    });
  }
  
  addComment(issueCode):void{
    this.router.navigate(["/addComment/"+issueCode]);
}
goBack():void{
  this.router.navigate(["/issues"]);
}

}
