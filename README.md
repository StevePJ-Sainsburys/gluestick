# ![gluestick logo](./assets/gs-icon.svg) gluestick by hotglue
<p>
  <a href="https://gluestick.xyz"><img src="https://img.shields.io/badge/website-View%20demo-red" alt="website"></a>
  <a href="https://docs.gluestick.xyz"><img src="https://img.shields.io/badge/docs-Read%20docs-blueviolet" alt="docs"></a>
  <a href="https://bit.ly/2KBGGq1"><img src="https://img.shields.io/badge/Slack-Join%20Slack-blue" alt="join slack"></a>
  <a href="https://www.npmjs.com/package/gluestick-elements"><img src="https://img.shields.io/npm/v/gluestick-elements.svg" alt="npm package"></a>
</p>

An open source and self-hosted file CSV import button for your web app.

---

[![demo](./assets/FileAcceptor.png)](https://gluestick.xyz)

## Info
---

### Motivation
We want to provide a light-weight and simple way to integrate user data from CSVs, with a great UI and strong mapping functionality. 

### Links
- [Homepage](https://gluestick.xyz)
- [Documentation](https://docs.gluestick.xyz)
- [Source](https://github.com/hotgluexyz/gluestick)
- [Issues](https://github.com/hotgluexyz/gluestick/issues)
- [Slack](https://bit.ly/2KBGGq1)

### Demos
- [Interactive Demo](https://gluestick.xyz)
- [CodeSandbox Demo](https://codesandbox.io/s/gluestick-demo-1c1dl)

## gluestick-elements
---
Simple reusable React components that handle CSV uploads, mapping, and validation.

### Functionality
1. Upload file
2. Do column mapping
3. Validate data + preview final output
4. Approve (sent to hook / piped to target)

### Install

```bash
npm install --save gluestick-elements
```

### Usage

```jsx
import React, { Component } from 'react'

import {GlueStick} from 'gluestick-elements'
import 'gluestick-elements/dist/index.css'

class Example extends Component {
  render() {
    return (<GlueStick
      user={"default"}
      endpoint={"https://gluestick-api.herokuapp.com"}
      schema={{
        fields: [
          {
            col: "Name",
            key: "name"
          },
          {
            col: "Phone Number",
            key: "phoneNumber",
            validator: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
              .source
          }
        ]
      }}
    />);
  }
}
```

## Backend
---
The real magic is a Python + Docker based mapping API that leverages data science tools to manipulate CSVs. 

