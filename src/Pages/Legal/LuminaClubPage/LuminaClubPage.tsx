import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { fadeInFrom, withMotion } from "../../../utils/animations";

const MotionText = withMotion(Text);
const MotionVStack = withMotion(VStack);

export const LuminaClubPage = () => {
  return (
    <Grid
      w="100%"
      templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
      gap={7}
      alignItems="start"
    >
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <MotionText
          {...fadeInFrom("left")}
          textStyle="h2"
          textTransform="uppercase"
        >
          LUMINA CLUB
        </MotionText>
      </GridItem>

      <GridItem colSpan={{ base: 1, md: 2 }} textStyle="t2">
        <MotionVStack {...fadeInFrom("left")}
          align="start"
          gap="40px">
          <Box>
            <Text fontWeight="bold" color="#0046AE" mb="20px">Сила — в сообществе</Text>
            <Text>
              LUMINA CLUB — это закрытое сообщество для инвесторов, предпринимателей и партнёров, объединённых целью создать устойчивый доход, построить доверие и реализовать амбициозные проекты. Это не просто клуб — это экосистема, где объединяются ресурсы, идеи и возможности.
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" color="#0046AE" mb="20px">Почему стоит вступить в LUMINA CLUB</Text>
            <Text ml="10px">
              • Доход от 3% до 5% в месяц на недвижимость, автомобили, аренду и других активах
              <br />• Доступ к проектам до их выхода на открытую платформу
              <br />• Персонализированный инвестиционный подход
              <br />• Деловые мероприятия и живое общение с участниками
              <br />• Скидки на юридические, консалтинговые, маркетинговые и продажные услуги
              <br />• Поддержка на всех этапах: от регистрации бизнеса до масштабирования
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" color="#0046AE" mb="20px">Для кого этот клуб</Text>
            <Text ml="10px">
              • Частные инвесторы, желающие получать стабильный доход
              <br />• Владельцы недвижимости и автомобилей, ищущие выгодную реализацию
              <br />• Иностранные граждане, планирующие открыть бизнес в Турции
              <br />• Предприниматели и компании, ищущие партнёров и выход на рынок
              <br />• Представители малого и среднего бизнеса
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" color="#0046AE" mb="20px">Преимущества участия в клубе</Text>
            <Text ml="10px">
              • Ранний доступ к проектам — вы получаете предложения до их официальной публикации
              <br />• Индивидуальное сопровождение — подбор объектов, юридических и финансовых структур сделки под ваши цели
              <br />• Мероприятия и встречи — участие в онлайн и оффлайн-ивентах, где формируются ценные деловые связи
              <br />• Специальные условия — эксклюзивные скидки на все услуги группы LUMINA
              <br />• Образовательный формат — доступ к вебинарам, мастер-классам и инвестиционным обзорам от экспертов
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" color="#0046AE" mb="20px">Сообщество с миссией</Text>
            <Text>
              LUMINA CLUB — это пространство, где нет случайных людей.
              <br /><br />Здесь каждый участник — это профессионал, партнёр и соавтор общего успеха.
              <br /><br />Клуб усиливает бренд компании LUMINA, формирует доверие и открывает путь к долгосрочным отношениям и инвестициям.
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" color="#0046AE" mb="20px">Как вступить в LUMINA CLUB</Text>
            <Text ml="10px">
              1. Оставьте заявку на сайте
              <br />2. Пройдите консультацию с нашим специалистом
              <br />3. Получите одобрение и получите доступ ко всем возможностям клуба
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" color="#0046AE" mb="20px">Контакты</Text>

            <Text>По вопросам вступления в клуб или партнёрства:</Text>
            <Text>
              Email: info@luminagroup.com
              <br />Телефон: +90 ХХХ ХХХ ХХ ХХ
              <br />Instagram: @luminagroupturkiye
            </Text>
          </Box>
        </MotionVStack>
      </GridItem>
    </Grid>
  );
};
