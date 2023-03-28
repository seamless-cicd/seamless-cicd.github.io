# Services

**Method:** `GET`

**Route:** `api/services`

**Response Body:**

```json
[
  {
    "id": "2d4bb3da-a3c2-4bb5-a2da-75482ad962d0",
    "createdAt": "2023-03-24T14:24:36.043Z",
    "updatedAt": "2023-03-24T14:24:36.043Z",
    "name": "My Service",
    "lastRunAt": "2023-03-25T14:00:00.000Z",
    "awsEcsService": "My-ECS-Service-B2D131F4-Q4Nyej21pXj3",
    "awsEcsServiceStaging": "My-ECS-Staging-B2D131F4-Q4Nyej21pXj3",
    "triggerOnMain": true,
    "triggerOnPrOpen": true,
    "triggerOnPrSync": true,
    "useStaging": false,
    "autoDeploy": false,
    "githubRepoUrl": "https://github.com/my-repo",
    "unitTestCommand": "npm run test",
    "integrationTestCommand": "npm run integration",
    "codeQualityCommand": "npm run lint",
    "dockerfilePath": "./dockerPath",
    "dockerComposeFilePath": "./dockerComposePath",
    "pipelineId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e1"
  }
]
```

---

**Method:** `GET`

**Route:** `api/services/serviceId`

**Response Body:**

```json
{
  "id": "2d4bb3da-a3c2-4bb5-a2da-75482ad962d0",
  "createdAt": "2023-03-24T14:24:36.043Z",
  "updatedAt": "2023-03-24T14:24:36.043Z",
  "name": "My Service",
  "lastRunAt": "2023-03-25T14:00:00.000Z",
  "awsEcsService": "My-ECS-Service-B2D131F4-Q4Nyej21pXj3",
  "awsEcsServiceStaging": "My-ECS-Staging-B2D131F4-Q4Nyej21pXj3",
  "triggerOnMain": true,
  "triggerOnPrOpen": true,
  "triggerOnPrSync": true,
  "useStaging": false,
  "autoDeploy": false,
  "githubRepoUrl": "https://github.com/my-repo",
  "unitTestCommand": "npm run test",
  "integrationTestCommand": "npm run integration",
  "codeQualityCommand": "npm run lint",
  "dockerfilePath": "./dockerPath",
  "dockerComposeFilePath": "./dockerComposePath",
  "pipelineId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e1"
}
```

---

**Method:** `POST`

**Route:** `api/services`

**Headers:**

- Content-Type: application/json

**Request Body:**

```json
{
  "name": "Another Service",
  "awsEcsService": "Another-Service-B2D131F4-Q4Nyej21pXj3",
  "awsEcsServiceStaging": "Another-Service-Staging-B2D131F4-Q4Nyej21pXj3",
  "triggerOnMain": true,
  "triggerOnPrOpen": true,
  "triggerOnPrSync": true,
  "useStaging": false,
  "autoDeploy": false,
  "githubRepoUrl": "https://github.com/another-repo",
  "unitTestCommand": "npm run test",
  "integrationTestCommand": "npm run integration",
  "codeQualityCommand": "npm run lint",
  "dockerfilePath": "./dockerPath",
  "dockerComposeFilePath": "./dockerComposePath",
  "pipelineId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e1"
}
```

**Response Body:**

```json
{
  "id": "b4db2074-a6d7-469c-8279-3eaa2bbd6f6d",
  "createdAt": "2023-03-28T00:35:29.096Z",
  "updatedAt": "2023-03-28T00:35:29.096Z",
  "name": "Another Service",
  "lastRunAt": null,
  "awsEcsService": "Another-Service-B2D131F4-Q4Nyej21pXj3",
  "awsEcsServiceStaging": "Another-Service-Staging-B2D131F4-Q4Nyej21pXj3",
  "triggerOnMain": true,
  "triggerOnPrOpen": true,
  "triggerOnPrSync": true,
  "useStaging": false,
  "autoDeploy": false,
  "githubRepoUrl": "https://github.com/another-repo",
  "unitTestCommand": "npm run test",
  "integrationTestCommand": "npm run integration",
  "codeQualityCommand": "npm run lint",
  "dockerfilePath": "./dockerPath",
  "dockerComposeFilePath": "./dockerComposePath",
  "pipelineId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e1"
}
```

---

**Method:** `DELETE`

**Route:** `api/services/:serviceId`

**Response Body:**

```json
{
  "id": "b4db2074-a6d7-469c-8279-3eaa2bbd6f6d",
  "createdAt": "2023-03-28T00:35:29.096Z",
  "updatedAt": "2023-03-28T00:35:29.096Z",
  "name": "Another Service",
  "lastRunAt": null,
  "awsEcsService": "Another-Service-B2D131F4-Q4Nyej21pXj3",
  "awsEcsServiceStaging": "Another-Service-Staging-B2D131F4-Q4Nyej21pXj3",
  "triggerOnMain": true,
  "triggerOnPrOpen": true,
  "triggerOnPrSync": true,
  "useStaging": false,
  "autoDeploy": false,
  "githubRepoUrl": "https://github.com/another-repo",
  "unitTestCommand": "npm run test",
  "integrationTestCommand": "npm run integration",
  "codeQualityCommand": "npm run lint",
  "dockerfilePath": "./dockerPath",
  "dockerComposeFilePath": "./dockerComposePath",
  "pipelineId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e1"
}
```

---

**Method:** `PATCH`

**Route:** `api/services/:serviceId`

**Headers:**

- Content-Type: application/json

**Request Body:**

- The properties that need to be updated

```json
{
  "name": "My Special Service"
}
```

**Response Body:**

```json
{}
```

---
