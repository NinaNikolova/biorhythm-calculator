import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { airplaneOutline } from 'ionicons/icons';

const Tab3: React.FC = () => {
    const [presentToast] = useIonToast();
  const handleClick = () => {
    presentToast({
      message: `Clicked ${name}`,
      duration: 2000
    });
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
         <IonButton color="primary" className='ion-padding' onClick={handleClick}>
        <IonIcon slot="start" icon={airplaneOutline}></IonIcon>
        Click me
      </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
