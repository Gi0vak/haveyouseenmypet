export const GetPets = async () => {
    try {
        const response = await fetch(
            `http://localhost:8000/api/pets`
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
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};
export const GetPet = async (id) => {
    try {
        const response = await fetch(
            `http://localhost:8000/api/pets/${id}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};
export const DeletePet = async (id) => {

    if (id) {
        try {
            const response = await fetch(
                `http://localhost:8000/api/pets/${id}`
                , {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify()
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


export const CreatePet = async (petDatas) => {
    try {
        const response = await fetch(`http://localhost:8000/api/pets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(petDatas),
        });
        const data = await response.json();
        console.log('createPet :', data);
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};

export const UpdatePet = async (newpet, id) => {
    console.log('newpet :', newpet, id);
    try {
        const response = await fetch(`http://localhost:8000/api/pets/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newpet),
        });

    } catch (error) {
        console.log('Error : ', error);
    }
}

