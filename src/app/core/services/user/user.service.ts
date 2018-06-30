import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user';
import { Profile } from '../../models/profile';

const API_URL = 'http://localhost:3000/api';

@Injectable()
export class UserService {
    constructor(private _http: HttpClient) { }

    getAll() {
        return this._http.get<User[]>(`${API_URL}/users`);
    }

    getById(id: number) {
        return this._http.get(`${API_URL}/users/` + id);
    }

    register(user: User) {
        return this._http.post(`${API_URL}/Account/Register`, user);
    }

    update(user: User) {
        return this._http.put(`${API_URL}/users/` + user.id, user);
    }

    delete(id: number) {
        return this._http.delete(`${API_URL}/users/` + id);
    }    

    public getProfile() {
        return [
          new Profile(1, 'USER'),
          new Profile(2, 'ADMIN'),
        ];
        // return this._http.get<Profile[]>(`${API_URL}/Account/Profile`);
      }    

}