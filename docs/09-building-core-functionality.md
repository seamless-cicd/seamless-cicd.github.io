# Building the Core Pipeline Functionality

# Modeling and Storing Data

### Data Model

### Data Storage

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
