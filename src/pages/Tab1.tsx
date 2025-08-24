import { IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useState } from 'react';

const Tab1: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");

  // Helper function to format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('bg-BG', { 
        day: 'numeric',
      month: 'long', 
       year: 'numeric', 
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        
        <IonItem>
          <IonLabel position="stacked">Name:</IonLabel>
          <IonInput 
            value={name}
            onIonChange={e => setName(e.detail.value!)} 
            placeholder="Your name" 
            type='text' 
          />
        </IonItem>
        
        <IonItem>
          <IonLabel position="stacked">Date of birth:</IonLabel>
          <IonDatetime 
            presentation="date"
            value={birthDate} 
            onIonChange={e => setBirthDate(e.detail.value || "")} 
          />
        </IonItem>
        
        <p>Name: {name}</p>
        <p>Date of Birth: {formatDate(birthDate)}</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;