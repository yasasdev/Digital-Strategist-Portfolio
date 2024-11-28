document.addEventListener("DOMContentLoaded", function () {

    const counterElement = document.getElementById("custom-counter");
    if (!counterElement) {
        console.error("Counter element with ID 'custom-counter' not found.");
        return;
    }

    // Custom counter configuration
    const start = 0;
    const end = 37004515;
    const step = 200000; // Increment value
    const duration =100; // Total duration in milliseconds
    const totalSteps = Math.ceil(end / step); // Total number of increments
    const interval = Math.floor(duration / totalSteps); // Time between increments

    // Initialize the counter
    let current = start;
    counterElement.textContent = current.toLocaleString(); // Format the initial value

    // Start the custom counter
    const counterInterval = setInterval(() => {
        current += step;
        if (current >= end) {
            current = end; 
            clearInterval(counterInterval); // Stop the interval
        }
        counterElement.textContent = current.toLocaleString(); // Update the display
    }, interval);
});
