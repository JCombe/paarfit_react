import React from 'react'
import './index.css'
import PulseButton from '../PulseButton'
import { useHistory } from "react-router-dom";


function TrainingsPage() {
    const history = useHistory()

    const startWorkout = () => { history.push("/training/active") }
    return (
        <div className="trainings__container">
            <PulseButton buttonName="Workout Starten" buttonClicked={() => startWorkout()} />


        </div>
    )
}

export default TrainingsPage
