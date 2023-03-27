# Introduction

Modern applications need to integrate and deliver code changes quickly while keeping code high-quality and bug-free. CI/CD, or continuous integration and delivery, emerged as a philosophy and practice aimed at automating the processes of building and testing code, merging it into a shared repository, packaging it into a deployable artifact, and delivering it to production, without sacrificing reliability.

A system employing a microservice architecture faces additional testing and deployment challenges. Unlike a single application with a single deployment pipeline, a CI/CD system for microservice architectures needs to consider how it will define and run pipelines for individual microservices. Moreover, a microservice should function properly within the context of the entire system before it is deployed to production. Testing needs to be in place to handle that.

This case study describes how we built Seamless, a self-hosted, open-source, cloud-native CI/CD solution designed for microservices. **Seamless** showcases a low-configuration platform for automating the testing, building, and deployment of containerized microservice applications.