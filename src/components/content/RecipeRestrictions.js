import React from 'react';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap'
import SmallButton from '../SmallButton'


export default function RecipeRestrictions() {

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>Select the dietary restrictions you'd like your plan to follow:</p>
            <Container style={styles.innerContainer}>
                <Container style={styles.innerInnerContainer}>
                    <Dropdown >
                        <Dropdown.Toggle variant="success" id="dropdown-basic"
                        style={styles.dropdown}
                        >
                            Restrictions
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">None</Dropdown.Item>
                            <Dropdown.Divider />
                            {/* Replace these with auto render of each cuisine in cuisines arr */}
                            <Dropdown.Item href="#/action-2">Vegan</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Gluten Free</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                <Container style={styles.innerInnerContainer}>
                    <SmallButton text="Vegetarian"></SmallButton>
                    <SmallButton text="Wheat Allergy"></SmallButton>
                    <SmallButton text="Fish"></SmallButton>
                </Container>
            </Container>
        </Container>
    );
}

const styles = {
    p: {
        'text-align': 'center',
        'color': 'white'
    },
    formContainer: {
        'display': 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
        'height': '400px'
    },
    innerContainer: {
        'display': 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        'justify-content': 'space-between',
        // 'height': '400px'
    },
    innerInnerContainer: {
        'display': 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        'justify-content': 'center',
        'width': '50%',
        'margin': '0',
        'padding': '0'
    },
    dropdown: {
        'width': '200px'
    }
}