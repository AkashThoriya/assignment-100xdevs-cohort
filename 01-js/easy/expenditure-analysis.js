/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


/*
function calculateTotalSpentByCategory(transactions) {
  // Initialize an empty object to store the total spent per category.
  let categoryWiseTotalSpent = {};

  // Iterate over each transaction in the transactions array.
  transactions.forEach((element) => {
    // Check if the category of the current transaction is already in the categoryWiseTotalSpent object.
    if (categoryWiseTotalSpent.hasOwnProperty(element.category)) {
      // If the category exists, add the transaction's price to the existing total.
      categoryWiseTotalSpent[element.category] += element.price;
    } else {
      // If the category does not exist, create a new key for this category
      // and set its value to the transaction's price.
      categoryWiseTotalSpent[element.category] = element.price;
    }
  });

  // Initialize an array to store the formatted output.
  let outputFormatted = [];

  // Iterate over each category in the categoryWiseTotalSpent object.
  for (const key in categoryWiseTotalSpent) {
    // Push an object to the output array with the category and the total spent in that category.
    outputFormatted.push({
      category: key,
      totalSpent: categoryWiseTotalSpent[key],
    });
  }

  // Return the formatted output array.
  return outputFormatted;
}
/*

/**
 * This function calculates the total amount spent in each category from a list of transactions using the reduce method.
 * The reduce approach is chosen for its efficiency in handling large datasets, as it combines the data aggregation
 * and output formatting into a single iteration over the transactions array. This method is beneficial in terms of both
 * performance and memory usage, as it avoids the creation of intermediate data structures and iterates through the
 * array only once. Each transaction is an object containing id, timestamp, price, category, and itemName.
 * The function returns an array of objects, each representing a category with its corresponding total spent.
 * 
 * @param {Array} transactions - An array of transaction objects.
 * @return {Array} - An array of objects with each object containing a category and the total amount spent in that category.
 */
function calculateTotalSpentByCategory(transactions) {
  // Use the reduce method to iterate over the transactions array.
  // The accumulator 'acc' will ultimately become our output array.
  return transactions.reduce((acc, transaction) => {
    // Search for an existing category in the accumulator.
    const category = acc.find(item => item.category === transaction.category);

    // If the category already exists in our accumulator,
    // increment the totalSpent by the price of the current transaction.
    if (category) {
      category.totalSpent += transaction.price;
    } else {
      // If the category does not exist in our accumulator,
      // add a new object with the category and the current transaction's price.
      acc.push({ category: transaction.category, totalSpent: transaction.price });
    }

    // Return the accumulator for the next iteration.
    return acc;
  }, []); // Initialize the accumulator as an empty array.
}

module.exports = calculateTotalSpentByCategory;
