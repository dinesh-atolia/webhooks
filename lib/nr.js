import jobs from '../app/jobs'

var connectionDetails = {
  pkg:       'ioredis',
  host:      '127.0.0.1',
  password:  null,
  port:      6379,
  database:  0,
  // namespace: 'resque',
  // looping: true,
  // options: {password: 'abc'},
};

var worker = new NR.worker({connection: connectionDetails, queues: ['webhooks']}, jobs);
worker.connect(function(){
  worker.workerCleanup(); // optional: cleanup any previous improperly shutdown workers on this host
  worker.start();
});

export function queue() {
  var queue = new NR.queue({connection: connectionDetails}, jobs);
  queue.on('error', function(error){ console.log(error); });
  return queue;
}
