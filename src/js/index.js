import { $ } from '../utils/index.js';

const $main = $('.main');
const $setDataButton = $('.set-data-button');
const $selectPresenterButton = $('.select-presenter-button');

// 입력칸, 입력칸 엔터후 보여주는거, 최종 완료버튼 이후 완료되었습니다 하고 메인페이지로 되돌아가기
$setDataButton.addEventListener('click', () => {
  console.log('데이터 설정');
});

$selectPresenterButton.addEventListener('click', () => {
  const presenters = localStorage.getItem('presenters');

  if (!presenters) {
    alert('데이터 설정 버튼을 눌러 발표자 데이터를 설정해주세요');
    return;
  }

  $main.innerHTML = `
    <section class="select-section">
        <h2 class="sub-title">지난번 발표자를 선택해주세요</h2>
        <button>문주영</button>
        <button>이정민</button>
        <button>김동규</button>
        <button>이인송</button>
        <button>이민구</button>
        <button>없음</button>
    </section>
    `;
});
