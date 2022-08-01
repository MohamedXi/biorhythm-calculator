import {
  IonApp, IonContent,
  IonDatetime,
  IonHeader, IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';
import { BiorhythmCard } from './components/BiorhythmCard';
import { useLocalStorage } from './utils/hooks';

function App() {
  const [dateOfBirth, setDateOfBirth] = useLocalStorage('dateOfBirth', '');  
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
  
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Biorhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {
          dateOfBirth 
            && <BiorhythmCard targetDate={targetDate} dateOfBirth={dateOfBirth} />
        }
        <IonItem>
          <IonLabel position="stacked">Birth Date:</IonLabel>
          <IonDatetime
            displayFormat='DD MMM YYYY'
            value={dateOfBirth}
            onIonChange={(e) => setDateOfBirth(e.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Target Date:</IonLabel>
          <IonDatetime
            displayFormat='DD MMM YYYY'
            value={targetDate}
            onIonChange={(e) => setTargetDate(e.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
