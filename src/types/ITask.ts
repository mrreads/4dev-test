export enum EStatus {
    'в очереди' = 0,
    'в работе' = 1,
    'выполнено' = 2
}

export enum EPriority {
    'низкий' = 0,
    'средний' = 1,
    'высокий' = 2
}

export default interface ITask {
    id: string             
    status: EStatus,
    priority: EPriority,
    title: string,
    description: string,
    schedule: {
        creation_time: string
    },
    author_name: string
}