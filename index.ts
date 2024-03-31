#! /usr/bin/env

import inquirer from "inquirer";

let toDoList = [];
let cond = true;

while (cond) {
  let addTask = await inquirer.prompt([
    {
      message: "What would you like to add in your To-Do List?",
      name: "addedToDo",
      type: "input",
    },
    {
      message: "Would you like to add more?",
      name: "addMore",
      type: "list",
      choices: ["Yes", "No"]
    },
  ]);

  toDoList.push(addTask.addedToDo);
  console.log(toDoList);

  if(addTask.addMore == "No"){
    cond = false;
  }
}