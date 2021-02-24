import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import {MatPaginator} from '@angular/material/paginator'
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements AfterViewInit {
  displayedColumns: string[] = ['issueCode', 'serviceCode', 'status', 'registerTimestamp','details'];
  dataSource = new MatTableDataSource<any>();
  issues:any = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getIssues();
  }
  getIssues(){
    this.issues= [];
    this.rest.getIssues().subscribe((data: {}) => {
      this.issues=data;
      this.dataSource.data=(this.issues)
      console.log(this.issues);
      
    });
    
  
    
  }

  logOut():void{
      this.router.navigate(["/login"]);
  
  }
  details():void{
    this.router.navigate(["/details"]);

}
  add(){
    this.router.navigate(['/issue-add']);

  }
  
}