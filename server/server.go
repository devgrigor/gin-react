package main

import "github.com/gin-gonic/gin"
import usercontroller "./controllers/UserController"

import (
	"net/http"

	"github.com/gin-contrib/static"
)

func main() {
	router := gin.Default()
	router.Use(static.Serve("/", static.LocalFile("../client/build", false)))
	router.LoadHTMLGlob("../client/build/*.html")

	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	router.GET("/user", usercontroller.Get)
	router.POST("/user", usercontroller.Post)

	router.Run() // listen and serve on 0.0.0.0:8080
}
