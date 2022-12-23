import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const educations = [
  '단국대학교 대학원 토목공학과 박사과정 졸업(공학박사: 수공학 전공)',
  '단국대학교 대학원 토목공학과 석사과정 졸업(공학석사: 수공학 전공)', 
  '단국대학교 토목공학과 졸업(공학사)', '*콜로라도대학교(CSU) 토목공학과 방문교수(2002.07. ~ 2003.07., 2011.02, ~ 2012.02.)'
];

const specs = [
  '1996.03.∼2019. 현 한밭대학교 건설환경공학과 교수',
  '1997.11.∼2006.12. 충청남도 어항정책 심의위원회 위원',
  '1997.11.∼2015.04. 대전광역시 지방건설기술 심의위원회 위원',
  '1999.02.∼2001.01. 2007.03.∼2008.01. 한밭대학교 토목·환경·도시공학부장·토목공학과장',
  '1999.03.∼2001.02. 한국수자원학회 수공기술분과위원회 위원',
  '2000.06.∼2004.05. 행정자치부 재해원인분석 조사단 지역위원',
  '2001.06.∼2012.08.(2017.09.∼2019.08.) 충청남도 하천(지방수자원)관리위원회 위원',
  '2004.07.∼2008.07. 해양수산부 설계자문위원회 위원',
  '2004.09.∼2006.09. 한밭대학교 기획위원회 위원',
  '2005.09.∼2006.08. 한밭대학교 인사관리위원회 위원',
  '2005.07.∼2007.06. 충청남도 지방건설기술 심의위원회 위원',
  '2005.07.∼2009.12. 충청남도 문화재위원회 전문위원',
  '2006.02.∼2020.02. 국토교통부 대전지방국토관청 설계자문위원회 위원',
  '2006.03.∼2008.12. 한국공학교육 인증원 2006~8년 인증평가위원',
  '2007.02.∼2010.12. 한국수자원공사 일반기술심의위원회 위원',
  '2007.03.∼2009.02. 한국수자원학회 평의원',
  '2007.04.∼2011.03. 한국농촌공사 기술심의위원회 대외위원(수리분야)',
  '2007.07.∼2009.06. 건설교통부 부산지방항공청 설계자문위원회 위원',
  '2007.10.∼2009.06. 한밭대학교 산학협력중심대학사업단 연구개발․공용장비지원센터장',
  '2008.01.∼2018.12.(2009.12.) 한국콘텐츠학회 학술위원회 위원(이사)',
  '2008.02.∼2010.02. 충청남도 재해영향평가 심의위원회 위원',
  '2008.07.∼2010.07. 국토해양부 설계자문위원회 위원',
  '2008.07.∼2010.06. 부산항건설사무소 항만공사 설계자문위원회 위원',
  '2008.08.∼2010.07. 인천항건설사무소 설계자문위원회 위원',
  '2006.02.∼2010.09. 국토해양부 유역조사성과검증위원회 전문위원',
  '2009.01.∼2009.12. 국제수환경공학회(IAHR) 논문심사위원회',
  '2009.04.∼2011.02. 한국수자원학회 이사, 학회지 편집위원회 간사장',
  '2009.09.∼2010.09. 국토해양부 4대강 살리기 위원회 위원',
  '2010.02.∼2019.01. 대한토목학회 대전충남지회 대의원',
  '2010.08.∼2018.08. 세종특별자치시 지방하천관리 위원회',
  '2012.02.∼2018.01. 국토교통부 서울지방국토관청 기술자문위원회 위원',
  '2013.03.∼2019.02. 한국방재학회 이사',
  '2014.08.∼2016.08. 한밭대학교 입학관리본부장',
  '2015.03.∼2019.03. 대전광역시 유성구 사전재해영향성검토위원회 위원'];

const academy = [
  '한국수자원학회 정회원(1990.∼현재)',
  '대한토목학회 정회원(1991.∼현재)',
  '미국토목학회(ASCE) 회원(1997.∼현재)',
  '국제수환경공학회(IAHR) 회원(2003.∼현재)',
  '한국방재학회 정회원(2003.∼현재)',
  '한국콘텐츠학회 정회원(2006.∼현재)',
  '한국복원생태학회 정회원(2008.∼현재)'
]

const FeatureList = [
  {
    title: '이종석(李 宗 䄷)',
    Img: require('@site/static/img/profile/prof.png').default,
     
    description: (
      <>
        만나 인사 나눔에 반갑습니다. <br></br>
        유익한 만남을 위해 노력하겠습니다. <br></br>
        찾아주셔서 고맙습니다. <br></br>
      </>
    ),
    
  },
];

function Feature({Img, title, description}) {
  const ledu = educations.map((spec) => 
  <li>{spec}</li> 
  );

  const lspecs = specs.map((spec) => 
  <li>{spec}</li> 
  );

  const lacademy = academy.map((spec) =>
  <li>{spec}</li>
  );
  
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <img src={Img} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <hr></hr>
        <h4>인사말</h4>
        <p>{description}</p>
        <hr></hr>
        <h4>학력</h4>
        <ul>{ledu}</ul>
        <hr></hr>
        <h4>경력</h4>
        <ul>{lspecs}</ul>
        <hr></hr>
        <h4>학회활동</h4>
        <ul>{lacademy}</ul>
      </div>
    </div>
  );
}

export default function AdvisorFeatures() {
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
