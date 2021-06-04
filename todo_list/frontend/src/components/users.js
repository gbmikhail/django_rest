import React from 'react'


const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.firstName}
            </td>
            <td>
                {user.lastName}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    let list = ''
    if (users.results !== undefined)
        list = users.results.map((user) => <UserItem user={user} />)
    return (
        <table>
            <caption>Список пользователей</caption>
            <th>
                username
            </th>
            <th>
                First name
            </th>
            <th>
                Last Name
            </th>
            <th>
                e-mail
            </th>
            {list}
        </table>
    )
}


export default UserList
