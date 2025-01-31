import React from 'react';

import { toast } from 'react-toastify';

import { axiosInstance } from '@/configs/axiosInstance';
import { TOAST_MESSAGES } from '@/constants/toastMessages';

const useApi = () => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchData = React.useCallback(async (url: string, options = {}) => {
        setLoading(true);
        try {
            const response = await axiosInstance(url, options);

            setData(response.data);
            setLoading(false);

            return response.data;
        } catch (e) {
            setError(error);
            toast.error(TOAST_MESSAGES.ERROR.FETCH_DATA);
            setData(null);
            setLoading(false);

            return null;
        }
    }, []);

    return { data, loading, error, fetchData };
};

export default useApi;
