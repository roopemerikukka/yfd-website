# yfd-website

Website for Young Finnish Design.

[![CircleCI](https://circleci.com/gh/roopemerikukka/yfd-website/tree/development.svg?style=svg)](https://circleci.com/gh/roopemerikukka/yfd-website/tree/development)

## Environment variables
The project uses a `env` file for configuration. The following variables are required in the env file:

### CONTENTFUL_SPACE_ID
This is an ID that points to the space in Contentful the app connects to. This ID can be aquired from the Contentful web interface under Settings -> API keys.

### CONTENTFUL_ACCESS_TOKEN
This is an access token that has read rights to all space content in contentful. This can be created / aquired from the Contentful web interface under Settings -> API keys. Use the `Content Delivery API - access token` instead of the `Content Preview API - access token`.

### Environment variables and CircleCI
The project is automatically deployed with CircleCI. The deployment is done automatically always when pull-requests are merged to development and master branches on GitHub. To be able to do this a few extra env variables need to be configured via the CircleCI web interface. These env variables are:
- STAGING_CONTENTFUL_SPACE_ID
- STAGING_CONTENTFUL_ACCESS_TOKEN
- PRODUCTION_CONTENTFUL_SPACE_ID
- PRODUCTION_CONTENTFUL_ACCESS_TOKEN

They set the env variable values for the different environments when CircleCI is automatically deploying the software. These are sotred securely inside CircleCI. Your local development environment doesn't need anything else than the env file to work.

## File naming convention
The whole project follows the `lowerCamelCase` naming convention with all files.

## Fetching data from Contentful in JS
You should do this in the static `getInitialProps` function and by using the Contentful client. The client can be obtained like this:
```js
import { createClient } from '../common/contentful'
const client = createClient()
```
And then you can call the API like this:
```js
const entries = await client.getEntries()
```
A simple full example could look like this:
```jsx

import React from 'react'
import { createClient } from '../common/contentful'

export default class extends React.Component {
  static async getInitialProps({ contentfulClient }) {
    const client = createClient()
    const entries = await client.getEntries()
    return { entries }
  }

  render() {
    return (
      <div>
        Number of fetched entries: { this.props.entries.total }
      </div>
    )
  }
}
```

## Text styles
All text styles are created onece and then injected automatically to the global scope for reuse. To see availabel text styles, modify existing or add new ones see `common/textStyles.js`. Instructions on adding new text styles can be found from the file itself. Here's a simple example how to use existing text styles:

```jsx
import React from 'react'
import { textStyles } from '../common/textStyles'

export default class extends React.Component {
  render() {
    return (
      <h1 className={`${textStyles.h1.className} otherClassName`}></h1>
    )
  }
}
```