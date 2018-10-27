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
        <div class="card d-inline-block m-4" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${building.contact}</li>
          <li class="list-group-item">${building.address}</li>
          <li class="list-group-item">${building.city}</li>
        </ul>
      </div>
        `
    })
    $("#api").append(domString);
};

