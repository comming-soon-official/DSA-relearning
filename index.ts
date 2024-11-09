import { discountCalculator } from "./Day1";
import { createZoneMonitor } from "./Day2";
import { taskManagement } from "./Day3";
import { eComAnalysis } from "./Day4";

// Day 1
// const prices = [90, 300, 270, 40];
// const discountPercentage = 15;
// discountCalculator(prices, discountPercentage);

//Day2
// const current = createZoneMonitor({
//   zone: "Zone A",
//   minThreshold: 18,
//   maxThreshold: 24,
// });
// console.log(current.addReading(21));
// console.log(current.addReading(25));
// console.log(current.addReading(20));
// console.log(current.addReading(19));
// console.log(current.addReading(20));
// console.log(current.getStatus());
// console.log(current.getZoneInfo());
// console.log(
//   current.checkThresholds()
//     ? "min and max is normal"
//     : "min and max are abnormal"
// );

// //Day3
// // Sample test cases
// const taskManager = taskManagement();

// // Test adding urgent and regular tasks
// const urgentTask = {
//   id: 1,
//   description: "Critical bug fix 1",
//   estimatedHours: 4,
// };
// const urgentTask2 = {
//   id: 2,
//   description: "Critical bug fix 2",
//   estimatedHours: 5,
// };
// const urgentTask3 = {
//   id: 3,
//   description: "Critical bug fix 3",
//   estimatedHours: 3,
// };

// const regularTask = {
//   id: 4,
//   description: "Update documentation",
//   estimatedHours: 2,
// };

// console.log("Adding urgent task...");
// taskManager.addUrgentTask(urgentTask);
// taskManager.addUrgentTask(urgentTask2);
// taskManager.addUrgentTask(urgentTask3);

// console.log("Adding regular task...");
// taskManager.addRegularTask(regularTask);

// // Test completing and canceling tasks
// console.log("Completing first task...");
// const completedTask = taskManager.completeTask();
// console.log("Completed task:", completedTask);

// console.log("Canceling last task...");
// const canceledTask = taskManager.cancelTask();
// console.log("Canceled task:", canceledTask);

// // Test queue reversal
// console.log("Reversing task queue...");
// const reverseQueue = taskManager.reverseTaskQueue();
// console.log("reverseQueue:", reverseQueue);

// // Test workload calculation
// console.log("Total estimated hours:", taskManager.calculateTotalHours());

// Day 4

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    category: "Electronics",
    rating: 4.5,
    stock: 45,
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 59.99,
    category: "Sports",
    rating: 4.8,
    stock: 30,
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    rating: 4.6,
    stock: 15,
  },
  {
    id: 4,
    name: "Yoga Mat",
    price: 29.99,
    category: "Sports",
    rating: 4.3,
    stock: 0,
  },
  {
    id: 5,
    name: "Laptop",
    price: 899.99,
    category: "Electronics",
    rating: 4.7,
    stock: 10,
  },
];

const product = eComAnalysis(products);

// console.log(product.filterProducts());
// console.log(product.getAvgRatings());
console.log(product.getHighestRatings());
// console.log(product.getTotalValue());
// console.log(product.getSummary());
