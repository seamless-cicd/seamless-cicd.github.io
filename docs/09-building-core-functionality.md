# Building the Core Pipeline Functionality

# Modeling and Storing Data

### Data Model

The heart of Seamless's design is to use a single pipeline for multiple microservices to achieve the goal of pipeline reusability. The data model chosen needed to be congruent with this design. Thus there is a 1 to many relationship between Pipeline, Service, Run and Stages. A pipeline consists of many services, a service consists of many runs, and a run consists of many stages.

_1:M diagram here_

### Data Storage

Seamless uses a relational database (Postgres on RDS) to store pipeline, service, run and stage data. This was chosen over a NoSQL database option for several reasons. First, Seamless has a fixed schema and data format where data is generally not accepted from unpredictable external sources. Next, querying is usually limited to top-level entities. For example, queries to get all active runs, or a query to get all stages for a given `runId`. Given the limited nature of these queries Seamless opted to avoid the overfetching that could result from using a NoSQL option. Lastly, usage is not read or write heavy since pipeline execution and stages are long running processes where writes are only made at the beginning or end.

For log data Seamless uses a caching stratgey with Redis on ElastiCache. Pipeline Task Containers generate logs through `stdout` and `stderr` and these logs are chaced for two principal reasons.

First, logs lose relevance over time and do not need to be referenced long after they were created. The expiry for Redis keys is set to 48 hours. This increases the efficiency of Seamless since there is not a heavy burden of storing irrelevant historical log data. Second, when compared to a relational database caches support a higher volume of writes from log streams and can also be queried more quickly for displaying log data in real time on the frontend dashboard. For these reasons a cache was an optimal tool for the storage of log data.

# Pipeline Orchestration

We chose state machines because:
They make it easier to create, manage, and debug complex workflows, using conditional logic
They offer built-in error-handling
State machines also have these tradeoffs:
States must be defined in advance, so dynamically adding new steps may not be possible
A centralized orchestrator requires additional resources
Within the state machines category we considered:
AWS Step Functions: We chose this due to scalability and AWS integration
XState: We didn’t choose this because it was more difficult to scale and persist state, compared to Step Functions.
