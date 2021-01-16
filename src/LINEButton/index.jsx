// @flow
import React from 'react';

type Img = '20x20' | '30x30' | '36x60' | '40x40' | '82x20';

type Props = {
  text?: string,
  image?: Img,
};

export default function LINEButton({ image = '20x20', text = '' }: Props) {
  const imgSet: {
    [Img]: {
      src: string,
      height: number,
      width: number,
    },
  } = {
    '20x20': {
      src: 'http://i.imgur.com/voMN0NH.png',
      height: 20,
      width: 20,
    },
    '30x30': {
      src: 'http://i.imgur.com/Lkq9vFO.png',
      height: 30,
      width: 30,
    },
    '36x60': {
      src: 'http://i.imgur.com/5sEp1TC.png',
      height: 60,
      width: 36,
    },
    '40x40': {
      src: 'http://i.imgur.com/ZoU91JG.png',
      height: 40,
      width: 40,
    },
    '82x20': {
      src: 'http://i.imgur.com/cfjCxrh.png',
      height: 20,
      width: 82,
    },
  };

  const currentImg = imgSet[image];

  return (
    <a href={`http://line.me/R/msg/text/?${encodeURIComponent(text)}`}>
      <img src={currentImg.src} style={{ height: currentImg.height, width: currentImg.width }} alt="LINEで送る" />
    </a>
  );
}

LINEButton.defaultProps = {
  image: '20x20',
  text: '',
};
