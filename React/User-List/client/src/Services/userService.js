const baseUrl = 'http://localhost:3005/api/users'

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result.users;
}

export const getById = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    const result = await response.json();

    return result.user;
}

export const create = async (userData) => {
    const { country, city, street, streetNumber, ...data } = userData;
    data.address = {
        country,
        city,
        street,
        streetNumber
    }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();

    return result.user;
}

export const userEdit = async (userId, userData) => {
    const { country, city, street, streetNumber, ...data } = userData;
    data.address = {
        country,
        city,
        street,
        streetNumber
    }

    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();

    return result.user;
}

export const deleteUser = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`,{
        method: 'DELETE',
    });
    const result = await response.json();

    return result;
}