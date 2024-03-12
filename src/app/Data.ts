export interface Category {
  id: string,
  name: string,
  code: string
}

export interface Task {
  id: string,
  task: string,
  status: string,
  categoryCode: string,
  categoryName: string,
  isCompleted: boolean
}

export interface SaveTask {
  categoryCode: string,
  task: string,
  dueDate: string,
  repeatDate: string
}

export interface UpdateTaskIsCompleted {
  id: string,
  isCompleted: boolean
}
