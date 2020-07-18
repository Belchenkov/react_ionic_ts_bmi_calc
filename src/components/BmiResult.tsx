import React from 'react';
import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";

const BmiResult: React.FC<{result: number | string}> = ({result}) => {
    return (
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardContent className="result ion-text-center">
                        <h2>Your Body-Mass-Index</h2>
                        <h3>{result.toFixed(2)}</h3>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    );
};

export default BmiResult;