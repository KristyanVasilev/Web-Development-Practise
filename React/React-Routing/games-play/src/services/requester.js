const request = async (method, accessToken, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }

    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken
        }
    }
    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

export const requestFactory = (accessToken) => {
    return {
        get: request.bind(null, 'GET', accessToken),
        post: request.bind(null, 'POST', accessToken),
        put: request.bind(null, 'PUT', accessToken),
        patch: request.bind(null, 'PATCH', accessToken),
        del: request.bind(null, 'DELETE', accessToken),
    }
}