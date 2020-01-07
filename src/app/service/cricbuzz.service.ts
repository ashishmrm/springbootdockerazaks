import {Injectable} from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpParams,
} from '@angular/common/http';
import {CricBuzzResp} from '../cricbuzzresp.model'

@Injectable()
export class CricBuzzService {
    constructor(private httpClient: HttpClient) {
    }

    public getCurrentScore() {
    return this.httpClient.get<CricBuzzResp>('http://10.112.106.199:8080/estimate?keyword=raja');
    //return this.httpClient.get<CricBuzzResp>('http://mapps.cricbuzz.com/cbzios/match/livematches');
  }
}