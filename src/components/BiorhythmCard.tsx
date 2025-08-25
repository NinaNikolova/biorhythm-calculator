import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import dayjs from 'dayjs'
import {calculateBiorhythms} from '../calculation'
 function formatDate(isoString) {
return dayjs(isoString).format("D MMM YYYY");
}
function BiorhythmCard({birthDate, targetDate}) {

  const { physical, emotional, intellectual } = calculateBiorhythms(birthDate, targetDate);

  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>Date of Birth: {formatDate(birthDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Physical: {physical.toFixed(4)}%</p>
        <p>Emotional: {emotional.toFixed(4)}%</p>
        <p>Intellectual: {intellectual.toFixed(4)}%</p>
      </IonCardContent>
    </IonCard>
  );
}

    
export default BiorhythmCard;
