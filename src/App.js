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

function App() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const targetDate = new Date().toISOString();

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat='DD MMM YYYY'
            value={dateOfBirth}
            onIonChange={(e) => setDateOfBirth(e.detail.value)}
          />
        </IonItem>
        <BiorhythmCard dateOfBirth={targetDate} physical={50} emotional={50} intellectual={50} />
      </IonContent>
    </IonApp>
  );
}

export default App;
