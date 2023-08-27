import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="../../../assets/img/angular-notice.png"
  contentTitle:string = "noticia 1"
  contentDescription:string = "lorem"
  private id:string | null = "0"

  constructor(private route:ActivatedRoute){
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe( value => 
      this.id = value.get("id")
      )

      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(
                        article => article.id == id
                      )[0]

    
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    
  }
}
