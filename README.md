# span_test
In order to execute Node.js on must first install the nodejs application:  npm install
This was not transfered due to the size of the package.

Also the latest selenium driver related to one’s Chrome version will probably have to be down loaded and installed manually in the …span_test\node_modules\chromedriver\lib folder.  For some reason npm does not install the latest version.

In the Report folder an html report is available to shows the results of the complete test run.

All of the possible test cases that can be imagined where not coded due to time constraints, however the project illustrates what is possible.

From a data driven perspective it was decided to capture some data in the Test_Suit.js file.
It was also decided to calculate some of the expected results because this might change in reality when team positions and scores change.
For example the position a team has today might change in future as the different teams’ scores change or more teams might appear on the list.
The solution is therefore a generic solution to obtain expected results which reduces script maintenance.

It is at this point that one will also note that the script fails the team result layout since one does not count positions 1, 2, 3, 3, 5 but 1, 2, 3, 3, 4.  The script lists this as a defect.  

In environments where huge volumes of data might be tested, for example for coverage purposes, such data can be stored in a Sqlite3 database and extracted into a script like this.  In this particular case it was deemed unnecessary.

No significant challenges that required generic xpaths and other techniques to obtain and interact elements or element data was necessary. 

One will also note that some attempts were made to keep the script syncronized with the application, however the general concept was illustrated in this work.  
This is due to the speed at which the application executes.  In test/development environments this is usually not the case and much more effort is required to wait for elements or pages to show, elements to become visible or clickable etc.

One will also note that the script executes visually (not headless) for illustrative purposes, however in a test/development environment these scripts will typically be executed headless to improve execution speed etc.  The headless function was included in the script code and can easily be changed in the feature files.
