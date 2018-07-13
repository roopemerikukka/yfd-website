# yfd-website

Website for Young Finnish Design.

[![CircleCI](https://circleci.com/gh/roopemerikukka/yfd-website/tree/development.svg?style=svg)](https://circleci.com/gh/roopemerikukka/yfd-website/tree/development)

## Environment variables
The project ises a `env` file for configuration. The following variables are required in the env file:

### CONTENTFUL_SPACE_ID
This is an ID that points to the space in Contentful the app connects to. This ID can be aquired from the Contentful web interface under Settings -> API keys.

### CONTENTFUL_ACCESS_TOKEN
This is an access token that has read rights to all space content in contentful. This can be created / aquired from the Contentful web interface under Settings -> API keys. Use the `Content Delivery API - access token` instead of the `Content Preview API - access token`.

## Fetching data from Contentful in JS
You should do this in the static `getInitialProps` function and by using the Contentful client. The client can be obtained like this:
```js
import { createClient } from '../common/contentful'
```
And then you can call the API like this:
```js
const entries = await client.getEntries()
```
A simple full example could look like this:
```js

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