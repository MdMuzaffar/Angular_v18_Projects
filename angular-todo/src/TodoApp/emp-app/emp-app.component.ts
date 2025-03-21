import { Component, inject, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { ApiResponseModel, ITask } from '../task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp-app.component.html',
  styleUrl: './emp-app.component.css',
})
export class EmpAppComponent implements OnInit {
  masterService = inject(EmpServiceService);

  taskList: ITask[] = [];

  ngOnInit(): void {
    this.loadAllTask();
  }

  loadAllTask() {
    this.masterService.getAllTaskList().subscribe((res: ApiResponseModel) => {
      this.taskList = res.data;
    });
  }
}
