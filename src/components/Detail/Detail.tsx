import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonLoading,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { UseGetDetailData } from "../../hooks/characterDetailData";
import "../Detail/Detail.css";
import { Header } from "../Header/Header";
const url: string = "https://rickandmortyapi.com/api/character";

const Detail: React.FC = () => {
  const param = useLocation();
  const sub: any = UseGetDetailData(param.state);
  const [showLoading, setShowLoading] = useState(true);
  setTimeout(() => {
    setShowLoading(false);
  }, 2000);
  return (
    <>
      <IonPage>
        <Header />
        <IonContent color="light">
          <div className="ion-padding">
            <IonLoading
              cssClass="my-custom-class"
              isOpen={showLoading}
              onDidDismiss={() => setShowLoading(false)}
              message={"Please wait..."}
              spinner="crescent"
              duration={2000}
              mode="ios"
            />
            <IonRow>
              <IonCol size="12">
                <h1 className="title">
                  {sub?.name} {sub?.gender === "Male" ? "👨" : "👩"}
                </h1>
              </IonCol>
              <IonCol size="12">
                <IonCard mode="ios">
                  <img src={sub?.image} alt="avatar" className="img" />
                  <div className="ion-padding">
                    <IonCardTitle>
                      <a
                        href={url}
                        target={"_blank"}
                        className="link__text"
                        rel="noreferrer"
                      >
                        {sub?.name}
                      </a>
                    </IonCardTitle>
                    <IonCardSubtitle>
                      {sub?.gender === "Male" ? "👨" : "👩"} {sub?.gender} -{" "}
                      {sub?.species === "Human" ? "🌏" : "🛸"} {sub?.species}
                    </IonCardSubtitle>
                    <IonCardContent>
                      <div className="container__text">
                        <p>
                          {sub?.status === "Alive" ? "🔵" : "👻"} {sub?.status}
                        </p>
                        <p>Location: {sub?.location?.name}</p>
                        <p>Origin: {sub?.origin?.name}</p>
                      </div>
                    </IonCardContent>
                  </div>
                </IonCard>
              </IonCol>
            </IonRow>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export { Detail };
