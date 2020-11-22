namespace EMR.Medadmins {
    export namespace VisitsmedicineService {
        export const baseUrl = 'Medadmins/Visitsmedicine';

        export declare function Create(request: Serenity.SaveRequest<VisitsmedicineRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VisitsmedicineRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VisitsmedicineRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VisitsmedicineRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Medadmins/Visitsmedicine/Create",
            Update = "Medadmins/Visitsmedicine/Update",
            Delete = "Medadmins/Visitsmedicine/Delete",
            Retrieve = "Medadmins/Visitsmedicine/Retrieve",
            List = "Medadmins/Visitsmedicine/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VisitsmedicineService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

