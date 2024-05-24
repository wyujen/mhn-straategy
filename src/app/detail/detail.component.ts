import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  page: string ='';
  id: string ='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.page = params.get('page') ?? ''; // 获取路由参数 page
      this.id = params.get('id') ?? ''; // 获取路由参数 id
    });
  }

}
