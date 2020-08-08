export const headers = async (token) => {
    try {
        const value = (token)? token: await AsyncStorage.getItem('token');
        if (value !== null) {
            console.log('// We have data!!', token)
            const authToken = `Bearer ${value}`;
            return {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": authToken
                }
            }
        }
    } catch (error) {
        // Error retrieving data
        console.log('(*******', error);
    }

}