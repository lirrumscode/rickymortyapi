import { IonHeader, IonToolbar } from "@ionic/react";
import "../Nav/Nav.css";
const Nav: React.FC = () => {
  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar color="dark" mode="ios">
          <h1 className="toolbar-title">
            Joining to the Rick and Morty API REST and GraphQL API
            based on the television show Rick and Morty
          </h1>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export { Nav };
