
const db = require('../data/db-config');

module.exports = {
    addResource,
    getResources,
    addProject,
    getProject,
    addTask,
    getProjectTask,
    getProjectID
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
    return db('task as t')
        .join('project as p', 't.Project_ID', 'p.id')
        .select('t.id', "t.Description as Task_Description", "t.Notes as Task Notes", "t.Completed as Task_Completed", "p.Name as Project_Name", 'p.Description as Project_Description', "p.Completed as Project_Complete", )
}

//GET ALL INFO FOR PROJECT
function getProjectID(id) {
    return db('project as p')
        .join('task as t', 't.Project_ID', 'p.id')
        .join('Resource as r')
        .where('p.ID', id)
        .join('Project_Resource as pr', 'pr.Project_ID', 'p.ID')
        .where('pr.Resource_ID', 'r.ID')
        .select('p.id', "p.Name as Project_Name", 'p.Description as Project_Description', "p.Completed as Project_Complete", "t.Description as Task_Description", "t.Notes as Task Notes", "t.Completed as Task_Completed", "r.Name as Resource_Name", "r.Description as Resource_Description")
    
    
    // select * from project as p
    // join task as t
    // on t.Project_ID = p.id
    // join Project_Resource as pr
    // join Resource as r
    // on pr.Project_ID = p.id
    // and pr.Resource_ID = r.id
    // where p.id = 1
}