import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { CredenciaisDTO } from "../models/credenciais.dto";

@Injectable()
export class AuthService {

    constructor(public Http: HttpClient) {
    }

    authenticate(creds : CredenciaisDTO) {
        return this.Http.post(`${API_CONFIG.baseUrl}/login`, creds, {observe: 'response', responseType: 'text'});
    }
}