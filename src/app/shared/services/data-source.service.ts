/*
Copyright (c) 2018 Friedrich-Alexander University Erlangen-Nürnberg (FAU)
SPDX-License-Identifier: AGPL-3.0-only
*/
import { Injectable } from '@angular/core';
import {BasicRestService} from './basic-rest.service';
import {DataSource} from '../model/dataSource';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSourceService {

  odsBaseUrl = 'http://localhost:8080/ods/api/v1/datasources';
  odsV2Url = 'http://localhost:8080/ods/api/v2/datasources';
  // private datasources: DataSource[] = [];
  private datasourceById: DataSource;
  private datasourceSchemaById: DataSource;

  constructor(private service: BasicRestService) { }

  getDataSource(): Observable<DataSource[]> {
    return this.service.get(this.odsBaseUrl);
  }

  getDataSourceV2(): Observable<DataSource[]> {
    return this.service.get(this.odsV2Url);
  }

  getDataSourceById(sourceId: String): DataSource {
    this.service.get(this.odsBaseUrl + '/' + sourceId)
      .subscribe((data: DataSource) => this.datasourceById = data);
    return this.datasourceById;
  }

  getDataSourceSchemaById(sourceId: String): DataSource {
    this.service.get(this.odsBaseUrl + '/' + sourceId + '/schema')
      .subscribe((data: DataSource) => this.datasourceSchemaById = data);
    return this.datasourceSchemaById;
  }

  addDataSource(sourceId: String, body: any) {
    return this.service.put(this.odsBaseUrl + '/' + sourceId, body);
  }

  deleteDataSource(sourceId: String) {
    return this.service.delete(this.odsBaseUrl + '/' + sourceId);
  }

  getDataSourceFromInput(
    id: string,
    domainIdKey: string,
    schema: string[],
    metaData: {
    name: string,
    title: String,
    author: String,
    authorEmail: String,
    notes: String,
    url: String,
    termsOfUse: String }
  ): DataSource {
    const source = new DataSource();
    source.id = id;
    source.domainIdKey = domainIdKey;
    source.metaData = metaData;
    source.schema = schema;
    source.metaData = metaData;
    return source;
  }
}
