import React from 'react';
import { Container } from 'react-bootstrap'
import moment from 'moment';
import { ArrowRightSquareFill, ArrowLeftSquareFill } from 'react-bootstrap-icons'
import TimeRange from './TimeRange'
import { Button } from 'react-bootstrap'

export default function DateTimePicker(props) {

    let currentTimeBlocks = props.planTimes[props.step]

    const addTimeBox = () => {
        props.addTimeBox(props.step)
    }

    const mapTimes = currentTimeBlocks.map((value, timeIndex) => {
        return (<TimeRange startTime={currentTimeBlocks[timeIndex][0]} endTime={currentTimeBlocks[timeIndex][1]} dayIndex={props.step} timeIndex={timeIndex} planTimes={props.planTimes}
            updateTimeBoxes={props.updateTimeBoxes}
        />)
    })

    return (
        <Container style={styles.formContainer}>
            <Container style={styles.topContainer}>
                {props.step === 0 ? (
                    <Button style={styles.iconButton} variant="link">
                        <ArrowLeftSquareFill style={{ opacity: 0 }} />
                    </Button>

                ) : (
                        <Button style={styles.iconButton} variant="link">
                            <ArrowLeftSquareFill style={styles.iconLeft} onClick={props.prevDayStep} />
                        </Button>
                    )}
                <p style={styles.pNoBottom}>{moment(props.date).format('dddd,  LL')}</p>
                {props.step === 6 ? (
                    <Button style={styles.iconButton} variant="link">
                        <ArrowRightSquareFill style={{ opacity: 0 }} />
                    </Button>

                ) : (
                        <Button style={styles.iconButton} variant="link">
                            <ArrowRightSquareFill style={styles.iconRight} onClick={props.nextStep} />
                        </Button>
                    )}
            </Container>
            {mapTimes}
            <Button style={styles.iconButton} variant="link" onClick={() => addTimeBox()}>
                <h5>+</h5>
            </Button>
        </Container>
    );
}

const styles = {
    pNoBottom: {
        'textAlign': 'center',
        'color': 'black',
        'margin': '0',
        'fontWeight': 'bold'
    },
    formContainer: {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
    },
    iconButton: {
        'color': 'black',
        'textDecoration': 'none',
    },
    iconLeft: {
        'margin': '10px',
        'fontSize': '20px',
        'width': '20px'
    },
    iconRight: {
        'margin': '10px',
        'fontSize': '20px',
        'width': '20px'
    },
    topContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
    },
}