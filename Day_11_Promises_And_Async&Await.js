// Promises and Async/Await

//Task01: Create a promise that resolves with a message after a 2-sec timeout and log the message to the console.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is the resolved message after 2 seconds");
  }, 2000);
});

myPromise.then((message) => {
  console.log(message);
});

//Task02: Create a promise that rejects with an error message after a 2-sec timeout and handle the error using .catch().

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This is the rejected message after 2 seconds");
  }, 2000);
});

myPromise2.catch((message) => {
  console.log(message);
});

//Task03: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function fetchData(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

//start the sequence of promises
fetchData("Fetching user data...", 1000)
  .then((message) => {
    console.log(message);
    return fetchData("Fetching orders...", 2000);
  })
  .then((message) => {
    console.log(message);
    return fetchData("Fetching products...", 1500);
  })
  .then((message) => {
    console.log(message);
    return fetchData("Fetching reviews...", 1000);
  })
  .then((message) => {
    console.log(message);
    console.log("All data fetched successfully!");
  })
  .catch((err) => {
    console.log("Error", err);
  });

//Task04: Write an async function that waits for a promise to resolve and then logs the resolved values.

function getData(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Async function to await for the promise to resolve nd then log the values.

async function logData() {
  try {
    const userData = await getData("User Data fetched", 1000);
    console.log(userData);

    const ordersData = await getData("Orders data fetched", 2000);
    console.log(ordersData);

    const productsData = await getData("Products data fetched", 1500);
    console.log(productsData);

    const reviewsData = await getData("Reviews data fetched", 1000);
    console.log(reviewsData);

    console.log("All data fetched successfully!");
  } catch (error) {
    console.log("Error", error);
  }
}

logData();

//Task05: Write an async function that handles a rejected promise using try-catch and logs the error message.

function fetchRejectData(message, delay, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`Error: ${message}`);
      } else {
        resolve(message);
      }
    }, delay);
  });
}

// Async function to wait for the promise to resolve or reject and handle the error
async function fetchDataWithHandling() {
  try {
    const userData = await fetchRejectData("User Data fetched", 1000, true);
    console.log(userData);

    const ordersData = await fetchRejectData(
      "Orders data fetch failed",
      2000,
      true
    );
    console.log(ordersData);

    const productsData = await fetchRejectData("Products data fetched", 1500);
    console.log(productsData);

    console.log("All data fetched successfully!");
  } catch (err) {
    console.log("Error", err);
  }
}

fetchDataWithHandling();

//Task06: Use the fetch API to get data from a public API and log the response data to the console using promises.

function fetchData2(limit) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok" + res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      const limitData = data.slice(0, limit);

      console.log("limitData1", limitData);
    })
    .catch((err) => {
      console.log("Fetch error", err);
    });
}

fetchData2(5);

//Task07: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function fetchData3(limit) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }

    const data = await response.json();

    const limitData = data.slice(0, limit);

    console.log("limitData2", limitData);
  } catch (err) {
    console.log("Fetch error", err);
  }
}

fetchData3(5);

//Task08: Use Promise.all to wait for multiple promises to resolve and then log all their values.

function fetchData4(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

const promise1 = fetchData4("User data fetched", 1000);
const promise2 = fetchData4("Orders data fetched", 2000);
const promise3 = fetchData4("Products data fetched", 500);
const promise4 = fetchData4("Reviews data fetched", 1000);

Promise.all([promise1, promise2, promise3, promise4])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log("Error", error);
  });

//Task09: Use promise.race to log the values of the first promise that resolves among multiple promises.

Promise.race([promise1, promise2, promise3, promise4])
  .then((values) => {
    console.log("First resolved value: ", values);
  })
  .catch((error) => {
    console.log("Error", error);
  });
