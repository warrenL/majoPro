CREATE TABLE IF NOT EXISTS Teacher (id INTEGER PRIMARY KEY AUTOINCREMENT, serverId TEXT, firstName TEXT, lastName TEXT, username TEXT, password TEXT);
INSERT INTO Teacher(serverId, firstName, lastName, username, password) VALUES ('1', 'Rodney', 'Qin', 'rodney.qin', 'Welcome1');
INSERT INTO Teacher(serverId, firstName, lastName, username, password) VALUES ('2', 'Patty', 'Ma', 'patty.ma', 'Welcome1');
CREATE TABLE IF NOT EXISTS Student (id INTEGER PRIMARY KEY AUTOINCREMENT, serverId TEXT, firstName TEXT, lastName TEXT);
INSERT INTO Student(serverId, firstName, lastName) VALUES ('1', 'Colin', 'Xu');
INSERT INTO Student(serverId, firstName, lastName) VALUES ('2', 'Rudolf', 'Luo');
INSERT INTO Student(serverId, firstName, lastName) VALUES ('3', 'Tracy', 'Tian');
INSERT INTO Student(serverId, firstName, lastName) VALUES ('4', 'Pearl', 'Zhou');
INSERT INTO Student(serverId, firstName, lastName) VALUES ('5', 'Benny', 'Zhong');
INSERT INTO Student(serverId, firstName, lastName) VALUES ('6', 'Rafael', 'Guo');
INSERT INTO Student(serverId, firstName, lastName) VALUES ('7', 'Anson', 'Shen');
INSERT INTO Student(serverId, firstName, lastName) VALUES ('8', 'Helen', 'Chen');
CREATE TABLE IF NOT EXISTS Section (id INTEGER PRIMARY KEY AUTOINCREMENT, serverId TEXT, name TEXT);
INSERT INTO Section(serverId, name) VALUES ('1', 'Math-Rodney-001-01');
INSERT INTO Section(serverId, name) VALUES ('2', 'Math-Rodney-001-02');
INSERT INTO Section(serverId, name) VALUES ('3', 'English-Patty-002-01');
INSERT INTO Section(serverId, name) VALUES ('4', 'English-Patty-002-02');
CREATE TABLE IF NOT EXISTS TeacherSection (id INTEGER PRIMARY KEY AUTOINCREMENT, teacherServerId INTEGER, sectionServerId INTEGER);
INSERT INTO TeacherSection(teacherServerId, sectionServerId) VALUES('1', '1');
INSERT INTO TeacherSection(teacherServerId, sectionServerId) VALUES('1', '2');
INSERT INTO TeacherSection(teacherServerId, sectionServerId) VALUES('2', '3');
INSERT INTO TeacherSection(teacherServerId, sectionServerId) VALUES('2', '4');
CREATE TABLE IF NOT EXISTS SectionStudent (id INTEGER PRIMARY KEY AUTOINCREMENT, sectionServerId INTEGER, studentServerId INTEGER);
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('1', '1');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('1', '2');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('1', '3');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('1', '4');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('2', '5');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('2', '6');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('2', '7');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('2', '8');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('3', '1');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('3', '2');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('3', '3');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('3', '4');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('4', '5');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('4', '6');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('4', '7');
INSERT INTO SectionStudent(sectionServerId, studentServerId) VALUES('4', '8');
CREATE TABLE IF NOT EXISTS SectionItem (id INTEGER PRIMARY KEY AUTOINCREMENT, serverId INTEGER, sectionServerId INTEGER, startTime TEXT, endTime TEXT, sectionDate TEXT);
INSERT INTO SectionItem(serverId, sectionServerId, startTime, endTime, sectionDate) VALUES('1', '1', '10:00', '11:00', '2017-08-01')
INSERT INTO SectionItem(serverId, sectionServerId, startTime, endTime, sectionDate) VALUES('2', '1', '10:00', '11:00', '2017-08-02')
INSERT INTO SectionItem(serverId, sectionServerId, startTime, endTime, sectionDate) VALUES('3', '2', '10:00', '11:00', '2017-08-03')
INSERT INTO SectionItem(serverId, sectionServerId, startTime, endTime, sectionDate) VALUES('4', '2', '10:00', '11:00', '2017-08-04')
INSERT INTO SectionItem(serverId, sectionServerId, startTime, endTime, sectionDate) VALUES('5', '3', '14:00', '15:00', '2017-08-01')
INSERT INTO SectionItem(serverId, sectionServerId, startTime, endTime, sectionDate) VALUES('6', '3', '14:00', '15:00', '2017-08-02')
INSERT INTO SectionItem(serverId, sectionServerId, startTime, endTime, sectionDate) VALUES('7', '4', '14:00', '15:00', '2017-08-03')
INSERT INTO SectionItem(serverId, sectionServerId, startTime, endTime, sectionDate) VALUES('8', '4', '14:00', '15:00', '2017-08-04')
CREATE TABLE IF NOT EXISTS SectionItemStudent (id INTEGER PRIMARY KEY AUTOINCREMENT, serverId INTEGER, sectionItemServerId INTEGER, studentServerId INTEGER, status TEXT);