import { HeaderInfo } from "../../../Pages/HomePage/HomePageHeaderInfo";
import { Head } from "../../Organisms/Head";
import { ClientComponent } from "../../Molecules/ClientComponent";
import HomePageBackground from "../../../assets/PageBackgrounds/HomePageBackground.png";

export const HomePageTop= () => (
  <Head backgroundImage={HomePageBackground}>
    <HeaderInfo />
    <ClientComponent />
  </Head>
);
