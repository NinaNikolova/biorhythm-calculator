import { IonContent, IonDatetime, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { useState } from 'react';
import BiorhythmCard from '../components/BiorhythmCard';

const Tab1: React.FC = () => {
  const [birthDate, setBirthDate] = useState("");
 const targetDate = new Date().toISOString();
  return (
    <IonPage>


      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className='ion-padding'>
        {birthDate&&
        <BiorhythmCard
             birthDate={birthDate}
          targetDate={targetDate}
     
        />}
        <IonItem>
          <IonLabel position="stacked">Date of birth:</IonLabel>
         <IonDatetime 
    locale="bg-BG"
    presentation="date"
    value={birthDate}
    onIonChange={e => setBirthDate(e.detail.value!)}
  />
        </IonItem>

        

      </IonContent>
    </IonPage>
  );
};

export default Tab1;