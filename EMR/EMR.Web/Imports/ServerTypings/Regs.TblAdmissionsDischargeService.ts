namespace EMR.Regs {
    export namespace TblAdmissionsDischargeService {
        export const baseUrl = 'Regs/TblAdmissionsDischarge';

        export declare function Create(request: Serenity.SaveRequest<TblAdmissionsDischargeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblAdmissionsDischargeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblAdmissionsDischargeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblAdmissionsDischargeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Regs/TblAdmissionsDischarge/Create",
            Update = "Regs/TblAdmissionsDischarge/Update",
            Delete = "Regs/TblAdmissionsDischarge/Delete",
            Retrieve = "Regs/TblAdmissionsDischarge/Retrieve",
            List = "Regs/TblAdmissionsDischarge/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TblAdmissionsDischargeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

