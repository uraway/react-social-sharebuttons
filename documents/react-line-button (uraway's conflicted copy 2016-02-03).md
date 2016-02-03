# react-social-sharebuttons(LINE)
Simple React components for LINE Button.

 - [LINE 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/04/000000)

- **This component is aimed for smart phone users.** It does not work for PC users.

## Install
```
npm install --save react-social-sharebutton
```

## Example
```javascript
import { LINEButton } from 'react-social-sharebutton';

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

## props

#### text (Optinal)

The text you want to share. You can only specify the page title and page URL.

- [ガイドライン](https://media.line.me/guideline/ja/)
- [Guideline](https://media.line.me/guideline/en/)

#### image (default is 20x20)

Specify size of the image you want to use as LINE button.

##### 20x20
![20x20](../images/line/linebutton_20x20.png)

##### 30x30
![30x30](../images/line/linebutton_30x30.png)

##### 36x60
![36x60](../images/line/linebutton_36x60.png)

##### 40x40
![40x40](../images/line/linebutton_40x40.png)

##### 82x20
![82x20](../images/line/linebutton_82x20.png)

---
MIT licensed
