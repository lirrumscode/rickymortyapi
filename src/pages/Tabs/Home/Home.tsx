import {
  IonCol,
  IonContent,
  IonFooter,
  IonLoading,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useState } from "react";
import { Header } from "../../../components/Header/Header";
import { List } from "../../../components/List/List";
import { useGetAllCharacter } from "../../../hooks/characterAllData";
import "./Home.css";
const URI_API = "https://rickandmortyapi.com/api/character";

const Home: React.FC = () => {
  const characters = useGetAllCharacter(URI_API);
  const [showLoading, setShowLoading] = useState(true);
  return (
    <IonPage>
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Please wait..."}
        spinner="circular"
        duration={2000}
        mode="ios"
      />
      <IonContent color="light">
        <div className="ion-padding">
          <IonRow>
            <IonCol size="12">
              {characters?.map((res) => {
                return (
                  <List
                    name={res.name}
                    key={res.id}
                    id={res.id}
                    image={res.image}
                    gender={res.gender}
                    location={res.location}
                    url={res.url}
                    origin={res.origin}
                    status={res.status}
                    species={res.species}
                  ></List>
                );
              })}
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
      <IonFooter>
        <Header />
      </IonFooter>
    </IonPage>
  );
};

export default Home;
