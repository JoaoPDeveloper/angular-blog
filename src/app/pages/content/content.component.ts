import { dataFake } from './../../data/dataFake';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string ="https://nerdhits.com.br/wp-content/uploads/2022/07/kobeni-chainsaw-man-1-1200x900.jpg"
  contentTitle:string =""
  contentDescription:string =""
  private id:string | null = '0'

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )
    this.setValuestoComponent(this.id)
  }
  setValuestoComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
