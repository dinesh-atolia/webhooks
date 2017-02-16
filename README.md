Plans:
- As per our discussion we need a way to implement scalable webhooks.
- We may have around 1000 or billions of urls to call, so doing this task inside the node process which is serving the json APIs is not a good idea.
- Instead we should have a way to push messages to somewhere like RabbitMQ, and another running process will fetch these messages and call the webhook url one by one independently.
- For current sake of simplicity we can use "node-resque" (https://github.com/taskrabbit/node-resque) background worker which stores the task queue in redis.

Please have a look in to "app/jobs/notifyUserDeactivate.js" and "app/controllers/users.js" file.

Need to include:
- Complete background worker code
- Proper boilerplates
- Build scripts
- ESLint
- Configs (Like for ports, db urls)
- Environment wise configs
