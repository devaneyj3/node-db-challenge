
const db = require('./db-config');

module.exports = {
    addResource,
    getResources,
    addProject,
    getProject
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