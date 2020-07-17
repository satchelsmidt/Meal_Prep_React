import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import moment from 'moment';
import { ArrowRightSquareFill, ArrowLeftSquareFill } from 'react-bootstrap-icons'
import TimeRange from '../TimeRange'
import { Button } from 'react-bootstrap'


export default function PlanTimes() {

    const [startDate, setStartDate] = useState(new Date());

    // Date.prototype.addDays = function (days) {
    //     var date = new Date(this.valueOf());
    //     date.setDate(date.getDate() + days);
    //     return date;
    // }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>Select the times you are available to cook for each day of your plan:</p>
            <Container style={styles.topContainer}>
                <Button style={styles.iconButton} variant="link">
                    <ArrowLeftSquareFill style={styles.iconLeft} />
                </Button>
                <p style={styles.pNoBottom}>{moment(new Date()).format('dddd,  ' + ' LL')}</p>
                <Button style={styles.iconButton} variant="link">
                    <ArrowRightSquareFill style={styles.iconRight} />
                </Button>
            </Container>
            <TimeRange></TimeRange>
            <Button style={styles.iconButton} variant="link">
                <h5>+</h5>
            </Button>
        </Container>
    );
}

const styles = {
    p: {
        'text-align': 'center',
        'color': 'white'
    },
    pNoBottom: {
        'text-align': 'center',
        'color': 'black',
        'margin': '0',
        'font-weight': 'bold'
    },
    formContainer: {
        'display': 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
        'height': '400px'
    },
    iconButton: {
        'color': 'black',
        'text-decoration': 'none'
    },
    iconLeft: {
        'margin': '10px',
        'font-size': '20px'
    },
    iconRight: {
        'margin': '10px',
        'font-size': '20px'
    },
    topContainer: {
        'display': 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        'justify-content': 'center',
        // 'height': '400px'
    },
}