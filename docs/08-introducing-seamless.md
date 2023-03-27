# Introducing Seamless

Seamless is an open-source CI/CD pipeline for containerized microservices (more description here)

## Setting up Seamless
Requires AWS, AWS CLI, CDK, npm, etc.
```shell
npm install -g seamless
seamless init
```

to initialize a `.env` file with needed environment variables
`seamless deploy` to provision Seamless infrastructure in AWS
A link to the user’s frontend dashboard is output from the CLI

## Using Seamless

### Connecting Services to the Pipeline
GIF of filling of the Pipeline Setup and Service Setup forms
Maybe: Explain what is expected of the user to setup Integration Tests

### Running the Pipeline
Gif of Run page (dual view showing commit and then trigger of pipeline)
Discuss the 3 ways to trigger: Main, Open PR, Sync PR
Choice of triggers
Main for trunk-based development
Open PR and Sync PR for branch-based development
Webhooks
Setting up a service places a webhook in GitHub repo, links repo with pipeline
Upon trigger action backend API receives webhook, parses it, initiates correct pipeline run
Manual pipeline execution
Rerun feature manually executes pipeline from the UI

### Monitoring the Pipeline
GIF of the Run page, with live status updates and logging
UI has websocket connection - run, stage and log data updated in real time
Status can be followed from idle to in progress and eventual success or failure
Allows for identifying and troubleshooting of errors
Notifications via Email, Slack
AWS SNS
