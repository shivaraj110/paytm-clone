const z = require('zod')
const userValidator = z.object({
    username : z.string().email(),
    firstName : z.string(),
    lastName : z.string(),
    password : z.string().min(8)
})
const updateBody = z.object({
    password : z.string().optional(),
    firstName : z.string().optional(),
    lastName : z.string().optional()
})
module.exports = {
    userValidator , updateBody
}