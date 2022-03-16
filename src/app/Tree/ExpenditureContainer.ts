import { Subscriber, Subscription } from "rxjs";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

export interface ResponseTemp {
    
    data: {
      operationCategoryType: string;
      activityType: string;
      outcomeClassification: string;
      parentOperationCategoryId: number;
      sort: number;
      isVisible: boolean;
      isFixed: boolean;
      accountCategoryType: string;
      modifyDate: number;
      createDate: number;
      actionStatus: string;
      operationCategoryId: number;
      title: string;
      externalId: string
    },
    isSuccess: boolean;
    errorMessage: string;
    errorCode: string;
  
}


//expenditure = статья
@Injectable({
    providedIn: 'root'
})
export class ExpContainer {

    private http: HttpClient;
    private apiKey: string;
    

    constructor(http: HttpClient) {
        this.http = http;
        this.apiKey = "JNFbAviga-aQCY98g2Lz-3UPSkrujSirC9A9eAbLnAJR2MO7EGT5RalRHlpCZNPCL2wSFx324Xsz72VTA1dQg8xKeveh2tE6yNCUR3S1PKC8O7a3OyUf_xfQmjoN1WSM_Y3oExxCz596HJU_qTn8MyRNlq6Gn4ckchyJBSoLVh9ILnQ8PPzi90YTGt7cNSF9VdCMVqhL-CZFsz8nIURlxMoMtk8KZ8rQHw85VD7h3exC6cdeJwiCNCenChJ2uh_MA3J8-wysPKH1bZG9FdPbdSnZRgOoWXVooqgfWaRXQbQken1D_GhldC5AEOEn-VZ-3Bqe9Lbg4FF_rvTVzhg3BPvEW_Op57lDPdQBuV2AdQbf6A6gZmB6i23btcpUXO_raLesHWqVJuhHrBp8Kean2Bt6om_jTM82wW-s-jpBOlkGC-X081NFAwiyviFXCVVuqWkyOW68_dMlgW-dJRjJ3-kBhanu7MhsX5KKLFELJX29_2CtESnK3S69waRU3sB1oRcBzQ";
        
    }
    
    getExpenditure(): Observable<ResponseTemp[]> {
        let headers = new HttpHeaders()
            .set('X-ApiKey', `${this.apiKey}`)
            .set('Content-Type', 'application/json');

        return this.http.get<ResponseTemp[]>('https://api.planfact.io/api/v1/operationcategories?paging.limit=100', {headers});   
    }

}