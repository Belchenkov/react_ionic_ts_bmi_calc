import React from 'react';
import {
    IonButton,
    IonCol,
    IonIcon,
    IonRow
} from "@ionic/react";
import {
    calculatorOutline,
    refreshOutline
} from "ionicons/icons";

const BmiControls: React.FC<{
    onCalculate: () => void;
    onReset: () => void
}> = ({onCalculate, onReset}) => {
    return (
        <IonRow>
            <IonCol className="ion-text-left">
                <IonButton color="success" onClick={onCalculate}>
                    <IonIcon slot="start" icon={calculatorOutline}/>
                    Calculate
                </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
                <IonButton color="danger" onClick={onReset}>
                    <IonIcon slot="start" icon={refreshOutline}/>
                    Reset
                </IonButton>
            </IonCol>
        </IonRow>
    );
};

export default BmiControls;