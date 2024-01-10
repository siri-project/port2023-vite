export function link() { // 외부에서 사용 가능한 export 함수. 다른 스크립트 파일에서 이 함수를 import하여 사용할 수 있음.
	document.querySelectorAll('a[href="#"]').forEach((anchor) => { // 문서(Document)에서 모든 앵커 요소 선택
		// (document.querySelectorAll('a[href^="#"]')). 선택된 앵커 요소들에 대해 forEach 메서드를 사용하여 각각의 앵커에 대해 아래의 콜백 함수 실행.
		anchor.addEventListener("click", function (e) { // 각 앵커 요소에 클릭 이벤트 추가. 클릭 이벤트가 발생 시 아래 콜백 함수 실행.
			e.preventDefault(); // 클릭 이벤트 기본 동작 막기. 여기서는 앵커 요소를 클릭했을 때 해당 앵커의 href 속성에 지정된 링크로 이동하는 동작을 막습니다.

			const targetId = this.getAttribute("href"); // 클릭된 앵커의 href 속성 값을 가져와서 targetId 변수 저장. getAttribute 메서드를 사용하여 앵커의 href 속성 값을 가져옵니다.
			const targetElement = document.querySelector(targetId); // targetId에 저장된 값으로 문서 내에서 해당하는 요소 선택.

			if (targetElement) { // 만약 targetElement가 존재한다면(즉, 해당 targetId 값을 가진 요소가 문서 내에 존재한다면) 아래 코드 실행.
				targetElement.scrollIntroView({ // 이 부분은 선택된 대상 요소로 스크롤링하는 동작 수행. scrollIntoView 메서드를 사용하여 targetElement가 보이도록 스크롤 조정.
					behavior: "smooth" // { behavior: "smooth" } 옵션은 스크롤링이 부드럽게 이루어지도록 하는 옵션. 즉, 스크롤이 부드럽게 일어납니다.
				});
			}
		});
	});
}
