console.log("It's working");


const practice = () => {
    return new Promise((resolve, reject) => {
        $.get('https://data.nashville.gov/resource/hrf9-avdm.json') 
        .done((data) => {
            resolve(data); 
            console.log(data);
            stringBuilder(data);
        })
        .fail((error) => { 
            reject(error); 
        })
    });
}

practice();

const stringBuilder = (buildings) => {
    let domString = '';
    buildings.forEach((building) => {
        domString += `
        <div>
            <h1>${building.contact}</h1>
        
        </div>
        `
    })
    $("#api").append(domString);
};

//stringBuilder();
