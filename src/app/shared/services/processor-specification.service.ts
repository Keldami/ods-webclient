import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ProcessorSpecification} from '../model/processorSpecification';
import {BasicRestService} from './basic-rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessorSpecificationService {

  odsBaseUrl = 'http://localhost:8080/ods/api/v1';

  constructor(private service: BasicRestService) { }

  getAllProcessorSpecifications(): Observable<ProcessorSpecification[]> {
    return this.service.get(this.odsBaseUrl + '/filterTypes');
  }
}
