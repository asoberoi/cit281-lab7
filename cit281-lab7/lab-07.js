class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  function throwGenericError() {
    throw new Error("Generic error");
  }
  
  function throwCustomError() {
    throw new CustomError("Custom error");
  }
  
  // try..catch..finally block for generic error
  try {
    console.log("Before throwing generic error");
    throwGenericError();
    console.log("After throwing generic error"); // This line will not be executed
  } catch (error) {
    console.log("Caught error:", error);
  } finally {
    console.log("Finally block executed");
  }
  
  // try..catch..finally block for custom error
  try {
    console.log("Before throwing custom error");
    throwCustomError();
    console.log("After throwing custom error"); // This line will not be executed
  } catch (error) {
    console.log("Caught error:", error);
  } finally {
    console.log("Finally block executed");
  }
  