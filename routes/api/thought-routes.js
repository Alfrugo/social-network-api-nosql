const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/Thought-controller')

// get all and post

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// get put delete by id

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// reactions

router
    .route('/:thoughtById/reactions')
    .post(addReaction)
    .delete(removeReaction)


module.exports = router;