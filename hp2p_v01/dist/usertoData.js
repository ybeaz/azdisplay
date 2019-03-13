
// eslint no-var: off
/* eslint no-var: off */
var USERTO = {
  favicon: {
    href: 'https://userto.com/img/favicon.ico',
  },
  titleTag: 'UserTo',
  rus: {
    treeDefault: {
      
      navBar: {
        sid: 'NavBar',
        login: 'Вход',
        langs: {
          sid: 'Dropdown_langSelect',
          listArr: [
            { capture: 'Russian', active: true, spritePosition: '-324px -252px', nameShort: 'Ru', sourceClass: 'spriteFlag' },
            { capture: 'English US', active: false, spritePosition: '-378px -228px', nameShort: 'En', sourceClass: 'spriteFlag' },
            { capture: 'Espaniol', active: false, spritePosition: '-90px -228px', nameShort: 'Es', sourceClass: 'spriteFlag' },
            { capture: 'Deutch', active: false, spritePosition: '-72px -60px', nameShort: 'De', sourceClass: 'spriteFlag' },
          ],
          delay: 500,
        },
      },
      descriptors: {
        sid: 'Descriptors',
        h1: 'Выберите специалиста<br />решите ваш вопрос онлайн',
        h2: 'Получите необходимые знания уже сейчас<br />через чат, аудио или видеосвязь', 
      },
      carousel: {
        sid: 'CarouselDesc',
        listArr: [
          {
            capture: 'background01.jpg',
            src: 'https://userto.com/img/background01.jpg',
            active: true,
          },
          {
            capture: 'background02.jpg',
            src: 'https://userto.com/img/background02.jpg',
            active: false,
          },
          {
            capture: 'background03.jpg',
            src: 'https://userto.com/img/background03.jpg',
            active: false,
          },
          {
            capture: 'background04.jpg',
            src: 'https://userto.com/img/background04.jpg',
            active: false,
          },
          {
            capture: 'background05.jpg',
            src: 'https://userto.com/img/background05.jpg',
            active: false,
          },
        ],
        isDisplayArrows: true,
        isDisplayIndicators: true,
        isAutoCarousel: false,
        autoCarouselInterval: 2000,
        scrollInterval: 100,
        scrollPeriodEnd: 100,
      },
      searchForm: {
        sid: 'SearchForm',
        searchPlaceholder: 'Сфера специалиста...',
        searchButton: 'Найти',
        typeRequest: {
          sid: 'FieldButtons_typeRequest',
          listArr: [
            { capture: 'Все', active: true, general: true },
            { capture: 'Конcультация', active: false, general: false },
            { capture: 'Обучение', active: false, general: false },
            { capture: 'Фриланс', active: false, general: false },
          ],
          isGenaralShowAlways: false,
          isGeneralShowPhone: false,
        },
        typeMedia: {
          sid: 'Dropdown_typeMedia',
          listArr: [
            { capture: 'Все виды', iconFa: ['fas fa-video', 'fas fa-phone', 'fas fa-comments'], active: true, general: true },
            { capture: 'Видео', iconFa: ['fas fa-video'], active: false, general: false },
            { capture: 'Аудио', iconFa: ['fas fa-phone'], active: false, general: false },
            { capture: 'Мессенджер', iconFa: ['fas fa-comments'], active: false, general: false },
          ],
          delay: 500,
        },
      },
      catatogTags: {
        sid: 'CatalogTags',
        captureSection: 'Разделы',
        captureButtonShowAll: 'Показать все',
        captureButtonCompact: 'Компактный вид',
        listArr: [
          { capture: 'Вопросы бизнеса', iconClass: '', num: 639, iconFa: 'fas fa-user-tie' },
          { capture: 'Компьютеры и IT', iconClass: 'iconFire', num: 917, iconFa: 'fas fa-laptop' },
          { capture: 'Ремонт авто', iconClass: 'iconFire', num: 92, iconFa: 'fas fa-car-crash' },
          { capture: 'Юридические вопросы', iconClass: '', num: 688, iconFa: 'fas fa-gavel' },
          { capture: 'Здоровье', iconClass: '', num: 3166, iconFa: 'fas fa-heartbeat' },
          { capture: 'Дети', iconClass: '', num: 1607, iconFa: 'fas fa-child' },
          { capture: 'Репетиторы и обучение', iconClass: '', num: 460, iconFa: 'fas fa-graduation-cap' },
          { capture: 'Работа и карьера', iconClass: '', num: 1307, iconFa: 'fas fa-briefcase' },
          { capture: 'ЗОЖ', iconClass: '', num: 3166, iconFa: 'fas fa-dumbbell' },
          { capture: 'Животные', iconClass: '', num: 401, iconFa: 'fas fa-paw' },
          { capture: 'Работа техники', iconClass: '', num: 160, iconFa: 'fas fa-blender' },
          { capture: 'Мистика', iconClass: 'iconFire', num: 263, iconFa: 'fas fa-hat-wizard' },
          { capture: 'Ремонт и строительство', iconClass: 'iconFire', num: 319, iconFa: 'fas fa-hammer' },
          { capture: 'Красота', iconClass: '', num: 711, iconFa: 'far fa-grin-hearts' },
          { capture: 'Саморазвитие', iconClass: 'iconFire', num: 452, iconFa: 'fas fa-rocket' },
          { capture: 'Фото', iconClass: '', num: 447, iconFa: 'fas fa-camera-retro' },
          { capture: 'Аудио', iconClass: 'iconFire', num: 417, iconFa: 'fas fa-sliders-h' },
          { capture: 'Творчество и хобби', iconClass: '', num: 1344, iconFa: 'fas fa-paint-brush' },
          { capture: 'Медицинские вопросы', iconClass: '', num: 927, iconFa: 'fas fa-first-aid' },
          { capture: 'Путешествия', iconClass: '', num: 401, iconFa: 'fas fa-plane-departure' },
          { capture: 'Религия', iconClass: '', num: 838, iconFa: 'fas fa-praying-hands' },
          { capture: 'Искусство', iconClass: '', num: 2162, iconFa: 'fas fa-square-full' },
          { capture: 'Недвижи- мость', iconClass: '', num: 4304, iconFa: 'fas fa-city'},
          { capture: 'Покупка авто', iconClass: '', num: 579, iconFa: 'fas fa-car-side' },
          { capture: 'Работа с текстом', iconClass: '', num: 431, iconFa: 'fas fa-align-left' },
          { capture: 'Реклама', iconClass: '', num: 211, iconFa: 'fas fa-bullhorn' },
          { capture: 'Работа в программах', iconClass: '', num: 2239, iconFa: 'far fa-keyboard' },
          { capture: 'Психология', iconClass: '', num: 995, iconFa: 'fas fa-brain' },
          { capture: 'Видео', iconClass: '', num: 1819, iconFa: 'far fa-file-video' },
          { capture: 'Спорт', iconClass: '', num: 3132, iconFa: 'fas fa-running' },
          { capture: 'Вопросы по профессии', iconClass: 'iconFire', num: 185, iconFa: 'far fa-handshake' },
        ],
        isCompactAlways: false,
        isCompactPhone: true,
        numItemsBeforeButton: 9,
      },
      workFlow: {
        sid: 'WorkFlow',
        captureSection: 'Как это работает?',
        listArr: [
          {
            iconFa: 'fas fa-search',
            capture: 'Выбирайте специалиста',
            details: 'В поле поиска сделайте запрос по необходимой теме. Сервис преложит варианты',
          },
          {
            iconFa: 'fas fa-calendar-check',
            capture: 'Удобное время',
            details: 'Обратитесь к специалисту прямо сейчас или по графику, который подходит вам',
          },
          {
            iconFa: 'fas fa-video',
            capture: 'Способ связи',
            details: 'Выбирайте способ и формат общения. Чат аудио или видеосвязь',
          },
          {
            iconFa: 'far fa-smile-wink',
            capture: 'Решите ваш вопрос',
            details: 'Специалист поможет найти верный подход к решению вопроса',
          },
        ],
      },
      itHelps: {
        sid: 'ItHelps',
        captureSection: '<span>User</span><span class="c_green">To</span>&nbsp;<span style="display: inline;">помогает</span>',
        imgSrc: 'https://userto.com/img/illustration05.jpg',
        listArr: [
          { capture: 'Быстро разобраться в вопросе', details: 'Не нужно куда-то идти или ехать, искать людей, сидеть в очередях. Найдите специалиста на сайте'},
          { capture: 'Не переплачивать', details: 'Для решения многих вопросов не требуется присутствия специалиста. Зачем за это платить, если вопрос легко решить в чате, по аудио или видеосвязи?! Специалист экономит свое время, вы выигрываете в деньгах'},
          { capture: 'Не зависеть от одного мнения', details: 'Получите сразу несколько ответов по вашей теме. Это поможет лучше разобраться в вопросе и принять взвешенное решение'},
        ],
        sequence: {a: 'img', b: 'list'},
      },
      keyFeatures: {
        sid: 'KeyFeatures',
        captureSection: '<span>На</span>&nbsp;<span>User</span><span class="c_green">To</span>',
        imgSrc: 'https://userto.com/img/illustration02.jpg',
        listArr: [
          { capture: 'Общайтесь бесплатно', details: 'Чтобы вы смогли уточнить детали по решению вашего вопроса, первые минуты разговора со специалистом бесплатно'},
          { capture: 'Удобный канал связи', details: 'Решить вопрос по видеосвяи или общаться только голосом, уточнить детали в чате? Выбирайте как удобно вам.'},
          { capture: 'Как определяется стоимость', details: 'Специалист это делает самостоятельно. Среднее время решения вопроса - 14 минут. Если в профиле указано 5 рубн минута, и 2 минуты бесплатно, стоимость обращения составит всего 60 руб. Узнайте подробности, введите запрос в поиск. Многие готовы помочь бесплатно.'},
        ],
        sequence: {a: 'list', b: 'img'},
      },
      shortAdvantages: {
        sid: 'ShortAdvantages',
        listArr: [
          { iconFa: 'fas fa-user-check', capture: 'Проверенные пользователи' },
          { iconFa: 'fas fa-shield-alt', capture: 'Безопасная оплата' },
          { iconFa: 'fas fa-file-signature', capture: 'Достоверные отзывы' },
        ],
      },
      userReviews: {
        sid: 'UserReviews',
        listArr: [
          {
            imgSrc: 'https://userto.com/img/user01.jpg',
            capture: 'AngelA 89',
            details: 'Спасибо за консультацию! оцениваю ее на отлично с плюсом.так как Игорь всегда объясняет все доступно и очень понятно и дает рекомендации, которые помогают сразу разобраться в ситуации и почувствовать себя уверенно.',
            reviewNum: 1,
            reviewName: 'отзыв',
            ratingNum: 5,
            ratingIconFa: 'fas fa-star',
          },
          {
            imgSrc: 'https://userto.com/img/user02.jpg',
            capture: 'Василий',
            details: 'Моя огромная и искренняя благодарность Игорю за очередную консультацию. Бес сомненния 5 с огромным плюсом: все точно по запрошенной проблеме. легко для понимания, безболезненно для психики. Пути решения задачи наметили для самостоятельной работы. список литературы и практик получил - как говорится "от души отлегло"',
            reviewNum: 17,
            reviewName: 'отзывов',
            ratingNum: 5,
            ratingIconFa: 'fas fa-star',
          },
          {
            imgSrc: 'https://userto.com/img/user03.jpg',
            capture: 'Старков',
            details: 'Лучший в своем деле обращаюсь уже не первый раз по разным вопросам ремонта бытовой техники.',
            reviewNum: 5,
            reviewName: 'отзывов',
            ratingNum: 4,
            ratingIconFa: 'fas fa-star',
          },
          {
            imgSrc: 'https://userto.com/img/user05.png',
            capture: 'Анна',
            details: 'Я очень рада, что обратилась с дочерью за помощью к грамотному специалисту, который внимательно выслушал и проанализировал состояние психики у дочери и дал своевременные рекомендации и методики избавления от стресса и панических атак.я уже вижу положительные результаты, идет улучшение внутреннего состояния и физического, надеюсь продолжить начатое сотрудничество, так как есть еще проблемы со сном и памятью',
            reviewNum: 1,
            reviewName: 'отзыв',
            ratingNum: 5,
            ratingIconFa: 'fas fa-star',
          },
        ],
      },
      registrationButton: {
        sid: 'RegistrationButton',
        capture: 'Быстрая регистрация',
      },
      footer: {
        sid: 'Footer',
        captureSection: '',
        listArr: [
          {
            imgClass: '',
            capture: 'About',
            level01: [
              {capture: 'Business model', href: '#Footer'},
              {capture: 'Out team', href: '#Footer'},
            ],
          },
          {
            imgClass: '',
            capture: 'Products',
            level01: [
              {capture: 'Search', href: '#Footer'},
            ],
          },
          {
            imgClass: '',
            capture: 'Support',
            level01: [
              {capture: 'FAQ', href: '#Footer'},
              {capture: 'Contact us', href: '#Footer'},
            ],
          },
        ],
      },
      modals: {
        sid: 'Modal',
        registration: {
          sid: 'RegistrationDev',
          capture: 'Приносим извинение',
          message: 'Сервис сейчас находится в разработке. Вы можете оставить ваш email и получить бонус 500 руб. в момент запуска. Ждите новостей в ближайшем будущем',
          inputPlaceHolder: 'ваш email...',
          buttonCapture: 'Послать',
        },
        farewell: {
          sid: 'FarewellDev',
          capture: 'Рады были узнать в Вашем интересе',
          message: 'Если вы поделились email, мы дадим знать о запуске сервиса в ближайшем будущем',
          inputPlaceHolder: '',
          buttonCapture: '',
        }
      }
    },
    router: {
      routes: [
        { path: '/', exact: true, page: 'FacePage326' },
        { path: '/326_HP2P_v01/enter', exact: true, page: 'FacePage326' },
      ],
      redirects: [
        { from: '/', to: '/326_HP2P_v01/enter', exact: true },
      ],
    },
  }
};

// Set path
(function(USERTO) {
  var to = USERTO.rus.router.redirects[0].to;
  var utm_content = '326_HP2P_v01';
  if (location.pathname === '/') {
    // console.info('location.pathname', { pathname: location.pathname });
    history.pushState(null, null, to + '?utm_content=' + utm_content);
  }
})(USERTO);


// Set favicon
(function(USERTO) {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = USERTO.favicon.href;
  document.getElementsByTagName('head')[0].appendChild(link);
})(USERTO);


// Set page title
(function(USERTO) {
  document.title = USERTO.titleTag;
})(USERTO);