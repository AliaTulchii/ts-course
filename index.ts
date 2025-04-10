import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

interface ToDo{
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((res) => {
    const todo = res.data as ToDo

    const id = todo.id
    const title = todo.title
    const finished = todo.completed

    logTodo(id, title, finished)
});


function logTodo(id: number, title: string, completed:boolean){
    console.log(`
        todo ID: ${id}
        todo Title: ${title}
        is todo finished: ${completed}
        `)
}
