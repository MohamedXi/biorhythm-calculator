import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from "@ionic/react";
import { calculationBiorhythms } from "../utils/calculations";
import { formattedDateDayMonthYear } from "../utils/formattedDate";
import './BiorhythmCard.css';
import { BiorhythmChart } from "./BiorhythmChart";

export const BiorhythmCard = ({
  dateOfBirth,
  targetDate,
}) => {
  const { physical, emotional, intellectual } = calculationBiorhythms(dateOfBirth, targetDate);

  return (
    <IonCard className='biorhythm-card ion-text-center'>
      <IonCardHeader>
        <IonCardTitle>
          {formattedDateDayMonthYear(targetDate)}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart dateOfBirth={dateOfBirth} targetDate={targetDate} />
        <p className="physical">Physical: {physical.toFixed(4) }%</p>
        <p className="emotional">Emotional: {emotional.toFixed(4)}%</p>
        <p className="intellectual">Intellectual: {intellectual.toFixed(4)}%</p>
      </IonCardContent>
    </IonCard>
  );
}