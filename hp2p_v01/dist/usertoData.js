
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
        login: 'Регистрация и вход',
      },
      descriptors: {
        sid: 'Descriptors',
        h1: 'Решим ваш вопрос вместе',
        h2: 'Получите необходимые знания уже сейчас<br />через чат, аудио или видеосвязь', 
      },
      carousel: {
        sid: 'Carousel',
        listArr: [
          {
            capture: 'Los Angeles',
            src: 'https://www.w3schools.com/bootstrap4/la.jpg',
            active: true,
          },
          {
            capture: 'Chicago',
            src: 'https://www.w3schools.com/bootstrap4/chicago.jpg',
            active: false,
          },
          {
            capture: 'New York',
            src: 'https://www.w3schools.com/bootstrap4/ny.jpg',
            active: false,
          },
        ],
      },
      searchForm: {
        sid: 'SearchForm',
        searchPlaceholder: 'Сфера специалиста...',
        searchButton: 'Найти',
        typeRequest: [
          { capture: 'Все', active: true },
          { capture: 'Конcультация', active: false },
          { capture: 'Обучение', active: false },
          { capture: 'Фриланс', active: false },
        ],
        typeMedia: [
          { capture: 'Все виды', classNameArr: ['fas fa-video', 'fas fa-phone', 'fas fa-comments'], active: true },
          { capture: 'Видео', classNameArr: ['fas fa-video'], active: false },
          { capture: 'Аудио', classNameArr: ['fas fa-phone'], active: false },
          { capture: 'Мессенджер', classNameArr: ['fas fa-comments'], active: false },
        ],
      },
      catatogTags: {
        sid: 'CatalogTags',
        captureSection: 'Разделы',
        catatogtagArr: [
          { capture: 'Ремонт и строительство', iconClass: 'iconFire', num: 319 },
          { capture: 'Ремонт и установка техники', iconClass: '', num:  160 },
          { capture: 'Ремонт авто', iconClass: 'iconFire', num: 92 },
          { capture: 'Репетиторы и обучение', iconClass: '', num: 460 },
          { capture: 'Красота', iconClass: '', num: 711 },
          { capture: 'Мистика', iconClass: 'iconFire', num: 263 },
          { capture: 'Компьютеры и IT', iconClass: 'iconFire', num: 917 },
          { capture: 'Работа и карьера', iconClass: '', num: 1307 },
          { capture: 'Саморазвитие', iconClass: 'iconFire', num: 452 },
          { capture: 'Юридические вопросы', iconClass: '', num: 688 },
          { capture: 'ЗОЖ', iconClass: '', num: 3166 },
          { capture: 'Фото', iconClass: '', num: 447 },
          { capture: 'Аудио', iconClass: 'iconFire', num: 417 },
          { capture: 'Творчество и хобби', iconClass: '', num: 1344 },
          { capture: 'Медицинские вопросы', iconClass: '', num: 927 },
          { capture: 'Путешествия', iconClass: '', num: 401 },
          { capture: 'Вопросы бизнеса', iconClass: '', num: 639 },
          { capture: 'Животные', iconClass: '', num: 401 },
          { capture: 'Религия', iconClass: '', num: 838 },
          { capture: 'Искусство', iconClass: '', num: 2162 },
          { capture: 'Недвижимость', iconClass: '', num: 4304 },
          { capture: 'Покупка авто', iconClass: '', num: 579 },
          { capture: 'Работа с текстом', iconClass: '', num: 431 },
          { capture: 'Реклама', iconClass: '', num: 211 },
          { capture: 'Работа в программах', iconClass: '', num: 2239 },
          { capture: 'Психология', iconClass: '', num: 995 },
          { capture: 'Видео', iconClass: '', num: 1819 },
          { capture: 'Дети', iconClass: '', num: 1607 },
          { capture: 'Спорт', iconClass: '', num: 3132 },
          { capture: 'Вопросы по профессии', iconClass: 'iconFire', num: 185 },
        ]
      },
      workFlow: {
        sid: 'WorkFlow',
        captureSection: '',
        workFlowArr: [
          {
            step: 1,
            imgClass: 'icon01',
            capture: 'Выбирайте специалиста',
            details: 'В поле поиска сделайте запрос по необходимой теме. Сервис преложит варианты',
          },
          {
            step: 2,
            imgClass: 'icon02',
            capture: 'Удобное время',
            details: 'Обратитесь к специалисту прямо сейчас или по графику, который подходит вам',
          },
          {
            step: 3,
            imgClass: 'icon03',
            capture: 'Способ связи',
            details: 'Выбирайте способ и формат общения. Чат аудио или видеосвязь',
          },
          {
            step: 4,
            imgClass: 'icon04',
            capture: 'Решите ваш вопрос',
            details: 'Специалист поможет найти верный подход к решению вопроса',
          },
        ]
      },
      itHelps: {
        sid: 'ItHelps',
        captureSection: '<span>User</span><span class="c_green">To</span>&nbsp;<span>помогает</span>',
        imgSrc: 'https://userto.com/img/illustration04.jpg',
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
        shortAdvantagesArr: [
          { imgClass: 'icon05', capture: 'Проверенные пользователи' },
          { imgClass: 'icon06', capture: 'Безопасная оплата' },
          { imgClass: 'icon07', capture: 'Достоверные отзывы' },
        ],
      },
      registrationButton: {
        sid: 'RegistrationButton',
        login: 'Пройдите быструю регистрацию',
      },
      userReviews: {
        sid: 'UserReviews',
        captureSection: 'Впечатления',
        listArr: [
          {
            imgClass: 'user01',
            capture: 'Анжелика',
            details: 'Спасибо за консультацию! оцениваю ее на отлично с плюсом.так как Игорь всегда объясняет все доступно и очень понятно и дает рекомендации, которые помогают сразу разобраться в ситуации и почувствовать себя уверенно.',
          },
          {
            imgClass: 'user02',
            capture: 'Василий',
            details: 'Моя огромная и искренняя благодарность Игорю за очередную консультацию. Бес сомненния 5 с огромным плюсом: все точно по запрошенной проблеме. легко для понимания, безболезненно для психики. Пути решения задачи наметили для самостоятельной работы. список литературы и практик получил - как говорится "от души отлегло"',
          },
          {
            imgClass: 'user03',
            capture: 'Евгений',
            details: 'Лучший в своем деле обращаюсь уже не первый раз по разным вопросам ремонта бытовой техники.',
          },
          {
            imgClass: 'user04',
            capture: 'Анна',
            details: 'Я очень рада, что обратилась с дочерью за помощью к грамотному специалисту, который внимательно выслушал и проанализировал состояние психики у дочери и дал своевременные рекомендации и методики избавления от стресса и панических атак.я уже вижу положительные результаты, идет улучшение внутреннего состояния и физического, надеюсь продолжить начатое сотрудничество, так как есть еще проблемы со сном и памятью',
          },
        ],
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