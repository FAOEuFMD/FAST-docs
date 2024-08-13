---
sidebar_position: 3
---

# Front end

## Overview

## Architecture

## User flow

## Style guide

### Vue API

- Use Vue Options API
  - There is also the new Composition API, but we all learned Options format.
  - If looking up documentation, make sure the “Options” format is selected:
    ![Screen Shot 2024-05-08 at 11.05.30 AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/cb6a297b-0172-4571-88ae-6aa73ffd2f5f/d18ec2fc-906e-46c3-8d9f-cd33ff539362/Screen_Shot_2024-05-08_at_11.05.30_AM.png)

### Naming conventions

- custom events (`$emits`) in `kebab-case`
- data/variable names in `camelCase`
- component names should be:
  - in `PascalCase`
  - always multi-word: i.e.
    - ❌ `~~Connections.vue~~`
    - ✅ `ConnectionsTable.vue`
  - when components are used by only one parent: prepended with their parent name, i.e. if a Form has components Question and Answers:
    - ❌ `~~Question.vue`, `Answers.vue`~~
    - ✅ `FormQuestion.vue`, `FormAnswers.vue`
    - This ensures that related components are visually grouped together in the file structure.
  - when components are reused throughout the app: prepended with `RMT`. For example, if we reuse the same `Button`:
    - ❌ `~~Button.vue~~`
    - ✅ `RMTButton.vue`
    - This ensures that reusable components are visually grouped together in the file structure

### Pinia for state management 🍍

#### What is it?

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

#### Create a store 🏗️

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

#### Use a store 🧤

Here’s a 🎬 [how-to video](https://vueschool.io/lessons/access-pinia-state-in-the-options-api)

Process to use stored data or methods in any component is:
    1. In `<script>`, import:
      a. the correct store
      b. `mapState` if you’re using data/variables
      c. `mapActions` if you’re using functions/methods

         ```js
         import { useExampleStore } from '@/stores/useExampleStore'
         import { mapState, mapActions } from 'pinia';
         ```

      2. For data/variables, add a `computed` property in your `<script>`, and use `mapState` to destructure your stored data:

         ```
         computed: {
                 ...mapState(useExampleStore, ['myVariable', 'anotherVariable'])
                 },

         // here's a real example with countries store:
         computed: {
                 ...mapState(useCountriesStore, ['countryList', 'regionList', 'sourceCountries']),
         				},
         ```

      3. For functions/methods, use `mapActions` in your `methods` to destructure the stored functions. You do not need to include params, just function names:

         ```
         methods: {
                 ...mapActions(useExampleStore, ['myFunction', 'anotherFunction'])
                 },

         // here's a real example with countries store:
         methods: {
                 ...mapActions(useCountriesStore, ['getCountries', 'getRegions', 'updateSourceCountries'])
                 },
         ```

      4. Then you can use as usual! i.e. Use the variables in your `<template>`, call the functions, etc., with the same syntax as if they were standard `data` or `methods`. Store data and methods are **bolded and highlighted** in the example below:

         ```
         <!-- source country select -->
         <div>
         	<select v-model="selectedSourceCountry" name="**sourceCountries**" @change="**updateSourceCountries(value)**">
         		<option key=0 value="">Select source countries...</option>
         		<option key=1 value="all">All {{ selectedRegion }}</option>
         		<option v-for="c in filteredCountries" :key="c.iso3" :value="c">{{ c.name_un }}</option>
         	</select>
         </div>
         ```
- _Sources_
  - [Vue Style Guide](https://vuejs.org/style-guide)
