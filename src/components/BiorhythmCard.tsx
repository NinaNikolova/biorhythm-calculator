import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import dayjs from 'dayjs'
function BiorhythmCard({ targetDate, physical, emotional, intellectual }) {
 function formatDate(isoString) {
    return dayjs(isoString).format("D MMM YYYY");
  }

    return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>Date of Birth: {formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Physical: {physical}%</p>
        <p>Emotional: {emotional}%</p>
        <p>Intellectual: {intellectual}%</p>
      </IonCardContent>
    </IonCard>
  );
}
export default BiorhythmCard;
