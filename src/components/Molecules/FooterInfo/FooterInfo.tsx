import { VStack, Text, HStack, Link, Image } from "@chakra-ui/react";
import youtubeIcon from "../../../assets/icons/links/youtube.svg"
import telegramIcon from "../../../assets/icons/links/telegram.svg"
import whatsappIcon from "../../../assets/icons/links/whatsapp.svg"
import instagramIcon from "../../../assets/icons/links/instagram.svg"

export const FooterInfo = () => (
  <VStack align="flex-start" gap={3} w={{ base: "90%", md: "40%" }}>
    <Text textStyle="h2">ОСТАЛИСЬ ВОПРОСЫ?</Text>
    <Text textStyle="t2">
      Оставьте заявку, и наш менеджер свяжется с вами, чтобы дать подробные
      ответы и помочь вам разобраться во всех деталях!
    </Text>
    <Text
      fontWeight={400}
      fontSize={{ base: "25px", md: "30px", lg: "40px", xl: "45px", "2xl": "60px" }}
      lineHeight="70px"
      alignSelf={{ base: "center", md: "start" }}
    >
      +90 (553) 632 24 00
    </Text>

    {/* Соцмережі */}
    <HStack gap={4} pt={2}>
      <Link href="https://t.me/yourusername" outline="none">
        <Image src={telegramIcon} alt="Telegram" boxSize="30px" />
      </Link>
      <Link href="https://instagram.com/yourusername" outline="none">
        <Image src={instagramIcon} alt="Instagram" boxSize="30px" />
      </Link>
      <Link href="https://wa.me/905536322400" outline="none">
        <Image src={whatsappIcon} alt="WhatsApp" boxSize="30px" />
      </Link>
      <Link href="https://youtube.com/yourchannel" outline="none">
        <Image src={youtubeIcon}  alt="YouTube" boxSize="30px" />
      </Link>
    </HStack>
  </VStack>
);
