import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {
  @Input() issueData = {description:'',contactPhone:0,contactEmail:'',address:'',serviceCode:0};
  services = [
    {valor:1, name:'Cable'},
    {valor:3, name:'Mobile phone'},
    {valor:4, name:'Internet'},
    {valor:6, name:'Landline'}
  ];
  public seleccionada: number = this.services[0].valor;
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
  }

  addIssue(){
    this.issueData.serviceCode=this.seleccionada;
    this.rest.addIssue(this.issueData).subscribe((result) => {
     

    }, (err)=>{
      console.log(err);
    });
  }

}
