import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";


export const BiorhythmCard = ({
  dateOfBirth,
  physical,
  emotional,
  intellectual,
  onChangeDateOfBirth,
  onChangePhysical,
  onChangeEmotional,
  onChangeIntellectual,
}) => {
  return (
    <IonCard className='ion-text-center'>
      <IonCardHeader>
        <IonCardTitle>
          {dateOfBirth}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Physical: {physical}%</p>
        <p>Emotional: {emotional}%</p>
        <p>Intellectual: {intellectual}%</p>
      </IonCardContent>
    </IonCard>
  );
}