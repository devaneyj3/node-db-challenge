const express = require('express')

const db = require('./db-helpers');

const error = require('./middleware')

const router = express.Router();

//POST add a resource

router.post('/resource', async (req, res) => {
    await db.addResource(req.body)
    try {
        res.status(200).send(req.body)
    } catch {
        error.dbError()
    }
})

//GET RESOURCES
router.get('/resource', async (req, res) => {
    const getResourcesList = await db.getResources();
    try {
        res.status(200).send(getResourcesList)
    } catch {
        error.dbError()
    }
})


//POST A PROJECT
router.post('/project', async (req, res) => {
    await db.addProject(req.body)
    try {
        res.status(200).send(req.body)
    } catch {
        error.dbError()
    }
})

//GET PROJECTS
router.get('/project', async (req, res) => {
    const getProjectList = await db.getProject();
    try {
        res.status(200).send(getProjectList)
    } catch {
        error.dbError()
    }
})
//ADD A TASK
router.post('/task', async (req, res) => {
    await db.addTask(req.body)
    try {
        res.status(200).send(req.body)
    } catch {
        error.dbError()
    }
})

//GET A TASK WITH PROJECT NAME AND DESCRIPTION
router.get('/project_tasks', async (req, res) => {
    const getProjectsAndTasks = await db.getProjectTask
        ();
    console.log(getProjectsAndTasks)
    try {
        res.status(200).send(getProjectsAndTasks
)
    } catch {
        error.dbError()
    }
})

// STRECTH 

//GET PROJECT BY ID
router.get('/project/:id', async (req, res) => {
    const { id } = req.params;
    const getProjectsAndTasks = await db.getProjectID(id)
    console.log(getProjectsAndTasks)
    try {
        res.status(200).send(getProjectsAndTasks
        )
    } catch {
        error.dbError()
    }
})
module.exports = router;

