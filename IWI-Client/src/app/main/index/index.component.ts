import { Component, OnInit } from '@angular/core';
import { CentralService } from '../../services/central.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private centralService: CentralService,) { }

  ngOnInit() {
  }

}
