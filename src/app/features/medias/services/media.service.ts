import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { PagingRequest } from "../../../core/requests/paging.request";
import { Paging } from "../../../core/interfaces/paging.interface";
import { ensureStringEndWith } from "../../../shared/utilities/string.utility";
import { mapObjectToHttpParams } from "../../../shared/utilities/http-params.utility";
import { Media } from "../interfaces/media.interface";
import { MediaType } from "../enums/media-type.enum";

@Injectable({
  providedIn: "root",
})
export class MediaService {
  private apiUrl = ensureStringEndWith(environment.apiUrl, "/") + "medias";

  constructor(private httpClient: HttpClient) {}

  listMedia(req: PagingRequest) {
    return this.httpClient.get<Paging<Media>>(this.apiUrl, {
      params: mapObjectToHttpParams(req),
    });
  }

  getMediaById(mediaId: string) {
    return this.httpClient.get<Media>(`${this.apiUrl}/${mediaId}`);
  }

  createMedia(file: File, mediaType?: MediaType) {
    const form = new FormData();
    form.append("File", file, file.name);
    if (mediaType !== undefined) {
      form.append("MediaType", String(mediaType));
    }
    return this.httpClient.post<Media>(this.apiUrl, form);
  }

  removeMedia(id: string) {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
