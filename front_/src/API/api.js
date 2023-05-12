export const GetAnnounces = async () => {
    try {
        const response = await fetch(
            `http://localhost:8000/api/announces`
        );

        if (!response.ok) { // Vérifie si la réponse n' est OK (statut HTTP 200-299)
            throw new Error('Network response was not ok');
        }
        if (response.ok) { // Vérifie si la réponse est OK (statut HTTP 200-299)
            console.log('Network response was ok');
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) { // Vérifie si la réponse est au format JSON
            throw new TypeError('Response was not JSON');
        }
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};

export const GetAnnounce = async (id) => {
    try {

        const response = await fetch(
            `http://localhost:8000/api/announces/${id}`
        );

        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Erreur : ', error);
    }
};

export const DeleteAnnounce = async (id) => {
    if (id) {
        try {
            const response = await fetch(
                `http://localhost:8000/api/announces/${id}`
                , {
                    method: 'DELETE',
                });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log('Error : ', error);
        }
    }
}
export const GetSearch = async (build) => {
    console.log('build :', build);
    try {
        const response = await fetch(`http://localhost:8000/api/search?${build}`);
        const data = await response.json();
        console.log('getSearchData :', data);
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};
export const CreateAnimal = async (animalDatas) => {
    try {
        const response = await fetch(`http://localhost:8000/api/animals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(animalDatas),
        });
        const data = await response.json();
        console.log('createAnimal :', data);
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};
export const CreateAnnounce = async (datasAnnounce) => {
    try {
        const response = await fetch(`http://localhost:8000/api/announces`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datasAnnounce),
        });
        const data = await response.json();
        console.log('datasAnnounce :', datasAnnounce);
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};
export const CreateUser = async (usersDatas) => {
    try {
        const response = await fetch(`http://localhost:8000/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usersDatas),
        });
        const data = await response.json();
        console.log('createUsers :', data);
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};
export const CreateAdress = async (adressDatas) => {
    try {
        const response = await fetch(`http://localhost:8000/api/adresses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(adressDatas),
        });
        const data = await response.json();
        console.log('createAdress :', data);
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};
export const UpdateAnnounce = async (newannounce, id) => {
    console.log('newannounce :', newannounce, id);
    try {
        const response = await fetch(`http://localhost:8000/api/announces/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newannounce),
        });

    } catch (error) {
        console.log('Error : ', error);
    }
}

