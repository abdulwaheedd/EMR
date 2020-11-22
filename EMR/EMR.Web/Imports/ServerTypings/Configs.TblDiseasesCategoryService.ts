namespace EMR.Configs {
    export namespace TblDiseasesCategoryService {
        export const baseUrl = 'Configs/TblDiseasesCategory';

        export declare function Create(request: Serenity.SaveRequest<TblDiseasesCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblDiseasesCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblDiseasesCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblDiseasesCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Configs/TblDiseasesCategory/Create",
            Update = "Configs/TblDiseasesCategory/Update",
            Delete = "Configs/TblDiseasesCategory/Delete",
            Retrieve = "Configs/TblDiseasesCategory/Retrieve",
            List = "Configs/TblDiseasesCategory/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TblDiseasesCategoryService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

