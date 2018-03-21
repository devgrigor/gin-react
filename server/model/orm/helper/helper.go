package helper

func GetCsvFromArray(array []string) string{
	var csv = ""
	// TODO: get array to csv
	for i := 0; i < len(array)-1 ; i++ {
		csv += array[i] + ","
	}

	csv += array[len(array)-1]
	return csv
}

func BuldSelect(table string, fields []string) string{
	var query = "Select "
	if(len(fields) == 0) {
		query += "* from "+table
	} else {
		query += GetCsvFromArray(fields)+" from "+table
	}

	return query
}

func selectQuery() {

}