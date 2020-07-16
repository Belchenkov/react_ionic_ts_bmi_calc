import React, { useRef, useState } from 'react';
import {
    IonApp,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import BmiControls from "./components/BmiControls";
import BmiResult from "./components/BmiResult";

const App: React.FC = () => {
    const [calculatedBmi, setCalculatedBmi] = useState<number>();

    const weightInputRef = useRef<HTMLIonInputElement>(null);
    const heightInputRef = useRef<HTMLIonInputElement>(null);

    const calculateBMI = () => {
        const enteredWeight = weightInputRef.current!.value;
        const enteredHeight = heightInputRef.current!.value;

        if (!enteredHeight || !enteredWeight || +enteredWeight <=0 || +enteredHeight <= 0) return;

        const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);

        setCalculatedBmi(bmi);
    };

    const resetInputs = () => {
        weightInputRef.current!.value = '';
        heightInputRef.current!.value = '';
    };

    return (
        <IonApp>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle class="font-varta">BMI Calculator</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Your Height</IonLabel>
                                <IonInput type="number" ref={heightInputRef} />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Your Weight</IonLabel>
                                <IonInput type="number" ref={weightInputRef} />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <BmiControls
                        onCalculate={calculateBMI}
                        onReset={resetInputs}
                    />
                    { calculatedBmi && <BmiResult result={calculatedBmi} />}
                </IonGrid>
            </IonContent>
        </IonApp>
    )
};

export default App;
