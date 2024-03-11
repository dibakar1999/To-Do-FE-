import {Component} from '@angular/core';
import {TaskCategoryService} from "../services/task-category.service";
import {Category, SaveTask, Task} from "../Data";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  listOfCategory: Category[] | undefined;
  listOfTask: Task[] | undefined;
  categoryName: string = '';
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
          this.categoryName = this.listOfCategory[0].name;
          this.categoryCode = this.listOfCategory[0].code;
          this.getTaskByCategoryCode(this.categoryCode);
        }
      }
    })
  }

  getTaskByCategoryCode(code: string) {
    this.selectedCategoryId = code;
    this.categoryService.getTaskByCategoryCode(code).subscribe((response: any) => {
      if (response && response.code === 200) {
        this.listOfTask = response.data.taskResponseDtoList;
        if (this.listOfTask && this.listOfTask.length > 0) {
          this.categoryName = this.listOfTask[0].categoryName;
          this.showTaskField = this.categoryName !== 'Completed';
        }
      }
    })
  }

  addTask(data: SaveTask, selectedCategoryId: string) {
    data.categoryId = selectedCategoryId;
    this.categoryService.saveTask(data).subscribe((response: any) => {
      if (response && response.code === 200) {
        this.getTaskByCategoryCode(selectedCategoryId);
      }
    })
  }
}
