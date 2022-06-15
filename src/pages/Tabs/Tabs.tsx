import {
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import "../Tabs/Tabs.css";

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tab1">
          <Home />
        </Route>
        <Route path="/tab2">
          <Profile />
        </Route>
        <Route exact path="/tabs">
          <Redirect to="/tab1" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="top" mode="ios" color="warning" translucent={true}>
        <IonTabButton tab="tab1" href="/tab1">
          <IonLabel>Home 🏠</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonLabel>Profile 👩</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
export { Tabs };
