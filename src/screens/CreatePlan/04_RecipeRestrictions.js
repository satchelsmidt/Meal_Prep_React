import React from 'react';
import { Container, Dropdown } from 'react-bootstrap'
import SmallButton from '../../components/SmallButton'
import * as Restrictions from '../../config/restrictions.json'


export default function RecipeRestrictions(props) {

    // const saveAndSubmit = (e) => {
    //     e.preventDefault()
    //     props.nextStep()
    // }

    const renderDietsDropdown = () => {
        return Restrictions.diets.map((diet) => {
            return <Dropdown.Item onClick={() => selectDiets(diet)}>{diet}</Dropdown.Item>
        })
    }

    const renderIntolerancesDropdown = () => {
        return Restrictions.intolerances.map((intolerance) => {
            return <Dropdown.Item onClick={() => selectIntolerances(intolerance)}>{intolerance}</Dropdown.Item>
        })
    }

    const selectDiets = (diet) => {
        if (props.diets.indexOf(diet) < 0) {
            console.log('diet IN FUNCTION: ', diet)
            props.addNewDiet(diet)
        }
        else {
            console.log("DIET ALREADY IN ARRAY")
        }
    }

    const selectIntolerances = (intolerance) => {
        if (props.intolerances.indexOf(intolerance) < 0) {
            console.log('intolerance IN FUNCTION: ', intolerance)
            props.addNewIntolerance(intolerance)
        }
        else {
            console.log("RESTRICTION ALREADY IN ARRAY")
        }
    }

    const renderIntoleranceButtons = () => {
        return props.intolerances.map((intolerance) => {
            return <SmallButton text={`${intolerance}-free`}></SmallButton>
        })
    }

    const renderDietButtons = () => {
        return props.diets.map((diet) => {
            return <SmallButton text={diet}></SmallButton>
        })
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>Select the dietary restrictions you'd like your plan to follow:</p>
            <Container style={styles.innerContainer}>
                <Container style={styles.innerContainerDropdown}>
                    <Dropdown >
                        <Dropdown.Toggle variant="success" id="dropdown-basic"
                            style={styles.dropdown}
                        >
                            Diets
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">None</Dropdown.Item>
                            <Dropdown.Divider />
                            {renderDietsDropdown()}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown >
                        <Dropdown.Toggle variant="success" id="dropdown-basic"
                            style={styles.dropdown}
                        >
                            Intolerances
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">None</Dropdown.Item>
                            <Dropdown.Divider />
                            {renderIntolerancesDropdown()}
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                <Container style={styles.innerContainerButtons}>
                    {renderIntoleranceButtons()}
                    {renderDietButtons()}
                    {/* <SmallButton text="Vegetarian"></SmallButton>
                    <SmallButton text="Wheat Allergy"></SmallButton>
                    <SmallButton text="Fish"></SmallButton> */}
                </Container>
            </Container>
            <SmallButton text="Back" onClick={() => { props.prevStep() }}></SmallButton>
            {/* <SmallButton text="Next" onClick={(e) => { saveAndSubmit(e) }}></SmallButton> */}
            {/* <NavLink to="/add"><BigButton text="Search for Recipes"></BigButton></NavLink> */}
            <SmallButton text="Next" onClick={(e) => { props.nextStep(e) }}></SmallButton>
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
    },
    innerContainerDropdown: {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '50%',
        'margin': '0',
        'padding': '0'
    },
    innerContainerButtons: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '50%',
        'margin': '0',
        'padding': '0'
    },
    dropdown: {
        'width': '200px',
        'margin': '10px' 
    }
}