import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Parser from 'html-react-parser';

import educations_t from 'raw-loader!./files/test.txt';

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

const papers = [
  '1989.02.; ENERGY 접근법에 의한 사행천의 안정화(A Stabilization of Meandering Rivers by Energy Approach), 단국대학교 대학원 석사학위논문',
  '1990.07.; 만곡충적수로의 횡방향 하상경사(Transverse Bed Slope in Curved Alluvial Channels), 한국수문학회 학술논총, 32, 213-220(외2인)',
  '1990.12; 만곡하천의 하상특성 연구(A Study of River Bed Characteristics in Curved Channel), 대전공업대학 논문집, 27, 279-292(외1인)',
  '1991.06.; Sinuosity가 작은 수로에서의 흐름 모형(Flow Model of Curved Alluvial Channels in Small Sinuosity), 단국대학교 논문집, 25, 281-296(외1인)',
  '1992.06.; 하천의 사행이행에 관한 해석모형(Ⅰ)(이론)(Analytical Model on Meander Migration Alluvial Rivers(Ⅰ) : Theory ), 대전공업대학 논문집, 19, 93-107(외1인)',
  '1992.06.; 하상재료에 따른 사행수로의 이행특성(Migration Characteristics of the Meandering Channel in the Streambed Materials), 대전공업대학 논문집, 19, 109-127(외1인)',
  '1992.12.; 부차류를 고려한 사행수로의 흐름 모형(Flow Model of Meandering Channels with Secondary Current), 대전공업대학 논문집, 29, 161-179(외1인)',
  '1993.03.; 수로의 형상과 하상조건에 따른 이행특성(Migration Characteristics with Forms of Channels and Bed Conditions), 한국수문학회지, 26(1), 103-114(외1인)',
  '1993.06.; 사행하천에서의 흐름특성(준사행형 및 일정곡률형 수로중심으로)(Flow Characteristics of Meandering Channels : Flow Analysis in the Sinuous Channel and Constant Curvature Channel), 단국대학교 논문집, 27, 579-594(외1인)',
  '1993.06.; Migration Characteristics in Sine-Wave Type Rivers, Korean Journal Hydrosciences, 4, 81-92(외2인)',
  '1994.09.; 충적하천의 수로양상에 따른 유사 및 흐름특성(Characteristics of Sediment and Flow with Channel Patterns in Alluvial Rivers), 대한토목학회 논문집, 14(5), 1177-1189(외3인)',
  '1995.02.; 만곡수로에서의 하상변화 추정을 위한 변수값 결정(Evaluation of Parameters for Bedform Changes in a Meandering Channel), 단국대학교 대학원 박사학위논문, 165',
  '1995.06.; 하천에서 전유사량의 산정에 대한 관계식 유도(Relationship Derivation for the Calculation of Total-Load Discharge in Rivers), 대전산업대학교 논문집, 12, 39-53(외2인)',  
  '1995.06.; 유로만곡부의 곡률반경에 따른 흐름특성과 하상변화(Ⅰ)(이론중심)[(Flow Characteristics and Bed Form Changes with Curvature Radius in Curved Channels (Ⅰ) (Theory)], 대전산업대학교 논문집, 12, 55-70(외2인)',
  '1995.09.; 河川의 만곡구간에 있어 유사이송과 흐름특성에 관한 실험적 연구(Experimental Study on the Sediment Transport and Flow Characteristics in a Curved Channel), 대한토목학회 논문집, 15(5), 1333-1341(외2인)',
  '1995.10.; 망상하천에서의 수로경사와 유량에 따른 하상변화(Bedform Changes with Slopes and Discharges in a Braided Channel), 대한토목학회 학술발표 논문집(Ⅱ), 95-98(외2인)',
  '1995.12.; 유로만곡부의 곡률반경에 따른 흐름특성과 하상변화(Ⅱ)(실험 및 적용)[(Flow Characteristics and Bed Form Changes with Curvature Radius in Curved Channels (Ⅱ) (Laboratory and Application)], 대전산업대학교 논문집, 12(2), 125-134(외2인)',
  '1996.02.; 총유사량 산정을 위한 유사농도식의 도출(Derivation of sediment Concentration for the Computation of Total Sediment Discharge), 한국수자윈학회지, 29(1), 181-190(외2인)',
  '1996.06.; 홍수추적법에 의한 하상변이예측(Ⅰ)(이론)[Presupposition of Topographic Variation by the Flood Routing Method in Alluvial Channel(Ⅰ)(Theory)], 대전산업대학교 논문집, 13(1), 67-78(외3인)',
  '1996.06.; 한계수로경사법을 이용한 망상하천의 흐름특성 비교(Comparison of Flow Characteristics in a Braided Channel by the Critical Channel Slope Method), 대전산업대학교 논문집, 13(1), 79-89(외3인)',
  '1996.12.; 홍수추적법에 의한 하상변이예측(Ⅱ)(적용)[Presupposition of Topographic Variation by the Flood Routing Method in Alluvial Channel(Ⅱ)(Applications)], 대전산업대학교 논문집, 13(2), 57-72(외2인)',
  '1996.12.; 다중회귀분석에 의한 평균유사농도의 산정(Evaluation of the Averaged Sediment Concentration by the Multiple Regression), 대전산업대학교 논문집, 13(2), 73-83(외3인)',
  '1997.12.; 하천 만곡수로에서 무차원 흐름 및 유사특성의 변화(Variation of the Dimensionless and Characteristics in Multi- Bend Channel of Rivers), 대전산업대학교 논문집, 14, 227-242',
  '1998.12.; HEC-1모형에 의한 산간지 하천유역에서의 유출해석(Runoff Analysis in the River Basin of Upper Catchment by the HEC-1 Model), 대전산업대학교 논문집, 15(A), 265-285(외3인)',
  '1999.05.; FLUVIAL-12모형에 의한 침식성 사행수로의 하상변동해석(Analysis of the Bedform Variation in a Meandering erodible Channel Using the Model FLUVIAL-12), 대한토목학회 논문집, 19(Ⅱ-3), 275-283(외2인)',
  '1999.12.; 충적하천에서 하상변동의 예측을 위한 관계식의 유도 및 적용(Derivation of the Relationship Equations and the Application for the Prediction of Topography Pattern in Alluvial Rivers), 대전산업대학교 논문집, 16, 41-58',
  '2000.12.; 제방형 웨어에서의 마루길이와 유량변화에 따른 수리특성(Hydraulic Characteristics with Crest Length and discharge Variation in Embankment-Shaped Weirs), 대전산업대학교 논문집, 16, 141-158(외2인)',
  '2001.05.; 제방형 웨어에서의 마루길이와 유량변화에 따른 수리특성의 실험적 해석(Experimental Analysis the Hydraulic Characteristics with Crest Length and Discharge Variation n Embankment-Shaped Weirs), 한국수자원학회 학술발표회Ⅱ, 667-672(외4인)',
  '2001.05.; 제방형 웨어에서의 수리특성 연구(A Study on the Hydraulic Characteristics in Embankment-Shaped Weirs), 대한토목학회 논문집, 21(3-B), 201-216',
  '2001.12.; 전자파 표면 유속계의 성능시험을 위한 수심평균유속 환산계수(Conversion Factor of Depth-averaged Velocity Through Performance Tests of Electromagnetic Wave Surface Velocimeter), 한밭대학교 논문집, 18, 195-205(외4인)',
  '2001.12.; 비․접촉성 유속계를 이용한 수심평균유속 환산계수의 결정(Evaluation for Conversion Factor of Depth-averaged Velocity Using Water-nonsubmerged and Water-submerged Current Meter), 한밭대학교 건설안전 기술 논문집, 1, 163-183(외5인)',
  '2002.07.; 수공실무의 활용을 위한 수심평균유속 환산계수의 결정(Determination for a Conversion Factor of Depth-averaged Velocity in Practical Use of Hydraulic Engineering Fields), 대한토목학회 논문집, 22(4-B), 469-484(외1인)',
  '2002.12.; 강우 시 저수지 유입구간에서의 유사이송특성 해석(Analysis of Sediment Transport Characteristics in Inflow Reaches of Reservoir with Rainfall), 한밭대학교 건설안전기술 논문집, 2, 1-29(외2인)',
  '2002.12.; 광정웨어의 수리특성 해석(Analysis of Hydraulic Characteristics in Broad-Crested weirs), 한밭대학교 건설안전기술 논문집, 2, 151-179(외1인)',
  '2003.11.; 충적하천에 대한 수리학적 형상방정식 유도(Derivation of Downstream Hydraulic Geometry Equations for Alluvial Rivers), 대한토목학회 논문집, 23(6B), 551-559(외1인)',
  '2003.12.; Correction Factor for Depth-Averaged Velocity(수심평균유속 환산계수), 한밭대학교 건설안전기술 논문집, 3, 49-66(외1인)',
  '2003.12.; 사각형 및 제방형 광정웨어의 흐름특성(Flow Characteristics of Rectangular and Embankment Broad-Crested Weirs), 한밭대학교 논문집, 20, 89-106',
  '2003.12.; 사행하천에서 안정수로의 수리학적 형상결정(Determination of Hydraulic Geometry of Stable channels in Meandering Rivers), 한밭대학교 논문집, 20, 107-120(외1인)',
  '2004.12.; 충적수로의 수리학적 형상 방정식(Equations of Hydraulic Geometry for Fluvial Channels), 한밭대학교 논문집, 21, 119-131(외1인)',
  '2004.12.; 도시유역 저류지의 이치수에 대한 합리적인 방안(Rational Countermeasure for Flood and Draught Control of Reservoir in Urban Watershed), 한밭대학교 건설안전기술 논문집, 4, 49-71(외2인)',
  '2005.10.; 현장실무용 확률강우량의 산정(Computations of Frequency Based Precipitation for Hydrological Field Applications), 2005 대한토목학회 정기학술대회, 225-228(외3인)',
  '2005.10.; 환경친화형 해안보호 호안블럭의 개발(Development of Environmental Preservation Structures for Protection of Shoreline Erosion), 2005 대한토목학회 정기학술대회, 703-706(외3인)',
  '2005.12.; 충적하천에서 부유사 농도분포식의 유도(Derivation of Suspended-Load Concentration Profile Equations in Fluvial River), 한밭대학교 건설안전기술 논문집, 5, 141-154',
  '2005.12.; 슬릿웨어의 유량계수식 유도(Derivation of Discharge Coefficient Equations in Slit Weirs)한밭대학교 건설안전기술 논문집, 5, 77-90(외1인)',
  '2006.02.; Electromagnetic Wave Surface Velocimetry, J. Hydra. Engineering, ASCE, 132(2), 146-153(외1인)',
  '2006.03.; ASM-Ⅳ를 이용한 부유사농도 연직분포의 측정(Measurements of Vertical Profiles in Suspended-Load Concentration Using the ASM-Ⅳ), 한국방재학회 논문집, 6(1), 85-95(외2인)',
  '2006.10.; 강수계측망의 밀도에 따른 확률강우량 분석(Analysis for Frequency Rainfall with Density of Precipitation Gage Network in Catchment), 2006 대한토목학회 정기학술대회, 186-189(외4인)',
  '2006.10.; 자연 친화형 소파블럭의 개발(Development of Wave Dissipation Block for Natural Friendly Structures), 2006 대한토목학회 정기학술대회, 610-613(외4인)',
  '2006.12.; Downstream Hydraulic Geometry of Alluvial Channels, J. Hydra. Engineering, ASCE, 132(12), 1347-1352(외1인)',
  '2006.12.; 환경친화형 해안보호 호안블럭의 안정성(Stability of Environmental Preservation Structures for Protection of Shoreline Erosion), 한밭대학교 논문집, 23, 103-110(외2인)',
  '2006.12.; 수문학적 현장적용을 위한 학률강우량의 산정(Computations of Frequency Based Precipitation for Hydrological Field Applications), 한밭대학교 논문집, 23, 111-120(외2인)',
  '2006.12.; 소유역의 강우강도-지속기간-재현기간 관계식의 유도(Derivation of Relationships on Rainfall Intensity-Duration-Frequency in Small-Basin), 한밭대학교 건설안전기술 논문집, 6, 63-89(외1인)',
  '2007.06.; 자연친화형 소파 호안블럭에 관한 연구(A Study on Shore Protection Block with Natural Affinity Structures), 한국콘텐츠학회 춘계종합학술대회 논문집(외5인)',
  '2007.05.; 소유역의 강우강도-지속기간-재현기간 관계식의 유도(Relationship Derivation for Rainfall Intensity- Duration-Frequency in Small Basin), 한국한학기술학회 춘계 학술대회발표논문집(외5인)',
  '2007.03.; 금강유역 내 중규모 하천의 계획하폭 산정(Determination of Design Channel Width for from Medium Rivers in Gum-River Basin), 한국방재학회, 7(1), 47-56(외2인)',
  '2007.09.; Versatile Usage of Post-Consumed Plastic, International Symposium on Feedstock Recycling of Plastics & Other Polymeric Materials, 14, 511-514(외2인)',
  '2007.09.; 자연친화형 해안 침식방지 구조물의 안정성(Stability on Preventive Structures of Shore Erosion with Natural Affinity), 한국콘텐츠학회 논문지, 7(9), 212-219(외1인)',
  '2007.11.; 금강상류의 흐름특성 및 확산거동 해석, 대한방사선방어학회 추계학술발표 논문 요약집, 150-151(외4인)',
  '2007.12.; 해안침식방지용 해수유통 구조물(Structures for Protection of Coastal Erosion with Seawater Circulation), 한밭대학교 논문집, 24, 11-19(외2인)',
  '2007.12.; 대전유역의 빈도해석에 의한 IDF 관계곡선 유도(Derivation of IDF Relationship by Frequency Analysis in Daejeon Watershed), 한밭대학교 건설안전기술 논문집, 7, 57-84(외4인)',
  '2007.12.; 대하천의 RI 추적자에 의한 확산특성 분석(Analysis of Dispersion Characteristics by RI Tracer in Large River), 한밭대학교 건설안전기술 논문집, 7, 85-103(외4인)',
  '2007.12.; 환경친화형 해안침식 방지용 호안블럭 개발(Development of Affinity Shore Protection Block), 한밭대학교 건설안전기술 논문집, 7, 197-215(외4인)',
  '2008.05.; 도심통과 하천에서의 확률홍수량 산정(Estimation for Probability Flood Discharge in Urban Rivers), 한국콘텐츠학회 2008 춘계종합학술대회, 281-284(외4인)',
  '2008.10.; 현장관측에 의한 친환경 해안조성을 위한 침식방지 호안공 개발에 관한 기초적 연구(Basic Research on Revetments Development of Erosion Protection for Coastline Creation of Hydrophilic Environment by Field Observation), 한국수자원학회 논문집, 41(10), 983-993(외1인)',
  '2008.12.; 금강수계 내 소하천에서 SMS에 의한 오염물질 거동분석(Behavior Analysis for Pollutant by the SMS in Small River of Gum River System), 한밭대학교 건설안전기술 논문집, 8, 1-24(외4인)',
  '2008.12.; 식생을 고려한 하천복원모델에서의 홍수위 안정성(Stability Analysis of Flood Stage for River Restoration Model with Vegetation in Alluvial Rivers), 한밭대학교 건설안전기술 논문집, 8, 25-45(외3인)',
  '2008.12.; 해수순환 구조물의 수리특성 및 현장적용 분석(Analysis for Hydraulic Characteristics and Field Applications with Seawater Circulation in Shore Protection Structures), 한밭대학교 건설안전기술 논문집, 8, 183-205(외3인)',
  '2009.01.; 하천에서 추적자를 이용한 오염물질 거동분석(Analysis of Pollutant Flow Tracer Test in River using Radioactive Isotope), 한국콘텐츠학회 논문지, 9(1), 400-406(외1인)',
  '2009.05.; 중소도시 유역의 홍수량 산정 및 홍수위 예측(Estimation of Flood Discharge and Forecasting of Flood Level in Urban Basin of Small-Medium), 한국콘텐츠학회 2009 춘계종합학술대회, 432-436(외2인)',
  '2009.05.; 하천생복모형의 홍수위 분석과 하상변동 예측(Flood Stage Analysis and Protection of River Bed Change for Stream Corridor Restoration Model with River Vegetation), 한국콘텐츠학회 2009 춘계종합학술대회, 440-441(외2인)',
  '2009.09.; 동위원소 실험을 통한 수치모델해석(Analysis of Numerical Model by the Field Experiment using Radiosotope), 방사선산업학회, 3(3), 161-165(외4인)',
  '2009.10.; 하천식생 복원모형의 홍수위 분석과 하상변동 예측(Flood Stage Analysis and Prediction of River Bed Change for Stream Corridor Restoration Model with River Vegetation), 2009 대한토목학회 정기학술대회발표논문집, 509-513(외2인)',
  '2009.10.; 금강상류 수로구간의 홍수량과 홍수위 분석(Analysis for Flood Discharge and Stage in Geum River Upper Reach), 2009 대한토목학회 정기학술대회발표논문집, 514-517(외2인)',
  '2009.10.; 하천복원후의 홍수위 안정성 검토(Evaluation of River Flood Stability after River Restoration), 한국콘텐츠학회 논문지, 9(10), 417-426(외1인)',
  '2009.12.; 간척지내 내수배제 시스템의 최적 규모 (Determination of Optimum Scale on Internal Drainage System in Reclaimed Land), 한밭대학교 건설안전기술 논문집, 9, 1-28(외2인)',
  '2009.12.; 비점오염원 저감장치의 개발과 실무활용(Development and Field Application of Non-point Pollutant Reduction Devices on Paved Bridge), 한밭대학교 건설안전기술 논문집, 9, 63-79(외2인)',
  '2009.12.; 하천규모별 식생복원모형에 대한 수리 안정성 분석(Evaluation of Hydraulic Stability for Vegetation Models with River Scales), 한밭대학교 건설안전기술 논문집, 9, 185-216(외2인)',
  '2010.05.; 하천식생에 따른 수리 안정성 분석(Evaluation of Hydraulic Stability for River with Vegetation), 2010년 한국수자원학회 학술발표회, 28-32(외2인)',
  '2010.05.; 배수갑문 최적 규모 결정 검토(Determination of Optimum Scale on Internal Drainage System in Reclaimed Land), 2010년 한국수자원학회 학술발표회, 855-859(외3인)',
  '2010.05.; 교량 위 비점오염원 저감장치 실측분석(Measured Analysis Using Equipment of Non-point Pollutant), 2010년 한국수자원학회 학술발표회, 1069-1073(외3인)',
  '2010.05.; 식재된 하천에서의 조도계수 산정(Evaluation of Roughness Coefficient in River Vegetation), 한국콘텐츠학회 2010 춘계종합학술대회, 305-307(외2인)',
  '2010.05.; 비점오염원 저감장치의 개발(Development of Non-point Pollutant Reduction Devices), 한국콘텐츠학회 2010 춘계종합학술대회, 308-309(외3인)',
  '2010.05.; 방조제 배수갑문의 최적 설계(Optimal Design for Drainage of the Embankment), 한국콘텐츠학회 2010 춘계종합학술대회, 310-311(외3인)',
  '2010.09.; 하천규모에 따른 식생모델의 홍수위 검토(Flood Stage Evaluation for Vegetated Models in River Scales), 대한토목학회 논문집, 30(5B), 509-518(외1인)',
  '2010.11.; 하천유형별 식생모델의 홍수위 분석(Flood Stage Analysis on Vegetated Patterns with River Sites), 한국콘텐츠학회 논문지, 10(11), 452-460(외1인)',
  '2010.12.; Flood Stability and Vegetation Models in River Restoration, KISTI-KOCON, International Conference on Convergence Content(ICCC2010), 8(2), 319-320(외1인)',
  '2010.12.; 식생복원모델을 적용한 중규모 하천의 수리특성 분석(Hydraulic Characteristics Analysis for Vegetated Models of Restoration in Medium River), 한밭대학교 건설안전기술 논문집, 10, 65-80(외4인)',
  '2010.12.; 중소하천의 수질개선을 위한 월류형 역사이폰 수로시스템(Inverted Siphon Channel System of Free Overfall for Water Quality Improvement in Medium and Small Rivers), 한밭대학교 건설안전기술 논문집, 10, 94-110(외3인)',
  '2010.12.; 중소하천의 수질정화 시스템에 대한 특성분석(Characteristics Analysis for Water Quality Management Systemic Small and Medium Rivers), 한밭대학교 건설안전기술 논문집, 10, 111-124(외3인)',
  '2011.05.; 하천복원 식생모델의 검토방법 연구(Evaluation of Hydraulic Stability for Vegetation Restoration Models in River), 2011년 복원생태학회 춘계학술대회, pp. 107(외2인)',
  '2011.05.; 중소하천 용수용 보의 설치에 따른 하상변화 분석(Analysis of River Bed Variation with Weir Construction in Small and Medium Rivers), 2011년 한국수자원학회 학술발표회, 205(외2인)',
  '2011.05.; 하천 수리구조물 설치에 따른 흐름특성 분석(Analysis for Flow Characteristics with Construction of Hydraulic Structures in Stream), 한국콘텐츠학회 2011 춘계종합학술대회, 475-476(외3인)',
  '2011.05.; 하천 복원을 위한 수리 안정성 검토 가이드라인 개발(Development of Guideline for Hydraulic Stability Evaluate with River Restoration), 한국콘텐츠학회 2011 춘계종합학술대회, 477-478(외2인)',
  '2011.06.; 식생복원모델에 대한 하천 크기별 수리학적 안정성 검토(Evaluation of Hydraulic Stability for Vegetation Restoration Models in River Scales), 복원생태학회지, 2(1), 17-27(외4인)',
  '2012.09.; Utilizing Concept of Vegetation Freeboard Equivalence in River Restoration, International Journal of Contents, 8(3), 34-41(외1인)',
  '2013.06.; 논산천 수계 중소하천의 유사량 측정과 분석(Measuring and Analysis of Sediment Discharge in Small-Medium Rivers of Nonsan Stream System), 한밭대학교 건설안전기술 논문집, 14, 1-12(외2인)',
  '2013.09.; Estimation of increased stage in river restoration by vegetation freeboard equivalence, Taylor & Francis Group, Advances in River Sediment Research, 1713-1720(외1인)',
  '2013.12.; 중소하천 평수기 및 갈수기의 유량-부유사량(Discharge-Suspended Load Relationships for Normal and Dry Seasons in Small-Medium Streams), 한밭대학교 건설안전기술 논문집, 15, 27-40',
  '2013.12.; Analysis for Flow Discharge and Suspended Load of National-Local Streams in Nonsan River Systems, ICCC, KISTI-KOCON 2013, 173-174(외1인)',
  '2014.06.; 수로구간에서 유량과 부유사량의 실측 및 관계식 유도(Derivation of Relationships and Field Measurements for Flow Discharge and Suspended Load in Channel Reaches), 한밭대학교 건설안전기술 논문집, 16, 13-21(외1인)',
  '2014.06.; Relationships for Flow Discharge-Sediment Load in Small and Medium River Systems, ICCC, KISTI-KOCON 2014, 413-414.(외3인)',
  '2014.11.; 도로교 비점오염원의 저감용 소형장치, 한국콘텐츠학회 2014 추계학술종합대회(Small Device for Reduction of Non-Point Pollution in Road Bridge), 131-132(외1인)',
  '2015.02.; 논산유역 중소하천의 유량-부유사량 현장측정 분석(Field Measurement and Analysis for Discharge -Suspended Sediment of Small-Medium Streams in Nonsan Catchments), 한국방재학회논문집, 15(1), 291-296(외1인)',
  '2015.08.; 농경유역 중소하천에서의 유량과 총유사량의 관계식 유도방법(Derivation Method of Rating Curve and Relationships for Flow Discharge-Total Sediment at Small-Medium Streams in Agrarian Basin), 한국콘텐츠학회 논문지, 15(8), 544-555(외2인)',
  '2016.05.; 교량형 인도교의 비점오염원 저감장치(Reducing Device of Non-Point Source Pollution in Footbridge of Bridges), 한국콘텐츠학회 2016 춘계확술종합대회, 411-412(외5인)',
  '2016.10.; 중소하천 권역 내 유사이송 특성(Characteristics of Sediment Transportation of Small and Medium Rivers in Geographical Areas), 한국방재학회논문집, 16(5), 325-332(외1인)',
  '2017.05.; 중규모 매립형 비점오염저감장치(Non-Point Pollution Device of Reclamation of Medium Size), 한국콘텐츠학회 2017 춘계확술종합대회, 363-364(외3인)',
  '2017.08.; 도시하천구간에서 GPS를 이용한 친수변구역의 홍수위 분석(Analysis of Flood Stage for Hydraulic Friendly Riparian Buffer Zone Using GPS in Urban River Reaches), 한밭대학교 건설안전기술 논문집, 21, 1-16(외1인)',
  '2017.12.; 매립형 비점오염 저감장치의 성능분석(데이터를 사용한 건설부문 사례)(Efficiency Analysis for Decrease Apparatus of Non-Point Pollution in Reclamation(Case in Construction Field Using Data)), 한국경영과학회, 경영과학, 34(4), 153-162(외2인)',
  '2017.12.; Composite flow resistance, J. of Flood Engineering, 8(2), 55-75(외1인)',
  '2018.05; 중규모 교량형 인도교량의 비점오염원 저감장치(Field Analysis for Device Reduction of Non-Point Pollution in Midium Size with Bridge-Footbridge), 한국콘텐츠학회 2018 춘계학술종합대회, 275-276(외2인)',
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

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

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

  const lpapers = papers.map((spec) =>
  <li>{spec}</li>
  );

  console.log(typeof(Parser(educations_t)));
  
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
        {/* <p><NewlineText text={educations_t} /></p> */}
        <hr></hr>
        <h4>학력사항</h4>
        <ul>{ledu}</ul>
        <hr></hr>
        <h4>주요경력</h4>
        <ul>{lspecs}</ul>
        <hr></hr>
        <h4>연구논문</h4> 
        <ul>{lpapers}</ul>
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
