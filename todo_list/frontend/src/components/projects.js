import React from "react";


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.id}
            </td>
            <td>
                {project.name}
            </td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    let list = ''
    if (projects.results !== undefined)
        list = projects.results.map((project) => <ProjectItem project={project} />)
    return (
        <table>
            <caption>Список проектов</caption>
            <th>
                id
            </th>
            <th>
                Проект
            </th>

            {list}
        </table>
    )
}


export default ProjectList
