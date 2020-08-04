import React from 'react';
import { IonCard, IonCardContent } from "@ionic/react";

import './BmiResult.css';

const BmiResult: React.FC<{result: number | string}> = ({result}) => {
    return (
        <IonCard id="result">
            <IonCardContent className="result ion-text-center">
                <h2>Your Body-Mass-Index</h2>
                <h3>{parseFloat(result as string).toFixed(2)}</h3>
            </IonCardContent>
        </IonCard>
    );
};

export default BmiResult;