import { Stack, Text } from "@chakra-ui/react";
import { fadeInFrom, withMotion } from "../../../utils/animations";

const MotionText = withMotion(Text);

export const CommunityTitle = () => {
  return (
    <Stack direction={{base: "column", md: "row"}} gap={7} align="start" overflow="hidden">
      <MotionText
        {...fadeInFrom("left")}
        textStyle="t2"
        maxWidth="500px"
      >
        Мы создаем пространство для роста и развития малого
        и среднего бизнеса. Наше сообщество — это мощная платформа
        для обмена опытом, построения связей и получения экспертной поддержки.
        Если вы хотите расширить деловые контакты, получить практические советы
        и найти новых партнеров — добро пожаловать в наш бизнес-клуб.
      </MotionText>

      <MotionText
        {...fadeInFrom("left")}
        textStyle="t2"
        maxWidth="500px"
      >
        Наша цель — помочь вам нарастить и укрепить связи
        в бизнес-среде, развивать экспертность в разных нишах
        бизнеса и достигать новых высот в предпринимательстве.
        Каждая встреча проходит под руководством опытных бизнесменов,
        которые делятся своим реальным опытом и помогают участникам находить
        эффективные решения для развития бизнеса.
      </MotionText>

    </Stack>
  );
};
