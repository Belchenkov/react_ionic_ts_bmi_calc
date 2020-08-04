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
        <IonRow className="ion-margin-top">
            <IonCol size="12" size-md="6" className="ion-text-center">
                <IonButton
                    expand="full"
                    color="secondary"
                    onClick={onCalculate}
                >
                    <IonIcon slot="start" icon={calculatorOutline}/>
                    Calculate
                </IonButton>
            </IonCol>
            <IonCol size="12" size-md="6" className="ion-text-center">
                <IonButton
                    color="danger"
                    fill="clear"
                    onClick={onReset}
                    expand="full"
                >
                    <IonIcon slot="start" icon={refreshOutline}/>
                    Reset
                </IonButton>
            </IonCol>
        </IonRow>
    );
};

export default BmiControls;