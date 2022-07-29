import {
  IonApp,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonDatetime,
  IonHeader, IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [dateOfBirth, setDateOfBirth] = useState('');

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
        <IonCard className='ion-text-center'>
          <IonCardHeader>
            <IonCardTitle>
              18 Feb 2020
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Physical: 83%</p>
            <p>Emotional: 34%</p>
            <p>Intellectual: 53%</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default App;
