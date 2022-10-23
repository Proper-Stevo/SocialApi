const { Thoughts, User } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thoughts.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // Get a thought
    getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(course)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Create a thought
    createThoughts(req, res) {
        Thoughts.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // Delete a thought
    deleteThought(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : User.deleteMany({ _id: { $in: course.users } })
            )
            .then(() => res.json({ message: 'Thought and users deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    // Update a thought
    updateThought(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !course
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

addReaction(req, res) {
    console.log(req.bodym, req.params)
    Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
    )
        .then((user) => {
            !user
                ? res.status(404).json({ message: "No Thought found with that ID!" })
                : res.json(user)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
},

removeReaction(req, res) {
    Thoughts.findOneAndUpdate(
        { _id},
        {},
        {}
    )
}
};