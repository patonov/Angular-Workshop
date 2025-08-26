import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./types/post";
import { Theme } from "./types/theme";
import { environment } from "./environments/environment";


@Injectable({
    providedIn: 'root'
})
export class ApiService{
    constructor(private http: HttpClient){}
    
    getPosts(limit?: number){
        const { apiUrl } = environment;
        
        let url = `${apiUrl}/posts`;
        if (limit){
            url += `?limit=${limit}`;
        }

        return this.http.get<Post[]>(url);
    }

    getThemes(){
        const { apiUrl } = environment;
        return this.http.get<Theme[]>(`${apiUrl}/themes`);
    }
}