# Expanding our Core Feature Set

## Real-time Monitoring
We used AWS WebSockets API Gateway to deliver real-time notifications from the state machine to the React dashboard.
Diagram of WebSockets setup

## Logging
We implemented a system to capture logs and custom annotations from all executor containers. These are stored in Redis and expired after 48 hours.
Diagram of Redis setup

## Security
Most AWS resources are provisioned in private subnets. The API Gateways are public-facing.
We deploy a bastion host in a public subnet, in case a developer needs to SSH in and interact with the resources in private subnets, e.g. seed the database or inspect the Redis cache.
We use OAuth to create authenticated routes and configure the user’s linked Github repos on their behalf.

## Rollbacks
All Docker images are tagged with the git commit hash. The UI displays all possible rollback images so the user can choose any one to roll back to.

## Designing for Performance and Scale
Organizations using microservices often have large systems that grow overtime as new microservices are added. Because of this, we wanted to consider scale.
Parallel Execution of State Machines
Parallel Pipeline Executions: We can have multiple AWS Step Function executions at the same time, enabling us to deploy multiple microservices simultaneously.
Parallel Execution of Steps Within a State Machine
Parallel execution of pipeline steps minimizes overall execution time
Seamless executes in parallel static code analysis and unit testing
Serverless Backend on ECS Fargate, with Load Balancer
Fargate will spin up as many containers as needed, to handle any number of incoming requests.

## Demo Stacks
