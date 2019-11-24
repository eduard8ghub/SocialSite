import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "e2dc0b4a-df16-40c8-af68-5377ef28647b"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, showUsersToPage = 10)  {
        return instance.get(`/users/?page=${currentPage}&count=${showUsersToPage}`)
            .then(respons => respons.data);
    },
    followUser(userId) {
        return instance.post(`/follow/${userId}`, {})
            .then(response => response.data)
    },
    unFollowUser(userId) {
        return instance.delete(`/follow/${userId}`)
            .then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(userId)  {
        return instance.get(`/profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId)  {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data);
    },
    upDateStatus(status)  {
        return instance.put(`/profile/status`, {status: status});
    }
};

export const authAPI = {
    setAuth() {
        return instance.get('/auth/me', {
            withCredentials: true
        })
            .then(response =>  response.data);
    }
};

