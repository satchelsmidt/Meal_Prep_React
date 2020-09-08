import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap'
import { findSinglePlan } from '../api/plans'
import { useParams } from "react-router-dom";
import Calendar from '../components/Calendar'
import { createEvents } from '../config/createEvents'

export default function Plan() {

    const [dataLoaded, setDataLoaded] = useState(false)
    const [planData, setPlanData] = useState(null)

    let { planId } = useParams()

    const createIngredientsList = async (data) => {
        if (planData.ingredients.length > 0) {
            return
        }
        let ingredientsList = new Set()

        for (let recipe of data) {
            for (let ingredient of JSON.parse(recipe.recipe_ingredients)) {
                ingredientsList.add(ingredient.name)
            }
        }

        await setPlanData({
            ...planData,
            ingredients: Array.from(ingredientsList)
        })

        setDataLoaded(true)
    }

    useEffect(() => {
        findSinglePlan(planId).then((res) => {
            setPlanData({
                id: res.data.id,
                planCuisines: JSON.parse(res.data.planCuisines),
                planDates: JSON.parse(res.data.planDates),
                planTimes: JSON.parse(res.data.planTimes),
                recipes: res.data.recipes,
                ingredients: []
            })
        })
    }, [planId])

    useEffect(() => {
        if (planData !== null) {
            createIngredientsList(planData.recipes)
        }
    })

    //Once fetched, return plan data
    if (dataLoaded && planData) {
        return (
            <Container style={styles.formContainer}>
                <h2 style={styles.planHeader}>Meal Plan #{planData.id}</h2>
                {/* If user has selected times for plan, display calender */}
                {createEvents(planData.planTimes, planData.recipes).length > 0 ? (
                    <Container style={styles.calendarContainer}>
                        < Calendar startDate={planData.planDates[0]} endDate={new Date(planData.planDates[6]).addDays(1)} events={createEvents(planData.planTimes, planData.recipes)}></Calendar>
                    </Container>
                ) : null}

                <Container style={styles.contentContainer}>
                    <Container style={styles.outerCardContainer}>
                        <h3 style={styles.cardHeader}>This week's recipes</h3>
                        <Container style={styles.innerCardContainer}>
                            {planData.recipes.map((recipe, index) => {
                                return <Card style={styles.recipeCard} key={index}>
                                    <Card.Img variant="top" src={recipe.recipe_image} />
                                    <Card.Body>
                                        <Card.Title>{recipe.recipe_title}</Card.Title>
                                        <Card.Text>Cuisines: {JSON.parse(recipe.recipe_cuisines).join(', ')}</Card.Text>
                                        <Card.Text>Total Time: {recipe.recipe_total_time} minutes</Card.Text>
                                        <Card.Text>{<a href={recipe.recipe_link} target="_blank" rel="noopener noreferrer">Link to Recipe</a>}</Card.Text>
                                    </Card.Body>
                                </Card>
                            })}
                        </Container>
                    </Container>

                    <Card>
                        <Card.Body>
                            <Card.Title>Shopping List</Card.Title>
                            {
                                planData.ingredients.length > 0 ? (
                                    planData.ingredients.map((ingredient, index) => {
                                        return <p key={index}>{ingredient}</p>
                                    })) : (
                                        <p>Ingredients Not Found</p>
                                    )
                            }
                        </Card.Body>
                    </Card>
                </Container>
            </Container >
        );
    }

    //Return loading if the plan data is still fetching
    else {
        return (
            <Container style={styles.formContainer}>
                <p>loading plan data</p>
            </Container>
        )
    }
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
        'background': '#5D737E',
        'opacity': '.90',
        'padding': '40px 10px',
        'paddingBottom': '20px',
        'paddingTop': '20px'

    },
    calendarContainer: {
        'margin': '10px',
        'padding': '10px',
        'background': 'rgb(136, 162, 170)',
        'opacity': '.90',
    },
    contentContainer: {
        'display': 'flex',
    },
    recipeCard: {
        'padding': '10px',
        'margin': '10px',
        'width': '40%',
    },
    outerCardContainer: {
        'display': 'flex',
        'flexWrap': 'wrap',
        'justifyContent': 'center',
        'height': '5%'
    },
    innerCardContainer: {
        'display': 'flex',
        'flexWrap': 'wrap',
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'overflow': 'auto',
    },
    cardHeader: {
        'background': '#BB342F',
        'opacity': '.90',
        'padding': '5px 10px',
        'display': 'inline-block',
        'borderRadius': '25px',
        'margin': '0px',
        'color': 'white',
    },
    planHeader: {
        'background': '#BB342F',
        'opacity': '.90',
        'padding': '5px 10px',
        'display': 'inline-block',
        'borderRadius': '25px',
        'marginBottom': '20px',
        'color': 'white',
        'textAlign': 'center'
    },
    headerStyle: {
        'margin': '0px',
        'textAlign': 'center'
    }
}