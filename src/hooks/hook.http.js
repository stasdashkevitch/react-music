import { useCallback } from "react";
import axios from "axios";

export const useHttp = () => {
    // const [process, setProcess] = useState('waiting');

    
    const request = useCallback(async (url, token) => {

        // setProcess('loading');

        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    type: 'artist'
                }
            });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(e) {
            // setProcess('error');
            throw e;
        }
    }, []);

    // const clearError = useCallback(() => {
        // setProcess('loading');
    // }, []);

    return {request, 
            // clearError, 
            // process, 
            // setProcess
        }
}