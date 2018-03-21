package orm

import helper "./helper"
import "testing"

func TestArraytocsv(t *testing.T) {
	var sel = helper.GetCsvFromArray([]string{"asd", "sad"});
	println(sel)
	if(sel != "asd,sad") {
		t.Error(sel)
	}
}

func TestBuildselect(t *testing.T) {
	var sel string
	sel = helper.BuldSelect("users", []string{});
	println(sel);
	if(sel != "Select * from users") {
		t.Error(sel)
	}

	sel = helper.BuldSelect("users", []string{"name as username", "id"});
	println(sel);
	if(sel != "Select name as username,id from users") {
		t.Error(sel)
	}

	var res = Run(sel)

	for i := range res {
		println(res[i])
	}


}
