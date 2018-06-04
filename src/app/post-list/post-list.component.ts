import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  items = [
    {
      name: 'Mon premier post',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, inventore veritatis.',
      love: 1
    },
    {
      name: 'Mon deuxième post',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, inventore veritatis.',
      love: -1
    },
    {
      name: 'Encore un post',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, inventore veritatis.',
      love: 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}