/* 2) Refer to the tables below, Write a sql query for finding the subjects for each
student, the subjects should be order by alphabetically .*/
---------------------------------------------------------------------------------


SELECT 
  Subject_student_mapping.customerId,
  customers.name,
  Subject_student_mapping.subjectId
FROM 
  Subject_student_mapping
  INNER JOIN customers ON Subject_student_mapping.customerId = customers.customerId
ORDER BY 
  Subject_student_mapping.subjectId ASC;