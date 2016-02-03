# react-social-sharebuttons(GREE)
Simple React components for GREE Button.

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { GREEButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    const url = "http://uraway.hatenablog.com/";
    const type = 1;

    return (
      <GREEButton url={url} type={type} />
    );
  }
}
```

## props

#### url (Required)
The URL you want to share.

#### type (Required, Number)
The button layout type.


---
MIT licensed
