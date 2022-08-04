import { $ } from '../utils/index.js';

const $main = $('.main');

let nameArr = [];

$main.addEventListener('click', ({ target }) => {
  if (target.tagName !== 'BUTTON') return;

  const { className } = target;

  if (className === 'set-data-button') {
    const presenters = JSON.parse(localStorage.getItem('presenters'));

    if (presenters) {
      const result = confirm('이미 데이터가 존재합니다. 데이터를 새로 설정하시겠습니까?');
      if (result) {
        $main.innerHTML = `
    <section>
        <form class="name-form">
        <fieldset>
            <legend class="sub-title">스터디 참여자들을 입력해주세요.</legend>
            <input type="text" class="name-input" placeholder="이름" />
            <button type="submit">입력</button>
        </fieldset>
        </form>
        <ul class="name-list"></ul>
        <button type="submit" class="complete-button">완료</button>
        <button type="reset" class="reset-button">초기화</button>
    </section>
    `;
      }
    } else {
      $main.innerHTML = `
    <section>
        <form class="name-form">
        <fieldset>
            <legend class="sub-title">스터디 참여자들을 입력해주세요.</legend>
            <input type="text" class="name-input" placeholder="이름" />
            <button type="submit">입력</button>
        </fieldset>
        </form>
        <ul class="name-list"></ul>
        <button type="submit" class="complete-button">완료</button>
        <button type="reset" class="reset-button">초기화</button>
    </section>
    `;
    }

    return;
  }

  if (className === 'select-presenter-button') {
    nameArr = JSON.parse(localStorage.getItem('presenters'));

    if (!nameArr) {
      alert('데이터 설정 버튼을 눌러 발표자 데이터를 설정해주세요');
      nameArr = [];
      return;
    }

    $main.innerHTML = `
      <section class="select-section">
          <h2 class="sub-title2">지난번 발표자를 선택해주세요</h2>
          ${nameArr.map((name) => `<button type="button" class="select-presenter">${name}</button>`).join('')}
          <button type="button" class="select-presenter">없음</button>
      </section>
      `;
  }

  if (className === 'select-presenter') {
    const doubleNameArr = nameArr.concat(nameArr);

    if (target.textContent !== '없음') {
      doubleNameArr.splice(doubleNameArr.indexOf(target.textContent), 1);
    }

    const randomNumber = Math.floor(Math.random() * doubleNameArr.length);

    $main.innerHTML = `
    <section>
        <h2 class="sub-title">랜덤으로 뽑는중입니다... 잠시만 기다려주세요</h2>
        <video
        loading="lazy"
        muted="muted"
        src="https://cdnl.iconscout.com/lottie/premium/thumb/garapon-lottery-saucer-5263187-4428331.mp4"
        type="video/mp4"
        autoplay="autoplay"
        loop="loop"
        width="400"
        ></video>
    </section>
    `;

    setTimeout(() => {
      $main.innerHTML = `
            <section>
                <h2 class="sub-title presenter-title">발표자: ⭐️ ${doubleNameArr[randomNumber]} ⭐️</h2>
                <video
                loading="lazy"
                muted="muted"
                src="https://cdnl.iconscout.com/lottie/premium/thumb/lucky-draw-box-5263228-4428326.mp4"
                type="video/mp4"
                autoplay="autoplay"
                loop="loop"
                width="400"
                ></video>
            </section>
        `;
    }, 3000);
  }

  if (className === 'complete-button') {
    if (nameArr.length === 0) {
      alert('참여자를 1명 이상으로 입력해주세요');
      return;
    }
    localStorage.setItem('presenters', JSON.stringify(nameArr));
    alert('발표자 데이터가 설정되었습니다.');

    $main.innerHTML = `
    <section>
        <button type="button" class="set-data-button">데이터 설정</button>
        <button type="button" class="select-presenter-button">발표자 뽑기</button>
    </section>
    `;
  }

  if (className === 'reset-button') {
    nameArr = [];

    $('.name-input').value = '';

    $('.name-list').innerHTML = nameArr
      .map(
        (name) => `
    <li>${name}</li>
    `
      )
      .join('');
  }
});

$main.addEventListener('submit', (e) => {
  e.preventDefault();

  const $nameInput = $('.name-input');

  nameArr.push($nameInput.value);

  $nameInput.value = '';

  $('.name-list').innerHTML = nameArr
    .map(
      (name) => `
    <li>${name}</li>
    `
    )
    .join('');
});

console.log(JSON.parse(localStorage.getItem('presenters')));
