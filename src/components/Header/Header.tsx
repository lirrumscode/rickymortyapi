import { IonHeader, IonToolbar } from "@ionic/react";
import "../Header/Header.css";
const Header: React.FC = () => {
  return (
    <IonHeader translucent={true}>
      <IonToolbar color="dark" mode="ios">
        <p className="text-header">Rick and Morty APis 🏡</p>
      </IonToolbar>
    </IonHeader>
  );
};

export { Header };
