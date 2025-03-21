export interface ITask {
  itemId: number;
  itemName: string;
  itemDate: Date;
  dueDate: Date;
  createdDate: Date;
  taskDescription: string;
  isComplete: false;
  tags: string;
  completedOn: Date;
}

export interface ApiResponseModel {
  message: string;
  result: string;
  data: any;
}
