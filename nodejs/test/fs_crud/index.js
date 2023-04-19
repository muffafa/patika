// employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
// Bu veriyi okuyalım. (READ)
// Bu veriyi güncelleyelim.
// Dosyayı silelim.

import * as fs from 'fs';

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (error) => {
    if (error) throw error;
    else console.log("Successfully wrote");
});

fs.readFile('employees.json', 'utf8', (error, data) => {
    if (error) throw error;
    else console.log("Successfully read data\n", data);
});

fs.appendFile('employees.json', '\n {"name": "Employee 2 Name", "salary": 3000}', (error) => {
    if (error) throw error;
    else console.log("Successfully added new employee",);
});

fs.unlink('employees.json', (error) => {
    if (error) throw error;
    else console.log("Successfully deleted");
});