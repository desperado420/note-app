import Note from "../models/Note.js"

export const createNote = async(req,res,next) => {
    try{
        console.log(req.body)
        const note = await Note.create(req.body)
        res.status(200).json(note)
    } catch(error){
        next(error)
    }
}


// check its working later
export const deleteNote = async(req, res, next) => {
    try{
        const id = req.body.id
        const delNote = await Note.deleteOne(id)
        res.status(200).json({
            success:true,
            message:"Note deleted successfully"
        })
    } catch(error){
        next(error)
    }
}