import * as './express'
import * as './mongoose'


consr start = () => {
  mongoose.connect(() => {
    const app = express.init();
    app.listen(3000, 'mongo://mongo-url')
  })
}
