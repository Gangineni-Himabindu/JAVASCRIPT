function checkNumber(num) {
    if (num < 0) {
      throw new Error("Number must be non-negative.");
    }
    return num;
  }
  
  try {
    console.log(checkNumber(-5));
  } catch (e) {
    console.error("Caught an error:", e.message);
  }
  