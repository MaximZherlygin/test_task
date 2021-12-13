## Test automation assignment Enablon

### Test cases

***Precondition***

| Step | Expected result |
|--------|-----------------|
| Delete all records from https://todomvc.com/examples/angular2/ | The list is empty |

***Case #1***

| Step | Expected result |
|--------|-----------------|
| Go to the https://todomvc.com/examples/angular2/ | To do list page is opened |
| Enter random string and press enter | The string appeared in the list, the counter appeared and shows the number 1 |
| Click on the red cross | Created record has been deleted, the counter disappeared | 

***Case #2***

| Step | Expected result |
|--------|-----------------|
| Go to the https://todomvc.com/examples/angular2/ | To do list page is opened |
| Enter random string and press enter | The string appeared in the list, the counter appeared shows the number 1 |
| Click on the checkbox | The counter has decreased by 1 |
| Click "Clear completed" button | Created record has been deleted, the counter disappeared |

***Case #3***

| Step | Expected result |
|--------|-----------------|
| Go to the https://todomvc.com/examples/angular2/ | To do list page is opened |
| Create 2 new records | Records appeared in the list, the counter appeared an shows the number 1 |
| Delete first record | First record is deleted, the counter has decreased by 1 | 

***Case #4***

| Step | Expected result |
|------|-----------------|
| Go to the https://todomvc.com/examples/angular2/ | To do list page is opened |
| Enter random string and press enter | The string appeared in the list, the counter appeared shows the number 1 |
| Double click on the new record, enter new random string and press enter | New record has been edited |

***Case #5***

| Step | Expected result |
|------|-----------------|
| Go to the https://todomvc.com/examples/angular2/ | To do list page is opened |
| Enter random string and press enter | The string appeared in the list, the counter appeared shows the number 1 |
| Double click on the new record, enter new random string, press enter and reload the page | New record still edited |

***Case #6***

| Step | Expected result |
|------|-----------------|
| Go to the https://todomvc.com/examples/angular2/ | To do list page is opened |
| Enter random string and press enter | The string appeared in the list, the counter appeared shows the number 1 |
| Click on the checkbox | The counter has decreased by 1 |
| Reload the page | The record is in the list, the checkbox is selected and the counter has the same value as in the previous step |

***Case #7***

| Step | Expected result |
|------|-----------------|
| Go to the https://todomvc.com/examples/angular2/ | To do list page is opened |
| Click on input and press enter | To do list is empty, new record was not created |

***Case #8***

| Step | Expected result |
|------|-----------------|
| Go to the https://todomvc.com/examples/angular2/ | To do list page is opened |
| Enter random string and press enter | The string appeared in the list, the counter appeared shows the number 1 |
| Double click on the new record, enter new random string, don't press enter and reload the page | New record hasn't been edited |


