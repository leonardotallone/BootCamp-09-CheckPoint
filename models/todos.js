"use strict";
/*
 * El objetivo es hacer un TO DO LIST:
 * vas a tener que agregarle tareas a distintas personas y
 * configurar propiedades de esas tareas.
 */
var tasks = {}; // acá vamos a guardar nuestras personas y tareas
const reset = () => {
  tasks = {};
}; // esta función ya esta armada :D

const listPeople = () => {
  return Object.keys(tasks)
  // devuelve un arreglo de personas con tareas
};
const add = (name, task) => {  
  tasks[name] = task;
  
};

const list = (name) => {
  return tasks[name]

  
};
const complete = () => {
  if (ad()) return false
};
const remove = () => {
};

module.exports = { listPeople, reset, add, reset, list, complete, remove };
