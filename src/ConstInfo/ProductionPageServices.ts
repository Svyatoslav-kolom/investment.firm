const images = import.meta.glob(
    "../assets/icons/ProductionIcons/*.svg", 
    { eager: true }
) as Record<string, { default: string }>;

const data = [
    { title: "Видеопродакшн", descriptionTitle: "Создание качественного видеоконтента для бизнеса, рекламы и мероприятий", description: [
        "Разработка концепции и сценария",
        "Подбор команды и организация съемок",
        "Монтаж, эффекты, цветокоррекция",
        "Финальная презентация и выпуск на платформах"
    ]},
    { title: "Фотопродакшн", descriptionTitle: "Создание профессиональных фото для бизнеса и социальных сетей", description: [
        "Создание концепций для фотосессий (реклама, продукты, fashion)",
        "Подбор локаций, моделей, реквизита",
        "Ретушь, цветокоррекция и обработка фото",
        "Публикация фото для соцсетей и рекламы"
    ]},
    { title: "Аудиопродакшн", descriptionTitle: "Мы поможем оформить статус и защитить ваши права", description: [
        "Создание концепции (подкаст, озвучка, музыка)",
        "Запись в студии или на локации",
        "Монтаж, сведение, добавление эффектов",
        "Выпуск на Spotify, Apple Music и других платформах"
    ]},
    { title: "Подкасты", descriptionTitle: "Полный цикл создания подкастов – от идеи до продвижения", description: [
        "Определение тематики и формата",
        "Написание сценария, подбор гостей",
        "Запись и монтаж подкастов",
        "Публикация на платформах (Spotify, Apple Podcasts, Google Podcasts)",
        "Продвижение через социальные сети и другие каналы"
    ]},
    { title: "Технический продакшн", descriptionTitle: "Обеспечение технического качества контента с применением передовых технологий", description: [
        "Подбор и настройка оборудования (камеры, дроны, свет)",
        "Съемка с применением CGI и 3D-анимации",
        "Добавление спецэффектов и компьютерной графики"
    ]},
    { title: "Событийный продакшн", descriptionTitle: "Организация и сопровождение мероприятий с профессиональной съемкой", description: [
        "Разработка концепции мероприятия (концерт, семинар, выставка)",
        "Полная организация и координация события",
        "Съемка и трансляция в прямом эфире",
        "Анализ результатов и сбор отзывов"
    ]},
    { title: "Рекламный продакшн", descriptionTitle: "Полный цикл создания рекламного контента – от идеи до выпуска", description: [
        "Создание идеи и сценария рекламного ролика",
        "Съёмка, монтаж и пост-продакшн",
        "Размещение рекламы в соцсетях, на ТВ и наружных носителях",
        "Оценка эффективности кампании"
    ]}
];

export const servicesData = Object.values(images).map((image, index) => ({
    icon: image.default,
    ...data[index]
}));