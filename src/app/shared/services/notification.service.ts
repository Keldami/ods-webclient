/*
Copyright (c) 2018 Friedrich-Alexander University Erlangen-Nürnberg (FAU)
SPDX-License-Identifier: AGPL-3.0-only
*/
import { Injectable } from '@angular/core';
import {BasicRestService} from './basic-rest.service';
import {Observable} from 'rxjs';
import {NotificationClient} from '../model/notification-client';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  odsBaseUrl = 'http://localhost:8080/ods/api/v1';

  constructor(private service: BasicRestService) { }

  getAllClients(sourceId: string): Observable<NotificationClient[]> {
    return this.service.get(this.odsBaseUrl + '/' + sourceId + '/notifications');
  }
}
