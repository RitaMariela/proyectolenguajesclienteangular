import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() addCommentData: any = {issueCode:0,descripcion:''};
  CommentForm: FormGroup;
  errorMessage: any;


  
  constructor(private fb: FormBuilder,public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getIssueCode(this.route.snapshot.params['issueCode']).subscribe((data: {}) => {
      console.log(data);
      this.addCommentData = data;
    });
  }

  addNewComment(){
    this.rest.insertNewComment(this.addCommentData).subscribe((result) => {
      this.router.navigate(['/issue']);
  
    }, (err)=>{
      console.log(err);
    });

}
}
