
import React from 'react';
import { IonButton } from '@ionic/react';
import { EmailComposer } from '@ionic-native/email-composer';


const EmailSender: React.FC = () => {
  const sendEmail = async () => {
    try {
      const result = await EmailComposer.open({
        to: ['kartikanraj@gmail.com'], 
        subject: 'Hello, World!',
        body: 'Hello, World! This is a test email sent from my Ionic React app.',
        isHtml: false,
      });

      if (result && result.value) {
        console.log('Email sent successfully');
      } else {
        console.error('Email was not sent');
      }
    } catch (error) {
      console.error('Error sending email', error);
    }
  };

  return (
    <IonButton expand="full" onClick={sendEmail}>
      Send Email
    </IonButton>
  );
};

export default EmailSender;
