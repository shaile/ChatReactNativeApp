export const setToken = async (token) => {
    try {
     return await AsyncStorage.setItem(
        'token',
         token
      );
    } catch (error) {
     return error;
    }
  };