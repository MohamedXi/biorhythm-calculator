import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from "@ionic/react";
import { calculationBiorhythms } from "../utils/calculations";
import { formattedDateDayMonthYear } from "../utils/formattedDate";
import { BiorhythmChart } from "./BiorhythmChart";

export const BiorhythmCard = ({
  dateOfBirth,
  targetDate,
}) => {
  const { physical, emotional, intellectual } = calculationBiorhythms(dateOfBirth, targetDate);

  return (
    <IonCard className='ion-text-center'>
      <IonCardHeader>
        <IonCardTitle>
          {formattedDateDayMonthYear(targetDate)}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart dateOfBirth={dateOfBirth} targetDate={targetDate} />
        <p>Physical: {physical.toFixed(4) }%</p>
        <p>Emotional: {emotional.toFixed(4)}%</p>
        <p>Intellectual: {intellectual.toFixed(4)}%</p>
      </IonCardContent>
    </IonCard>
  );
}