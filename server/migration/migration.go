package main

import userModel "../model/User"
import mainModel "../model"
import "fmt"

func main() {
	db := mainModel.GetMainDB()
	db.AutoMigrate(&userModel.User{})

	defer db.Close();

	fmt.Println("Migration finished !")
}
