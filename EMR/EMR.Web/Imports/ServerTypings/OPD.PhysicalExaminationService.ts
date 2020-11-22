namespace EMR.OPD {
    export namespace PhysicalExaminationService {
        export const baseUrl = 'OPD/PhysicalExamination';

        export declare function Create(request: Serenity.SaveRequest<PhysicalExaminationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PhysicalExaminationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PhysicalExaminationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PhysicalExaminationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "OPD/PhysicalExamination/Create",
            Update = "OPD/PhysicalExamination/Update",
            Delete = "OPD/PhysicalExamination/Delete",
            Retrieve = "OPD/PhysicalExamination/Retrieve",
            List = "OPD/PhysicalExamination/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PhysicalExaminationService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

