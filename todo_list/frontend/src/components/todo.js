import React from 'react'


const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.created_at}
            </td>
            <td>
                {todo.updated_at}
            </td>
            <td>
                {todo.created_user}
            </td>
            <td>
                {todo.is_active}
            </td>
        </tr>
    )
}

const TodoList = ({todos}) => {
    let list = ''
    if (todos.results !== undefined)
        list = todos.results.map((todo) => <TodoItem todo={todo} />)
    return (
        <table>
            <caption>Список заметок</caption>
            <th>
                Проект
            </th>
            <th>
                Текст заметки
            </th>
            <th>
                Время создания
            </th>
            <th>
                Время обновления
            </th>            <th>
                Пользователь, создавший заметку
            </th>            <th>
                Активно
            </th>
            {list}
        </table>
    )
}


export default TodoList