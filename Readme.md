# BUGS DOCUMENTAION

## Bugs Findings

### 1. Bug in `genreral.ts` file
the `componentsData` object had mixed key values, which would have cause issues when trying to access the data using the keys. The keys were not consistent.

## 2. Bug in `general.ts` file
the `setComponentElement` function was returning null even when the element was found. This would have caused issues when trying to access the element later in the code.

### 3. Bug in `basicSettings.ts` file
the `lightSwitchOn` and `lightSwitchOff` functions were improperly setting the data attributes although its syntatically correct. the standard way is not to use camel case for data attributes but lower case with hyphens. This would have caused issues when trying to access the data attributes later in the code.

### 4. Bug in `basicSettings.ts` file
the `handleLightIntensitySlider` function was not properly impliemented; even when the intensity value was not set to 0, the light was beign set to off. and in the same function, the was an improper use of isNaN function. 

### 5. Bug in `basicSettings.ts` file
the `lightComponentSelectors` was slicing a string and taking the character at the first index, which was the incorrect way to access the componentData and it required the full room name as a string.

### 6. Bug in `main.ts` file
the event handler for the `slider onchange` the value wasn't properly casted as a number. This would have caused issues when trying the function depending on it as its expected a number value.

