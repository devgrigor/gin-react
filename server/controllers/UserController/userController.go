package usercontroller

import "github.com/gin-gonic/gin"

import userModel "../../model/User"

// Post for handling user registration
func Post(c *gin.Context) {
	// TODO: create user and send back the params
	var user userModel.User;
	user = userModel.User{firstName: "asdasdasda"}
	userModel.CreateUser(user);
}

// Get returns list of users based on query
func Get(c *gin.Context) {
	// TODO: get query from context

	// TODO: find users based on query params

	// TODO: return users list with c.JSON
}