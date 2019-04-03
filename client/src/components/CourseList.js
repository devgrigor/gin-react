import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import Course from './Course'
const SPACE_ID = 'o77w0vip46ry'
const ACCESS_TOKEN = '21c2ae9551049aa83e9861399c0fad1002913eb78e7aefcdbc82edaf38ce079c'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});

class CourseList extends Component {
    state = {
        courses: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getCourses()
    }

    getCourses = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({courses: response.items})
            console.log(this.state.courses)
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }

    onSearchInputChange = (event) => {
        if(event.key !== "Enter") {
            return ;
        }
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCourses()
    }

    render() {
        return (
            <div>
                { this.state.courses ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"   
                            margin="normal"
                            onKeyPress={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}

export default CourseList;
