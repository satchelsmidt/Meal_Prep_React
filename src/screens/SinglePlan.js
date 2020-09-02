import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import SmallButton from '../components/SmallButton'
import { findSinglePlan } from '../api/plans'
import { useParams } from "react-router-dom";

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

    const retrievePlan = (id) => {
        findSinglePlan(id).then((res) => {
            console.log('response from find plan: ', res)
            setPlanData(res.data)
        })

    }

    // const renderRecipes = planData.recipes.map((recipe, index) => {
    //     return <p>{recipe.recipe_title}</p>
    // })

    useEffect(() => {
        findSinglePlan(planId).then((res) => {
            console.log('completed find plan function')
            console.log('response from find plan: ', res)
            setPlanData(res.data)
        })
    }, [])

    useEffect(()=>{
        console.log('our planData apparently: ', planData)
        if(planData !== null){
            console.log('our planData after its been set apparently: ', planData)

            // renderRecipes = planData.recipes.map((recipe, index) => {
            //     return <p>{recipe.recipe_title}</p>
            // })
            setDataLoaded(true)
        }
    }, [planData])

    // = planData.recipes.map((recipe, index) => {
    //     return (<p>recipe.recipe_title</p>)
    // })



    if (planData === null && dataLoaded === false) {
        return (
            <Container style={styles.formContainer}>
                <p>loading plan data</p>
                {/* <p style={styles.p}>Click button below to </p>
                <SmallButton onClick={() => retrievePlan(planId)}></SmallButton> */}
            </Container>
        )
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>{planData.id}</p>
            <p style={styles.p}>{planData.planCuisines}</p>
            <p style={styles.p}>{planData.planDates}</p>
            <p style={styles.p}>{planData.planTimes}</p>
            {dataLoaded && planData.recipes.map((recipe, index) => {return <p key={index}>{recipe.recipe_title}</p>})}
            <p style={styles.p}>{planData.startDate}</p>
            <SmallButton onClick={() => retrievePlan(planId)}></SmallButton>
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
    }
}