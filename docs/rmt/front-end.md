---
sidebar_position: 3
---

# Front end

## Architecture

RMT shares a codebase with our parent app, DB Manager. Please [look there](/docs/db-manager/architecture) for full documentation on front-end architecture. Within this environment, RMT uses:

```jsx
/src
├── components
├── services
├── stores
├── views
```

### Components

Discrete visual elements that are arranged within a view. Some of these may be re-used throughout the app.

### Services

Helper functions that handle requests and responses.

```js
├── rmt-api
├── rmtOperations
      ├── caclulateConnectionScoresPerPathway
      ├── caclulateRiskPerDisease
      ├── caclulateRiskScores
```

- `rmt-api` handles requests to the [back-end](/docs/rmt/back-end.md) API
- `rmtOperations` handle complex logic to calulate risk scores. This is the same logic as calculating risk scores on the back-end. But for now, it will remain a front-end operation.

### Stores

Pinia stores that hold state (data, functions etc.) that will be shared among multiple components. See "Pinia for State Management" section below for more information.

### Views

Components that hold an entire page view (containing multiple sub-components).
Our only 3 views are:

```js
├── RMT
├── RMTLanding
├── RMTResults
```

- `RMTLanding` is the landing page for the tool, including background information and a start button.
- `RMT` contains the actual tool, including: country selection, data tables and their keys, and navigation buttons.
- `RMTResults` contains the risk score results, including: results data table and key, data visualizations, and an option to download.

## User flow

![user flow diagram](/img/rmt-userflow.png)

The user:

1. Views a description about RMT.
2. Clicks to enter the tool.
3. Selects their receiver country and source countries.
4. Views disease status data for source countries. If the user would like to edit, they:
   i. Click a button to make scores editable.
   ii. Edit scores.
   iii. Save scores.
5. Click "Next" to view mitigation measures data for source countries. If the user would like to edit, they:
   i. Click a button to make scores editable.
   ii. Edit scores.
   iii. Save scores.
6. Click "Next" to view pathways data. This is not editable.
7. Click "Next" to reach connections data entry.
8. Must enter connections data for each country, for each field. To do so, they:
   i. Click a button to make scores editable.
   ii. Enter scores.
   iii. Save scores.
9. Click "Calculate results" to calculate and view risk score results.
10. On the risk score Results view, user may:
    i. View the risk scores results as a table of data.
    ii. View data visualizations of the results.
    iii. Click to download an Excel of the data.
    iv. Click to download a PDF of the data. This will open a new tab which automatically downloads the PDF.

## Style guide

