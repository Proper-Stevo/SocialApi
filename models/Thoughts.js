const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const moment = require('moment');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (date) => {
        //same format as before
        const formattedData = moment(date).format("MMM DD, YYYY [at] hh:mma")
        return formattedData
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false,
  },
);

//virtual that retrieces thoughts reactions array!
thoughtSchema.virtual('reactionCount').get(function (){
    return this.reactions.length;
})
const Thoughts = model('thought', thoughtSchema);

module.exports = Thoughts;
