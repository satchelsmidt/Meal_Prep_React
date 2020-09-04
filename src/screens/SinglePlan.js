import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import { findSinglePlan } from '../api/plans'
import { useParams } from "react-router-dom";
import Calendar from '../components/Calendar'
import { createEvents } from '../config/createEvents'

export default function Plan() {

    const [dataLoaded, setDataLoaded] = useState(false)
    const [planData, setPlanData] = useState(null)
    //On this page, we need to:
    //grab the deteails current plan for current user (last plan created for them)
    //This page should handle all plan views
    //If user is coming from create plan flow, then the url at top should contain planId
    //if user is coming from 'all plans' page, url should also contain unique planIds
    //grab data for recipes in that plan
    //add all of this data to calendar view

    let { planId } = useParams()

    useEffect(() => {
        findSinglePlan(planId).then((res) => {
            console.log('completed find plan function')
            console.log('response from find plan: ', res)
            setPlanData({
                planCuisines: JSON.parse(res.data.planCuisines),
                planDates: JSON.parse(res.data.planDates),
                planTimes: JSON.parse(res.data.planTimes),
                recipes: res.data.recipes
            })
        })
    }, [])

    useEffect(() => {
        if (planData !== null) {
            console.log('planData after its been set: ', planData)
            setDataLoaded(true)
        }
    }, [planData])

    //Return loading if the plan data is still fetching
    if (planData === null && dataLoaded === false) {
        return (
            <Container style={styles.formContainer}>
                <p>loading plan data</p>
            </Container>
        )
    }

    //Once fetched, return plan data
    else {
        return (
            <Container style={styles.formContainer}>
                <h2>Here is your completed Meal Plan (id: {planData.id})</h2>
                {planData.recipes.map((recipe, index) => { return <p key={index}>{recipe.recipe_title}</p> })}
                <p style={styles.p}>{planData.startDate}</p>
                <Container style={styles.calendarContainer}>
                    <Calendar startDate={planData.planDates[0]} endDate={new Date(planData.planDates[6]).addDays(1)} events={createEvents(planData.planTimes, planData.recipes)}></Calendar>
                </Container>
            </Container>
        );
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
        'marginTop': ' 50px',
        'marginBottom': ' 50px'
        // 'background': 'grey',
        // 'opacity': '.90'
    },
    calendarContainer: {
        'marginTop': '50px',
        'background': 'grey',
        'opacity': '.90',
        'marginBottom': ' 50px'
    }
}