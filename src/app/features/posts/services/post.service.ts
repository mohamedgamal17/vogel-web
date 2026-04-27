import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { ensureStringEndWith } from "../../../shared/utilities/string.utility";
import { PagingRequest } from "../../../core/requests/paging.request";
import { mapObjectToHttpParams } from "../../../shared/utilities/http-params.utility";
import { Paging } from "../../../core/interfaces/paging.interface";
import { Post, PostApi } from "../models/post.model";
import { PostRequest } from "../models/post-request.model";

@Injectable({
  providedIn :"root"
})
export class PostService {

  private apiUrl = ensureStringEndWith(environment.apiUrl, '/') + 'posts';

  constructor(private httpClient : HttpClient){
    
  }

  getAllPosts(req : PagingRequest){
      return this.httpClient.get<Paging<PostApi>>(this.apiUrl, {params : mapObjectToHttpParams(req)})
  }

  getPostById(id : string ){
    return this.httpClient.get<PostApi> (this.apiUrl + '/' + id);
  }

  createPost(req : PostRequest){
    return this.httpClient.post<PostApi>(this.apiUrl, req);
  }

  updatePost(id : string, req : PostRequest){
    return this.httpClient.put<PostApi>(this.apiUrl + '/' + id, req);
  }

}