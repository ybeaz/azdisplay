var USERTO = {
  treeDefault: {
    descriptors : {
      sid: 'Descriptors',
      h1: 'Совместное решение вашего вопроса',
      h2: 'Получите необходимые знания от специалиста через чат, аудио или видеосвязь', 
    },
    catatogTags: {
      sid: 'CatalogTags',
      captureSection: 'Разделы',
      catatogtagArr: [
        { nameRus: 'Ремонт и строительство', iconClass: 'iconFire', num: 319 },
        { nameRus: 'Ремонт и установка техники', iconClass: '', num:  160 },
        { nameRus: 'Ремонт авто', iconClass: 'iconFire', num: 92 },
        { nameRus: 'Репетиторы и обучение', iconClass: '', num: 460 },
        { nameRus: 'Красота', iconClass: '', num: 711 },
        { nameRus: 'Мистика', iconClass: 'iconFire', num: 263 },
        { nameRus: 'Компьютеры и IT', iconClass: 'iconFire', num: 917 },
        { nameRus: 'Работа и карьера', iconClass: '', num: 1307 },
        { nameRus: 'Саморазвитие', iconClass: 'iconFire', num: 452 },
        { nameRus: 'Юридические вопросы', iconClass: '', num: 688 },
        { nameRus: 'ЗОЖ', iconClass: '', num: 3166 },
        { nameRus: 'Фото', iconClass: '', num: 447 },
        { nameRus: 'Аудио', iconClass: 'iconFire', num: 417 },
        { nameRus: 'Творчество и хобби', iconClass: '', num: 1344 },
        { nameRus: 'Медицинские вопросы', iconClass: '', num: 927 },
        { nameRus: 'Путешествия', iconClass: '', num: 401 },
        { nameRus: 'Вопросы бизнеса', iconClass: '', num: 639 },
        { nameRus: 'Животные', iconClass: '', num: 401 },
        { nameRus: 'Религия', iconClass: '', num: 838 },
        { nameRus: 'Искусство', iconClass: '', num: 2162 },
        { nameRus: 'Недвижимость', iconClass: '', num: 4304 },
        { nameRus: 'Покупка авто', iconClass: '', num: 579 },
        { nameRus: 'Работа с текстом', iconClass: '', num: 431 },
        { nameRus: 'Реклама', iconClass: '', num: 211 },
        { nameRus: 'Работа в программах', iconClass: '', num: 2239 },
        { nameRus: 'Психология', iconClass: '', num: 995 },
        { nameRus: 'Видео', iconClass: '', num: 1819 },
        { nameRus: 'Дети', iconClass: '', num: 1607 },
        { nameRus: 'Спорт', iconClass: '', num: 3132 },
        { nameRus: 'Вопросы по профессии', iconClass: 'iconFire', num: 185 },
      ]
    },
    workFlow: {
      sid: 'WorkFlow',
      captureSection: '',
      workFlowArr: [
        {
          step: 1,
          imgClass: 'step01',
          capture: 'Выбирайте специалиста',
          details: 'В поле поиска сделайте запрос по необходимой теме. Сервис преложит варианты',
        },
        {
          step: 2,
          imgClass: 'step02',
          capture: 'Удобное время',
          details: 'Обратитесь к специалисту прямо сейчас или по графику, который подходит вам',
        },
        {
          step: 3,
          imgClass: 'step03',
          capture: 'Способ связи',
          details: 'Выбирайте способ и формат общения. Чат аудио или видеосвязь',
        },
        {
          step: 4,
          imgClass: 'step04',
          capture: 'Решите ваш вопрос',
          details: 'Специалист поможет найти верный подход к решению вопроса',
        },
      ]
    },
    itHelps: {
      sid: 'ItHelps',
      captureSection: '<span>User</span><span class="c_green">To</span>&nbsp;<span>помогает</span>',
      imgClass: 'imgManWorks',
      listArr: [
        { capture: 'Быстро разобраться в вопросе', details: 'Не нужно куда-то идти или ехать, искать людей, сидеть в очередях. Найдите специалиста на сайте'},
        { capture: 'Не переплачивать', details: 'Для решения многих вопросов не требуется присутствия специалиста. Зачем за это платить, если вопрос легко решить в чате, по аудио или видеосвязи?! Специалист экономит свое время, вы выигрываете в деньгах'},
        { capture: 'Не зависеть от одного мнения', details: 'Получите сразу несколько ответов по вашей теме. Это поможет лучше разобраться в вопросе и принять взвешенное решение'},
      ],
      sequence: {a: 'img', b: 'list'},
    },
    keyFeatures: {
      sid: 'KeyFeatures',
      captureSection: 'Ключевые особенности',
      imgClass: 'imgWomanPhone',
      listArr: [
        { capture: 'Первые минуты бесплатно', details: ''},
        { capture: 'Оплаты за время общения', details: ''},
        { capture: 'Смотрите на рейтинг', details: ''},
      ],
      sequence: {a: 'list', b: 'img'},
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
      captureSection: '<span class="c_white">User</span><span class="c_green">To</span>',
      listArr: [
        {
          imgClass: '',
          capture: 'About',
          level01: [
            {name: 'Business model', href: '#Footer'},
            {name: 'Out team', href: '#Footer'},
          ],
        },
        {
          imgClass: '',
          capture: 'Products',
          level01: [
            {name: 'Search', href: '#Footer'},
          ],
        },
        {
          imgClass: '',
          capture: 'Support',
          level01: [
            {name: 'FAQ', href: '#Footer'},
            {name: 'Contact us', href: '#Footer'},
          ],
        },
      ],
    }
  }
}