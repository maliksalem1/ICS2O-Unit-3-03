// Created by: maliksalem1
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of sphere.
 */
function calculate () {
  // input
  const radius = parseInt(document.getElementById('radius').value)


  // process 
  const volume = 1.333 * Math.pi * radius * radius * radius

  // output
  document.getElementById('volume').innerHTML = '<p>volume is: ' + volume.toString() + ' cm³</p>'
}