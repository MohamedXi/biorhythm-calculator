import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from "@ionic/react";
import dayjs from "dayjs";
import { calculationBiorhythms } from "../utils/calculations";

function formatDate(isoString) {
  return dayjs(isoString).format('DD MMM YYYY');
}

export const BiorhythmCard = ({
  targetDate,
  dateOfBirth,
}) => {
  const { physical, emotional, intellectual } = calculationBiorhythms(dateOfBirth, targetDate);

  return (
    <IonCard className='ion-text-center'>
      <IonCardHeader>
        <IonCardTitle>
          {formatDate(targetDate)}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Physical: {physical.toFixed(4) }%</p>
        <p>Emotional: {emotional.toFixed(4)}%</p>
        <p>Intellectual: {intellectual.toFixed(4)}%</p>
      </IonCardContent>
    </IonCard>
  );
}