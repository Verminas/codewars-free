// https://www.codewars.com/kata/531489f2bb244a5b9f00077e/train/javascript

function undoRedo(object) {
  let lastOperations = [];
  let undoOperations = [];
  let wasUndoOperation = false;
  
  return {
    set: function(key, value) {
      lastOperations.push({ 
        operation: "set",
        key: key,
        valueBefore: object[key],
        valueAfter: value
      });
      object[key] = value;
      //undoOperations.length = 0;
      wasUndoOperation = false;
    },
    get: function(key) {
      return object[key];
    },
    del: function(key) {
      lastOperations.push({
        operation: "del",
        key: key,
        valueBefore: object[key]
      });
      delete object[key];
      //undoOperations.length = 0;
      wasUndoOperation = false;
    },
    undo: function() {
      if (lastOperations.length) {
        let lastOperation = lastOperations.pop();
        undoOperations.push(lastOperation);
        wasUndoOperation = true;
        
        if (lastOperation.operation === "set") {
          object[lastOperation.key] = lastOperation.valueBefore;
        } else if (lastOperation.operation === "del") {
          object[lastOperation.key] = lastOperation.valueBefore;
        }
      } else {
        throw new Error('There is nothing to undo');
      }
    },
    redo: function() {
      if (undoOperations.length) {
        let undoneOperation = undoOperations.pop();
        wasUndoOperation = false;
        
        if (undoneOperation.operation === "set") {
          object[undoneOperation.key] = undoneOperation.valueAfter;
        } else if (undoneOperation.operation === "del") {
          delete object[undoneOperation.key];
        }
      } else {
        throw new Error('There is nothing to redo');
      }
    }
  };
}
