// src/App.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import EmailForm from '../components/EmailForm';


const App: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Email App</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <EmailForm />
    </IonContent>
  </IonPage>
);

export default App;
