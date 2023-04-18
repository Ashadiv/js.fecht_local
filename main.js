/*Diferent way of reading data from a source*/

// promise chaining
function readfilePromise(){
        fetch('customers.json')
        .then(response =>{
            if(!response.ok) {
                throw new Error('Fetch error:' + response.status);
            }
            return response.json();
        })

        .then(customers=>{
            generateHTML(customers);
        })
        .catch(error=>{
            console.log('error:' + error);
        })

}

// Render HTML
function generateHTML(customers) {
    let html = '';
    for(let customer of customers) {
        html +=`
    <h3>${(customer.first_name)} ${(customer.last_name)}</h3>
    <p>${(customer.first_name)} works at ${(customer.companyName)}</p>
    `;

    
    }
    html+= '<hr>';
    let cutomerDiv = document.createElement('div');
    cutomerDiv.innerHTML = html;
    document.querySelector('body').append(cutomerDiv);
}
readfilePromise();
