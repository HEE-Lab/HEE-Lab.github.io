---
slug: swe
title: SWE(Shallow Water Equations)
authors: [jong]
tags: [swe, hydraulics]
---

![SWE](https://upload.wikimedia.org/wikipedia/commons/3/37/Shallow_water_waves.gif)

Shallow-Water Equations (SWE)는 어떤 유체에서 압력표면(반드시는 아니나, 때때로 자유수면을 뜻한다.) 아래의 흐름을 설명하는 쌍곡선 편미분 방정식의 집합이다. (만약 점성에 의한 전단력이 고려된다면 포물선 편미분 방정식이 된다.)

단일 방향의 형태에서 SWE는 소위 Saint-Venant 방정식으로 불린다.

이러한 Saint-Venant 방정식은 Navier-Stokes 방정식을 수심(depth)에 대해 적분함으로써 유도할 수 있는데, 이 경우 수평 길이의 스케일(scale)이 연직 길이의 스케일(scale)에 비해 훨씬 더 크다.

이러한 조건 하에서 질량의 보존은 연직 방향으로의 유속에 대한 스케일이 수평에 비해 작다는 것을 의미한다.

:::success
예를 들어, 어떤 통수단면이 단위폭을 지닌다고 가정해보자.

수평방향으로의 통수단면적을 $$A_{h}$$라 하고, 연직방향으로의 통수단면적을 $$A_{v}$$라 하면, 통수단면이 단위폭을 지니고 있기 때문에 $$A_{h} = 1 \times h_{h}$$이고, $$A_{v} = 1 \times h_{v}$$이다.

그런데 앞서 수평 길이의 스케일이 연직 길이의 스케일에 비해 훨신 더 크다고 했으므로, 즉 $$h_{h} \gg h_{v}$$이므로, $$A_{h} \gg A_{v}$$를 만족한다.

기본적으로, 질량보존의 법칙은 항상 성립하고, 1차원 연속방정식은 $$Q=AV$$이므로, $$Q$$가 일정한 상황에서 단면적 $$A$$와 유속 $$V$$는 반비례 관계에 놓이게 되어 결론적으로 $$V_{v} > V_{h}$$의 관계가 성립하게 된다.
:::

연직 압력 gradient가 거의 정수압에 가까우며 수평 압력 gradient는 압력표면의 변위로 인해 발생함을 알 수 있으며, 이는 수평 속도장이 유체의 수심 전체에 걸쳐 일정하다는 것을 의미한다.

연직으로 적분하는 것은 연직방향의 유속이 해당 방정식으로부터 제거되도록 해준다.

:::warning
정적분에서 소거하고 싶은 변수에 대하여 적분을 진행하게 되면, 적분의 결과 식에서 해당 변수가 드러나지 않음을 이용한 식 변환으로 볼 수 있겠다.
:::

결론적으로, 이러한 과정을 통해 SWE는 유도된다.

앞서, 연직으로 적분을 하여 이러한 SWE를 얻었기 때문에 본 방정식에는 연직방향의 유속 항이 존재하지 않는다.

:::warning
다만, 그렇다고 하여 연직방향으로의 유속이 반드시 0이라는 의미는 아니다.

즉, 이는 중요하게 구별해야 하는데, 예를 들어, 바닥의 깊이가 변한다면 연직방향의 유속이 0일 수 없다.

반면에, 연직방향의 유속이 0이라면, 이때는 바닥의 깊이가 일정하여 평평한 바닥일 것이다.

결론적으로, 연직방향의 유속이 0일 때는 SWE상에서의 바닥은 그 깊이가 일정한 평평한 바닥이다.
:::

일단 하나의 솔루션(수평방향으로의 유속과 자유수면의 변위)이 찾아진다면, 연직방향으로의 유속은 연속방정식을 통해 복구될 수 있다.

:::success
유체 동역학에서는 수평방향으로의 길이 스케일이 연직방향으로의 길이 스케일에 비해 훨씬 더 큰 것이 일반적이기 때문에 이러한 SWE가 널리 적용될 수 있다.
:::

:::warning
SWE 모델은 오직 하나의 연직 Level만을 가지기 때문에 높이에 따라 달라지는 모든 요소를 직접적으로 총 망라할 수는 없다.

그러나, 평균상태가 충분하게 단순한 경우에 SWE에서 수평방향의 몇몇의 집합들로부터 분리되어질 수 있는 연직방향으로의 변형이 그 상태를 설명할 수 있다.
:::

# Equations

## Conservative Form

SWE는 질량보존과 선형 모멘텀 보존에 대한 방정식(Navier-Stokes Equations)들로부터 유도되어지는데, 심지어 Shallow-Water의 가정이 깨지는 도수 현상에서도 성립한다.

수평하상(바닥이 수평)인 경우에 Coriolis, 마찰과 점성력 모두를 무시할 수 있으므로, SWE는 다음과 같다.

$$\frac{\partial{(\rho{\eta})}}{\partial{t}} + \frac{\partial{(\rho{\eta{u}})}}{\partial{x}} + \frac{\partial{(\rho{\eta{v}})}}{\partial{y}} = 0,$$

$$\frac{\partial{(\rho{\eta{u}})}}{\partial{t}} + \frac{\partial}{\partial{x}}\left( \rho{\eta{u^{2}}} + \frac{1}{2}{\rho{g}{\eta^{2}}}\right) + \frac{\partial{(\rho{\eta{uv}})}}{\partial{y}} = 0$$

$$\frac{\partial{(\rho{\eta{v}})}}{\partial{t}} + \frac{\partial{(\rho{\eta{uv}})}}{\partial{x}} + \frac{\partial}{\partial{y}}\left(\rho{\eta{v^{2}}} + \frac{1}{2}{\rho{g\eta^{2}}}\right) = 0$$

여기서 $\eta$는 총 유체 기둥의 높이($$x$$, $$y$$, 그리고 $$t$$의 함수로 표현되는 순간 유체의 깊이)이고, 2D 벡터 $$(u, v)$$는 유체의 수평방향의 유속으로서, 연직기둥에 걸쳐 평균적이다.

더 나아가 $g$는 중력가속도이고, $\rho$는 유체의 밀도이다.

첫 번째 방정식은 질량 보존으로부터 유도되었고, 나머지 방정식들은 모멘텀 보존으로부터 유도되었다. 

# References

[Wikipedia](https://en.wikipedia.org/wiki/Shallow_water_equations)