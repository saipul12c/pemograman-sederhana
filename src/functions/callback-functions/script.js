function showCallbackExample() {
    function processUserInput(callback) {
        let userInput = "Hello, World!";
        callback(userInput);
    }

    processUserInput(function(input) {
        document.getElementById('code-example').textContent = `User Input: ${input}`;
    });
}
