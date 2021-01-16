import { Component, createRef, RefObject } from 'react';

export type LinkedInButtonProps = {
  url?: string;
  counter?: 'top' | 'right';
  lang?: string;
};

declare let window: Window & { IN: unknown };

export default class LinkedInButton extends Component<LinkedInButtonProps> {
  ref: RefObject<HTMLScriptElement>;

  static defaultProps = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    counter: '',
    lang: 'ja',
  };

  constructor(props: LinkedInButtonProps) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount(): void {
    const { lang } = this.props;

    if (window.IN) delete window.IN;
    const s = document.createElement('script');
    s.src = '//platform.linkedin.com/in.js';
    s.type = 'text/javascript';
    if (lang) s.lang = lang;
    if (this.ref.current?.parentNode) this.ref.current.parentNode.appendChild(s);
  }

  render(): JSX.Element {
    const { url, counter } = this.props;
    return <script ref={this.ref} type="IN/Share" data-url={url} data-counter={counter} />;
  }
}
