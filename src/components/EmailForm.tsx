// src/EmailForm.tsx
import React, { useState } from 'react';
import { IonInput, IonButton } from '@ionic/react';

const EmailForm: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const sendEmail = () => {
    if (recipient && subject && body) {
      const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    } else {
      console.error('Please fill in all required fields.');
    }
  };

  return (
    <div>
      <IonInput
        placeholder="Recipient Email"
        value={recipient}
        onIonChange={(e) => setRecipient(e.detail.value!)}
      />
      <IonInput
        placeholder="Subject"
        value={subject}
        onIonChange={(e) => setSubject(e.detail.value!)}
      />
      <IonInput
        placeholder="Email Body"
        value={body}
        onIonChange={(e) => setBody(e.detail.value!)}
      />
      <IonButton onClick={sendEmail}>Send Email</IonButton>
    </div>
  );
};

export default EmailForm;
