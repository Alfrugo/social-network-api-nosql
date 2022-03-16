const { Schema, model, Types } = require('mongoose');


const ThoughSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 20,
        max: 400
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true
    },
    reactionSchema: [
        reactionSchema
    ],
},
{
    toJSON: 
        {
            virtuals: true,
            getters: true
        },
        id: false
}
);

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maz: 200
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
},
{
    toJSON: {
        getters: true
    }
}
);

ThoughSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
}) 

const Thought = model('Thought', ThoughSchema);

module.exports = Thought;

