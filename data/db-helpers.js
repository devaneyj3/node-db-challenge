
const db = require('./db-config');

module.exports = {
    addResource,
    getResources,
    addProject,
    getProject,
    addTask,
    getProjectTask
}

//add a resource

function addResource(resource) {
    return db('Resource').insert({'Name': resource.Name, 'Description': resource.Description})
}

// GET Resources

function getResources() {
    return db('Resource')
}

//add a project

function addProject(project) {
    return db('project').insert({"Name": project.Name, "Description": project.Description, "Completed": project.Completed})
}

//GET Project

function getProject() {
    return db('project')
}

//add a task

function addTask(task) {
    return db('task').insert({"Description": task.Description, "Notes": task.Notes, "Completed": task.Completed, "Project_ID": task.Project_ID })
}

//GET TASK WITH PROJECT

function getProjectTask() {
    return db('project as p')
        .join('task as t')
        .select('p.Name as Project_Name', 'p.Description as Project_Description', "p.Completed as Project_Complete", "t.Description as Task_Description", "t.Notes as Task Notes", "t.Completed as Task_Completed")
}