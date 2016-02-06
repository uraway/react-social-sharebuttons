# react-social-sharebuttons(LINE)
Simple React components for LINE Button.

 - [LINE Button 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/04/000000)

- **This component is aimed for smart phone users.** It does not work for PC users.

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { LINEButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    let text = "LINEで送る";
    let image = "36x60";
    return (
      <LINEButton text={text} image={image} />
    );
  }
}
```


## Optional props

Add the following props as you wish.

Option|Description
---|---
`text`| The text to share
`image`| Change the style of the button. You can only choose `20x20` by default, `30x30`, `36x60`, `40x40` or `82x20`

## Sample

###### image: 20x20
![](http://i.imgur.com/sS34ddy.png)

###### image: 30x30
![](http://i.imgur.com/fa0OuSx.png)

###### image: 36x60
![](http://i.imgur.com/oyrLd1n.png)

###### image: 40x40
![](http://i.imgur.com/SvYu1fi.png)

###### image: 82x20
![](http://i.imgur.com/ewyvd7t.png)

---
MIT licensed
