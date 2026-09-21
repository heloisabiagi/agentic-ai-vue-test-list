// function to calculate tax based on income in the Netherlands
function calculateTax(income) {
    let tax = 0;

    if (income <= 20000) {
        tax = income * 0.1; // 10% tax for income up to €20,000
    } else if (income <= 40000) {
        tax = (20000 * 0.1) + ((income - 20000) * 0.2); // 20% tax for income between €20,001 and €40,000
    } else {
        tax = (20000 * 0.1) + (20000 * 0.2) + ((income - 40000) * 0.3); // 30% tax for income above €40,000
    }

    return tax;
}       

// function to fetch data from an API and log the response
async function fetchData(url) {
    try {
        const response = await fetch(url);      
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
// give me an example usage of fetchData function