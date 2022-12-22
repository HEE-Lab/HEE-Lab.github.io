import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '안강현',
    Img: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    description: (
      <>
        학부 연구생
      </>
    ),
  },
  {
    title: '안동규',
    Img: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    description: (
      <>
        학부 연구생
      </>
    ),
  },
  {
    title: '이용호',
    Img: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    description: (
      <>
        학부 연구생
      </>
    ),
  },
  {
    title: '김종혁',
    Img: 'https://avatars.githubusercontent.com/u/34566999?v=4',
    description: (
      <>
        학부 연구생
      </>
    ),
  },
  {
    title: '양설아',
    Img: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    description: (
      <>
        학부 연구생
      </>
    ),
  },
  {
    title: '이승욱',
    Img: require('@site/static/img/profile/lsw.jpeg').default,
    description: (
      <>
        학부 연구생
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" >
        <img src={Img} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
