import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3004/users/',
});

export const usersAPI = {
    getUsers(currentPage = 1, showUsersToPage = 3)  {
        return instance.get(`?_page=${currentPage}&_limit=${showUsersToPage}`)
            .then(respons => respons.data);
    }
};

