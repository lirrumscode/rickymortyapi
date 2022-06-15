import {
  IonButton,
  IonCol,
  IonContent,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import "../Splash/Splash.css";
import "../../global/global.css";
import { Nav } from "../../components/Nav/Nav";
const ImgObject = [
  {
    url: "assets/img/7.png",
    id: 0,
  },
  {
    url: "assets/img/3.png",
    id: 1,
  },
];

const handleSlideOptions = {
  initialSlide: 0,
  speed: 400,
};

const Splash: React.FC = () => {
  return (
    <>
      <IonPage>
        <Nav />
        <IonContent color="light" fullscreen={true}>
          <div className="ion-padding">
            <IonRow>
              <IonCol size="12">
                <div className="container">
                  <div className="container container__text">
                    <h1 className="title">
                      <img src="assets/img/logo1.png" alt="" loading="lazy" />
                    </h1>
                  </div>
                  <div className="container container__img">
                    <IonSlides pager={false} options={handleSlideOptions}>
                      {ImgObject.map((response) => {
                        return (
                          <IonSlide key={response.id}>
                            <IonRow>
                              <IonCol size="12">
                                <img src={response.url} alt="space" />
                                <h1 className="title">
                                  Why did you build this?
                                </h1>
                                <p className="text">
                                  Because we were really interested in the idea
                                  of writing an open source project and also
                                  because Rick and Morty is our favorite show.
                                </p>
                              </IonCol>
                            </IonRow>
                          </IonSlide>
                        );
                      })}
                    </IonSlides>
                  </div>
                </div>
                <div className="container__btn">
                  <IonButton color="dark" routerLink="/tabs" mode="ios">
                    Let's go to 🏠
                  </IonButton>
                </div>
              </IonCol>
            </IonRow>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export { Splash };
