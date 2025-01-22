# STEPS PROGRESS

![STEPS PROGRESS](https://i.postimg.cc/yYhxYX0b/Screenshot-2023-01-11-101926.png)

## Description

Displays steps in a horizontal list to show progress.

## Requirements

1. To include the steps set the details property with an object called steps whose value is an array of steps as strings.
2. To show the active step, set an object called active_step in the details property which is a string that should be among those in the steps array.
eg - `{"steps":["step 1","step 2","step 3"],"active_step":"step 2"}`
