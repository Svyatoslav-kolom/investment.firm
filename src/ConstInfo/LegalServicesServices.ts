const icons = import.meta.glob(
    "../assets/icons/legalServicesIcons/*.svg",
    { eager: true }
) as Record<string, { default: string }>;

export interface ServiceItem {
    title: string;
    descriptionTitle: string;
    description: string[];
    icon: string;
}

const servicesData: Omit<ServiceItem, 'icon'>[] = [
    {
        title: "ОФОРМЛЕНИЕ ВНЖ, ПМЖ И ГРАЖДАНСТВА",
        descriptionTitle: "Мы поможем вам получить законный статус в Турции — от временного вида на жительство до гражданства:",
        description: [
            "Выбор оптимального типа ВНЖ — Туристический, рабочий, инвестиционный и т. д.",
            "Подготовка и подача документов в миграционные службы Турции.",
            "Сопровождение при получении ПМЖ — Полное сопровождение на всех этапах.",
            "Получение турецкого гражданства — Через инвестиции или натурализацию."
        ]
    },
    {
        title: "ЮРИДИЧЕСКАЯ ПОДДЕРЖКА БИЗНЕСА",
        descriptionTitle: "Мы обеспечим вашему бизнесу надежную правовую защиту:",
        description: [
            "Регистрация компаний — ИП, ООО, АО и другие формы бизнеса.",
            "Юридическое сопровождение сделок и контрактов — Разработка договоров, уставов и внутренних документов.",
            "Консультации по налоговому и корпоративному праву — Поможем оптимизировать налогообложение.",
            "Представительство в судах и госорганах — Защита ваших интересов в любых инстанциях."
        ]
    },
    {
        title: "ИММИГРАЦИОННОЕ И БЕЖЕНСКОЕ ПРАВО",
        descriptionTitle: "Мы поможем оформить статус и защитить ваши права:",
        description: [
            "Оформление статуса беженца — Полное сопровождение и ведение процесса.",
            "Политическое убежище — Подготовка и подача заявления.",
            "Консультации по вопросам гражданства и интеграции — Поможем с любыми юридическими тонкостями."
        ]
    },
    {
        title: "СДЕЛКИ С НЕДВИЖИМОСТЬЮ И АВТОМОБИЛЯМИ",
        descriptionTitle: "Обеспечьте безопасность сделок с имуществом:",
        description: [
            "Покупка, продажа и аренда недвижимости — Полное сопровождение.",
            "Регистрация недвижимости в ТАПУ — Официальное оформление прав.",
            "Юридическая проверка документов — Оформление договоров и проверка их соответствия законам Турции.",
            "Сделки с автомобилями — Подготовка договоров купли-продажи, аренды и дарения."
        ]
    },
    {
        title: "СУДЕБНОЕ ПРЕДСТАВИТЕЛЬСТВО И ЗАЩИТА В ТУРЦИИ",
        descriptionTitle: "Профессиональная защита ваших интересов в судах:",
        description: [
            "Ведение гражданских, уголовных и административных дел — Полное сопровождение в процессе.",
            "Решение споров по контрактам, долгам и недвижимости — Защита ваших интересов и конфликтов в судебном порядке.",
            "Защита прав иностранных граждан в Турции — Мы поможем вам добиться справедливости."
        ]
    }
];

export const servicesDataWithIcons: ServiceItem[] = Object.values(icons)
    .map(image => image.default) // Получаем пути к иконкам
    .map((icon, index) => ({
        icon,
        ...servicesData[index] // Добавляем заголовок, описание и описание услуги
    }));