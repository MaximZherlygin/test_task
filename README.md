## Test automation assignment Enablon

### Installation
Make sure you have working `node`, `npm` and `JDK` (JDK is necessary for several tools).

First, run
```shell
npm install
```
from root directory of project to install the required libraries.

### Run

If it needs, run
```shell
npm run eslint
```
to run eslint.

Then, run
```shell
npm run build
```
to compile `*.ts` files.

**Chrome**

To perform testing, run: `npm run chrome/all`, or run `npm run chrome/case_N`, where N - number of testcase.

**Firefox**

To perform testing, run: `npm run firefox/all`, or run `npm run firefox/case_N`, where N - number of testcase.

### Configuration

You can change configuration of test performing (for example, timeouts) in `config/wdio.base.conf.cjs`.

### Test cases

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

## About the project

I used `WebdriverIO` as automation framework because of simple project setup; more flexible testing setup;
integration with other tools for test automation immediately upon installation; simple integration with BrowserStack
and other similar tools; and so on. This framework really has many advantages.

What about code, I use Page Object pattern because it is best practice and this pattern helps to separate logic and
test implementation. I use the same pattern for the elements. 

Each testcase is located in a separate file in the `test/specs` folder. Thanks for PageObjectSteps it's easy to read them
and understand their logic.

The whole project is divided into 3 parts:
1. Config - configurations of test running, integrations with tools and so on.
2. Framework - contains utils, base elements, base pages, constants and browser interface.
3. Test - contains test specs, page objects, page steps and other things that refers to the testing.

Thanks for my autotests I found a bug in Case #5 (after editing and reloading name of record doesn't save).

That was interesting task because I found new features for me. 
