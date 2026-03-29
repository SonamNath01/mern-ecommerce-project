const rawBackendUrl = import.meta.env.VITE_BACKEND_URL || '';

export const backendURL = rawBackendUrl.replace(/\/+$/, '');
export const currency = '$';