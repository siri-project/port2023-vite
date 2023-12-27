import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // GSAP의 ScrollTrigger 모듈 가져오기

export function port() {
	gsap.registerPlugin(ScrollTrigger); // ScrollTrigger를 GSAP에 등록
	const horSection = gsap.utils.toArray(".port-item"); // 클래스 이름이 "port-item"인 모든 요소들을 선택하여 배열 horSection에 저장

	gsap.to(horSection, { // GSAP의 to 메서드를 사용하여 요소들에 애니메이션을 적용
		xPercent: -120 * (horSection.length - 1), // 요소들을 가로 방향으로 배치하기 위해 xPercent 속성을 사용. 스크롤되면 120% 만큼 이동하도록 설정
		ease: 'none', // 애니메이션의 이징(easing)을 "none"으로 설정하여 일정한 속도로 진행되도록 설정
		scrollTrigger: { // scrollTrigger 옵션 제어
			trigger: '#port', // 애니메이션 시작할 트리거 요소
			start: 'top 56px', // 트리거 요소의 상단에서 56px 아래에서 애니메이션 시작
			end: '+=3000', // 트리거 요소의 아래에서 3000px 아래에서 애니메이션 끝
			pin: true, // 애니메이션이 스크롤 범위 동안 고정되도록 합니다.
			scrub: 1, // 스크롤 시 애니메이션 속도에 비례하여 애니메이션이 진행
			markers: false, // 디버깅을 위한 마커를 표시하지 않음
			invalidateOnRefresh: true, // 페이지 리프레시 시 ScrollTrigger 캐시를 재설정
			anticipatePin: 1 // 고정된 상태로 애니메이션이 시작되기 전에 스크롤 위치에 따라 약간의 애니메이션 효과를 부여
		}
	});
}
