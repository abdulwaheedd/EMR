namespace EMR.Configs {
    export namespace TblOutcomesMotherService {
        export const baseUrl = 'Configs/TblOutcomesMother';

        export declare function Create(request: Serenity.SaveRequest<TblOutcomesMotherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblOutcomesMotherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblOutcomesMotherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblOutcomesMotherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Configs/TblOutcomesMother/Create",
            Update = "Configs/TblOutcomesMother/Update",
            Delete = "Configs/TblOutcomesMother/Delete",
            Retrieve = "Configs/TblOutcomesMother/Retrieve",
            List = "Configs/TblOutcomesMother/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TblOutcomesMotherService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

