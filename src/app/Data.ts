export interface Category {
  id: string,
  name: string,
  code: string
}

export interface Task {
  task: string,
  status: string,
  categoryId: string,
  categoryName: string
}

export interface SaveTask {
  categoryId: string,
  task: string,
  dueDate: string,
  repeatDate: string
}
