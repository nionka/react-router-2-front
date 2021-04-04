/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

function useFetch(url, options) {
    const [state, setState] = useState({
        data: null,
        error: null
    });

    useEffect(() => {
        if (!url) return null

        const fetchData = async () => {

            try {
                const response = await fetch(url, options);
                const data = await response.json();

                setState({ data })
            } catch (error) {
                setState({ error })

            }
            
        }

        fetchData()
    }, [url])

    return state
}

export default useFetch