Follow [EUFMD's Engineering Guidelines](https://boom-citrine-667.notion.site/Engineering-Guidelines-eda49169e2044e488a6acb1735704726). In addition to those, we do the following:

### Vue API

- Use Vue Options API
  - There is also the new Composition API, but the original dev team was more familiar with Options format.
  - If looking up documentation, make sure the “Options” format is selected:
    ![screenshot of Vue website with Options API selected](/img/vue-options.png)

### Naming conventions

- custom events (`$emits`) in `kebab-case`
- data/variable names in `camelCase`
- component names should be:
  - in `PascalCase`
  - always multi-word: i.e.
    - ❌ ~~`Connections.vue`~~
    - ✅ `ConnectionsTable.vue`
  - when components are used by only one parent: prepend with their parent name, i.e. if a Form has components Question and Answers:
    - ❌ ~~`Question.vue`~~, ~~`Answers.vue`~~
    - ✅ `FormQuestion.vue`, `FormAnswers.vue`
    - This ensures that related components are visually grouped together in the file structure.
  - when components are reused throughout the app: prepend with `RMT`. For example, if we reuse the same `Button`:
    - ❌ ~~`Button.vue`~~
    - ✅ `RMTButton.vue`
    - This ensures that reusable components are visually grouped together in the file structure

### Pinia for state management

#### 🍍 What is it? 🍍

Pinia allows you to store data and methods (aka variables and functions) in a central way, and import them to different components throughout your app. This can simplify your code by importing and using variables and functions _only_ in the components where they are needed, and eliminates the need for prop drilling and several layers of callback functions.

#### When to use it?

✅ Use Pinia to store any data and methods that need to be accessible across multiple components. Ex:

- `receiverCountry` needs to be set in `CountrySelect.vue`, but displayed in `RmtCarousel.vue`
- `CountrySelect.vue` needs to fetch disease status scores (when a new source country is selected), but `DiseaseStatus.vue` needs to display, edit or remove them.
- `diseaseStatus` and `mitigationMeasures` scores are rendered in the corresponding components, but are also used to calculate risk results.

❌ Do **not** use Pinia for data that is only used temporarily, or in a single component. Ex:

- `CountrySelect.vue` temporarily sets a `selectedSourceCountry` - this adds the selected country to the array of `sourceCountries` in state, then immediately clears to allow more countries to be selected.

#### How to use it?

_Here is the [documentation](https://pinia.vuejs.org/core-concepts/) if you’d like further details. 📖_

##### Create a store 🏗️

First, create your store file and name it with this pattern: `useExampleStore.js`

- i.e. `use` + `YourStoreName` + `Store`
- so for disease status data: `useDiseaseStatusStore.js`

Step-by-step instructions in comments below:

```js
// ******* STEP 1: import defineStore at the top *******
import { defineStore } from "pinia";
import api from "@/services/rmt-api.js";

// ******* STEP 2: export your store, and after defineStore, give your store a unique descriptive name *******
export const useDiseaseStatusStore = defineStore("diseaseStatus", {
  // ******* STEP 3: define your data/variables in state *******
  state: () => ({
    diseaseStatus: [],
  }),

  // ******* STEP 4: define your functions/methods in actions *******
  actions: {
    async getDiseaseStatus(country_id, country_name) {
      // code to fetch disease status scores...
    },
    editDiseaseStatus(newScores) {
      // code to edit disease status scores...
    },
    removeDiseaseStatus(country) {
      // code to remove disease status scores...
    },
  },
});

// ******* THAT'S IT! Congrats :) *******
```

##### Use a store 🧤

Here’s a 🎬 [how-to video](https://vueschool.io/lessons/access-pinia-state-in-the-options-api)

Process to use stored data or methods in any component is:

1. In `<script>`, import:
   1. the correct store
   2. `mapState` if you’re using data/variables
   3. `mapActions` if you’re using functions/methods

```js
import { useExampleStore } from "@/stores/useExampleStore";
import { mapState, mapActions } from "pinia";
```

2.  For data/variables, add a `computed` property in your `<script>`, and use `mapState` to destructure your stored data:

```js
computed: {
    ...mapState(useExampleStore, ['myVariable', 'anotherVariable'])
        },

// here's a real example with countries store:
computed: {
    ...mapState(useCountriesStore, ['countryList', 'regionList', 'sourceCountries']),
    },
```

3. For functions/methods, use `mapActions` in your `methods` to destructure the stored functions. You do not need to include params, just function names:

```js
methods: {
        ...mapActions(useExampleStore, ['myFunction', 'anotherFunction'])
        },

// here's a real example with countries store:
methods: {
        ...mapActions(useCountriesStore, ['getCountries', 'getRegions', 'updateSourceCountries'])
        },
```

4. Then you can use as usual! i.e. Use the variables in your `<template>`, call the functions, etc., with the same syntax as if they were standard `data` or `methods`. Store data and methods are **sourceCountries** and **updateSourceCountries()** in the example below:

```html
<!-- source country select -->
<div>
  <select
    v-model="selectedSourceCountry"
    name="sourceCountries"
    @change="updateSourceCountries(value)"
  >
    <option key="0" value="">Select source countries...</option>
    <option key="1" value="all">All {{ selectedRegion }}</option>
    <option v-for="c in filteredCountries" :key="c.iso3" :value="c">
      {{ c.name_un }}
    </option>
  </select>
</div>
```

### Sources

- [Vue Style Guide](https://vuejs.org/style-guide)
