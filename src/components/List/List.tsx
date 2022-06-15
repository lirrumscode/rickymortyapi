import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonRow,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import Character from "../../interfaces/character.ts";
import "../List/List.css";

const List: React.FC<Character> = ({
  id,
  name,
  gender,
  image,
  location,
  origin,
  status,
  species,
  url,
}) => {
  const history = useHistory();
  const handleGoDetail = (id: any) => {
    history.push({ pathname: `/detail/${id}`, state: id });
  };
  return (
    <>
      <IonRow>
        <IonCol size="12">
          <IonCard mode="ios" onClick={() => handleGoDetail(id)}>
            <img src={image} alt={name} className="img" />
            <div className="ion-padding">
              <IonCardTitle>
                <a
                  href={url}
                  target={"_blank"}
                  className="link__text"
                  rel="noreferrer"
                >
                  {name}
                </a>
              </IonCardTitle>
              <IonCardSubtitle>
                {gender} - {species}
              </IonCardSubtitle>
              <IonCardContent>
                <div className="container__text">
                  <p>{status}</p>
                  <p>Location: {location?.name}</p>
                  <p>Origin: {origin?.name}</p>
                </div>
              </IonCardContent>
            </div>
          </IonCard>
        </IonCol>
      </IonRow>
    </>
  );
};

export { List };
