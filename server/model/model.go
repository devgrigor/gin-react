package model

import (
	"github.com/jinzhu/gorm"
	// Importing mysql driver
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

// GetMainDB is getting main database
func GetMainDB() *gorm.DB {
	// todo
	db, _ := gorm.Open("mysql", "root@/gin-react?charset=utf8&parseTime=True&loc=Local")

	return db
}
