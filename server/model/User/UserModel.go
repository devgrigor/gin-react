package model

import "github.com/jinzhu/gorm"
import model "../../model"

// User model with name and surname
type User struct {
	gorm.Model
	firstName string
	lastName  string
	Price     uint
}

// CreateUser creates user
func CreateUser(user User) {
	db := model.GetMainDB()

	defer db.Close()

	// TODO: create user based on given data and make sure that he has unique email

}
