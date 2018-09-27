/*
Copyright (c) 2018 Friedrich-Alexander University Erlangen-Nürnberg (FAU)
SPDX-License-Identifier: AGPL-3.0-only
*/
import { Injectable } from '@angular/core';
import {BasicRestService} from './basic-rest.service';
import {Observable} from 'rxjs';
import {Plugin} from '../model/plugin';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  odsBaseUrl = 'http://localhost:8080/ods/api/v1';

  constructor(private service: BasicRestService) { }

  getAllPlugins(sourceId: string): Observable<Plugin[]> {
    return this.service.get(this.odsBaseUrl + '/datasources/' + sourceId + '/plugins');
  }
}
