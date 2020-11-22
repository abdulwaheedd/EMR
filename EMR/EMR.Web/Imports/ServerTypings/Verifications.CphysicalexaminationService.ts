namespace EMR.Verifications {
    export namespace CphysicalexaminationService {
        export const baseUrl = 'Verifications/Cphysicalexamination';

        export declare function Create(request: Serenity.SaveRequest<CphysicalexaminationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CphysicalexaminationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CphysicalexaminationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CphysicalexaminationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Verifications/Cphysicalexamination/Create",
            Update = "Verifications/Cphysicalexamination/Update",
            Delete = "Verifications/Cphysicalexamination/Delete",
            Retrieve = "Verifications/Cphysicalexamination/Retrieve",
            List = "Verifications/Cphysicalexamination/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CphysicalexaminationService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

