import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './data.service';
import { DataModel } from './data-model';

import { DummyComponent } from './dummy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,

    DummyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  data$: Observable<DataModel>;

  constructor(private itemsService: DataService) {
    this.data$ = this.itemsService.getData(5);
  }
}
