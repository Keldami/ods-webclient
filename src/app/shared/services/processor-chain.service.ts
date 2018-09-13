import { Injectable } from '@angular/core';
import {BasicRestService} from './basic-rest.service';
import {Observable} from 'rxjs';
import {ProcessorChain} from '../model/processorChain';
import {ProcessorSpecification} from '../model/processorSpecification';

@Injectable({
  providedIn: 'root'
})
export class ProcessorChainService {
  odsBaseUrl = 'http://localhost:8080/ods/api/v1';

  constructor(private service: BasicRestService) { }

  getAllProcessorChains(sourceId: string): Observable<ProcessorChain[]> {
    return this.service.get(this.odsBaseUrl + '/' + sourceId + '/filterChains');
  }
  getProcessorChain(sourceId: string, filterChainId: string): Observable<ProcessorChain> {
    return this.service.get(this.odsBaseUrl + '/' + sourceId + '/' + filterChainId);
  }
  addProcessorChain(sourceId: string, filterChainId: string) {
    return this.service.get(this.odsBaseUrl + '/' + sourceId + '/' + filterChainId);
  }
  deleteProcessorChain(sourceId: string, filterChainId: string) {
    return this.service.get(this.odsBaseUrl + '/' + sourceId + '/' + filterChainId);
  }
  getAllProcessorSpecifications(): Observable<ProcessorSpecification[]> {
    return this.service.get(this.odsBaseUrl + '/filterTypes');
  }
}