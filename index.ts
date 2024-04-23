/*
* This program uses a method to find a number in a long list.
*
* @author  Cristiano Sellitto
* @version 1.0
* @since   2024-04-22
*/

import { createPrompt } from 'bun-promptx'

/**
 * Finds the index of a number in a long list.
 *
 * @param userList the list selected
 * @param userNumber the number to be found
 * @param lowIndex unknown
 * @param highIndex unknown
 * @returns the index where the number is
 */
function binarySearch(userList: number[], userNumber: number, lowIndex: number, highIndex: number): number {
  const middleIndex = Math.floor((lowIndex + highIndex) / 2)

  if (lowIndex > highIndex) {
    return -1
  } else if (userList[middleIndex] == userNumber) {
    return middleIndex
  } else if (userList[middleIndex] > userNumber) {
    return binarySearch(userList, userNumber, lowIndex, middleIndex - 1)
  } else if (userList[middleIndex] < userNumber) {
    return binarySearch(userList, userNumber, middleIndex + 1, highIndex)
  }
}

// List values
const minValue: number = 0
const maxValue: number = 999
const listSize: number = 250

// Create list
const randomNumberList: number[] = []
console.log('Binary Search Program')
for (let counter = 0; counter < listSize; counter ++) {
  randomNumberList[counter] = Math.floor(Math.random() * maxValue) + minValue
}

// Sort list
randomNumberList.sort((a, b) => a - b)
console.log(`Sorted list of numbers:\n${randomNumberList}`)

// User input
const selectedNumber: number =
  createPrompt(`Enter a number to search for (${minValue} to ${maxValue}): `).value

if (isNaN(selectedNumber) || selectedNumber > maxValue || selectedNumber < minValue) {
  console.log('This is not a valid number.')
} else {
  const searchResult = binarySearch(randomNumberList, selectedNumber, 0, randomNumberList.length - 1)
  if (searchResult == -1) {
    console.log(`${selectedNumber} was not found.`)
  } else {
    console.log(`${randomNumberList[searchResult]} is in index ${searchResult}`)
  }
}

console.log('\nDone.')