// The locked box
function withBoxUnlocked(body) {
  box.unlock();
  try {
    body();
  }
  catch (e) {
    console.log("🚀 ~ file: withBoxUnlocked.js ~ line 8 ~ withBoxUnlocked ~ e", e)
    // do nothing
  } finally {
    box.lock();
  } 
}

// Bonus
function withBoxUnlocked(body) {
  var state = box.locked;
  box.unlock();
  try {
    body();
  } catch (e) {
    // do nothing
    console.log("🚀 ~ file: withBoxUnlocked.js ~ line 25 ~ withBoxUnlocked ~ e", e)
  } finally {
    if (state) {
      box.lock();
    }
  } 
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

withBoxUnlocked(function() {
  throw new Error("Pirates on the horizon! Abort!");
});
console.log(box.locked);
// → true