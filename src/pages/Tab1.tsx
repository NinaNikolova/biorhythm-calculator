import { IonContent, IonDatetime, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useState } from 'react';
import BiorhythmCard from '../components/BiorhythmCard';

const Tab1: React.FC = () => {
  const [birthDate, setBirthDate] = useState("");
  const targetDate = new Date().toISOString
  return (
    <IonPage>


      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonItem>
          <IonLabel position="stacked">Date of birth:</IonLabel>
          <IonDatetime locale="bg-BG"
            displayFormat="D MM YYYY"
            value={birthDate}
            onIonChange={e => setBirthDate(e.detail.value)}
          />
        </IonItem>

        <BiorhythmCard
          targetDate={targetDate}
          physical={82}
          emotional={90}
          intellectual={75}
        />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;