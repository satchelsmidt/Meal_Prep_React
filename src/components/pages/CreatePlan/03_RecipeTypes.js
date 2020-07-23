import React from 'react';
import { Container, Dropdown } from 'react-bootstrap'
import SmallButton from '../../SmallButton'


export default function RecipeTypes(props) {

    const saveAndSubmit = (e) => {
        e.preventDefault()
        props.nextStep()
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>First, lets pick the recipes you'd like to cook throughout the week.</p>
            <p style={styles.p}>Select the types of cuisine you'd like to search:</p>
            <Container style={styles.innerContainer}>
                <Container style={styles.innerInnerContainer}>
                    <Dropdown >
                        <Dropdown.Toggle variant="success" id="dropdown-basic"
                            style={styles.dropdown}
                        >
                            Cuisines
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Surprise Me!</Dropdown.Item>
                            <Dropdown.Divider />
                            {/* Replace these with auto render of each cuisine in cuisines arr */}
                            <Dropdown.Item href="#/action-2">Italian</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Fish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                <Container style={styles.innerInnerContainer}>
                    <SmallButton text="Italian"></SmallButton>
                    <SmallButton text="Italian"></SmallButton>
                    <SmallButton text="Italian"></SmallButton>
                </Container>
            </Container>
            <SmallButton text="Next" onClick={(e) => { saveAndSubmit(e) }}></SmallButton>
        </Container>
    );
}

const styles = {
    p: {
        'textAlign': 'center',
        'color': 'white'
    },
    formContainer: {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': '400px'
    },
    innerContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        // 'height': '400px'
    },
    innerInnerContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '50%',
        'margin': '0',
        'padding': '0'
    },
    dropdown: {
        'width': '200px'
    }
}