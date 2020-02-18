# week_07_day_02_homework
Euro converter using vue and API https://api.exchangeratesapi.io/latest

--------------------------------------------------------------------------------------------------------------------------------------

Brief
You have been asked to build a currency exchange calculator.

Use the data from this url (https://api.exchangeratesapi.io/latest) to allow the user to convert from Euro to any of the listed currencies.

--------------------------------------------------------------------------------------------------------------------------------------

MVP

The app should load the exchange rates when the page loads. The data being retrieved is an object, so it will be beneficial to read the docs (read the docs) on how a v-for directive handles objects.

  mounted(){
    // ...
  }

The user should be able to enter an amount which they can then:

* convert from Euros into a selected currency
* convert from a selected currency into Euros
* Make sure you appropriately format any currencies displayed to the user (i.e. to two decimal places).

--------------------------------------------------------------------------------------------------------------------------------------

Extensions

* Allow cross-currency conversions - from non-base to non-base currencies. (e.g. from GBP to USD)
* Research how Vue’s filters allow for formatting of output and implement them where appropriate.
