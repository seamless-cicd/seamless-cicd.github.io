# Stages

**Method:** `GET`

**Route:** `api/stages?runId=:runId`

**Response Body:**

```json
[
  {
    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e4",
    "createdAt": "2023-03-20T17:17:13.760Z",
    "updatedAt": "2023-03-20T17:17:13.760Z",
    "type": "PREPARE",
    "startedAt": "2023-03-20T17:17:13.740Z",
    "endedAt": "2023-03-20T17:17:14.740Z",
    "duration": 60,
    "status": "SUCCESS",
    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"
  },
  {
    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e5",
    "createdAt": "2023-03-20T17:17:13.760Z",
    "updatedAt": "2023-03-20T17:17:13.760Z",
    "type": "CODE_QUALITY",
    "startedAt": "2023-03-20T17:17:13.740Z",
    "endedAt": null,
    "duration": null,
    "status": "IN_PROGRESS",
    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"
  },
  {
    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e6",
    "createdAt": "2023-03-20T17:17:13.760Z",
    "updatedAt": "2023-03-20T17:17:13.760Z",
    "type": "UNIT_TEST",
    "startedAt": "2023-03-20T17:17:13.740Z",
    "endedAt": null,
    "duration": null,
    "status": "IDLE",
    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"
  },
  {
    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e7",
    "createdAt": "2023-03-20T17:17:13.760Z",
    "updatedAt": "2023-03-20T17:17:13.760Z",
    "type": "BUILD",
    "startedAt": "2023-03-20T17:17:13.740Z",
    "endedAt": null,
    "duration": null,
    "status": "IDLE",
    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"
  },
  {
    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e8",
    "createdAt": "2023-03-20T17:17:13.760Z",
    "updatedAt": "2023-03-20T17:17:13.760Z",
    "type": "DEPLOY_STAGING",
    "startedAt": "2023-03-20T17:17:13.740Z",
    "endedAt": null,
    "duration": null,
    "status": "IDLE",
    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"
  },
  {
    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e9",
    "createdAt": "2023-03-20T17:17:13.760Z",
    "updatedAt": "2023-03-20T17:17:13.760Z",
    "type": "DEPLOY_PROD",
    "startedAt": "2023-03-20T17:17:13.740Z",
    "endedAt": null,
    "duration": null,
    "status": "IDLE",
    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"
  }
]
```

---

**Method:** `PATCH`

**Route:** `api/stages/:stageId`

**Request Headers:**

- Content-Type: application/json

**Request Body:**

- Properties to be updated

```json
{
  "status": "IN_PROGRESS"
}
```

**Response Body:**

```json
{}
```

---

**Method:** `DELETE`

**Route:** `api/stages/:stageId`

**Response Body:**

```json
{
  "id": "fc27f809-961b-4cf8-b535-944d74628945",
  "createdAt": "2023-03-28T13:08:15.518Z",
  "updatedAt": "2023-03-28T13:08:15.518Z",
  "type": "PREPARE",
  "startedAt": "2023-03-28T13:08:15.503Z",
  "endedAt": null,
  "duration": null,
  "status": "IDLE",
  "runId": "c6e690ba-d887-4976-bf5b-2ebd3a253bee"
}
```
