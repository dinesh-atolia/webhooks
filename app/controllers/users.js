import NR from "node-resque"
import {
  queue
} from '../../lib/nr'

export deactivate = (req, res) => {
  // Spoosing we have a collection users with Mongoose model name "User".

  User.findOne({_id: req.user.id}, (error, user) => {
    if (error) {
      return res.status(500).json(error);
    } else if (!user) {
      return res.status.(404).json({
        message: 'user not found'
      })
    }
    user.deactivate = true
    return user.save((error) => {
      if (error) {
        return res.status(500).json(error);
      }

      // Push the id of this user to the background worker task queue.
      queue.connect(function() {
        queue.enqueueIn(3000, 'webhooks', "notifyUserDeactivate", user.id);
      });

      return res.status.(200).json({
        message: 'user deactivated successfully'
      })
    })

  })
}
