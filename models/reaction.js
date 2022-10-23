const { Schema, Types } = require('mongoose');
const moment = require('moment')

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
            // finding the correct format for the timestamp was not fun. But through moment.js documentations i found it!
            const formattedData = moment(date).format("MMM DD, YYYY [at] hh:mma")
            return formattedData;
        }
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;