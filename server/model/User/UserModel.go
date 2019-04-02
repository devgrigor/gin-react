package model

import "github.com/jinzhu/gorm"
import model "../../model"

// User model with name and surname
type User struct {
	gorm.Model
	FirstName string
	LastName  string
}

// CreateUser creates user
func CreateUser(user User) {
	db := model.GetMainDB()

	defer db.Close()

	// TODO: create user based on given data and make sure that he has unique email
	db.NewRecord(user)

	db.Create(&user)
}
