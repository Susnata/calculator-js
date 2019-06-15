var MilkuLabs = (function(){
  function _calculate(){
    console.log("I'm calculating...");
  }

  function _add(){
    console.log("Adding...");
  }

  return {
    calculate : _calculate,
    add : _add
  }
})();