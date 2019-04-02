package usercontroller

import "github.com/gin-gonic/gin"
import "fmt"
import userModel "../../model/User"

// Post for handling user registration
func Post(c *gin.Context) {
	// TODO: create user and send back the params
	var user userModel.User
	var err = c.BindJSON(&user)
	if err == nil {
		fmt.Printf("here is the code")
		userModel.CreateUser(user)
	} else {
		fmt.Printf( err.Error())
	}
	
}

// Get returns list of users based on query
func Get(c *gin.Context) {
	// TODO: get query from context

	// TODO: find users based on query params

	// TODO: return users list with c.JSON
}