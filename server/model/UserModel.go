package model

import "github.com/jinzhu/gorm"

// User model with name and surname
type User struct {
	gorm.Model
	firstName string
	lastName  string
	Price     uint
}

func createUser(user User) {
	db := GetMainDB()

	defer db.Close()

	// TODO: create user based on given data and make sure that he has unique email

}
