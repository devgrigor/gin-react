package usercontroller

import "github.com/gin-gonic/gin"

import userModel "../../model/User"

func Post(c *gin.Context) {
	// TODO: create user and send back the params
	var user userModel.User;
	userModel.CreateUser(user);
}