import {Component} from '@angular/core';
import {TaskCategoryService} from "../services/task-category.service";
import {Category, SaveTask, Task, UpdateTaskIsCompleted} from "../Data";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  listOfCategory: Category[] | undefined;
  listOfTask: Task[] | undefined;
  title: string = '';
  categoryCode: string = '';
  selectedCategoryId: string = '';
  showTaskField: boolean = true;

  constructor(private categoryService: TaskCategoryService) {
  }

  ngOnInit() {
    this.getAllTaskCategory();
  }

  getAllTaskCategory() {
    this.categoryService.getAllProducts().subscribe((response: any) => {
      if (response && response.code === 200) {
        this.listOfCategory = response.data.categoryDtoList;
        if (this.listOfCategory && this.listOfCategory.length > 0) {
          this.title = this.listOfCategory[0].name;
          this.categoryCode = this.listOfCategory[0].code;
          this.getTaskByCategoryCode(this.categoryCode, this.title);
        }
      }
    })
  }

  getTaskByCategoryCode(code: string, name: string) {
    this.selectedCategoryId = code;
    this.categoryService.getTaskByCategoryCode(code).subscribe((response: any) => {
      if (response && response.code === 200) {
        this.listOfTask = response.data.taskResponseDtoList;
        if (this.listOfTask && this.listOfTask.length > 0) {
          this.title = name;
          this.showTaskField = code !== 'Completed';
        }
      }
    })
  }

  addTask(data: SaveTask, selectedCategoryCode: string) {
    data.categoryCode = selectedCategoryCode;
    this.categoryService.saveTask(data).subscribe((response: any) => {
      if (response && response.code === 200) {
        this.getTaskByCategoryCode(selectedCategoryCode, this.title);
      }
    })
  }

  updateTaskIsCompleted(id: string, isCompleted: boolean, code: string) {
    const data: UpdateTaskIsCompleted = {id, isCompleted}
    this.categoryService.updateTaskIsCompleted(data).subscribe((response: any) => {
      if (response && response.code === 200) {
        this.getTaskByCategoryCode(code, this.title);
      }
    })
  }
}
