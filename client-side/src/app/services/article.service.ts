import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from '../interfaces/articles';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { environment } from 'src/environments/environment';


const URL = environment.production ? '' : 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getHeroes(subRedditName: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${URL}/articles/${subRedditName}`).pipe(catchError(() => {
      Swal.fire({title: 'Sorry... could not retrieve data for the given subreddit name', icon: 'warning'});
      return of([]);
    }));
  }
}

