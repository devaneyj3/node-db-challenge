

const dbError = () => {
    return res.status(500).json({ message: "There was a database error" })
}

module.exports = {
    dbError,
}