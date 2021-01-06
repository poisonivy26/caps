first_name = 'Luigi'
last_name = 'Mallari'

database = []
populator_command = f'INSERT INTO tabl_name(column_1, column_2 \n VALUES first_name, last_name'


for i in range(10):
    database.append(populator_command)
    
    
print(database)