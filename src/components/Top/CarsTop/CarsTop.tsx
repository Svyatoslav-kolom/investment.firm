import { ClientComponent } from "../../Molecules/ClientComponent";
import CarsTopBackground from "../../../assets/PageBackgrounds/CarsTopBackground.png";
import { FC } from "react";
import { CarsTopInfo } from "./CarsTopInfo";
import { Head } from "../../Organisms/Head";

interface Props {
  CustomComponent?: React.ReactElement;
}

export const CarsTop: FC<Props> = () => (
  <Head
    backgroundImage={CarsTopBackground}
  >
    <CarsTopInfo />
    <ClientComponent />
  </Head>
);

