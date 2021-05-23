import React from 'react'


const UserItem = ({user}) => {
   return (
       <tr>
           <td>
               {user.username}
           </td>
           <td>
               {user.first_name}
           </td>
           <td>
               {user.last_name}
           </td>
           <td>
               {user.email}
           </td>
       </tr>
   )
}

const UserList = ({users}) => {
   return (
       <table>
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
           {users.map((user) => <UserItem user={user} />)}
       </table>
   )
}


export default UserList
