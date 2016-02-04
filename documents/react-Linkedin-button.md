# react-social-sharebuttons(Linkedin)
Simple React components for Linkedin Button.

 - [Linkedin 日本語ドキュメント/website]()

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { LinkedinButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render(
    const url = "http://uraway.hatenablog.com";
    const counter = "top";
    const lang = "en";
    return (
      <LinkedinButton url={url} counter={counter} lang={lang} />
    );
  }
}
```

## props

#### url (Optional)
The URL you want to share. The default value is the URL of the page where you put the button on.

#### counter (Required)
The button counter type. Choose from followings.

###### top
![](http://i.imgur.com/lc1i7Cw.png)

###### right
![](http://i.imgur.com/EE9Nqsn.png)

###### none
![](http://i.imgur.com/xSSJBK1.png)

#### lang (Default is English.)

###### 'ar'
Arabic

###### 'zh_CN'
Chinese - Simplified

###### 'zh_TW'
Cinese - Traditional

###### 'cs'
Czech

###### 'da'
Danish

###### 'nl'
Dutch

###### 'fr'
French

###### 'de'
German

###### 'in'
Indonesian

###### 'it'
Italian

###### 'ja'
Japanese

###### 'ko'
Korean

###### 'ms'
Malay

###### 'no'
Norwegian

###### 'pl'
Polish

###### 'pt'
Portuguese

###### 'ro'
Romanian

###### 'ru'
Russian

###### 'es'
Spanish

###### 'sv'
Swedish

###### 'tl'
Tagalog

###### 'th'
Thai

###### 'tr'
Turkish


---
MIT licensed
