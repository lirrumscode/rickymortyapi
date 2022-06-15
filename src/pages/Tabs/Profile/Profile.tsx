import {
  IonBadge,
  IonCol,
  IonContent,
  IonFooter,
  IonIcon,
  IonLoading,
  IonPage,
  IonRow,
} from "@ionic/react";
import { Header } from "../../../components/Header/Header";
import "./Profile.css";
import { logoInstagram, logoTux } from "ionicons/icons";
import { useState } from "react";

const Profile: React.FC = () => {
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
              <section className="sec__profile">
                <h1 className="title">Lina Castro</h1>
                <h4 className="subtitle">Frontend mobile developer 👩‍💻</h4>
              </section>
            </IonCol>
            <IonCol size="12">
              <section className="sec__information">
                <h3 className="heading">About me</h3>
                <p className="text">
                  I am passionate for software development, I've worked
                  professionally as software engineer and frontend mobile-hybrid
                  developer also I've considered my profile as a frontend mobile
                  because I have a specialization in mobile application
                  development.
                  <br />
                  <br /> I am Member from Ubports Foundation and Developer from
                  UT.
                </p>
                <h3 className="heading">My Work</h3>
                <div className="text">
                  <ul>
                    <li>
                      <a
                        href="https://www.instagram.com/lirrumscode/"
                        target={"_blank"} rel="noreferrer"
                      >
                        <IonIcon icon={logoInstagram}></IonIcon>Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wiki.ubuntu.com/lirrumscode"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <IonIcon icon={logoTux}></IonIcon> Wiki
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </IonCol>
            <IonCol size="12">
              <IonBadge color="dark" mode="ios">
                Angular
              </IonBadge>
              <IonBadge color="light" mode="ios">
                React
              </IonBadge>
              <IonBadge color="light" mode="ios">
                Vue
              </IonBadge>
              <IonBadge color="dark" mode="ios">
                Ionic
              </IonBadge>
              <IonBadge color="light" mode="ios">
                Typescript
              </IonBadge>
              <IonBadge color="light" mode="ios">
                Vanilla
              </IonBadge>
              <IonBadge color="dark" mode="ios">
                Ubuntu touch
              </IonBadge>
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
      <IonFooter>
        <Header/>
      </IonFooter>
    </IonPage>
  );
};

export default Profile;
