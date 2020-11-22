/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace EMR.Administration {
}
declare namespace EMR.Administration {
    interface DashboardUrlForm {
        Url: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
    }
    class DashboardUrlForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Administration {
    interface DashboardUrlRow {
        Id?: number;
        Url?: string;
        Active?: boolean;
    }
    namespace DashboardUrlRow {
        const idProperty = "Id";
        const nameProperty = "Url";
        const localTextPrefix = "Administration.DashboardUrl";
        const enum Fields {
            Id = "Id",
            Url = "Url",
            Active = "Active"
        }
    }
}
declare namespace EMR.Administration {
    namespace DashboardUrlService {
        const baseUrl = "Administration/DashboardUrl";
        function Create(request: Serenity.SaveRequest<DashboardUrlRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DashboardUrlRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DashboardUrlRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DashboardUrlRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/DashboardUrl/Create",
            Update = "Administration/DashboardUrl/Update",
            Delete = "Administration/DashboardUrl/Delete",
            Retrieve = "Administration/DashboardUrl/Retrieve",
            List = "Administration/DashboardUrl/List"
        }
    }
}
declare namespace EMR.Administration {
}
declare namespace EMR.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace EMR.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace EMR.Administration {
}
declare namespace EMR.Administration {
    interface ModulesForm {
        ModuleName: Serenity.StringEditor;
        ModuleDescription: Serenity.StringEditor;
    }
    class ModulesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Administration {
    interface ModulesRow {
        ModuleId?: number;
        ModuleName?: string;
        ModuleDescription?: string;
    }
    namespace ModulesRow {
        const idProperty = "ModuleId";
        const nameProperty = "ModuleName";
        const localTextPrefix = "Administration.Modules";
        const lookupKey = "Administration.Modules";
        function getLookup(): Q.Lookup<ModulesRow>;
        const enum Fields {
            ModuleId = "ModuleId",
            ModuleName = "ModuleName",
            ModuleDescription = "ModuleDescription"
        }
    }
}
declare namespace EMR.Administration {
    namespace ModulesService {
        const baseUrl = "Administration/Modules";
        function Create(request: Serenity.SaveRequest<ModulesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ModulesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ModulesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ModulesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Modules/Create",
            Update = "Administration/Modules/Update",
            Delete = "Administration/Modules/Delete",
            Retrieve = "Administration/Modules/Retrieve",
            List = "Administration/Modules/List"
        }
    }
}
declare namespace EMR.Administration {
}
declare namespace EMR.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace EMR.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace EMR.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace EMR.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace EMR.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace EMR.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        TenantId?: number;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            TenantId = "TenantId"
        }
    }
}
declare namespace EMR.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace EMR.Administration {
}
declare namespace EMR.Administration {
    interface TenantForm {
        TenantName: Serenity.StringEditor;
        FacilityId: Serenity.LookupEditor;
    }
    class TenantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Administration {
    interface TenantRow {
        TenantId?: number;
        FacilityId?: number;
        TenantName?: string;
        FacilityName?: string;
    }
    namespace TenantRow {
        const idProperty = "TenantId";
        const nameProperty = "TenantName";
        const localTextPrefix = "Administration.Tenant";
        const lookupKey = "Administration.Tenant";
        function getLookup(): Q.Lookup<TenantRow>;
        const enum Fields {
            TenantId = "TenantId",
            FacilityId = "FacilityId",
            TenantName = "TenantName",
            FacilityName = "FacilityName"
        }
    }
}
declare namespace EMR.Administration {
    namespace TenantService {
        const baseUrl = "Administration/Tenant";
        function Create(request: Serenity.SaveRequest<TenantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TenantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TenantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TenantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Tenant/Create",
            Update = "Administration/Tenant/Update",
            Delete = "Administration/Tenant/Delete",
            Retrieve = "Administration/Tenant/Retrieve",
            List = "Administration/Tenant/List"
        }
    }
}
declare namespace EMR.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace EMR.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace EMR.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace EMR.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace EMR.Administration {
}
declare namespace EMR.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        TenantId: Serenity.LookupEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace EMR.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace EMR.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace EMR.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace EMR.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace EMR.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace EMR.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace EMR.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace EMR.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace EMR.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        TenantId?: number;
        TenantName?: string;
        FacilityID?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            TenantId = "TenantId",
            TenantName = "TenantName",
            FacilityID = "FacilityID",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace EMR.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace EMR.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace EMR.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace EMR.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace EMR.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace EMR.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface BloodStatusForm {
        Bloodstatus: Serenity.StringEditor;
    }
    class BloodStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface BloodStatusRow {
        BId?: number;
        Bloodstatus?: string;
    }
    namespace BloodStatusRow {
        const idProperty = "BId";
        const nameProperty = "Bloodstatus";
        const localTextPrefix = "Configs.BloodStatus";
        const lookupKey = "Configs.LkpBloodStatus";
        function getLookup(): Q.Lookup<BloodStatusRow>;
        const enum Fields {
            BId = "BId",
            Bloodstatus = "Bloodstatus"
        }
    }
}
declare namespace EMR.Configs {
    namespace BloodStatusService {
        const baseUrl = "Configs/BloodStatus";
        function Create(request: Serenity.SaveRequest<BloodStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BloodStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BloodStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BloodStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/BloodStatus/Create",
            Update = "Configs/BloodStatus/Update",
            Delete = "Configs/BloodStatus/Delete",
            Retrieve = "Configs/BloodStatus/Retrieve",
            List = "Configs/BloodStatus/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface CaretypesForm {
        Caretype: Serenity.StringEditor;
    }
    class CaretypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface CaretypesRow {
        Id?: number;
        Caretype?: string;
    }
    namespace CaretypesRow {
        const idProperty = "Id";
        const nameProperty = "Caretype";
        const localTextPrefix = "Configs.Caretypes";
        const lookupKey = "Configs.lkpCaretypes";
        function getLookup(): Q.Lookup<CaretypesRow>;
        const enum Fields {
            Id = "Id",
            Caretype = "Caretype"
        }
    }
}
declare namespace EMR.Configs {
    namespace CaretypesService {
        const baseUrl = "Configs/Caretypes";
        function Create(request: Serenity.SaveRequest<CaretypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CaretypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CaretypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CaretypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/Caretypes/Create",
            Update = "Configs/Caretypes/Update",
            Delete = "Configs/Caretypes/Delete",
            Retrieve = "Configs/Caretypes/Retrieve",
            List = "Configs/Caretypes/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface CountriesForm {
        Country: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        Population: Serenity.DecimalEditor;
        Area: Serenity.DecimalEditor;
        PopDensity: Serenity.DecimalEditor;
        CoastlineRatio: Serenity.DecimalEditor;
        NetMigration: Serenity.DecimalEditor;
        InfantMortality1000: Serenity.DecimalEditor;
        Gdp: Serenity.DecimalEditor;
        LiteracyPerc: Serenity.DecimalEditor;
        Phones: Serenity.DecimalEditor;
        Arable: Serenity.DecimalEditor;
        Crops: Serenity.DecimalEditor;
        Other: Serenity.DecimalEditor;
        Climate: Serenity.DecimalEditor;
        Birthrate: Serenity.DecimalEditor;
        Deathrate: Serenity.DecimalEditor;
        Agriculture: Serenity.DecimalEditor;
        Industry: Serenity.DecimalEditor;
        Service: Serenity.DecimalEditor;
    }
    class CountriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface CountriesRow {
        CountryId?: number;
        Country?: string;
        Region?: string;
        Population?: number;
        Area?: number;
        PopDensity?: number;
        CoastlineRatio?: number;
        NetMigration?: number;
        InfantMortality1000?: number;
        Gdp?: number;
        LiteracyPerc?: number;
        Phones?: number;
        Arable?: number;
        Crops?: number;
        Other?: number;
        Climate?: number;
        Birthrate?: number;
        Deathrate?: number;
        Agriculture?: number;
        Industry?: number;
        Service?: number;
    }
    namespace CountriesRow {
        const idProperty = "CountryId";
        const nameProperty = "Country";
        const localTextPrefix = "Configs.Countries";
        const lookupKey = "Configs.Countries";
        function getLookup(): Q.Lookup<CountriesRow>;
        const enum Fields {
            CountryId = "CountryId",
            Country = "Country",
            Region = "Region",
            Population = "Population",
            Area = "Area",
            PopDensity = "PopDensity",
            CoastlineRatio = "CoastlineRatio",
            NetMigration = "NetMigration",
            InfantMortality1000 = "InfantMortality1000",
            Gdp = "Gdp",
            LiteracyPerc = "LiteracyPerc",
            Phones = "Phones",
            Arable = "Arable",
            Crops = "Crops",
            Other = "Other",
            Climate = "Climate",
            Birthrate = "Birthrate",
            Deathrate = "Deathrate",
            Agriculture = "Agriculture",
            Industry = "Industry",
            Service = "Service"
        }
    }
}
declare namespace EMR.Configs {
    namespace CountriesService {
        const baseUrl = "Configs/Countries";
        function Create(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/Countries/Create",
            Update = "Configs/Countries/Update",
            Delete = "Configs/Countries/Delete",
            Retrieve = "Configs/Countries/Retrieve",
            List = "Configs/Countries/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface CyclesForm {
        Cyclename: Serenity.StringEditor;
        Cycledescription: Serenity.StringEditor;
    }
    class CyclesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface CyclesRow {
        CycleId?: number;
        Cyclename?: string;
        Cycledescription?: string;
    }
    namespace CyclesRow {
        const idProperty = "CycleId";
        const nameProperty = "Cyclename";
        const localTextPrefix = "Configs.Cycles";
        const lookupKey = "Configs.lkpCycles";
        function getLookup(): Q.Lookup<CyclesRow>;
        const enum Fields {
            CycleId = "CycleId",
            Cyclename = "Cyclename",
            Cycledescription = "Cycledescription"
        }
    }
}
declare namespace EMR.Configs {
    namespace CyclesService {
        const baseUrl = "Configs/Cycles";
        function Create(request: Serenity.SaveRequest<CyclesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CyclesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CyclesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CyclesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/Cycles/Create",
            Update = "Configs/Cycles/Update",
            Delete = "Configs/Cycles/Delete",
            Retrieve = "Configs/Cycles/Retrieve",
            List = "Configs/Cycles/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface EthnicityForm {
        EthnicityName: Serenity.StringEditor;
    }
    class EthnicityForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface EthnicityRow {
        EthnicityId?: number;
        EthnicityName?: string;
    }
    namespace EthnicityRow {
        const idProperty = "EthnicityId";
        const nameProperty = "EthnicityName";
        const localTextPrefix = "Configs.Ethnicity";
        const lookupKey = "Configs.LkpEthnicity";
        function getLookup(): Q.Lookup<EthnicityRow>;
        const enum Fields {
            EthnicityId = "EthnicityId",
            EthnicityName = "EthnicityName"
        }
    }
}
declare namespace EMR.Configs {
    namespace EthnicityService {
        const baseUrl = "Configs/Ethnicity";
        function Create(request: Serenity.SaveRequest<EthnicityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EthnicityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EthnicityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EthnicityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/Ethnicity/Create",
            Update = "Configs/Ethnicity/Update",
            Delete = "Configs/Ethnicity/Delete",
            Retrieve = "Configs/Ethnicity/Retrieve",
            List = "Configs/Ethnicity/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpFormForm {
        FormName: Serenity.StringEditor;
    }
    class LkpFormForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpFormRow {
        FormId?: number;
        FormName?: string;
    }
    namespace LkpFormRow {
        const idProperty = "FormId";
        const nameProperty = "FormName";
        const localTextPrefix = "Configs.LkpForm";
        const lookupKey = "Configs.lkpForm";
        function getLookup(): Q.Lookup<LkpFormRow>;
        const enum Fields {
            FormId = "FormId",
            FormName = "FormName"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpFormService {
        const baseUrl = "Configs/LkpForm";
        function Create(request: Serenity.SaveRequest<LkpFormRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpFormRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpFormRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpFormRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpForm/Create",
            Update = "Configs/LkpForm/Update",
            Delete = "Configs/LkpForm/Delete",
            Retrieve = "Configs/LkpForm/Retrieve",
            List = "Configs/LkpForm/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpHistoryForm {
        HistoryName: Serenity.StringEditor;
    }
    class LkpHistoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpHistoryRow {
        HistoryId?: number;
        HistoryName?: string;
    }
    namespace LkpHistoryRow {
        const idProperty = "HistoryId";
        const nameProperty = "HistoryName";
        const localTextPrefix = "Configs.LkpHistory";
        const lookupKey = "Configs.lkpHistory";
        function getLookup(): Q.Lookup<LkpHistoryRow>;
        const enum Fields {
            HistoryId = "HistoryId",
            HistoryName = "HistoryName"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpHistoryService {
        const baseUrl = "Configs/LkpHistory";
        function Create(request: Serenity.SaveRequest<LkpHistoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpHistoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpHistoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpHistoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpHistory/Create",
            Update = "Configs/LkpHistory/Update",
            Delete = "Configs/LkpHistory/Delete",
            Retrieve = "Configs/LkpHistory/Retrieve",
            List = "Configs/LkpHistory/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpImagingForm {
        ImagingName: Serenity.StringEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }
    class LkpImagingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpImagingRow {
        ImagingId?: number;
        ImagingName?: string;
        Note?: string;
    }
    namespace LkpImagingRow {
        const idProperty = "ImagingId";
        const nameProperty = "ImagingName";
        const localTextPrefix = "Configs.LkpImaging";
        const lookupKey = "Configs.LkpImaging";
        function getLookup(): Q.Lookup<LkpImagingRow>;
        const enum Fields {
            ImagingId = "ImagingId",
            ImagingName = "ImagingName",
            Note = "Note"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpImagingService {
        const baseUrl = "Configs/LkpImaging";
        function Create(request: Serenity.SaveRequest<LkpImagingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpImagingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpImagingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpImagingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpImaging/Create",
            Update = "Configs/LkpImaging/Update",
            Delete = "Configs/LkpImaging/Delete",
            Retrieve = "Configs/LkpImaging/Retrieve",
            List = "Configs/LkpImaging/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpLabTestForm {
        LabTestName: Serenity.StringEditor;
        SubTypeTestId: Serenity.LookupEditor;
        NormalRange: Serenity.StringEditor;
        TestPrice: Serenity.DecimalEditor;
        Unit: Serenity.StringEditor;
    }
    class LkpLabTestForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpLabTestRow {
        LabTestId?: number;
        LabTestName?: string;
        SubTypeTestId?: number;
        NormalRange?: string;
        TestPrice?: number;
        Unit?: string;
        TestTypeName?: string;
    }
    namespace LkpLabTestRow {
        const idProperty = "LabTestId";
        const nameProperty = "LabTestName";
        const localTextPrefix = "Configs.LkpLabTest";
        const lookupKey = "Configs.lkpLabTest";
        function getLookup(): Q.Lookup<LkpLabTestRow>;
        const enum Fields {
            LabTestId = "LabTestId",
            LabTestName = "LabTestName",
            SubTypeTestId = "SubTypeTestId",
            NormalRange = "NormalRange",
            TestPrice = "TestPrice",
            Unit = "Unit",
            TestTypeName = "TestTypeName"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpLabTestService {
        const baseUrl = "Configs/LkpLabTest";
        function Create(request: Serenity.SaveRequest<LkpLabTestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpLabTestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpLabTestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpLabTestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpLabTest/Create",
            Update = "Configs/LkpLabTest/Update",
            Delete = "Configs/LkpLabTest/Delete",
            Retrieve = "Configs/LkpLabTest/Retrieve",
            List = "Configs/LkpLabTest/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpLosstypesForm {
        Name: Serenity.StringEditor;
    }
    class LkpLosstypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpLosstypesRow {
        LosstypeId?: number;
        Name?: string;
    }
    namespace LkpLosstypesRow {
        const idProperty = "LosstypeId";
        const nameProperty = "Name";
        const localTextPrefix = "Configs.LkpLosstypes";
        const lookupKey = "Configs.lkpLosstypes";
        function getLookup(): Q.Lookup<LkpLosstypesRow>;
        const enum Fields {
            LosstypeId = "LosstypeId",
            Name = "Name"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpLosstypesService {
        const baseUrl = "Configs/LkpLosstypes";
        function Create(request: Serenity.SaveRequest<LkpLosstypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpLosstypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpLosstypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpLosstypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpLosstypes/Create",
            Update = "Configs/LkpLosstypes/Update",
            Delete = "Configs/LkpLosstypes/Delete",
            Retrieve = "Configs/LkpLosstypes/Retrieve",
            List = "Configs/LkpLosstypes/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpManufacturerForm {
        ManufacturerName: Serenity.StringEditor;
        ManufacturerType: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        Website: Serenity.URLEditor;
        Email: Serenity.StringEditor;
        CellPhoneNo: Serenity.StringEditor;
    }
    class LkpManufacturerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpManufacturerRow {
        ManufacturerId?: number;
        ManufacturerName?: string;
        ManufacturerType?: string;
        CountryId?: number;
        Website?: string;
        Email?: string;
        CellPhoneNo?: string;
    }
    namespace LkpManufacturerRow {
        const idProperty = "ManufacturerId";
        const nameProperty = "ManufacturerName";
        const localTextPrefix = "Configs.LkpManufacturer";
        const lookupKey = "Configs.lkpManufacturer";
        function getLookup(): Q.Lookup<LkpManufacturerRow>;
        const enum Fields {
            ManufacturerId = "ManufacturerId",
            ManufacturerName = "ManufacturerName",
            ManufacturerType = "ManufacturerType",
            CountryId = "CountryId",
            Website = "Website",
            Email = "Email",
            CellPhoneNo = "CellPhoneNo"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpManufacturerService {
        const baseUrl = "Configs/LkpManufacturer";
        function Create(request: Serenity.SaveRequest<LkpManufacturerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpManufacturerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpManufacturerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpManufacturerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpManufacturer/Create",
            Update = "Configs/LkpManufacturer/Update",
            Delete = "Configs/LkpManufacturer/Delete",
            Retrieve = "Configs/LkpManufacturer/Retrieve",
            List = "Configs/LkpManufacturer/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpPatientTypeForm {
        TypeNameEn: Serenity.StringEditor;
        TypeNameDari: Serenity.StringEditor;
        TypeNamePashto: Serenity.StringEditor;
    }
    class LkpPatientTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpPatientTypeRow {
        TypeId?: number;
        TypeNameEn?: string;
        TypeNameDari?: string;
        TypeNamePashto?: string;
    }
    namespace LkpPatientTypeRow {
        const idProperty = "TypeId";
        const nameProperty = "TypeNameEn";
        const localTextPrefix = "Configs.LkpPatientType";
        const lookupKey = "Configs.LkpPatientType";
        function getLookup(): Q.Lookup<LkpPatientTypeRow>;
        const enum Fields {
            TypeId = "TypeId",
            TypeNameEn = "TypeNameEn",
            TypeNameDari = "TypeNameDari",
            TypeNamePashto = "TypeNamePashto"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpPatientTypeService {
        const baseUrl = "Configs/LkpPatientType";
        function Create(request: Serenity.SaveRequest<LkpPatientTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpPatientTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpPatientTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpPatientTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpPatientType/Create",
            Update = "Configs/LkpPatientType/Update",
            Delete = "Configs/LkpPatientType/Delete",
            Retrieve = "Configs/LkpPatientType/Retrieve",
            List = "Configs/LkpPatientType/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpPhysExamGroupForm {
        GroupName: Serenity.StringEditor;
    }
    class LkpPhysExamGroupForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpPhysExamGroupRow {
        GroupId?: number;
        GroupName?: string;
    }
    namespace LkpPhysExamGroupRow {
        const idProperty = "GroupId";
        const nameProperty = "GroupName";
        const localTextPrefix = "Configs.LkpPhysExamGroup";
        const lookupKey = "Configs.LkpPhysExamGroup";
        function getLookup(): Q.Lookup<LkpPhysExamGroupRow>;
        const enum Fields {
            GroupId = "GroupId",
            GroupName = "GroupName"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpPhysExamGroupService {
        const baseUrl = "Configs/LkpPhysExamGroup";
        function Create(request: Serenity.SaveRequest<LkpPhysExamGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpPhysExamGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpPhysExamGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpPhysExamGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpPhysExamGroup/Create",
            Update = "Configs/LkpPhysExamGroup/Update",
            Delete = "Configs/LkpPhysExamGroup/Delete",
            Retrieve = "Configs/LkpPhysExamGroup/Retrieve",
            List = "Configs/LkpPhysExamGroup/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpPhysExamsForm {
        GroupId: Serenity.LookupEditor;
        PhysExamName: Serenity.StringEditor;
    }
    class LkpPhysExamsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpPhysExamsRow {
        PhysExamId?: number;
        PhysExamName?: string;
        GroupId?: number;
        GroupName?: string;
        GroupEamName?: string;
    }
    namespace LkpPhysExamsRow {
        const idProperty = "PhysExamId";
        const nameProperty = "GroupEamName";
        const localTextPrefix = "Configs.LkpPhysExams";
        const lookupKey = "Configs.lkpPhysExams";
        function getLookup(): Q.Lookup<LkpPhysExamsRow>;
        const enum Fields {
            PhysExamId = "PhysExamId",
            PhysExamName = "PhysExamName",
            GroupId = "GroupId",
            GroupName = "GroupName",
            GroupEamName = "GroupEamName"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpPhysExamsService {
        const baseUrl = "Configs/LkpPhysExams";
        function Create(request: Serenity.SaveRequest<LkpPhysExamsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpPhysExamsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpPhysExamsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpPhysExamsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpPhysExams/Create",
            Update = "Configs/LkpPhysExams/Update",
            Delete = "Configs/LkpPhysExams/Delete",
            Retrieve = "Configs/LkpPhysExams/Retrieve",
            List = "Configs/LkpPhysExams/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpRecommandsForm {
        RecommandName: Serenity.StringEditor;
    }
    class LkpRecommandsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpRecommandsRow {
        RecomId?: number;
        RecommandName?: string;
    }
    namespace LkpRecommandsRow {
        const idProperty = "RecomId";
        const nameProperty = "RecommandName";
        const localTextPrefix = "Configs.LkpRecommands";
        const lookupKey = "Configs.lkpRecommands";
        function getLookup(): Q.Lookup<LkpRecommandsRow>;
        const enum Fields {
            RecomId = "RecomId",
            RecommandName = "RecommandName"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpRecommandsService {
        const baseUrl = "Configs/LkpRecommands";
        function Create(request: Serenity.SaveRequest<LkpRecommandsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpRecommandsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpRecommandsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpRecommandsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpRecommands/Create",
            Update = "Configs/LkpRecommands/Update",
            Delete = "Configs/LkpRecommands/Delete",
            Retrieve = "Configs/LkpRecommands/Retrieve",
            List = "Configs/LkpRecommands/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpTestTypesForm {
        TestTypeName: Serenity.StringEditor;
    }
    class LkpTestTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpTestTypesRow {
        TestTypeId?: number;
        TestTypeName?: string;
    }
    namespace LkpTestTypesRow {
        const idProperty = "TestTypeId";
        const nameProperty = "TestTypeName";
        const localTextPrefix = "Configs.LkpTestTypes";
        const lookupKey = "Configs.LkpTestTypes";
        function getLookup(): Q.Lookup<LkpTestTypesRow>;
        const enum Fields {
            TestTypeId = "TestTypeId",
            TestTypeName = "TestTypeName"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpTestTypesService {
        const baseUrl = "Configs/LkpTestTypes";
        function Create(request: Serenity.SaveRequest<LkpTestTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpTestTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpTestTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpTestTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpTestTypes/Create",
            Update = "Configs/LkpTestTypes/Update",
            Delete = "Configs/LkpTestTypes/Delete",
            Retrieve = "Configs/LkpTestTypes/Retrieve",
            List = "Configs/LkpTestTypes/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpUnitForm {
        UnitName: Serenity.StringEditor;
    }
    class LkpUnitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpUnitRow {
        UnitId?: number;
        UnitName?: string;
    }
    namespace LkpUnitRow {
        const idProperty = "UnitId";
        const nameProperty = "UnitName";
        const localTextPrefix = "Configs.LkpUnit";
        const lookupKey = "Configs.lkpUnit";
        function getLookup(): Q.Lookup<LkpUnitRow>;
        const enum Fields {
            UnitId = "UnitId",
            UnitName = "UnitName"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpUnitService {
        const baseUrl = "Configs/LkpUnit";
        function Create(request: Serenity.SaveRequest<LkpUnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpUnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpUnit/Create",
            Update = "Configs/LkpUnit/Update",
            Delete = "Configs/LkpUnit/Delete",
            Retrieve = "Configs/LkpUnit/Retrieve",
            List = "Configs/LkpUnit/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface LkpVendorForm {
        VendorName: Serenity.StringEditor;
        VendorType: Serenity.StringEditor;
        VendorRegNo: Serenity.IntegerEditor;
        Email: Serenity.StringEditor;
        CellPhoneNo: Serenity.MaskedEditor;
    }
    class LkpVendorForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface LkpVendorRow {
        VendorId?: number;
        VendorName?: string;
        VendorType?: string;
        VendorRegNo?: number;
        Email?: string;
        CellPhoneNo?: string;
    }
    namespace LkpVendorRow {
        const idProperty = "VendorId";
        const nameProperty = "VendorName";
        const localTextPrefix = "Configs.LkpVendor";
        const lookupKey = "Configs.lkpVendor";
        function getLookup(): Q.Lookup<LkpVendorRow>;
        const enum Fields {
            VendorId = "VendorId",
            VendorName = "VendorName",
            VendorType = "VendorType",
            VendorRegNo = "VendorRegNo",
            Email = "Email",
            CellPhoneNo = "CellPhoneNo"
        }
    }
}
declare namespace EMR.Configs {
    namespace LkpVendorService {
        const baseUrl = "Configs/LkpVendor";
        function Create(request: Serenity.SaveRequest<LkpVendorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpVendorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpVendorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpVendorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/LkpVendor/Create",
            Update = "Configs/LkpVendor/Update",
            Delete = "Configs/LkpVendor/Delete",
            Retrieve = "Configs/LkpVendor/Retrieve",
            List = "Configs/LkpVendor/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface StagesForm {
        Stagename: Serenity.StringEditor;
    }
    class StagesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface StagesRow {
        StageId?: number;
        Stagename?: string;
    }
    namespace StagesRow {
        const idProperty = "StageId";
        const nameProperty = "Stagename";
        const localTextPrefix = "Configs.Stages";
        const lookupKey = "Configs.Stages";
        function getLookup(): Q.Lookup<StagesRow>;
        const enum Fields {
            StageId = "StageId",
            Stagename = "Stagename"
        }
    }
}
declare namespace EMR.Configs {
    namespace StagesService {
        const baseUrl = "Configs/Stages";
        function Create(request: Serenity.SaveRequest<StagesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StagesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StagesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StagesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/Stages/Create",
            Update = "Configs/Stages/Update",
            Delete = "Configs/Stages/Delete",
            Retrieve = "Configs/Stages/Retrieve",
            List = "Configs/Stages/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblAbortionTypeForm {
        AbortionTypeDari: Serenity.StringEditor;
        AbortionTypePashto: Serenity.StringEditor;
        AbortionTypeEn: Serenity.StringEditor;
    }
    class TblAbortionTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblAbortionTypeRow {
        AbortionId?: number;
        AbortionTypeDari?: string;
        AbortionTypePashto?: string;
        AbortionTypeEn?: string;
    }
    namespace TblAbortionTypeRow {
        const idProperty = "AbortionId";
        const nameProperty = "AbortionTypeDari";
        const localTextPrefix = "Configs.TblAbortionType";
        const lookupKey = "Configs.TblAbortionType";
        function getLookup(): Q.Lookup<TblAbortionTypeRow>;
        const enum Fields {
            AbortionId = "AbortionId",
            AbortionTypeDari = "AbortionTypeDari",
            AbortionTypePashto = "AbortionTypePashto",
            AbortionTypeEn = "AbortionTypeEn"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblAbortionTypeService {
        const baseUrl = "Configs/TblAbortionType";
        function Create(request: Serenity.SaveRequest<TblAbortionTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblAbortionTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblAbortionTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblAbortionTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblAbortionType/Create",
            Update = "Configs/TblAbortionType/Update",
            Delete = "Configs/TblAbortionType/Delete",
            Retrieve = "Configs/TblAbortionType/Retrieve",
            List = "Configs/TblAbortionType/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblAgeTypesForm {
        AgeTypeNameEn: Serenity.StringEditor;
        AgeTypeNameDari: Serenity.StringEditor;
        AgeTypeNamePashto: Serenity.StringEditor;
    }
    class TblAgeTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblAgeTypesRow {
        AgetypeId?: number;
        AgeTypeNameEn?: string;
        AgeTypeNameDari?: string;
        AgeTypeNamePashto?: string;
        AgeTypeName?: string;
    }
    namespace TblAgeTypesRow {
        const idProperty = "AgetypeId";
        const nameProperty = "AgeTypeName";
        const localTextPrefix = "Configs.TblAgeTypes";
        const lookupKey = "Configs.TblAgeTypes";
        function getLookup(): Q.Lookup<TblAgeTypesRow>;
        const enum Fields {
            AgetypeId = "AgetypeId",
            AgeTypeNameEn = "AgeTypeNameEn",
            AgeTypeNameDari = "AgeTypeNameDari",
            AgeTypeNamePashto = "AgeTypeNamePashto",
            AgeTypeName = "AgeTypeName"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblAgeTypesService {
        const baseUrl = "Configs/TblAgeTypes";
        function Create(request: Serenity.SaveRequest<TblAgeTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblAgeTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblAgeTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblAgeTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblAgeTypes/Create",
            Update = "Configs/TblAgeTypes/Update",
            Delete = "Configs/TblAgeTypes/Delete",
            Retrieve = "Configs/TblAgeTypes/Retrieve",
            List = "Configs/TblAgeTypes/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblBloodGroupForm {
        BloodGroup: Serenity.StringEditor;
    }
    class TblBloodGroupForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblBloodGroupRow {
        BloodGroupId?: number;
        BloodGroup?: string;
    }
    namespace TblBloodGroupRow {
        const idProperty = "BloodGroupId";
        const nameProperty = "BloodGroup";
        const localTextPrefix = "Configs.TblBloodGroup";
        const lookupKey = "Configs.TblBloodGroup";
        function getLookup(): Q.Lookup<TblBloodGroupRow>;
        const enum Fields {
            BloodGroupId = "BloodGroupId",
            BloodGroup = "BloodGroup"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblBloodGroupService {
        const baseUrl = "Configs/TblBloodGroup";
        function Create(request: Serenity.SaveRequest<TblBloodGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblBloodGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblBloodGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblBloodGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblBloodGroup/Create",
            Update = "Configs/TblBloodGroup/Update",
            Delete = "Configs/TblBloodGroup/Delete",
            Retrieve = "Configs/TblBloodGroup/Retrieve",
            List = "Configs/TblBloodGroup/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblCaseTypesForm {
        CasetypeEn: Serenity.StringEditor;
        CasetypeDari: Serenity.StringEditor;
        CasetypePashto: Serenity.StringEditor;
    }
    class TblCaseTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblCaseTypesRow {
        CaseId?: number;
        CasetypeEn?: string;
        CasetypeDari?: string;
        CasetypePashto?: string;
        CaseTypeName?: string;
    }
    namespace TblCaseTypesRow {
        const idProperty = "CaseId";
        const nameProperty = "CaseTypeName";
        const localTextPrefix = "Configs.TblCaseTypes";
        const lookupKey = "Configs.TblCaseTypes";
        function getLookup(): Q.Lookup<TblCaseTypesRow>;
        const enum Fields {
            CaseId = "CaseId",
            CasetypeEn = "CasetypeEn",
            CasetypeDari = "CasetypeDari",
            CasetypePashto = "CasetypePashto",
            CaseTypeName = "CaseTypeName"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblCaseTypesService {
        const baseUrl = "Configs/TblCaseTypes";
        function Create(request: Serenity.SaveRequest<TblCaseTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblCaseTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblCaseTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblCaseTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblCaseTypes/Create",
            Update = "Configs/TblCaseTypes/Update",
            Delete = "Configs/TblCaseTypes/Delete",
            Retrieve = "Configs/TblCaseTypes/Retrieve",
            List = "Configs/TblCaseTypes/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblChildForm {
        ChildDari: Serenity.StringEditor;
        ChildPashto: Serenity.StringEditor;
        ChildEn: Serenity.StringEditor;
    }
    class TblChildForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblChildRow {
        ChildId?: number;
        ChildDari?: string;
        ChildPashto?: string;
        ChildEn?: string;
        NbChild?: string;
    }
    namespace TblChildRow {
        const idProperty = "ChildId";
        const nameProperty = "NbChild";
        const localTextPrefix = "Configs.TblChild";
        const lookupKey = "Configs.TblChild";
        function getLookup(): Q.Lookup<TblChildRow>;
        const enum Fields {
            ChildId = "ChildId",
            ChildDari = "ChildDari",
            ChildPashto = "ChildPashto",
            ChildEn = "ChildEn",
            NbChild = "NbChild"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblChildService {
        const baseUrl = "Configs/TblChild";
        function Create(request: Serenity.SaveRequest<TblChildRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblChildRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblChildRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblChildRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblChild/Create",
            Update = "Configs/TblChild/Update",
            Delete = "Configs/TblChild/Delete",
            Retrieve = "Configs/TblChild/Retrieve",
            List = "Configs/TblChild/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblDeptForm {
        DeptName: Serenity.StringEditor;
        DeptNameD: Serenity.StringEditor;
    }
    class TblDeptForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblDeptRow {
        DpId?: number;
        DeptName?: string;
        DeptNameD?: string;
        DeptNameP?: string;
    }
    namespace TblDeptRow {
        const idProperty = "DpId";
        const nameProperty = "DeptName";
        const localTextPrefix = "Configs.TblDept";
        const lookupKey = "Configs.TblDept";
        function getLookup(): Q.Lookup<TblDeptRow>;
        const enum Fields {
            DpId = "DpId",
            DeptName = "DeptName",
            DeptNameD = "DeptNameD",
            DeptNameP = "DeptNameP"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblDeptService {
        const baseUrl = "Configs/TblDept";
        function Create(request: Serenity.SaveRequest<TblDeptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblDeptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblDeptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblDeptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblDept/Create",
            Update = "Configs/TblDept/Update",
            Delete = "Configs/TblDept/Delete",
            Retrieve = "Configs/TblDept/Retrieve",
            List = "Configs/TblDept/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblDiagnosisForm {
        DiagnosisDari: Serenity.StringEditor;
        DiagnosisPashto: Serenity.StringEditor;
        DiagnosisEn: Serenity.StringEditor;
    }
    class TblDiagnosisForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblDiagnosisRow {
        DiagnosisId?: number;
        DiagnosisDari?: string;
        DiagnosisPashto?: string;
        DiagnosisEn?: string;
        DiagNosis?: string;
    }
    namespace TblDiagnosisRow {
        const idProperty = "DiagnosisId";
        const nameProperty = "DiagNosis";
        const localTextPrefix = "Configs.TblDiagnosis";
        const lookupKey = "Configs.TblDiagnosis";
        function getLookup(): Q.Lookup<TblDiagnosisRow>;
        const enum Fields {
            DiagnosisId = "DiagnosisId",
            DiagnosisDari = "DiagnosisDari",
            DiagnosisPashto = "DiagnosisPashto",
            DiagnosisEn = "DiagnosisEn",
            DiagNosis = "DiagNosis"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblDiagnosisService {
        const baseUrl = "Configs/TblDiagnosis";
        function Create(request: Serenity.SaveRequest<TblDiagnosisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblDiagnosisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblDiagnosisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblDiagnosisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblDiagnosis/Create",
            Update = "Configs/TblDiagnosis/Update",
            Delete = "Configs/TblDiagnosis/Delete",
            Retrieve = "Configs/TblDiagnosis/Retrieve",
            List = "Configs/TblDiagnosis/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblDiseasesCategoryForm {
        Wardid: Serenity.IntegerEditor;
        DiseasesCategory: Serenity.StringEditor;
        DiseasesCatDari: Serenity.StringEditor;
        DiseasesCatPashto: Serenity.StringEditor;
    }
    class TblDiseasesCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblDiseasesCategoryRow {
        Id?: number;
        Wardid?: number;
        DiseasesCategory?: string;
        DiseasesCatDari?: string;
        DiseasesCatPashto?: string;
    }
    namespace TblDiseasesCategoryRow {
        const idProperty = "Id";
        const nameProperty = "DiseasesCategory";
        const localTextPrefix = "Configs.TblDiseasesCategory";
        const enum Fields {
            Id = "Id",
            Wardid = "Wardid",
            DiseasesCategory = "DiseasesCategory",
            DiseasesCatDari = "DiseasesCatDari",
            DiseasesCatPashto = "DiseasesCatPashto"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblDiseasesCategoryService {
        const baseUrl = "Configs/TblDiseasesCategory";
        function Create(request: Serenity.SaveRequest<TblDiseasesCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblDiseasesCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblDiseasesCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblDiseasesCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblDiseasesCategory/Create",
            Update = "Configs/TblDiseasesCategory/Update",
            Delete = "Configs/TblDiseasesCategory/Delete",
            Retrieve = "Configs/TblDiseasesCategory/Retrieve",
            List = "Configs/TblDiseasesCategory/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblEducationForm {
        EducationDari: Serenity.StringEditor;
        EducationEng: Serenity.StringEditor;
    }
    class TblEducationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblEducationRow {
        Eid?: number;
        EducationDari?: string;
        EducationEng?: string;
        EducationName?: string;
    }
    namespace TblEducationRow {
        const idProperty = "Eid";
        const nameProperty = "EducationName";
        const localTextPrefix = "Configs.TblEducation";
        const lookupKey = "Configs.TblEducation";
        function getLookup(): Q.Lookup<TblEducationRow>;
        const enum Fields {
            Eid = "Eid",
            EducationDari = "EducationDari",
            EducationEng = "EducationEng",
            EducationName = "EducationName"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblEducationService {
        const baseUrl = "Configs/TblEducation";
        function Create(request: Serenity.SaveRequest<TblEducationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblEducationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblEducationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblEducationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblEducation/Create",
            Update = "Configs/TblEducation/Update",
            Delete = "Configs/TblEducation/Delete",
            Retrieve = "Configs/TblEducation/Retrieve",
            List = "Configs/TblEducation/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblExaminationsDetailsForm {
        DpId: Serenity.LookupEditor;
        EdName: Serenity.StringEditor;
    }
    class TblExaminationsDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblExaminationsDetailsRow {
        Edid?: number;
        DpId?: number;
        EdName?: string;
        DepartmentName?: string;
    }
    namespace TblExaminationsDetailsRow {
        const idProperty = "Edid";
        const nameProperty = "EdName";
        const localTextPrefix = "Configs.TblExaminationsDetails";
        const lookupKey = "Configs.TblExaminationsDetails";
        function getLookup(): Q.Lookup<TblExaminationsDetailsRow>;
        const enum Fields {
            Edid = "Edid",
            DpId = "DpId",
            EdName = "EdName",
            DepartmentName = "DepartmentName"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblExaminationsDetailsService {
        const baseUrl = "Configs/TblExaminationsDetails";
        function Create(request: Serenity.SaveRequest<TblExaminationsDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblExaminationsDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblExaminationsDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblExaminationsDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblExaminationsDetails/Create",
            Update = "Configs/TblExaminationsDetails/Update",
            Delete = "Configs/TblExaminationsDetails/Delete",
            Retrieve = "Configs/TblExaminationsDetails/Retrieve",
            List = "Configs/TblExaminationsDetails/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblGenderForm {
        GenderEng: Serenity.StringEditor;
        GenderDa: Serenity.StringEditor;
        GenderPs: Serenity.StringEditor;
    }
    class TblGenderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblGenderRow {
        GenderId?: number;
        GenderEng?: string;
        GenderDa?: string;
        GenderPs?: string;
        Gender?: string;
    }
    namespace TblGenderRow {
        const idProperty = "GenderId";
        const nameProperty = "Gender";
        const localTextPrefix = "Configs.TblGender";
        const lookupKey = "Conigs.TblGender";
        function getLookup(): Q.Lookup<TblGenderRow>;
        const enum Fields {
            GenderId = "GenderId",
            GenderEng = "GenderEng",
            GenderDa = "GenderDa",
            GenderPs = "GenderPs",
            Gender = "Gender"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblGenderService {
        const baseUrl = "Configs/TblGender";
        function Create(request: Serenity.SaveRequest<TblGenderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblGenderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblGenderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblGenderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblGender/Create",
            Update = "Configs/TblGender/Update",
            Delete = "Configs/TblGender/Delete",
            Retrieve = "Configs/TblGender/Retrieve",
            List = "Configs/TblGender/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblMaritalStatusForm {
        PatMaritalStatusEng: Serenity.StringEditor;
        PatMaritalStatusDari: Serenity.StringEditor;
    }
    class TblMaritalStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblMaritalStatusRow {
        MariId?: number;
        PatMaritalStatusDari?: string;
        PatMaritalStatusEng?: string;
        MaritalStatus?: string;
    }
    namespace TblMaritalStatusRow {
        const idProperty = "MariId";
        const nameProperty = "MaritalStatus";
        const localTextPrefix = "Configs.TblMaritalStatus";
        const lookupKey = "Configs.TblMaritalStatus";
        function getLookup(): Q.Lookup<TblMaritalStatusRow>;
        const enum Fields {
            MariId = "MariId",
            PatMaritalStatusDari = "PatMaritalStatusDari",
            PatMaritalStatusEng = "PatMaritalStatusEng",
            MaritalStatus = "MaritalStatus"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblMaritalStatusService {
        const baseUrl = "Configs/TblMaritalStatus";
        function Create(request: Serenity.SaveRequest<TblMaritalStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblMaritalStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblMaritalStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblMaritalStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblMaritalStatus/Create",
            Update = "Configs/TblMaritalStatus/Update",
            Delete = "Configs/TblMaritalStatus/Delete",
            Retrieve = "Configs/TblMaritalStatus/Retrieve",
            List = "Configs/TblMaritalStatus/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblNbResultForm {
        NbResultDari: Serenity.StringEditor;
        NbResultPashto: Serenity.StringEditor;
        NbResultEn: Serenity.StringEditor;
    }
    class TblNbResultForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblNbResultRow {
        NbResultId?: number;
        NbResultDari?: string;
        NbResultPashto?: string;
        NbResultEn?: string;
        NbResult?: string;
    }
    namespace TblNbResultRow {
        const idProperty = "NbResultId";
        const nameProperty = "NbResult";
        const localTextPrefix = "Configs.TblNbResult";
        const lookupKey = "Configs.TblNbResult";
        function getLookup(): Q.Lookup<TblNbResultRow>;
        const enum Fields {
            NbResultId = "NbResultId",
            NbResultDari = "NbResultDari",
            NbResultPashto = "NbResultPashto",
            NbResultEn = "NbResultEn",
            NbResult = "NbResult"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblNbResultService {
        const baseUrl = "Configs/TblNbResult";
        function Create(request: Serenity.SaveRequest<TblNbResultRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblNbResultRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblNbResultRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblNbResultRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblNbResult/Create",
            Update = "Configs/TblNbResult/Update",
            Delete = "Configs/TblNbResult/Delete",
            Retrieve = "Configs/TblNbResult/Retrieve",
            List = "Configs/TblNbResult/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblNbstatusForm {
        NbstatusDari: Serenity.StringEditor;
        NbstatusPashto: Serenity.StringEditor;
        NbstatusEng: Serenity.StringEditor;
    }
    class TblNbstatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblNbstatusRow {
        NbstatusId?: number;
        NbstatusDari?: string;
        NbstatusPashto?: string;
        NbstatusEng?: string;
        NbStatus?: string;
    }
    namespace TblNbstatusRow {
        const idProperty = "NbstatusId";
        const nameProperty = "NbStatus";
        const localTextPrefix = "Configs.TblNbstatus";
        const lookupKey = "Configs.TblNbstatus";
        function getLookup(): Q.Lookup<TblNbstatusRow>;
        const enum Fields {
            NbstatusId = "NbstatusId",
            NbstatusDari = "NbstatusDari",
            NbstatusPashto = "NbstatusPashto",
            NbstatusEng = "NbstatusEng",
            NbStatus = "NbStatus"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblNbstatusService {
        const baseUrl = "Configs/TblNbstatus";
        function Create(request: Serenity.SaveRequest<TblNbstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblNbstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblNbstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblNbstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblNbstatus/Create",
            Update = "Configs/TblNbstatus/Update",
            Delete = "Configs/TblNbstatus/Delete",
            Retrieve = "Configs/TblNbstatus/Retrieve",
            List = "Configs/TblNbstatus/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblNbWeightForm {
        NbWeightDari: Serenity.StringEditor;
        NbWeightPashto: Serenity.StringEditor;
        NbWeightEn: Serenity.StringEditor;
    }
    class TblNbWeightForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblNbWeightRow {
        NbWeightId?: number;
        NbWeightDari?: string;
        NbWeightPashto?: string;
        NbWeightEn?: string;
        NbWeight?: string;
    }
    namespace TblNbWeightRow {
        const idProperty = "NbWeightId";
        const nameProperty = "NbWeight";
        const localTextPrefix = "Configs.TblNbWeight";
        const lookupKey = "Configs.TblNbWeight";
        function getLookup(): Q.Lookup<TblNbWeightRow>;
        const enum Fields {
            NbWeightId = "NbWeightId",
            NbWeightDari = "NbWeightDari",
            NbWeightPashto = "NbWeightPashto",
            NbWeightEn = "NbWeightEn",
            NbWeight = "NbWeight"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblNbWeightService {
        const baseUrl = "Configs/TblNbWeight";
        function Create(request: Serenity.SaveRequest<TblNbWeightRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblNbWeightRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblNbWeightRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblNbWeightRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblNbWeight/Create",
            Update = "Configs/TblNbWeight/Update",
            Delete = "Configs/TblNbWeight/Delete",
            Retrieve = "Configs/TblNbWeight/Retrieve",
            List = "Configs/TblNbWeight/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblOccupationForm {
        OccupationEng: Serenity.StringEditor;
        OccupationDari: Serenity.StringEditor;
    }
    class TblOccupationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblOccupationRow {
        Oid?: number;
        OccupationDari?: string;
        OccupationEng?: string;
        OccupationName?: string;
    }
    namespace TblOccupationRow {
        const idProperty = "Oid";
        const nameProperty = "OccupationName";
        const localTextPrefix = "Configs.TblOccupation";
        const lookupKey = "Configs.TblOccupation";
        function getLookup(): Q.Lookup<TblOccupationRow>;
        const enum Fields {
            Oid = "Oid",
            OccupationDari = "OccupationDari",
            OccupationEng = "OccupationEng",
            OccupationName = "OccupationName"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblOccupationService {
        const baseUrl = "Configs/TblOccupation";
        function Create(request: Serenity.SaveRequest<TblOccupationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblOccupationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblOccupationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblOccupationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblOccupation/Create",
            Update = "Configs/TblOccupation/Update",
            Delete = "Configs/TblOccupation/Delete",
            Retrieve = "Configs/TblOccupation/Retrieve",
            List = "Configs/TblOccupation/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblOutcomesMotherForm {
        OutcomeEng: Serenity.StringEditor;
        OutcomeDari: Serenity.StringEditor;
    }
    class TblOutcomesMotherForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblOutcomesMotherRow {
        OutcomeId?: number;
        OutcomeEng?: string;
        OutcomeDari?: string;
        OutcomeName?: string;
    }
    namespace TblOutcomesMotherRow {
        const idProperty = "OutcomeId";
        const nameProperty = "OutcomeName";
        const localTextPrefix = "Configs.TblOutcomesMother";
        const lookupKey = "Configs.TblOutcomesMother";
        function getLookup(): Q.Lookup<TblOutcomesMotherRow>;
        const enum Fields {
            OutcomeId = "OutcomeId",
            OutcomeEng = "OutcomeEng",
            OutcomeDari = "OutcomeDari",
            OutcomeName = "OutcomeName"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblOutcomesMotherService {
        const baseUrl = "Configs/TblOutcomesMother";
        function Create(request: Serenity.SaveRequest<TblOutcomesMotherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblOutcomesMotherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblOutcomesMotherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblOutcomesMotherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblOutcomesMother/Create",
            Update = "Configs/TblOutcomesMother/Update",
            Delete = "Configs/TblOutcomesMother/Delete",
            Retrieve = "Configs/TblOutcomesMother/Retrieve",
            List = "Configs/TblOutcomesMother/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblPositionsForm {
        EmpId: Serenity.StringEditor;
        DeptId: Serenity.IntegerEditor;
        ProId: Serenity.IntegerEditor;
        PosDate: Serenity.DateEditor;
        PosDateH: Serenity.StringEditor;
        UserName: Serenity.StringEditor;
        LastUpdated: Serenity.DateEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class TblPositionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblPositionsRow {
        PosId?: number;
        EmpId?: string;
        DeptId?: number;
        ProId?: number;
        PosDate?: string;
        PosDateH?: string;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
    }
    namespace TblPositionsRow {
        const idProperty = "PosId";
        const nameProperty = "EmpId";
        const localTextPrefix = "Configs.TblPositions";
        const enum Fields {
            PosId = "PosId",
            EmpId = "EmpId",
            DeptId = "DeptId",
            ProId = "ProId",
            PosDate = "PosDate",
            PosDateH = "PosDateH",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblPositionsService {
        const baseUrl = "Configs/TblPositions";
        function Create(request: Serenity.SaveRequest<TblPositionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblPositionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblPositionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblPositionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblPositions/Create",
            Update = "Configs/TblPositions/Update",
            Delete = "Configs/TblPositions/Delete",
            Retrieve = "Configs/TblPositions/Retrieve",
            List = "Configs/TblPositions/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblProfessionsForm {
        ProName: Serenity.StringEditor;
        ProNameD: Serenity.StringEditor;
    }
    class TblProfessionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblProfessionsRow {
        ProId?: number;
        ProName?: string;
        ProNameD?: string;
    }
    namespace TblProfessionsRow {
        const idProperty = "ProId";
        const nameProperty = "ProName";
        const localTextPrefix = "Configs.TblProfessions";
        const enum Fields {
            ProId = "ProId",
            ProName = "ProName",
            ProNameD = "ProNameD"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblProfessionsService {
        const baseUrl = "Configs/TblProfessions";
        function Create(request: Serenity.SaveRequest<TblProfessionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblProfessionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblProfessionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblProfessionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblProfessions/Create",
            Update = "Configs/TblProfessions/Update",
            Delete = "Configs/TblProfessions/Delete",
            Retrieve = "Configs/TblProfessions/Retrieve",
            List = "Configs/TblProfessions/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblRelationForm {
        RelationNameEng: Serenity.StringEditor;
        RelationName: Serenity.StringEditor;
    }
    class TblRelationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblRelationRow {
        RelationId?: number;
        RelationName?: string;
        RelationNameEng?: string;
        Relation?: string;
    }
    namespace TblRelationRow {
        const idProperty = "RelationId";
        const nameProperty = "Relation";
        const localTextPrefix = "Configs.TblRelation";
        const lookupKey = "Configs.TblRelation";
        function getLookup(): Q.Lookup<TblRelationRow>;
        const enum Fields {
            RelationId = "RelationId",
            RelationName = "RelationName",
            RelationNameEng = "RelationNameEng",
            Relation = "Relation"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblRelationService {
        const baseUrl = "Configs/TblRelation";
        function Create(request: Serenity.SaveRequest<TblRelationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblRelationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblRelationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblRelationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblRelation/Create",
            Update = "Configs/TblRelation/Update",
            Delete = "Configs/TblRelation/Delete",
            Retrieve = "Configs/TblRelation/Retrieve",
            List = "Configs/TblRelation/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblWardDiseaseRow {
        WId?: number;
        WardCode?: number;
        DiagnosisTreatment?: number;
        DiseasesCategory?: string;
        DiseasesCat?: number;
        DiseasesName?: string;
        DiseaseDariName?: string;
        DiseasesCode?: string;
        HmirCode?: string;
        HmirCodeId?: number;
        Status?: number;
    }
    namespace TblWardDiseaseRow {
        const idProperty = "WId";
        const nameProperty = "DiseaseDariName";
        const localTextPrefix = "Configs.TblWardDisease";
        const lookupKey = "Configs.TblWardDisease";
        function getLookup(): Q.Lookup<TblWardDiseaseRow>;
        const enum Fields {
            WId = "WId",
            WardCode = "WardCode",
            DiagnosisTreatment = "DiagnosisTreatment",
            DiseasesCategory = "DiseasesCategory",
            DiseasesCat = "DiseasesCat",
            DiseasesName = "DiseasesName",
            DiseaseDariName = "DiseaseDariName",
            DiseasesCode = "DiseasesCode",
            HmirCode = "HmirCode",
            HmirCodeId = "HmirCodeId",
            Status = "Status"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblWardDiseasesForm {
        WardCode: Serenity.IntegerEditor;
        DiseasesCategory: Serenity.StringEditor;
        DiseasesCat: Serenity.IntegerEditor;
        DiseasesName: Serenity.StringEditor;
        DiseaseDariName: Serenity.StringEditor;
        WvId: Serenity.LookupEditor;
        DiseasesCode: Serenity.StringEditor;
        HmirCode: Serenity.StringEditor;
        HmirCodeId: Serenity.DecimalEditor;
        Status: Serenity.DecimalEditor;
    }
    class TblWardDiseasesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblWardDiseasesRow {
        WId?: number;
        WardCode?: number;
        DiseasesCategory?: string;
        DiseasesCat?: number;
        DiseasesName?: string;
        DiseaseDariName?: string;
        DiseasesCode?: string;
        HmirCode?: string;
        HmirCodeId?: number;
        Status?: number;
        WvId?: number;
        DiseaseName?: string;
    }
    namespace TblWardDiseasesRow {
        const idProperty = "WId";
        const nameProperty = "DiseaseName";
        const localTextPrefix = "Configs.TblWardDiseases";
        const lookupKey = "Configs.TblWardDiseases";
        function getLookup(): Q.Lookup<TblWardDiseasesRow>;
        const enum Fields {
            WId = "WId",
            WardCode = "WardCode",
            DiseasesCategory = "DiseasesCategory",
            DiseasesCat = "DiseasesCat",
            DiseasesName = "DiseasesName",
            DiseaseDariName = "DiseaseDariName",
            DiseasesCode = "DiseasesCode",
            HmirCode = "HmirCode",
            HmirCodeId = "HmirCodeId",
            Status = "Status",
            WvId = "WvId",
            DiseaseName = "DiseaseName"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblWardDiseasesService {
        const baseUrl = "Configs/TblWardDiseases";
        function Create(request: Serenity.SaveRequest<TblWardDiseasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblWardDiseasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblWardDiseasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblWardDiseasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblWardDiseases/Create",
            Update = "Configs/TblWardDiseases/Update",
            Delete = "Configs/TblWardDiseases/Delete",
            Retrieve = "Configs/TblWardDiseases/Retrieve",
            List = "Configs/TblWardDiseases/List"
        }
    }
}
declare namespace EMR.Configs {
    interface TblWardForm {
        WardName: Serenity.StringEditor;
        WardNameD: Serenity.StringEditor;
        WardNumBeds: Serenity.IntegerEditor;
    }
    class TblWardForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblWardRow {
        WardId?: number;
        WardName?: string;
        WardNameD?: string;
        WardNumBeds?: number;
        Ward?: string;
    }
    namespace TblWardRow {
        const idProperty = "WardId";
        const nameProperty = "Ward";
        const localTextPrefix = "Configs.TblWard";
        const lookupKey = "Configs.TblWard";
        function getLookup(): Q.Lookup<TblWardRow>;
        const enum Fields {
            WardId = "WardId",
            WardName = "WardName",
            WardNameD = "WardNameD",
            WardNumBeds = "WardNumBeds",
            Ward = "Ward"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblWardService {
        const baseUrl = "Configs/TblWard";
        function Create(request: Serenity.SaveRequest<TblWardRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblWardRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblWardRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblWardRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblWard/Create",
            Update = "Configs/TblWard/Update",
            Delete = "Configs/TblWard/Delete",
            Retrieve = "Configs/TblWard/Retrieve",
            List = "Configs/TblWard/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TblWrdVarForm {
        Wrdid: Serenity.IntegerEditor;
        DiagnTreatComp: Serenity.IntegerEditor;
        VarNameEnglish: Serenity.StringEditor;
        VarNameDari: Serenity.StringEditor;
        VarNamePashto: Serenity.StringEditor;
        VarSpecification: Serenity.StringEditor;
    }
    class TblWrdVarForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TblWrdVarRow {
        Wvid?: number;
        Wrdid?: number;
        DiagnTreatComp?: number;
        VarNameEnglish?: string;
        VarNameDari?: string;
        VarNamePashto?: string;
        VarSpecification?: string;
        WrdidWardName?: string;
        WrdidWardNameD?: string;
        WrdidWardNumBeds?: number;
        WrdidUserName?: string;
        WrdidLastUpdated?: string;
        WwardDiseaseName?: string;
    }
    namespace TblWrdVarRow {
        const idProperty = "Wvid";
        const nameProperty = "WwardDiseaseName";
        const localTextPrefix = "Configs.TblWrdVar";
        const lookupKey = "Configs.TblWrdVar";
        function getLookup(): Q.Lookup<TblWrdVarRow>;
        const enum Fields {
            Wvid = "Wvid",
            Wrdid = "Wrdid",
            DiagnTreatComp = "DiagnTreatComp",
            VarNameEnglish = "VarNameEnglish",
            VarNameDari = "VarNameDari",
            VarNamePashto = "VarNamePashto",
            VarSpecification = "VarSpecification",
            WrdidWardName = "WrdidWardName",
            WrdidWardNameD = "WrdidWardNameD",
            WrdidWardNumBeds = "WrdidWardNumBeds",
            WrdidUserName = "WrdidUserName",
            WrdidLastUpdated = "WrdidLastUpdated",
            WwardDiseaseName = "WwardDiseaseName"
        }
    }
}
declare namespace EMR.Configs {
    namespace TblWrdVarService {
        const baseUrl = "Configs/TblWrdVar";
        function Create(request: Serenity.SaveRequest<TblWrdVarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblWrdVarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblWrdVarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblWrdVarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TblWrdVar/Create",
            Update = "Configs/TblWrdVar/Update",
            Delete = "Configs/TblWrdVar/Delete",
            Retrieve = "Configs/TblWrdVar/Retrieve",
            List = "Configs/TblWrdVar/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TopographyMainForm {
        TopographyMName: Serenity.StringEditor;
        Icd0Code: Serenity.StringEditor;
    }
    class TopographyMainForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TopographyMainRow {
        TopomainId?: number;
        TopographyMName?: string;
        Icd0Code?: string;
    }
    namespace TopographyMainRow {
        const idProperty = "TopomainId";
        const nameProperty = "TopographyMName";
        const localTextPrefix = "Configs.TopographyMain";
        const lookupKey = "Configs.TopographyMain";
        function getLookup(): Q.Lookup<TopographyMainRow>;
        const enum Fields {
            TopomainId = "TopomainId",
            TopographyMName = "TopographyMName",
            Icd0Code = "Icd0Code"
        }
    }
}
declare namespace EMR.Configs {
    namespace TopographyMainService {
        const baseUrl = "Configs/TopographyMain";
        function Create(request: Serenity.SaveRequest<TopographyMainRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TopographyMainRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TopographyMainRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TopographyMainRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TopographyMain/Create",
            Update = "Configs/TopographyMain/Update",
            Delete = "Configs/TopographyMain/Delete",
            Retrieve = "Configs/TopographyMain/Retrieve",
            List = "Configs/TopographyMain/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TopographySubForm {
        Icd0Code: Serenity.IntegerEditor;
        TopographySName: Serenity.StringEditor;
        TopomainId: Serenity.LookupEditor;
    }
    class TopographySubForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TopographySubRow {
        ToposubId?: number;
        Icd0Code?: number;
        TopographySName?: string;
        TopomainId?: number;
        TopomainTopographyMName?: string;
        TopomainIcd0Code?: string;
    }
    namespace TopographySubRow {
        const idProperty = "ToposubId";
        const nameProperty = "TopographySName";
        const localTextPrefix = "Configs.TopographySub";
        const lookupKey = "Configs.TopographySub";
        function getLookup(): Q.Lookup<TopographySubRow>;
        const enum Fields {
            ToposubId = "ToposubId",
            Icd0Code = "Icd0Code",
            TopographySName = "TopographySName",
            TopomainId = "TopomainId",
            TopomainTopographyMName = "TopomainTopographyMName",
            TopomainIcd0Code = "TopomainIcd0Code"
        }
    }
}
declare namespace EMR.Configs {
    namespace TopographySubService {
        const baseUrl = "Configs/TopographySub";
        function Create(request: Serenity.SaveRequest<TopographySubRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TopographySubRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TopographySubRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TopographySubRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/TopographySub/Create",
            Update = "Configs/TopographySub/Update",
            Delete = "Configs/TopographySub/Delete",
            Retrieve = "Configs/TopographySub/Retrieve",
            List = "Configs/TopographySub/List"
        }
    }
}
declare namespace EMR.Configs {
}
declare namespace EMR.Configs {
    interface TypeofvisitForm {
        TypeOfVisit: Serenity.StringEditor;
    }
    class TypeofvisitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Configs {
    interface TypeofvisitRow {
        Id?: number;
        TypeOfVisit?: string;
    }
    namespace TypeofvisitRow {
        const idProperty = "Id";
        const nameProperty = "TypeOfVisit";
        const localTextPrefix = "Configs.Typeofvisit";
        const lookupKey = "Configs.Typeofvisit";
        function getLookup(): Q.Lookup<TypeofvisitRow>;
        const enum Fields {
            Id = "Id",
            TypeOfVisit = "TypeOfVisit"
        }
    }
}
declare namespace EMR.Configs {
    namespace TypeofvisitService {
        const baseUrl = "Configs/Typeofvisit";
        function Create(request: Serenity.SaveRequest<TypeofvisitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TypeofvisitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TypeofvisitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TypeofvisitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Configs/Typeofvisit/Create",
            Update = "Configs/Typeofvisit/Update",
            Delete = "Configs/Typeofvisit/Delete",
            Retrieve = "Configs/Typeofvisit/Retrieve",
            List = "Configs/Typeofvisit/List"
        }
    }
}
declare namespace EMR {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace EMR {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace EMR.FM {
}
declare namespace EMR.FM {
    interface LkpServicesForm {
        ServiceTypeId: Serenity.LookupEditor;
        ServiceDari: Serenity.StringEditor;
        ServicePashto: Serenity.StringEditor;
        ServiceEn: Serenity.StringEditor;
        ServicePrice: Serenity.DecimalEditor;
        Status: Serenity.BooleanEditor;
    }
    class LkpServicesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.FM {
    interface LkpServicesRow {
        ServiceId?: number;
        ServiceTypeId?: number;
        ServiceDari?: string;
        ServicePashto?: string;
        ServiceEn?: string;
        ServicePrice?: number;
        DiscountRate?: number;
        Status?: boolean;
        ServiceTypeServiceTypeDari?: string;
        ServiceTypeServiceTypePashto?: string;
        ServiceTypeServiceTypeEn?: string;
    }
    namespace LkpServicesRow {
        const idProperty = "ServiceId";
        const nameProperty = "ServiceDari";
        const localTextPrefix = "FM.LkpServices";
        const lookupKey = "FM.LkpServices";
        function getLookup(): Q.Lookup<LkpServicesRow>;
        const enum Fields {
            ServiceId = "ServiceId",
            ServiceTypeId = "ServiceTypeId",
            ServiceDari = "ServiceDari",
            ServicePashto = "ServicePashto",
            ServiceEn = "ServiceEn",
            ServicePrice = "ServicePrice",
            DiscountRate = "DiscountRate",
            Status = "Status",
            ServiceTypeServiceTypeDari = "ServiceTypeServiceTypeDari",
            ServiceTypeServiceTypePashto = "ServiceTypeServiceTypePashto",
            ServiceTypeServiceTypeEn = "ServiceTypeServiceTypeEn"
        }
    }
}
declare namespace EMR.FM {
    namespace LkpServicesService {
        const baseUrl = "FM/LkpServices";
        function Create(request: Serenity.SaveRequest<LkpServicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpServicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpServicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpServicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "FM/LkpServices/Create",
            Update = "FM/LkpServices/Update",
            Delete = "FM/LkpServices/Delete",
            Retrieve = "FM/LkpServices/Retrieve",
            List = "FM/LkpServices/List"
        }
    }
}
declare namespace EMR.FM {
}
declare namespace EMR.FM {
    interface LkpServiceTypesForm {
        ServiceTypeDari: Serenity.StringEditor;
        ServiceTypePashto: Serenity.StringEditor;
        ServiceTypeEn: Serenity.StringEditor;
    }
    class LkpServiceTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.FM {
    interface LkpServiceTypesRow {
        ServiceTypeId?: number;
        ServiceTypeDari?: string;
        ServiceTypePashto?: string;
        ServiceTypeEn?: string;
        ServiceType?: string;
    }
    namespace LkpServiceTypesRow {
        const idProperty = "ServiceTypeId";
        const nameProperty = "ServiceTypeDari";
        const localTextPrefix = "FM.LkpServiceTypes";
        const lookupKey = "FM.LkpServiceTypes";
        function getLookup(): Q.Lookup<LkpServiceTypesRow>;
        const enum Fields {
            ServiceTypeId = "ServiceTypeId",
            ServiceTypeDari = "ServiceTypeDari",
            ServiceTypePashto = "ServiceTypePashto",
            ServiceTypeEn = "ServiceTypeEn",
            ServiceType = "ServiceType"
        }
    }
}
declare namespace EMR.FM {
    namespace LkpServiceTypesService {
        const baseUrl = "FM/LkpServiceTypes";
        function Create(request: Serenity.SaveRequest<LkpServiceTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LkpServiceTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpServiceTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpServiceTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "FM/LkpServiceTypes/Create",
            Update = "FM/LkpServiceTypes/Update",
            Delete = "FM/LkpServiceTypes/Delete",
            Retrieve = "FM/LkpServiceTypes/Retrieve",
            List = "FM/LkpServiceTypes/List"
        }
    }
}
declare namespace EMR.FM {
}
declare namespace EMR.FM {
    interface TblFeePaymentForm {
        Mrid: Serenity.StringEditor;
        ServiceId: Serenity.IntegerEditor;
        ServiceFee: Serenity.IntegerEditor;
        DateCreated: Serenity.DateEditor;
        Times: Serenity.IntegerEditor;
    }
    class TblFeePaymentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.FM {
    interface TblFeePaymentRow {
        FeeId?: number;
        Mrid?: number;
        ServiceId?: number;
        ServiceFee?: number;
        DateCreated?: string;
        UserName?: string;
        LastUpdated?: string;
        Times?: number;
        ServiceTypeServiceType?: string;
    }
    namespace TblFeePaymentRow {
        const idProperty = "FeeId";
        const localTextPrefix = "FM.TblFeePayment";
        const enum Fields {
            FeeId = "FeeId",
            Mrid = "Mrid",
            ServiceId = "ServiceId",
            ServiceFee = "ServiceFee",
            DateCreated = "DateCreated",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            Times = "Times",
            ServiceTypeServiceType = "ServiceTypeServiceType"
        }
    }
}
declare namespace EMR.FM {
    namespace TblFeePaymentService {
        const baseUrl = "FM/TblFeePayment";
        function Create(request: Serenity.SaveRequest<TblFeePaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblFeePaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblFeePaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblFeePaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "FM/TblFeePayment/Create",
            Update = "FM/TblFeePayment/Update",
            Delete = "FM/TblFeePayment/Delete",
            Retrieve = "FM/TblFeePayment/Retrieve",
            List = "FM/TblFeePayment/List"
        }
    }
}
declare namespace EMR.FM {
}
declare namespace EMR.FM {
    interface TblPrintDetailsForm {
        FeeId: Serenity.StringEditor;
        DateTimePrinted: Serenity.DateEditor;
        PrintedBy: Serenity.StringEditor;
    }
    class TblPrintDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.FM {
    interface TblPrintDetailsRow {
        PrintId?: number;
        FeeId?: number;
        DateTimePrinted?: string;
        PrintedBy?: string;
    }
    namespace TblPrintDetailsRow {
        const idProperty = "PrintId";
        const nameProperty = "PrintedBy";
        const localTextPrefix = "FM.TblPrintDetails";
        const enum Fields {
            PrintId = "PrintId",
            FeeId = "FeeId",
            DateTimePrinted = "DateTimePrinted",
            PrintedBy = "PrintedBy"
        }
    }
}
declare namespace EMR.FM {
    namespace TblPrintDetailsService {
        const baseUrl = "FM/TblPrintDetails";
        function Create(request: Serenity.SaveRequest<TblPrintDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblPrintDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblPrintDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblPrintDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "FM/TblPrintDetails/Create",
            Update = "FM/TblPrintDetails/Update",
            Delete = "FM/TblPrintDetails/Delete",
            Retrieve = "FM/TblPrintDetails/Retrieve",
            List = "FM/TblPrintDetails/List"
        }
    }
}
declare namespace EMR.FM {
}
declare namespace EMR.FM {
    interface UserFeePatientsForm {
        FacilityId: Serenity.LookupEditor;
        Mrn: Serenity.StringEditor;
        PatName: Serenity.StringEditor;
        PatFatName: Serenity.StringEditor;
        PatGender: Serenity.LookupEditor;
        PatRealationName: Serenity.StringEditor;
    }
    class UserFeePatientsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.FM {
    interface UserFeePatientsRow {
        Mrid?: number;
        Mrn?: string;
        FacilityId?: number;
        PatName?: string;
        PatFatName?: string;
        PatRealationName?: string;
        PatHusbandName?: string;
        PatGender?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        Gender?: string;
        FacilityFacilityNameDari?: string;
    }
    namespace UserFeePatientsRow {
        const idProperty = "Mrid";
        const nameProperty = "Mrn";
        const localTextPrefix = "FM.UserFeePatients";
        const enum Fields {
            Mrid = "Mrid",
            Mrn = "Mrn",
            FacilityId = "FacilityId",
            PatName = "PatName",
            PatFatName = "PatFatName",
            PatRealationName = "PatRealationName",
            PatHusbandName = "PatHusbandName",
            PatGender = "PatGender",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            Gender = "Gender",
            FacilityFacilityNameDari = "FacilityFacilityNameDari"
        }
    }
}
declare namespace EMR.FM {
    namespace UserFeePatientsService {
        const baseUrl = "FM/UserFeePatients";
        function Create(request: Serenity.SaveRequest<UserFeePatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserFeePatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserFeePatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserFeePatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "FM/UserFeePatients/Create",
            Update = "FM/UserFeePatients/Update",
            Delete = "FM/UserFeePatients/Delete",
            Retrieve = "FM/UserFeePatients/Retrieve",
            List = "FM/UserFeePatients/List"
        }
    }
}
declare namespace EMR {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace EMR {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace EMR.Imaging {
}
declare namespace EMR.Imaging {
    interface ImagePatientsForm {
        Mrn: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        DateOfBirth: Serenity.DateEditor;
        AgeInYear: Serenity.IntegerEditor;
        EthnicityId: Serenity.LookupEditor;
        RefertoDoctor: Serenity.LookupEditor;
    }
    class ImagePatientsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Imaging {
    interface ImagePatientsRow {
        Mrid?: number;
        Mrn?: string;
        FirstName?: string;
        LastName?: string;
        FatherName?: string;
        GenderId?: number;
        DateOfBirth?: string;
        AgeInYear?: number;
        UserId?: number;
        Updated?: string;
        EthnicityId?: number;
        RefertoDoctor?: number;
        EthnicityName?: string;
        GenderName?: string;
    }
    namespace ImagePatientsRow {
        const idProperty = "Mrid";
        const nameProperty = "Mrn";
        const localTextPrefix = "Imaging.ImagePatients";
        const enum Fields {
            Mrid = "Mrid",
            Mrn = "Mrn",
            FirstName = "FirstName",
            LastName = "LastName",
            FatherName = "FatherName",
            GenderId = "GenderId",
            DateOfBirth = "DateOfBirth",
            AgeInYear = "AgeInYear",
            UserId = "UserId",
            Updated = "Updated",
            EthnicityId = "EthnicityId",
            RefertoDoctor = "RefertoDoctor",
            EthnicityName = "EthnicityName",
            GenderName = "GenderName"
        }
    }
}
declare namespace EMR.Imaging {
    namespace ImagePatientsService {
        const baseUrl = "Imaging/ImagePatients";
        function Create(request: Serenity.SaveRequest<ImagePatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImagePatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImagePatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImagePatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Imaging/ImagePatients/Create",
            Update = "Imaging/ImagePatients/Update",
            Delete = "Imaging/ImagePatients/Delete",
            Retrieve = "Imaging/ImagePatients/Retrieve",
            List = "Imaging/ImagePatients/List"
        }
    }
}
declare namespace EMR.Imaging {
}
declare namespace EMR.Imaging {
    interface ImagevisitsForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        OccupationId: Serenity.LookupEditor;
        MaritalStatusId: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        TypeofvisitId: Serenity.LookupEditor;
        DateOfVisit: Serenity.DateEditor;
        CycleId: Serenity.LookupEditor;
    }
    class ImagevisitsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Imaging {
    interface ImagevisitsRow {
        VisitId?: number;
        Mrid?: number;
        OccupationId?: number;
        MaritalStatusId?: number;
        DateOfVisit?: string;
        PhoneNumber?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        UserId?: number;
        Updated?: string;
        TypeofvisitId?: number;
        OccupationName?: string;
        MaritalStatusName?: string;
        ProvinceName?: string;
        DistrictName?: string;
        MRN?: string;
        Typeofvisit?: string;
        CycleId?: number;
    }
    namespace ImagevisitsRow {
        const idProperty = "VisitId";
        const nameProperty = "PhoneNumber";
        const localTextPrefix = "Imaging.Imagevisits";
        const enum Fields {
            VisitId = "VisitId",
            Mrid = "Mrid",
            OccupationId = "OccupationId",
            MaritalStatusId = "MaritalStatusId",
            DateOfVisit = "DateOfVisit",
            PhoneNumber = "PhoneNumber",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            UserId = "UserId",
            Updated = "Updated",
            TypeofvisitId = "TypeofvisitId",
            OccupationName = "OccupationName",
            MaritalStatusName = "MaritalStatusName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName",
            MRN = "MRN",
            Typeofvisit = "Typeofvisit",
            CycleId = "CycleId"
        }
    }
}
declare namespace EMR.Imaging {
    namespace ImagevisitsService {
        const baseUrl = "Imaging/Imagevisits";
        function Create(request: Serenity.SaveRequest<ImagevisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImagevisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImagevisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImagevisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Imaging/Imagevisits/Create",
            Update = "Imaging/Imagevisits/Update",
            Delete = "Imaging/Imagevisits/Delete",
            Retrieve = "Imaging/Imagevisits/Retrieve",
            List = "Imaging/Imagevisits/List"
        }
    }
}
declare namespace EMR.Imaging {
}
declare namespace EMR.Imaging {
    interface ImgImagingsForm {
        VisitId: Serenity.StringEditor;
        ImagingId: Serenity.LookupEditor;
        TestImage: Serenity.MultipleImageUploadEditor;
        Note: Serenity.HtmlReportContentEditor;
    }
    class ImgImagingsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Imaging {
    interface ImgImagingsRow {
        Id?: number;
        VisitId?: number;
        ImagingId?: number;
        TestImage?: string;
        Note?: string;
        UserId?: number;
        Updated?: string;
        MRID?: number;
        ImagingName?: string;
        MRN?: string;
    }
    namespace ImgImagingsRow {
        const idProperty = "Id";
        const nameProperty = "TestImage";
        const localTextPrefix = "Imaging.ImgImagings";
        const enum Fields {
            Id = "Id",
            VisitId = "VisitId",
            ImagingId = "ImagingId",
            TestImage = "TestImage",
            Note = "Note",
            UserId = "UserId",
            Updated = "Updated",
            MRID = "MRID",
            ImagingName = "ImagingName",
            MRN = "MRN"
        }
    }
}
declare namespace EMR.Imaging {
    namespace ImgImagingsService {
        const baseUrl = "Imaging/ImgImagings";
        function Create(request: Serenity.SaveRequest<ImgImagingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImgImagingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImgImagingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImgImagingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Imaging/ImgImagings/Create",
            Update = "Imaging/ImgImagings/Update",
            Delete = "Imaging/ImgImagings/Delete",
            Retrieve = "Imaging/ImgImagings/Retrieve",
            List = "Imaging/ImgImagings/List"
        }
    }
}
declare namespace EMR.LabTest {
}
declare namespace EMR.LabTest {
    interface LabPatientsForm {
        Mrn: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        DateOfBirth: Serenity.DateEditor;
        AgeInYear: Serenity.IntegerEditor;
        EthnicityId: Serenity.LookupEditor;
        RefertoDoctor: Serenity.LookupEditor;
    }
    class LabPatientsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.LabTest {
    interface LabPatientsRow {
        Mrid?: number;
        Mrn?: string;
        FirstName?: string;
        LastName?: string;
        FatherName?: string;
        GenderId?: number;
        DateOfBirth?: string;
        AgeInYear?: number;
        UserId?: number;
        Updated?: string;
        EthnicityId?: number;
        RefertoDoctor?: number;
        EthnicityName?: string;
        GenderName?: string;
    }
    namespace LabPatientsRow {
        const idProperty = "Mrid";
        const nameProperty = "Mrn";
        const localTextPrefix = "LabTest.LabPatients";
        const enum Fields {
            Mrid = "Mrid",
            Mrn = "Mrn",
            FirstName = "FirstName",
            LastName = "LastName",
            FatherName = "FatherName",
            GenderId = "GenderId",
            DateOfBirth = "DateOfBirth",
            AgeInYear = "AgeInYear",
            UserId = "UserId",
            Updated = "Updated",
            EthnicityId = "EthnicityId",
            RefertoDoctor = "RefertoDoctor",
            EthnicityName = "EthnicityName",
            GenderName = "GenderName"
        }
    }
}
declare namespace EMR.LabTest {
    namespace LabPatientsService {
        const baseUrl = "LabTest/LabPatients";
        function Create(request: Serenity.SaveRequest<LabPatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LabPatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LabPatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LabPatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "LabTest/LabPatients/Create",
            Update = "LabTest/LabPatients/Update",
            Delete = "LabTest/LabPatients/Delete",
            Retrieve = "LabTest/LabPatients/Retrieve",
            List = "LabTest/LabPatients/List"
        }
    }
}
declare namespace EMR.LabTest {
}
declare namespace EMR.LabTest {
    interface LabTestsForm {
        VisitId: Serenity.StringEditor;
        TestTypeId: Serenity.LookupEditor;
        LabTestId: Serenity.LookupEditor;
        NormalRange: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        Result: Serenity.StringEditor;
        LabDateTime: Serenity.DateTimeEditor;
        SlabDate: Common.ShamsiDatePickerEditor;
    }
    class LabTestsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.LabTest {
    interface LabTestsRow {
        Id?: number;
        VisitId?: number;
        LabTestId?: number;
        Result?: string;
        NormalRange?: string;
        Unit?: string;
        UserId?: number;
        Updated?: string;
        LabDateTime?: string;
        SlabDate?: string;
        TestTypeId?: number;
        VisitMrid?: number;
        LabTestName?: string;
        TestTypeName?: string;
    }
    namespace LabTestsRow {
        const idProperty = "Id";
        const nameProperty = "Result";
        const localTextPrefix = "LabTest.LabTests";
        const enum Fields {
            Id = "Id",
            VisitId = "VisitId",
            LabTestId = "LabTestId",
            Result = "Result",
            NormalRange = "NormalRange",
            Unit = "Unit",
            UserId = "UserId",
            Updated = "Updated",
            LabDateTime = "LabDateTime",
            SlabDate = "SlabDate",
            TestTypeId = "TestTypeId",
            VisitMrid = "VisitMrid",
            LabTestName = "LabTestName",
            TestTypeName = "TestTypeName"
        }
    }
}
declare namespace EMR.LabTest {
    namespace LabTestsService {
        const baseUrl = "LabTest/LabTests";
        function Create(request: Serenity.SaveRequest<LabTestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LabTestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LabTestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LabTestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "LabTest/LabTests/Create",
            Update = "LabTest/LabTests/Update",
            Delete = "LabTest/LabTests/Delete",
            Retrieve = "LabTest/LabTests/Retrieve",
            List = "LabTest/LabTests/List"
        }
    }
}
declare namespace EMR.LabTest {
}
declare namespace EMR.LabTest {
    interface LabvisitsForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        OccupationId: Serenity.LookupEditor;
        MaritalStatusId: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        TypeofvisitId: Serenity.LookupEditor;
        DateOfVisit: Serenity.DateEditor;
        CycleId: Serenity.LookupEditor;
    }
    class LabvisitsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.LabTest {
    interface LabvisitsRow {
        VisitId?: number;
        Mrid?: number;
        OccupationId?: number;
        MaritalStatusId?: number;
        DateOfVisit?: string;
        PhoneNumber?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        UserId?: number;
        Updated?: string;
        TypeofvisitId?: number;
        OccupationName?: string;
        MaritalStatusName?: string;
        ProvinceName?: string;
        DistrictName?: string;
        MRN?: string;
        Typeofvisit?: string;
        CycleId?: number;
    }
    namespace LabvisitsRow {
        const idProperty = "VisitId";
        const nameProperty = "PhoneNumber";
        const localTextPrefix = "LabTest.Labvisits";
        const enum Fields {
            VisitId = "VisitId",
            Mrid = "Mrid",
            OccupationId = "OccupationId",
            MaritalStatusId = "MaritalStatusId",
            DateOfVisit = "DateOfVisit",
            PhoneNumber = "PhoneNumber",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            UserId = "UserId",
            Updated = "Updated",
            TypeofvisitId = "TypeofvisitId",
            OccupationName = "OccupationName",
            MaritalStatusName = "MaritalStatusName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName",
            MRN = "MRN",
            Typeofvisit = "Typeofvisit",
            CycleId = "CycleId"
        }
    }
}
declare namespace EMR.LabTest {
    namespace LabvisitsService {
        const baseUrl = "LabTest/Labvisits";
        function Create(request: Serenity.SaveRequest<LabvisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LabvisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LabvisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LabvisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "LabTest/Labvisits/Create",
            Update = "LabTest/Labvisits/Update",
            Delete = "LabTest/Labvisits/Delete",
            Retrieve = "LabTest/Labvisits/Retrieve",
            List = "LabTest/Labvisits/List"
        }
    }
}
declare namespace EMR.Locations {
}
declare namespace EMR.Locations {
    interface DistrictsForm {
        DistrictId: Serenity.IntegerEditor;
        DistrictEng: Serenity.StringEditor;
        DistrictDari: Serenity.StringEditor;
        DistrictPashto: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
    }
    class DistrictsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Locations {
    interface DistrictsRow {
        ProvinceId?: number;
        DistrictId?: number;
        DistrictEng?: string;
        DistrictDari?: string;
        DistrictPashto?: string;
        ProvinceEng?: string;
        ProvinceDari?: string;
        ProvincePashto?: string;
        DistrictName?: string;
    }
    namespace DistrictsRow {
        const idProperty = "DistrictId";
        const nameProperty = "DistrictName";
        const localTextPrefix = "Locations.Districts";
        const lookupKey = "Locations.Districts";
        function getLookup(): Q.Lookup<DistrictsRow>;
        const enum Fields {
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            DistrictEng = "DistrictEng",
            DistrictDari = "DistrictDari",
            DistrictPashto = "DistrictPashto",
            ProvinceEng = "ProvinceEng",
            ProvinceDari = "ProvinceDari",
            ProvincePashto = "ProvincePashto",
            DistrictName = "DistrictName"
        }
    }
}
declare namespace EMR.Locations {
    namespace DistrictsService {
        const baseUrl = "Locations/Districts";
        function Create(request: Serenity.SaveRequest<DistrictsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DistrictsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DistrictsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DistrictsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Locations/Districts/Create",
            Update = "Locations/Districts/Update",
            Delete = "Locations/Districts/Delete",
            Retrieve = "Locations/Districts/Retrieve",
            List = "Locations/Districts/List"
        }
    }
}
declare namespace EMR.Locations {
}
declare namespace EMR.Locations {
    interface FacilityInfoForm {
        FacilityId: Serenity.IntegerEditor;
        DistrictId: Serenity.LookupEditor;
        FacilityName: Serenity.StringEditor;
        FacilityNameDari: Serenity.StringEditor;
        FacilityNamePashto: Serenity.StringEditor;
        FacilityType: Serenity.LookupEditor;
        ViliCode: Serenity.StringEditor;
        GrantId: Serenity.StringEditor;
        Lat: Serenity.DecimalEditor;
        Lon: Serenity.DecimalEditor;
        Implementer: Serenity.StringEditor;
        TenantId: Serenity.LookupEditor;
    }
    class FacilityInfoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Locations {
    interface FacilityInfoReferRow {
        FacilityId?: number;
        FacilityName?: string;
        FacilityNameDari?: string;
        FacilityNamePashto?: string;
        FacilityFullName?: string;
    }
    namespace FacilityInfoReferRow {
        const idProperty = "FacilityId";
        const nameProperty = "FacilityFullName";
        const localTextPrefix = "Locations.FacilityInfoRefer";
        const lookupKey = "Locations.FacilityInfoRefer";
        function getLookup(): Q.Lookup<FacilityInfoReferRow>;
        const enum Fields {
            FacilityId = "FacilityId",
            FacilityName = "FacilityName",
            FacilityNameDari = "FacilityNameDari",
            FacilityNamePashto = "FacilityNamePashto",
            FacilityFullName = "FacilityFullName"
        }
    }
}
declare namespace EMR.Locations {
    interface FacilityInfoRow {
        FacilityId?: number;
        DistrictId?: number;
        ViliCode?: string;
        FacilityName?: string;
        FacilityNameDari?: string;
        FacilityNamePashto?: string;
        FacilityType?: number;
        GrantId?: string;
        Lat?: number;
        Lon?: number;
        GpsLattitude?: number;
        GpsLongtitude?: number;
        Implementer?: string;
        FacilityFullName?: string;
        DistProvinceId?: number;
        DistrictEng?: string;
        DistrictDari?: string;
        DistrictPashto?: string;
        FacilityTypeFacType?: string;
        FacilityTypeFacTypeDari?: string;
        FacilityTypeFacTypePashto?: string;
        ProvinAbbrv?: string;
        NoOfPatients?: number;
        TenantId?: number;
    }
    namespace FacilityInfoRow {
        const idProperty = "FacilityId";
        const nameProperty = "FacilityFullName";
        const localTextPrefix = "Locations.FacilityInfo";
        const lookupKey = "Locations.FacilityInfo";
        function getLookup(): Q.Lookup<FacilityInfoRow>;
        const enum Fields {
            FacilityId = "FacilityId",
            DistrictId = "DistrictId",
            ViliCode = "ViliCode",
            FacilityName = "FacilityName",
            FacilityNameDari = "FacilityNameDari",
            FacilityNamePashto = "FacilityNamePashto",
            FacilityType = "FacilityType",
            GrantId = "GrantId",
            Lat = "Lat",
            Lon = "Lon",
            GpsLattitude = "GpsLattitude",
            GpsLongtitude = "GpsLongtitude",
            Implementer = "Implementer",
            FacilityFullName = "FacilityFullName",
            DistProvinceId = "DistProvinceId",
            DistrictEng = "DistrictEng",
            DistrictDari = "DistrictDari",
            DistrictPashto = "DistrictPashto",
            FacilityTypeFacType = "FacilityTypeFacType",
            FacilityTypeFacTypeDari = "FacilityTypeFacTypeDari",
            FacilityTypeFacTypePashto = "FacilityTypeFacTypePashto",
            ProvinAbbrv = "ProvinAbbrv",
            NoOfPatients = "NoOfPatients",
            TenantId = "TenantId"
        }
    }
}
declare namespace EMR.Locations {
    namespace FacilityInfoService {
        const baseUrl = "Locations/FacilityInfo";
        function Create(request: Serenity.SaveRequest<FacilityInfoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FacilityInfoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FacilityInfoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FacilityInfoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Locations/FacilityInfo/Create",
            Update = "Locations/FacilityInfo/Update",
            Delete = "Locations/FacilityInfo/Delete",
            Retrieve = "Locations/FacilityInfo/Retrieve",
            List = "Locations/FacilityInfo/List"
        }
    }
}
declare namespace EMR.Locations {
}
declare namespace EMR.Locations {
    interface FacilityTypesForm {
        FacTypeCode: Serenity.IntegerEditor;
        FacType: Serenity.StringEditor;
        FacTypeDari: Serenity.StringEditor;
        FacTypePashto: Serenity.StringEditor;
    }
    class FacilityTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Locations {
    interface FacilityTypesRow {
        FacTypeCode?: number;
        FacType?: string;
        FacTypeDari?: string;
        FacTypePashto?: string;
    }
    namespace FacilityTypesRow {
        const idProperty = "FacTypeCode";
        const nameProperty = "FacType";
        const localTextPrefix = "Locations.FacilityTypes";
        const lookupKey = "Locations.FacilityTypes";
        function getLookup(): Q.Lookup<FacilityTypesRow>;
        const enum Fields {
            FacTypeCode = "FacTypeCode",
            FacType = "FacType",
            FacTypeDari = "FacTypeDari",
            FacTypePashto = "FacTypePashto"
        }
    }
}
declare namespace EMR.Locations {
    namespace FacilityTypesService {
        const baseUrl = "Locations/FacilityTypes";
        function Create(request: Serenity.SaveRequest<FacilityTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FacilityTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FacilityTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FacilityTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Locations/FacilityTypes/Create",
            Update = "Locations/FacilityTypes/Update",
            Delete = "Locations/FacilityTypes/Delete",
            Retrieve = "Locations/FacilityTypes/Retrieve",
            List = "Locations/FacilityTypes/List"
        }
    }
}
declare namespace EMR.Locations {
}
declare namespace EMR.Locations {
    interface ProvincesForm {
        ProvinceEng: Serenity.StringEditor;
        ProvinceDari: Serenity.StringEditor;
        ProvincePashto: Serenity.StringEditor;
        ProvPop: Serenity.IntegerEditor;
        ProvinceAbbrv: Serenity.StringEditor;
    }
    class ProvincesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Locations {
    interface ProvincesRow {
        ProvinceId?: number;
        ProvinceEng?: string;
        ProvinceDari?: string;
        ProvPop?: number;
        ProvincePashto?: string;
        ProvinceAbbrv?: string;
        ProvinceName?: string;
    }
    namespace ProvincesRow {
        const idProperty = "ProvinceId";
        const nameProperty = "ProvinceName";
        const localTextPrefix = "Locations.Provinces";
        const lookupKey = "Locations.Provinces";
        function getLookup(): Q.Lookup<ProvincesRow>;
        const enum Fields {
            ProvinceId = "ProvinceId",
            ProvinceEng = "ProvinceEng",
            ProvinceDari = "ProvinceDari",
            ProvPop = "ProvPop",
            ProvincePashto = "ProvincePashto",
            ProvinceAbbrv = "ProvinceAbbrv",
            ProvinceName = "ProvinceName"
        }
    }
}
declare namespace EMR.Locations {
    namespace ProvincesService {
        const baseUrl = "Locations/Provinces";
        function Create(request: Serenity.SaveRequest<ProvincesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProvincesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProvincesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProvincesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Locations/Provinces/Create",
            Update = "Locations/Provinces/Update",
            Delete = "Locations/Provinces/Delete",
            Retrieve = "Locations/Provinces/Retrieve",
            List = "Locations/Provinces/List"
        }
    }
}
declare namespace EMR.Medadmins {
}
declare namespace EMR.Medadmins {
    interface BloodTransfusionsForm {
        VisitId: Serenity.StringEditor;
        BloodGroupId: Serenity.LookupEditor;
        Recomquantity: Serenity.IntegerEditor;
        Transmitquantity: Serenity.IntegerEditor;
        BloodstatusId: Serenity.LookupEditor;
        RecDateTime: Serenity.DateTimeEditor;
        SRecDate: Serenity.StringEditor;
        TransDateTime: Serenity.DateTimeEditor;
        STransDate: Common.ShamsiDatePickerEditor;
    }
    class BloodTransfusionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Medadmins {
    interface BloodTransfusionsRow {
        TransfusionId?: number;
        VisitId?: number;
        BloodGroupId?: number;
        Recomquantity?: number;
        Transmitquantity?: number;
        Bloodstatus?: string;
        RecDateTime?: string;
        SRecDate?: string;
        TransDateTime?: string;
        STransDate?: string;
        UserId?: number;
        Updated?: string;
        TranUserId?: number;
        TransUpdated?: string;
        BloodstatusId?: number;
        BloodGroup?: string;
    }
    namespace BloodTransfusionsRow {
        const idProperty = "TransfusionId";
        const nameProperty = "Bloodstatus";
        const localTextPrefix = "Medadmins.BloodTransfusions";
        const enum Fields {
            TransfusionId = "TransfusionId",
            VisitId = "VisitId",
            BloodGroupId = "BloodGroupId",
            Recomquantity = "Recomquantity",
            Transmitquantity = "Transmitquantity",
            Bloodstatus = "Bloodstatus",
            RecDateTime = "RecDateTime",
            SRecDate = "SRecDate",
            TransDateTime = "TransDateTime",
            STransDate = "STransDate",
            UserId = "UserId",
            Updated = "Updated",
            TranUserId = "TranUserId",
            TransUpdated = "TransUpdated",
            BloodstatusId = "BloodstatusId",
            BloodGroup = "BloodGroup"
        }
    }
}
declare namespace EMR.Medadmins {
    namespace BloodTransfusionsService {
        const baseUrl = "Medadmins/BloodTransfusions";
        function Create(request: Serenity.SaveRequest<BloodTransfusionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BloodTransfusionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BloodTransfusionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BloodTransfusionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Medadmins/BloodTransfusions/Create",
            Update = "Medadmins/BloodTransfusions/Update",
            Delete = "Medadmins/BloodTransfusions/Delete",
            Retrieve = "Medadmins/BloodTransfusions/Retrieve",
            List = "Medadmins/BloodTransfusions/List"
        }
    }
}
declare namespace EMR.Medadmins {
}
declare namespace EMR.Medadmins {
    interface MedadministrationForm {
        OrderId: Serenity.IntegerEditor;
        Medicine: Serenity.StringEditor;
        Quantity: Serenity.IntegerEditor;
        Comment: Serenity.HtmlNoteContentEditor;
        RecDateTime: Serenity.DateTimeEditor;
        RecSDate: Serenity.StringEditor;
        AppDateTime: Serenity.DateTimeEditor;
        AppSDate: Common.ShamsiDatePickerEditor;
    }
    class MedadministrationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Medadmins {
    interface MedadministrationRow {
        MedadminId?: number;
        OrderId?: number;
        Comment?: string;
        Quantity?: number;
        RecDateTime?: string;
        RecSDate?: string;
        UserId?: number;
        Updated?: string;
        AppDateTime?: string;
        AppSDate?: string;
        AppUserId?: number;
        AppUpdated?: string;
        Medicine?: string;
    }
    namespace MedadministrationRow {
        const idProperty = "MedadminId";
        const nameProperty = "Comment";
        const localTextPrefix = "Medadmins.Medadministration";
        const enum Fields {
            MedadminId = "MedadminId",
            OrderId = "OrderId",
            Comment = "Comment",
            Quantity = "Quantity",
            RecDateTime = "RecDateTime",
            RecSDate = "RecSDate",
            UserId = "UserId",
            Updated = "Updated",
            AppDateTime = "AppDateTime",
            AppSDate = "AppSDate",
            AppUserId = "AppUserId",
            AppUpdated = "AppUpdated",
            Medicine = "Medicine"
        }
    }
}
declare namespace EMR.Medadmins {
    namespace MedadministrationService {
        const baseUrl = "Medadmins/Medadministration";
        function Create(request: Serenity.SaveRequest<MedadministrationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedadministrationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedadministrationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedadministrationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Medadmins/Medadministration/Create",
            Update = "Medadmins/Medadministration/Update",
            Delete = "Medadmins/Medadministration/Delete",
            Retrieve = "Medadmins/Medadministration/Retrieve",
            List = "Medadmins/Medadministration/List"
        }
    }
}
declare namespace EMR.Medadmins {
}
declare namespace EMR.Medadmins {
    interface MedadminpatientsForm {
        Mrn: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        DateOfBirth: Serenity.DateEditor;
        AgeInYear: Serenity.IntegerEditor;
        EthnicityId: Serenity.LookupEditor;
        RefertoDoctor: Serenity.LookupEditor;
    }
    class MedadminpatientsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Medadmins {
    interface MedadminpatientsRow {
        Mrid?: number;
        Mrn?: string;
        FirstName?: string;
        LastName?: string;
        FatherName?: string;
        GenderId?: number;
        DateOfBirth?: string;
        AgeInYear?: number;
        UserId?: number;
        Updated?: string;
        EthnicityId?: number;
        RefertoDoctor?: number;
        EthnicityName?: string;
        GenderName?: string;
    }
    namespace MedadminpatientsRow {
        const idProperty = "Mrid";
        const nameProperty = "Mrn";
        const localTextPrefix = "Medadmins.Medadminpatients";
        const enum Fields {
            Mrid = "Mrid",
            Mrn = "Mrn",
            FirstName = "FirstName",
            LastName = "LastName",
            FatherName = "FatherName",
            GenderId = "GenderId",
            DateOfBirth = "DateOfBirth",
            AgeInYear = "AgeInYear",
            UserId = "UserId",
            Updated = "Updated",
            EthnicityId = "EthnicityId",
            RefertoDoctor = "RefertoDoctor",
            EthnicityName = "EthnicityName",
            GenderName = "GenderName"
        }
    }
}
declare namespace EMR.Medadmins {
    namespace MedadminpatientsService {
        const baseUrl = "Medadmins/Medadminpatients";
        function Create(request: Serenity.SaveRequest<MedadminpatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedadminpatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedadminpatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedadminpatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Medadmins/Medadminpatients/Create",
            Update = "Medadmins/Medadminpatients/Update",
            Delete = "Medadmins/Medadminpatients/Delete",
            Retrieve = "Medadmins/Medadminpatients/Retrieve",
            List = "Medadmins/Medadminpatients/List"
        }
    }
}
declare namespace EMR.Medadmins {
}
declare namespace EMR.Medadmins {
    interface MedvisitsForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        OccupationId: Serenity.LookupEditor;
        MaritalStatusId: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        TypeofvisitId: Serenity.LookupEditor;
        DateOfVisit: Serenity.DateEditor;
        CycleId: Serenity.LookupEditor;
    }
    class MedvisitsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Medadmins {
    interface MedvisitsRow {
        VisitId?: number;
        Mrid?: number;
        OccupationId?: number;
        MaritalStatusId?: number;
        DateOfVisit?: string;
        PhoneNumber?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        UserId?: number;
        Updated?: string;
        TypeofvisitId?: number;
        OccupationName?: string;
        MaritalStatusName?: string;
        ProvinceName?: string;
        DistrictName?: string;
        MRN?: string;
        Typeofvisit?: string;
        CycleId?: number;
    }
    namespace MedvisitsRow {
        const idProperty = "VisitId";
        const nameProperty = "PhoneNumber";
        const localTextPrefix = "Medadmins.Medvisits";
        const enum Fields {
            VisitId = "VisitId",
            Mrid = "Mrid",
            OccupationId = "OccupationId",
            MaritalStatusId = "MaritalStatusId",
            DateOfVisit = "DateOfVisit",
            PhoneNumber = "PhoneNumber",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            UserId = "UserId",
            Updated = "Updated",
            TypeofvisitId = "TypeofvisitId",
            OccupationName = "OccupationName",
            MaritalStatusName = "MaritalStatusName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName",
            MRN = "MRN",
            Typeofvisit = "Typeofvisit",
            CycleId = "CycleId"
        }
    }
}
declare namespace EMR.Medadmins {
    namespace MedvisitsService {
        const baseUrl = "Medadmins/Medvisits";
        function Create(request: Serenity.SaveRequest<MedvisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedvisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedvisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedvisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Medadmins/Medvisits/Create",
            Update = "Medadmins/Medvisits/Update",
            Delete = "Medadmins/Medvisits/Delete",
            Retrieve = "Medadmins/Medvisits/Retrieve",
            List = "Medadmins/Medvisits/List"
        }
    }
}
declare namespace EMR.Medadmins {
}
declare namespace EMR.Medadmins {
    interface MPrescriptionsForm {
        VisitId: Serenity.StringEditor;
        MedicineId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        DailyDose: Serenity.StringEditor;
        Comment: Serenity.StringEditor;
    }
    class MPrescriptionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Medadmins {
    interface MPrescriptionsRow {
        OrderId?: number;
        VisitId?: number;
        MedicineId?: number;
        Quantity?: number;
        DailyDose?: string;
        Comment?: string;
        UserId?: number;
        Updated?: string;
        MedicineName?: string;
    }
    namespace MPrescriptionsRow {
        const idProperty = "OrderId";
        const nameProperty = "DailyDose";
        const localTextPrefix = "Medadmins.MPrescriptions";
        const enum Fields {
            OrderId = "OrderId",
            VisitId = "VisitId",
            MedicineId = "MedicineId",
            Quantity = "Quantity",
            DailyDose = "DailyDose",
            Comment = "Comment",
            UserId = "UserId",
            Updated = "Updated",
            MedicineName = "MedicineName"
        }
    }
}
declare namespace EMR.Medadmins {
    namespace MPrescriptionsService {
        const baseUrl = "Medadmins/MPrescriptions";
        function Create(request: Serenity.SaveRequest<MPrescriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MPrescriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MPrescriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MPrescriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Medadmins/MPrescriptions/Create",
            Update = "Medadmins/MPrescriptions/Update",
            Delete = "Medadmins/MPrescriptions/Delete",
            Retrieve = "Medadmins/MPrescriptions/Retrieve",
            List = "Medadmins/MPrescriptions/List"
        }
    }
}
declare namespace EMR.Medadmins {
}
declare namespace EMR.Medadmins {
    interface VisitsmedicineForm {
        VisitId: Serenity.StringEditor;
        Mrid: Serenity.LookupEditor;
        Medicine: Serenity.StringEditor;
    }
    class VisitsmedicineForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Medadmins {
    interface VisitsmedicineRow {
        OrderId?: number;
        VisitId?: number;
        Mrid?: number;
        Medicine?: string;
    }
    namespace VisitsmedicineRow {
        const idProperty = "OrderId";
        const nameProperty = "Medicine";
        const localTextPrefix = "Medadmins.Visitsmedicine";
        const lookupKey = "Configs.VisitsMedicine";
        function getLookup(): Q.Lookup<VisitsmedicineRow>;
        const enum Fields {
            OrderId = "OrderId",
            VisitId = "VisitId",
            Mrid = "Mrid",
            Medicine = "Medicine"
        }
    }
}
declare namespace EMR.Medadmins {
    namespace VisitsmedicineService {
        const baseUrl = "Medadmins/Visitsmedicine";
        function Create(request: Serenity.SaveRequest<VisitsmedicineRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VisitsmedicineRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VisitsmedicineRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VisitsmedicineRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Medadmins/Visitsmedicine/Create",
            Update = "Medadmins/Visitsmedicine/Update",
            Delete = "Medadmins/Visitsmedicine/Delete",
            Retrieve = "Medadmins/Visitsmedicine/Retrieve",
            List = "Medadmins/Visitsmedicine/List"
        }
    }
}
declare namespace EMR.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace EMR.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace EMR.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace EMR.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace EMR.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface DiagnosisForm {
        VisitId: Serenity.StringEditor;
        StageId: Serenity.LookupEditor;
        SelfDiagnosisId: Serenity.LookupEditor;
        SelfDiagnosisDate: Serenity.DateEditor;
        InitialDiagnosisId: Serenity.LookupEditor;
        InitialDiagnosisDate: Serenity.DateEditor;
        TopomainId: Serenity.LookupEditor;
        ToposubId: Serenity.LookupEditor;
        FinalDiagnosisId: Serenity.LookupEditor;
        FinalDiagnosisDate: Serenity.DateEditor;
        ComorbidityId: Serenity.LookupEditor;
        Comorbidity2Id: Serenity.LookupEditor;
        Comorbidity3Id: Serenity.LookupEditor;
        Note: Serenity.HtmlContentEditor;
    }
    class DiagnosisForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface DiagnosisRow {
        DiagnosisId?: number;
        VisitId?: number;
        SelfDiagnosisId?: number;
        SelfDiagnosisDate?: string;
        InitialDiagnosisId?: number;
        InitialDiagnosisDate?: string;
        FinalDiagnosisId?: number;
        FinalDiagnosisDate?: string;
        ComorbidityId?: number;
        Comorbidity2Id?: number;
        Comorbidity3Id?: number;
        UserId?: number;
        Updated?: string;
        TopomainId?: number;
        ToposubId?: number;
        StageId?: number;
        Note?: string;
        TopoMain?: string;
        TopoSub?: string;
        SelfDiagnosis?: string;
        InitialDiagnosis?: string;
        FinalDiagnosis?: string;
        Comorbidity?: string;
        VisitMrid?: number;
    }
    namespace DiagnosisRow {
        const idProperty = "DiagnosisId";
        const localTextPrefix = "OPD.Diagnosis";
        const enum Fields {
            DiagnosisId = "DiagnosisId",
            VisitId = "VisitId",
            SelfDiagnosisId = "SelfDiagnosisId",
            SelfDiagnosisDate = "SelfDiagnosisDate",
            InitialDiagnosisId = "InitialDiagnosisId",
            InitialDiagnosisDate = "InitialDiagnosisDate",
            FinalDiagnosisId = "FinalDiagnosisId",
            FinalDiagnosisDate = "FinalDiagnosisDate",
            ComorbidityId = "ComorbidityId",
            Comorbidity2Id = "Comorbidity2Id",
            Comorbidity3Id = "Comorbidity3Id",
            UserId = "UserId",
            Updated = "Updated",
            TopomainId = "TopomainId",
            ToposubId = "ToposubId",
            StageId = "StageId",
            Note = "Note",
            TopoMain = "TopoMain",
            TopoSub = "TopoSub",
            SelfDiagnosis = "SelfDiagnosis",
            InitialDiagnosis = "InitialDiagnosis",
            FinalDiagnosis = "FinalDiagnosis",
            Comorbidity = "Comorbidity",
            VisitMrid = "VisitMrid"
        }
    }
}
declare namespace EMR.OPD {
    namespace DiagnosisService {
        const baseUrl = "OPD/Diagnosis";
        function Create(request: Serenity.SaveRequest<DiagnosisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DiagnosisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DiagnosisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DiagnosisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/Diagnosis/Create",
            Update = "OPD/Diagnosis/Update",
            Delete = "OPD/Diagnosis/Delete",
            Retrieve = "OPD/Diagnosis/Retrieve",
            List = "OPD/Diagnosis/List"
        }
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface ImagingsForm {
        VisitId: Serenity.StringEditor;
        ImagingId: Serenity.LookupEditor;
        TestImage: Serenity.MultipleImageUploadEditor;
        Note: Serenity.HtmlReportContentEditor;
    }
    class ImagingsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface ImagingsRow {
        Id?: number;
        VisitId?: number;
        ImagingId?: number;
        TestImage?: string;
        Note?: string;
        UserId?: number;
        Updated?: string;
        ImagingName?: string;
    }
    namespace ImagingsRow {
        const idProperty = "Id";
        const nameProperty = "TestImage";
        const localTextPrefix = "OPD.Imagings";
        const enum Fields {
            Id = "Id",
            VisitId = "VisitId",
            ImagingId = "ImagingId",
            TestImage = "TestImage",
            Note = "Note",
            UserId = "UserId",
            Updated = "Updated",
            ImagingName = "ImagingName"
        }
    }
}
declare namespace EMR.OPD {
    namespace ImagingsService {
        const baseUrl = "OPD/Imagings";
        function Create(request: Serenity.SaveRequest<ImagingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImagingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImagingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImagingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/Imagings/Create",
            Update = "OPD/Imagings/Update",
            Delete = "OPD/Imagings/Delete",
            Retrieve = "OPD/Imagings/Retrieve",
            List = "OPD/Imagings/List"
        }
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface LabTestForm {
        VisitId: Serenity.StringEditor;
        TestTypeId: Serenity.LookupEditor;
        LabTestId: Serenity.LookupEditor;
        NormalRange: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        Result: Serenity.StringEditor;
        LabDateTime: Serenity.DateEditor;
        SlabDate: Serenity.StringEditor;
    }
    class LabTestForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface LabTestRow {
        Id?: number;
        VisitId?: number;
        LabTestId?: number;
        Result?: string;
        NormalRange?: string;
        Unit?: string;
        UserId?: number;
        Updated?: string;
        LabDateTime?: string;
        SlabDate?: string;
        TestTypeId?: number;
        VisitMrid?: number;
        LabTestName?: string;
        TestTypeName?: string;
    }
    namespace LabTestRow {
        const idProperty = "Id";
        const nameProperty = "Result";
        const localTextPrefix = "OPD.LabTest";
        const enum Fields {
            Id = "Id",
            VisitId = "VisitId",
            LabTestId = "LabTestId",
            Result = "Result",
            NormalRange = "NormalRange",
            Unit = "Unit",
            UserId = "UserId",
            Updated = "Updated",
            LabDateTime = "LabDateTime",
            SlabDate = "SlabDate",
            TestTypeId = "TestTypeId",
            VisitMrid = "VisitMrid",
            LabTestName = "LabTestName",
            TestTypeName = "TestTypeName"
        }
    }
}
declare namespace EMR.OPD {
    namespace LabTestService {
        const baseUrl = "OPD/LabTest";
        function Create(request: Serenity.SaveRequest<LabTestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LabTestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LabTestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LabTestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/LabTest/Create",
            Update = "OPD/LabTest/Update",
            Delete = "OPD/LabTest/Delete",
            Retrieve = "OPD/LabTest/Retrieve",
            List = "OPD/LabTest/List"
        }
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface OpdBloodTransfusionsForm {
        VisitId: Serenity.StringEditor;
        BloodGroupId: Serenity.LookupEditor;
        Recomquantity: Serenity.IntegerEditor;
        Transmitquantity: Serenity.IntegerEditor;
        BloodstatusId: Serenity.LookupEditor;
        RecDateTime: Serenity.DateTimeEditor;
        SRecDate: Common.ShamsiDatePickerEditor;
        TransDateTime: Serenity.DateTimeEditor;
        STransDate: Serenity.StringEditor;
    }
    class OpdBloodTransfusionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface OpdBloodTransfusionsRow {
        TransfusionId?: number;
        VisitId?: number;
        BloodGroupId?: number;
        Recomquantity?: number;
        Transmitquantity?: number;
        Bloodstatus?: string;
        RecDateTime?: string;
        SRecDate?: string;
        TransDateTime?: string;
        STransDate?: string;
        UserId?: number;
        Updated?: string;
        TranUserId?: number;
        TransUpdated?: string;
        BloodstatusId?: number;
        BloodGroup?: string;
    }
    namespace OpdBloodTransfusionsRow {
        const idProperty = "TransfusionId";
        const nameProperty = "Bloodstatus";
        const localTextPrefix = "Medadmins.OpdBloodTransfusions";
        const enum Fields {
            TransfusionId = "TransfusionId",
            VisitId = "VisitId",
            BloodGroupId = "BloodGroupId",
            Recomquantity = "Recomquantity",
            Transmitquantity = "Transmitquantity",
            Bloodstatus = "Bloodstatus",
            RecDateTime = "RecDateTime",
            SRecDate = "SRecDate",
            TransDateTime = "TransDateTime",
            STransDate = "STransDate",
            UserId = "UserId",
            Updated = "Updated",
            TranUserId = "TranUserId",
            TransUpdated = "TransUpdated",
            BloodstatusId = "BloodstatusId",
            BloodGroup = "BloodGroup"
        }
    }
}
declare namespace EMR.OPD {
    namespace OpdBloodTransfusionsService {
        const baseUrl = "OPD/OpdBloodTransfusions";
        function Create(request: Serenity.SaveRequest<OpdBloodTransfusionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OpdBloodTransfusionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OpdBloodTransfusionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OpdBloodTransfusionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/OpdBloodTransfusions/Create",
            Update = "OPD/OpdBloodTransfusions/Update",
            Delete = "OPD/OpdBloodTransfusions/Delete",
            Retrieve = "OPD/OpdBloodTransfusions/Retrieve",
            List = "OPD/OpdBloodTransfusions/List"
        }
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface OpdMedadministrationForm {
        OrderId: Serenity.IntegerEditor;
        Medicine: Serenity.StringEditor;
        Quantity: Serenity.IntegerEditor;
        Comment: Serenity.HtmlNoteContentEditor;
        RecDateTime: Serenity.DateTimeEditor;
        RecSDate: Common.ShamsiDatePickerEditor;
        AppDateTime: Serenity.DateTimeEditor;
        AppSDate: Serenity.StringEditor;
    }
    class OpdMedadministrationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface OpdMedadministrationRow {
        MedadminId?: number;
        OrderId?: number;
        Comment?: string;
        Quantity?: number;
        RecDateTime?: string;
        RecSDate?: string;
        UserId?: number;
        Updated?: string;
        AppDateTime?: string;
        AppSDate?: string;
        AppUserId?: number;
        AppUpdated?: string;
        Medicine?: string;
    }
    namespace OpdMedadministrationRow {
        const idProperty = "MedadminId";
        const nameProperty = "Comment";
        const localTextPrefix = "Medadmins.OpdMedadministration";
        const enum Fields {
            MedadminId = "MedadminId",
            OrderId = "OrderId",
            Comment = "Comment",
            Quantity = "Quantity",
            RecDateTime = "RecDateTime",
            RecSDate = "RecSDate",
            UserId = "UserId",
            Updated = "Updated",
            AppDateTime = "AppDateTime",
            AppSDate = "AppSDate",
            AppUserId = "AppUserId",
            AppUpdated = "AppUpdated",
            Medicine = "Medicine"
        }
    }
}
declare namespace EMR.OPD {
    namespace OpdMedadministrationService {
        const baseUrl = "OPD/OpdMedadministration";
        function Create(request: Serenity.SaveRequest<OpdMedadministrationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OpdMedadministrationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OpdMedadministrationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OpdMedadministrationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/OpdMedadministration/Create",
            Update = "OPD/OpdMedadministration/Update",
            Delete = "OPD/OpdMedadministration/Delete",
            Retrieve = "OPD/OpdMedadministration/Retrieve",
            List = "OPD/OpdMedadministration/List"
        }
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface PatientHistoryForm {
        VisitId: Serenity.StringEditor;
        HistoryId: Serenity.LookupEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }
    class PatientHistoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface PatientHistoryRow {
        Id?: number;
        VisitId?: number;
        HistoryId?: number;
        Note?: string;
        UserId?: number;
        Updated?: string;
        HistoryName?: string;
    }
    namespace PatientHistoryRow {
        const idProperty = "Id";
        const nameProperty = "Note";
        const localTextPrefix = "OPD.PatientHistory";
        const enum Fields {
            Id = "Id",
            VisitId = "VisitId",
            HistoryId = "HistoryId",
            Note = "Note",
            UserId = "UserId",
            Updated = "Updated",
            HistoryName = "HistoryName"
        }
    }
}
declare namespace EMR.OPD {
    namespace PatientHistoryService {
        const baseUrl = "OPD/PatientHistory";
        function Create(request: Serenity.SaveRequest<PatientHistoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PatientHistoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PatientHistoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PatientHistoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/PatientHistory/Create",
            Update = "OPD/PatientHistory/Update",
            Delete = "OPD/PatientHistory/Delete",
            Retrieve = "OPD/PatientHistory/Retrieve",
            List = "OPD/PatientHistory/List"
        }
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface PatientsForm {
        Mrn: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        DateOfBirth: Serenity.DateEditor;
        AgeInYear: Serenity.IntegerEditor;
        EthnicityId: Serenity.LookupEditor;
        RefertoDoctor: Serenity.LookupEditor;
    }
    class PatientsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface PatientsRow {
        Mrid?: number;
        Mrn?: string;
        FirstName?: string;
        LastName?: string;
        FatherName?: string;
        GenderId?: number;
        DateOfBirth?: string;
        AgeInYear?: number;
        UserId?: number;
        Updated?: string;
        EthnicityId?: number;
        RefertoDoctor?: number;
        EthnicityName?: string;
        GenderName?: string;
    }
    namespace PatientsRow {
        const idProperty = "Mrid";
        const nameProperty = "Mrn";
        const localTextPrefix = "OPD.Patients";
        const lookupKey = "Configs.Outpatients";
        function getLookup(): Q.Lookup<PatientsRow>;
        const enum Fields {
            Mrid = "Mrid",
            Mrn = "Mrn",
            FirstName = "FirstName",
            LastName = "LastName",
            FatherName = "FatherName",
            GenderId = "GenderId",
            DateOfBirth = "DateOfBirth",
            AgeInYear = "AgeInYear",
            UserId = "UserId",
            Updated = "Updated",
            EthnicityId = "EthnicityId",
            RefertoDoctor = "RefertoDoctor",
            EthnicityName = "EthnicityName",
            GenderName = "GenderName"
        }
    }
}
declare namespace EMR.OPD {
    namespace PatientsService {
        const baseUrl = "OPD/Patients";
        function Create(request: Serenity.SaveRequest<PatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/Patients/Create",
            Update = "OPD/Patients/Update",
            Delete = "OPD/Patients/Delete",
            Retrieve = "OPD/Patients/Retrieve",
            List = "OPD/Patients/List"
        }
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface PhysicalExaminationForm {
        VisitId: Serenity.StringEditor;
        GroupId: Serenity.LookupEditor;
        PhysExamId: Serenity.LookupEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }
    class PhysicalExaminationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface PhysicalExaminationRow {
        Id?: number;
        VisitId?: number;
        GroupId?: number;
        PhysExamId?: number;
        Note?: string;
        UserId?: number;
        Updated?: string;
        PhysExamName?: string;
        PhysExamGroup?: string;
    }
    namespace PhysicalExaminationRow {
        const idProperty = "Id";
        const nameProperty = "Note";
        const localTextPrefix = "OPD.PhysicalExamination";
        const enum Fields {
            Id = "Id",
            VisitId = "VisitId",
            GroupId = "GroupId",
            PhysExamId = "PhysExamId",
            Note = "Note",
            UserId = "UserId",
            Updated = "Updated",
            PhysExamName = "PhysExamName",
            PhysExamGroup = "PhysExamGroup"
        }
    }
}
declare namespace EMR.OPD {
    namespace PhysicalExaminationService {
        const baseUrl = "OPD/PhysicalExamination";
        function Create(request: Serenity.SaveRequest<PhysicalExaminationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PhysicalExaminationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PhysicalExaminationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PhysicalExaminationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/PhysicalExamination/Create",
            Update = "OPD/PhysicalExamination/Update",
            Delete = "OPD/PhysicalExamination/Delete",
            Retrieve = "OPD/PhysicalExamination/Retrieve",
            List = "OPD/PhysicalExamination/List"
        }
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface PrescriptionsForm {
        OrderId: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        MedicineId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        DailyDose: Serenity.StringEditor;
        Comment: Serenity.StringEditor;
    }
    class PrescriptionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface PrescriptionsRow {
        OrderId?: number;
        VisitId?: number;
        MedicineId?: number;
        Quantity?: number;
        DailyDose?: string;
        Comment?: string;
        UserId?: number;
        Updated?: string;
        MedicineName?: string;
    }
    namespace PrescriptionsRow {
        const idProperty = "OrderId";
        const nameProperty = "DailyDose";
        const localTextPrefix = "OPD.Prescriptions";
        const enum Fields {
            OrderId = "OrderId",
            VisitId = "VisitId",
            MedicineId = "MedicineId",
            Quantity = "Quantity",
            DailyDose = "DailyDose",
            Comment = "Comment",
            UserId = "UserId",
            Updated = "Updated",
            MedicineName = "MedicineName"
        }
    }
}
declare namespace EMR.OPD {
    namespace PrescriptionsService {
        const baseUrl = "OPD/Prescriptions";
        function Create(request: Serenity.SaveRequest<PrescriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PrescriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PrescriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PrescriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/Prescriptions/Create",
            Update = "OPD/Prescriptions/Update",
            Delete = "OPD/Prescriptions/Delete",
            Retrieve = "OPD/Prescriptions/Retrieve",
            List = "OPD/Prescriptions/List"
        }
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface RecommedationsForm {
        VisitId: Serenity.StringEditor;
        RecomId: Serenity.LookupEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }
    class RecommedationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface RecommedationsRow {
        RecommandationId?: number;
        RecomId?: number;
        VisitId?: number;
        Note?: string;
        UserId?: number;
        Updated?: string;
        RecomRecommandName?: string;
        VisitMrid?: number;
    }
    namespace RecommedationsRow {
        const idProperty = "RecommandationId";
        const nameProperty = "Note";
        const localTextPrefix = "OPD.Recommedations";
        const enum Fields {
            RecommandationId = "RecommandationId",
            RecomId = "RecomId",
            VisitId = "VisitId",
            Note = "Note",
            UserId = "UserId",
            Updated = "Updated",
            RecomRecommandName = "RecomRecommandName",
            VisitMrid = "VisitMrid"
        }
    }
}
declare namespace EMR.OPD {
    namespace RecommedationsService {
        const baseUrl = "OPD/Recommedations";
        function Create(request: Serenity.SaveRequest<RecommedationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RecommedationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RecommedationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RecommedationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/Recommedations/Create",
            Update = "OPD/Recommedations/Update",
            Delete = "OPD/Recommedations/Delete",
            Retrieve = "OPD/Recommedations/Retrieve",
            List = "OPD/Recommedations/List"
        }
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface VisitsForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        OccupationId: Serenity.LookupEditor;
        MaritalStatusId: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        TypeofvisitId: Serenity.LookupEditor;
        DateOfVisit: Serenity.DateEditor;
        CycleId: Serenity.LookupEditor;
    }
    class VisitsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface VisitsRow {
        VisitId?: number;
        Mrid?: number;
        OccupationId?: number;
        MaritalStatusId?: number;
        DateOfVisit?: string;
        PhoneNumber?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        UserId?: number;
        Updated?: string;
        TypeofvisitId?: number;
        OccupationName?: string;
        MaritalStatusName?: string;
        ProvinceName?: string;
        DistrictName?: string;
        MRN?: string;
        Typeofvisit?: string;
        CycleId?: number;
    }
    namespace VisitsRow {
        const idProperty = "VisitId";
        const nameProperty = "PhoneNumber";
        const localTextPrefix = "OPD.Visits";
        const enum Fields {
            VisitId = "VisitId",
            Mrid = "Mrid",
            OccupationId = "OccupationId",
            MaritalStatusId = "MaritalStatusId",
            DateOfVisit = "DateOfVisit",
            PhoneNumber = "PhoneNumber",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            UserId = "UserId",
            Updated = "Updated",
            TypeofvisitId = "TypeofvisitId",
            OccupationName = "OccupationName",
            MaritalStatusName = "MaritalStatusName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName",
            MRN = "MRN",
            Typeofvisit = "Typeofvisit",
            CycleId = "CycleId"
        }
    }
}
declare namespace EMR.OPD {
    namespace VisitsService {
        const baseUrl = "OPD/Visits";
        function Create(request: Serenity.SaveRequest<VisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/Visits/Create",
            Update = "OPD/Visits/Update",
            Delete = "OPD/Visits/Delete",
            Retrieve = "OPD/Visits/Retrieve",
            List = "OPD/Visits/List"
        }
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface VitalSignsForm {
        VisitId: Serenity.StringEditor;
        Weight: Serenity.IntegerEditor;
        Height: Serenity.IntegerEditor;
        Pulse: Serenity.IntegerEditor;
        Rr: Serenity.IntegerEditor;
        Temp: Serenity.IntegerEditor;
        Bp: Serenity.StringEditor;
        Hr: Serenity.IntegerEditor;
        O2: Serenity.IntegerEditor;
        Pain: Serenity.IntegerEditor;
        VitalDateTime: Serenity.DateTimeEditor;
        SVitalDate: Common.ShamsiDatePickerEditor;
    }
    class VitalSignsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface VitalSignsRow {
        VitalId?: number;
        VisitId?: number;
        Pulse?: number;
        Rr?: number;
        Temp?: number;
        Bp?: string;
        Weight?: number;
        Height?: number;
        Hr?: number;
        O2?: number;
        Pain?: number;
        UserId?: number;
        Updated?: string;
        VitalDateTime?: string;
        SVitalDate?: string;
    }
    namespace VitalSignsRow {
        const idProperty = "VitalId";
        const nameProperty = "Bp";
        const localTextPrefix = "OPD.VitalSigns";
        const enum Fields {
            VitalId = "VitalId",
            VisitId = "VisitId",
            Pulse = "Pulse",
            Rr = "Rr",
            Temp = "Temp",
            Bp = "Bp",
            Weight = "Weight",
            Height = "Height",
            Hr = "Hr",
            O2 = "O2",
            Pain = "Pain",
            UserId = "UserId",
            Updated = "Updated",
            VitalDateTime = "VitalDateTime",
            SVitalDate = "SVitalDate"
        }
    }
}
declare namespace EMR.OPD {
    namespace VitalSignsService {
        const baseUrl = "OPD/VitalSigns";
        function Create(request: Serenity.SaveRequest<VitalSignsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VitalSignsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VitalSignsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VitalSignsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/VitalSigns/Create",
            Update = "OPD/VitalSigns/Update",
            Delete = "OPD/VitalSigns/Delete",
            Retrieve = "OPD/VitalSigns/Retrieve",
            List = "OPD/VitalSigns/List"
        }
    }
}
declare namespace EMR.OPD {
}
declare namespace EMR.OPD {
    interface VschedulingForm {
        VisitId: Serenity.StringEditor;
        CycleId: Serenity.LookupEditor;
        PlanDate: Serenity.DateEditor;
        SPlanDate: Common.ShamsiDatePickerEditor;
        Comment: Serenity.HtmlNoteContentEditor;
    }
    class VschedulingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.OPD {
    interface VschedulingRow {
        ScheduleId?: number;
        VisitId?: number;
        CycleId?: number;
        PlanDate?: string;
        SPlanDate?: string;
        Comment?: string;
        UserId?: number;
        Updated?: string;
        CycleCyclename?: string;
    }
    namespace VschedulingRow {
        const idProperty = "ScheduleId";
        const nameProperty = "SPlanDate";
        const localTextPrefix = "OPD.Vscheduling";
        const enum Fields {
            ScheduleId = "ScheduleId",
            VisitId = "VisitId",
            CycleId = "CycleId",
            PlanDate = "PlanDate",
            SPlanDate = "SPlanDate",
            Comment = "Comment",
            UserId = "UserId",
            Updated = "Updated",
            CycleCyclename = "CycleCyclename"
        }
    }
}
declare namespace EMR.OPD {
    namespace VschedulingService {
        const baseUrl = "OPD/Vscheduling";
        function Create(request: Serenity.SaveRequest<VschedulingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VschedulingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VschedulingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VschedulingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OPD/Vscheduling/Create",
            Update = "OPD/Vscheduling/Update",
            Delete = "OPD/Vscheduling/Delete",
            Retrieve = "OPD/Vscheduling/Retrieve",
            List = "OPD/Vscheduling/List"
        }
    }
}
declare namespace EMR.Pharmacy {
}
declare namespace EMR.Pharmacy {
    interface MedicinelossesForm {
        MedicineId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        OutDate: Serenity.DateEditor;
        LosstypeId: Serenity.LookupEditor;
    }
    class MedicinelossesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Pharmacy {
    interface MedicinelossesRow {
        Id?: number;
        MedicineId?: number;
        Quantity?: number;
        OutDate?: string;
        LosstypeId?: number;
        UserId?: number;
        Updated?: string;
        MedicineBrandName?: string;
        MedicineGenericName?: string;
        MedicineFormId?: number;
        MedicineQuantity?: number;
        MedicineUnitPrice?: number;
        MedicineExpiryDate?: string;
        MedicineMid?: number;
        MedicineVid?: number;
        MedicineInDate?: string;
        MedicineReorderLevel?: number;
        MedicineQuantityUsed?: number;
        MedicineDiscontinue?: boolean;
        MedicineUserId?: number;
        MedicineUpdated?: string;
        MedicineBatchNo?: string;
        MedicineStrength?: string;
        MedicineSExpiryDate?: string;
        MedicineSInDate?: string;
        LosstypeName?: string;
    }
    namespace MedicinelossesRow {
        const idProperty = "Id";
        const localTextPrefix = "Pharmacy.Medicinelosses";
        const enum Fields {
            Id = "Id",
            MedicineId = "MedicineId",
            Quantity = "Quantity",
            OutDate = "OutDate",
            LosstypeId = "LosstypeId",
            UserId = "UserId",
            Updated = "Updated",
            MedicineBrandName = "MedicineBrandName",
            MedicineGenericName = "MedicineGenericName",
            MedicineFormId = "MedicineFormId",
            MedicineQuantity = "MedicineQuantity",
            MedicineUnitPrice = "MedicineUnitPrice",
            MedicineExpiryDate = "MedicineExpiryDate",
            MedicineMid = "MedicineMid",
            MedicineVid = "MedicineVid",
            MedicineInDate = "MedicineInDate",
            MedicineReorderLevel = "MedicineReorderLevel",
            MedicineQuantityUsed = "MedicineQuantityUsed",
            MedicineDiscontinue = "MedicineDiscontinue",
            MedicineUserId = "MedicineUserId",
            MedicineUpdated = "MedicineUpdated",
            MedicineBatchNo = "MedicineBatchNo",
            MedicineStrength = "MedicineStrength",
            MedicineSExpiryDate = "MedicineSExpiryDate",
            MedicineSInDate = "MedicineSInDate",
            LosstypeName = "LosstypeName"
        }
    }
}
declare namespace EMR.Pharmacy {
    namespace MedicinelossesService {
        const baseUrl = "Pharmacy/Medicinelosses";
        function Create(request: Serenity.SaveRequest<MedicinelossesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedicinelossesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedicinelossesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedicinelossesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Pharmacy/Medicinelosses/Create",
            Update = "Pharmacy/Medicinelosses/Update",
            Delete = "Pharmacy/Medicinelosses/Delete",
            Retrieve = "Pharmacy/Medicinelosses/Retrieve",
            List = "Pharmacy/Medicinelosses/List"
        }
    }
}
declare namespace EMR.Pharmacy {
}
declare namespace EMR.Pharmacy {
    interface MedicinesForm {
        GenericName: Serenity.StringEditor;
        BrandName: Serenity.StringEditor;
        Strength: Serenity.StringEditor;
        FormId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        BatchNo: Serenity.StringEditor;
        QuantityUsed: Serenity.IntegerEditor;
        InDate: Serenity.DateEditor;
        SInDate: Common.ShamsiDatePickerEditor;
        ExpiryDate: Serenity.DateEditor;
        SExpiryDate: Common.ShamsiDatePickerEditor;
        Mid: Serenity.LookupEditor;
        Vid: Serenity.LookupEditor;
        Discontinue: Serenity.BooleanEditor;
    }
    class MedicinesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Pharmacy {
    interface MedicinesRow {
        MedicineId?: number;
        BrandName?: string;
        GenericName?: string;
        FormId?: number;
        Strength?: string;
        Quantity?: number;
        UnitPrice?: number;
        ExpiryDate?: string;
        Mid?: number;
        Vid?: number;
        InDate?: string;
        ReorderLevel?: number;
        QuantityUsed?: number;
        Discontinue?: boolean;
        BatchNo?: string;
        SExpiryDate?: string;
        SInDate?: string;
        FormFormName?: string;
        MidManufacturerName?: string;
        VidVendorName?: string;
        MedicineName?: string;
        DaysToExpire?: number;
        Balance?: number;
        UserId?: number;
        Updated?: string;
    }
    namespace MedicinesRow {
        const idProperty = "MedicineId";
        const nameProperty = "MedicineName";
        const localTextPrefix = "Pharmacy.Medicines";
        const lookupKey = "Pharmacy.Medicines";
        function getLookup(): Q.Lookup<MedicinesRow>;
        const enum Fields {
            MedicineId = "MedicineId",
            BrandName = "BrandName",
            GenericName = "GenericName",
            FormId = "FormId",
            Strength = "Strength",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            ExpiryDate = "ExpiryDate",
            Mid = "Mid",
            Vid = "Vid",
            InDate = "InDate",
            ReorderLevel = "ReorderLevel",
            QuantityUsed = "QuantityUsed",
            Discontinue = "Discontinue",
            BatchNo = "BatchNo",
            SExpiryDate = "SExpiryDate",
            SInDate = "SInDate",
            FormFormName = "FormFormName",
            MidManufacturerName = "MidManufacturerName",
            VidVendorName = "VidVendorName",
            MedicineName = "MedicineName",
            DaysToExpire = "DaysToExpire",
            Balance = "Balance",
            UserId = "UserId",
            Updated = "Updated"
        }
    }
}
declare namespace EMR.Pharmacy {
    namespace MedicinesService {
        const baseUrl = "Pharmacy/Medicines";
        function Create(request: Serenity.SaveRequest<MedicinesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedicinesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedicinesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedicinesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Pharmacy/Medicines/Create",
            Update = "Pharmacy/Medicines/Update",
            Delete = "Pharmacy/Medicines/Delete",
            Retrieve = "Pharmacy/Medicines/Retrieve",
            List = "Pharmacy/Medicines/List"
        }
    }
}
declare namespace EMR.Pharmacy {
}
declare namespace EMR.Pharmacy {
    interface MedPatientsForm {
        Mrn: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        DateOfBirth: Serenity.DateEditor;
        AgeInYear: Serenity.IntegerEditor;
        EthnicityId: Serenity.LookupEditor;
        RefertoDoctor: Serenity.LookupEditor;
    }
    class MedPatientsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Pharmacy {
    interface MedPatientsRow {
        Mrid?: number;
        Mrn?: string;
        FirstName?: string;
        LastName?: string;
        FatherName?: string;
        GenderId?: number;
        DateOfBirth?: string;
        AgeInYear?: number;
        UserId?: number;
        Updated?: string;
        EthnicityId?: number;
        RefertoDoctor?: number;
        EthnicityName?: string;
        GenderName?: string;
    }
    namespace MedPatientsRow {
        const idProperty = "Mrid";
        const nameProperty = "Mrn";
        const localTextPrefix = "Pharmacy.MedPatients";
        const enum Fields {
            Mrid = "Mrid",
            Mrn = "Mrn",
            FirstName = "FirstName",
            LastName = "LastName",
            FatherName = "FatherName",
            GenderId = "GenderId",
            DateOfBirth = "DateOfBirth",
            AgeInYear = "AgeInYear",
            UserId = "UserId",
            Updated = "Updated",
            EthnicityId = "EthnicityId",
            RefertoDoctor = "RefertoDoctor",
            EthnicityName = "EthnicityName",
            GenderName = "GenderName"
        }
    }
}
declare namespace EMR.Pharmacy {
    namespace MedPatientsService {
        const baseUrl = "Pharmacy/MedPatients";
        function Create(request: Serenity.SaveRequest<MedPatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedPatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedPatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedPatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Pharmacy/MedPatients/Create",
            Update = "Pharmacy/MedPatients/Update",
            Delete = "Pharmacy/MedPatients/Delete",
            Retrieve = "Pharmacy/MedPatients/Retrieve",
            List = "Pharmacy/MedPatients/List"
        }
    }
}
declare namespace EMR.Pharmacy {
}
declare namespace EMR.Pharmacy {
    interface MedPrescriptionsForm {
        VisitId: Serenity.StringEditor;
        MedicineId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        DailyDose: Serenity.StringEditor;
        Comment: Serenity.StringEditor;
        InsideSale: Serenity.BooleanEditor;
    }
    class MedPrescriptionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Pharmacy {
    interface MedPrescriptionsRow {
        OrderId?: number;
        VisitId?: number;
        MedicineId?: number;
        Quantity?: number;
        DailyDose?: string;
        Comment?: string;
        UserId?: number;
        Updated?: string;
        InsideSale?: boolean;
        MedicineName?: string;
    }
    namespace MedPrescriptionsRow {
        const idProperty = "OrderId";
        const nameProperty = "DailyDose";
        const localTextPrefix = "Pharmacy.MedPrescriptions";
        const enum Fields {
            OrderId = "OrderId",
            VisitId = "VisitId",
            MedicineId = "MedicineId",
            Quantity = "Quantity",
            DailyDose = "DailyDose",
            Comment = "Comment",
            UserId = "UserId",
            Updated = "Updated",
            InsideSale = "InsideSale",
            MedicineName = "MedicineName"
        }
    }
}
declare namespace EMR.Pharmacy {
    namespace MedPrescriptionsService {
        const baseUrl = "Pharmacy/MedPrescriptions";
        function Create(request: Serenity.SaveRequest<MedPrescriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedPrescriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedPrescriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedPrescriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Pharmacy/MedPrescriptions/Create",
            Update = "Pharmacy/MedPrescriptions/Update",
            Delete = "Pharmacy/MedPrescriptions/Delete",
            Retrieve = "Pharmacy/MedPrescriptions/Retrieve",
            List = "Pharmacy/MedPrescriptions/List"
        }
    }
}
declare namespace EMR.Pharmacy {
}
declare namespace EMR.Pharmacy {
    interface MedvisitsForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        OccupationId: Serenity.LookupEditor;
        MaritalStatusId: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        TypeofvisitId: Serenity.LookupEditor;
        DateOfVisit: Serenity.DateEditor;
        CycleId: Serenity.LookupEditor;
    }
    class MedvisitsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Pharmacy {
    interface MedvisitsRow {
        VisitId?: number;
        Mrid?: number;
        OccupationId?: number;
        MaritalStatusId?: number;
        DateOfVisit?: string;
        PhoneNumber?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        UserId?: number;
        Updated?: string;
        TypeofvisitId?: number;
        OccupationName?: string;
        MaritalStatusName?: string;
        ProvinceName?: string;
        DistrictName?: string;
        MRN?: string;
        Typeofvisit?: string;
        CycleId?: number;
    }
    namespace MedvisitsRow {
        const idProperty = "VisitId";
        const nameProperty = "PhoneNumber";
        const localTextPrefix = "Pharmacy.Medvisits";
        const enum Fields {
            VisitId = "VisitId",
            Mrid = "Mrid",
            OccupationId = "OccupationId",
            MaritalStatusId = "MaritalStatusId",
            DateOfVisit = "DateOfVisit",
            PhoneNumber = "PhoneNumber",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            UserId = "UserId",
            Updated = "Updated",
            TypeofvisitId = "TypeofvisitId",
            OccupationName = "OccupationName",
            MaritalStatusName = "MaritalStatusName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName",
            MRN = "MRN",
            Typeofvisit = "Typeofvisit",
            CycleId = "CycleId"
        }
    }
}
declare namespace EMR.Pharmacy {
    namespace MedvisitsService {
        const baseUrl = "Pharmacy/Medvisits";
        function Create(request: Serenity.SaveRequest<MedvisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedvisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedvisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedvisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Pharmacy/Medvisits/Create",
            Update = "Pharmacy/Medvisits/Update",
            Delete = "Pharmacy/Medvisits/Delete",
            Retrieve = "Pharmacy/Medvisits/Retrieve",
            List = "Pharmacy/Medvisits/List"
        }
    }
}
declare namespace EMR.Register {
    interface NameslistRow {
        Id?: number;
        ShortName?: string;
        FullName?: string;
        FacilityId?: number;
    }
    namespace NameslistRow {
        const idProperty = "Id";
        const nameProperty = "FullName";
        const localTextPrefix = "Register.Nameslist";
        const lookupKey = "Register.NameslistRow";
        function getLookup(): Q.Lookup<NameslistRow>;
        const enum Fields {
            Id = "Id",
            ShortName = "ShortName",
            FullName = "FullName",
            FacilityId = "FacilityId"
        }
    }
}
declare namespace EMR.Register {
}
declare namespace EMR.Register {
    interface PatAttendantsForm {
        VisitId: Serenity.StringEditor;
        AttendantName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        Phone: Serenity.MaskedEditor;
        RelationType: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
    }
    class PatAttendantsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Register {
    interface PatAttendantsRow {
        AttendantId?: number;
        VisitId?: number;
        AttendantName?: string;
        FatherName?: string;
        GenderId?: number;
        Phone?: string;
        RelationType?: number;
        Address?: string;
        Updated?: string;
        UserId?: number;
        GenderName?: string;
        RelationName?: string;
    }
    namespace PatAttendantsRow {
        const idProperty = "AttendantId";
        const nameProperty = "AttendantName";
        const localTextPrefix = "Register.PatAttendants";
        const enum Fields {
            AttendantId = "AttendantId",
            VisitId = "VisitId",
            AttendantName = "AttendantName",
            FatherName = "FatherName",
            GenderId = "GenderId",
            Phone = "Phone",
            RelationType = "RelationType",
            Address = "Address",
            Updated = "Updated",
            UserId = "UserId",
            GenderName = "GenderName",
            RelationName = "RelationName"
        }
    }
}
declare namespace EMR.Register {
    namespace PatAttendantsService {
        const baseUrl = "Register/PatAttendants";
        function Create(request: Serenity.SaveRequest<PatAttendantsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PatAttendantsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PatAttendantsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PatAttendantsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Register/PatAttendants/Create",
            Update = "Register/PatAttendants/Update",
            Delete = "Register/PatAttendants/Delete",
            Retrieve = "Register/PatAttendants/Retrieve",
            List = "Register/PatAttendants/List"
        }
    }
}
declare namespace EMR.Register {
}
declare namespace EMR.Register {
    interface RegoutpatientsForm {
        Mrn: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        GrandFather: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        SDateOfBirth: Common.ShamsiDatePickerEditor;
        AgeInYear: Serenity.IntegerEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        RefertoDoctor: Serenity.LookupEditor;
    }
    class RegoutpatientsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Register {
    interface RegoutpatientsRow {
        Mrid?: number;
        Mrn?: string;
        FirstName?: string;
        LastName?: string;
        FatherName?: string;
        GenderId?: number;
        DateOfBirth?: string;
        SDateOfBirth?: string;
        AgeInYear?: number;
        UserId?: number;
        Updated?: string;
        GrandFather?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        EthnicityId?: number;
        RefertoDoctor?: number;
        EthnicityName?: string;
        GenderName?: string;
        ProvinceName?: string;
        DistrictName?: string;
    }
    namespace RegoutpatientsRow {
        const idProperty = "Mrid";
        const nameProperty = "Mrn";
        const localTextPrefix = "Register.Regoutpatients";
        const enum Fields {
            Mrid = "Mrid",
            Mrn = "Mrn",
            FirstName = "FirstName",
            LastName = "LastName",
            FatherName = "FatherName",
            GenderId = "GenderId",
            DateOfBirth = "DateOfBirth",
            SDateOfBirth = "SDateOfBirth",
            AgeInYear = "AgeInYear",
            UserId = "UserId",
            Updated = "Updated",
            GrandFather = "GrandFather",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            EthnicityId = "EthnicityId",
            RefertoDoctor = "RefertoDoctor",
            EthnicityName = "EthnicityName",
            GenderName = "GenderName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName"
        }
    }
}
declare namespace EMR.Register {
    namespace RegoutpatientsService {
        const baseUrl = "Register/Regoutpatients";
        function Create(request: Serenity.SaveRequest<RegoutpatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegoutpatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegoutpatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegoutpatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Register/Regoutpatients/Create",
            Update = "Register/Regoutpatients/Update",
            Delete = "Register/Regoutpatients/Delete",
            Retrieve = "Register/Regoutpatients/Retrieve",
            List = "Register/Regoutpatients/List"
        }
    }
}
declare namespace EMR.Register {
}
declare namespace EMR.Register {
    interface RegvisitsForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        OccupationId: Serenity.LookupEditor;
        MaritalStatusId: Serenity.LookupEditor;
        PhoneNumber: Serenity.MaskedEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        TypeofvisitId: Serenity.LookupEditor;
        DurationOfStay: Serenity.IntegerEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Common.ShamsiDatePickerEditor;
        CycleId: Serenity.LookupEditor;
    }
    class RegvisitsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Register {
    interface RegvisitsRow {
        VisitId?: number;
        Mrid?: number;
        OccupationId?: number;
        MaritalStatusId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        PhoneNumber?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        UserId?: number;
        Updated?: string;
        TypeofvisitId?: number;
        DurationOfStay?: number;
        OccupationName?: string;
        MaritalStatusName?: string;
        ProvinceName?: string;
        DistrictName?: string;
        MRN?: string;
        Typeofvisit?: string;
        CycleId?: number;
    }
    namespace RegvisitsRow {
        const idProperty = "VisitId";
        const nameProperty = "PhoneNumber";
        const localTextPrefix = "Register.Regvisits";
        const enum Fields {
            VisitId = "VisitId",
            Mrid = "Mrid",
            OccupationId = "OccupationId",
            MaritalStatusId = "MaritalStatusId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            PhoneNumber = "PhoneNumber",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            UserId = "UserId",
            Updated = "Updated",
            TypeofvisitId = "TypeofvisitId",
            DurationOfStay = "DurationOfStay",
            OccupationName = "OccupationName",
            MaritalStatusName = "MaritalStatusName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName",
            MRN = "MRN",
            Typeofvisit = "Typeofvisit",
            CycleId = "CycleId"
        }
    }
}
declare namespace EMR.Register {
    namespace RegvisitsService {
        const baseUrl = "Register/Regvisits";
        function Create(request: Serenity.SaveRequest<RegvisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegvisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegvisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegvisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Register/Regvisits/Create",
            Update = "Register/Regvisits/Update",
            Delete = "Register/Regvisits/Delete",
            Retrieve = "Register/Regvisits/Retrieve",
            List = "Register/Regvisits/List"
        }
    }
}
declare namespace EMR.Regs {
    interface HfNoOfPatientsRow {
        FacilityId?: number;
        NoOfPatients?: number;
    }
    namespace HfNoOfPatientsRow {
        const idProperty = "FacilityId";
        const localTextPrefix = "Regs.HfNoOfPatients";
        const enum Fields {
            FacilityId = "FacilityId",
            NoOfPatients = "NoOfPatients"
        }
    }
}
declare namespace EMR.Regs {
    namespace HfNoOfPatientsService {
        const baseUrl = "Regs/HfNoOfPatients";
        function Create(request: Serenity.SaveRequest<HfNoOfPatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<HfNoOfPatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HfNoOfPatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HfNoOfPatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Regs/HfNoOfPatients/Create",
            Update = "Regs/HfNoOfPatients/Update",
            Delete = "Regs/HfNoOfPatients/Delete",
            Retrieve = "Regs/HfNoOfPatients/Retrieve",
            List = "Regs/HfNoOfPatients/List"
        }
    }
}
declare namespace EMR.Regs {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Expenditure.Note";
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName"
        }
    }
}
declare namespace EMR.Regs {
}
declare namespace EMR.Regs {
    interface TblAdmissionsDischargeForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        Wardid: Serenity.LookupEditor;
        AdDiagnosis: Serenity.LookupEditor;
        AdDateH: Common.ShamsiDatePickerEditor;
        AdDate: Serenity.DateEditor;
        AdAge: Serenity.IntegerEditor;
        AdAgeType: Serenity.LookupEditor;
        AdCaseType: Serenity.LookupEditor;
        DisStatus: Serenity.LookupEditor;
        DisDiagResult: Serenity.LookupEditor;
        DisDiagCausDeath: Serenity.LookupEditor;
        DisDateH: Common.ShamsiDatePickerEditor;
        DisDate: Serenity.DateEditor;
        AbortionType: Serenity.LookupEditor;
    }
    class TblAdmissionsDischargeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Regs {
    interface TblAdmissionsDischargeRow {
        AdId?: number;
        Mrid?: number;
        Wardid?: number;
        AdDiagnosis?: number;
        AdDate?: string;
        AdDateH?: string;
        AdAge?: number;
        AdAgeType?: number;
        AdCaseType?: number;
        AdCaseTypeName?: string;
        DisDiagCausDeath?: number;
        DisDateH?: string;
        DisDate?: string;
        DisStatus?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        DisDiagResult?: number;
        AbortionType?: number;
        MridFacilityId?: number;
        MridPatName?: string;
        AdAgeTypeName?: string;
        MridPatFatName?: string;
        WardidWardName?: string;
        WardidWardNameD?: string;
        AbortionTypeName?: string;
        MRN?: string;
    }
    namespace TblAdmissionsDischargeRow {
        const idProperty = "AdId";
        const nameProperty = "AdDateH";
        const localTextPrefix = "Regs.TblAdmissionsDischarge";
        const enum Fields {
            AdId = "AdId",
            Mrid = "Mrid",
            Wardid = "Wardid",
            AdDiagnosis = "AdDiagnosis",
            AdDate = "AdDate",
            AdDateH = "AdDateH",
            AdAge = "AdAge",
            AdAgeType = "AdAgeType",
            AdCaseType = "AdCaseType",
            AdCaseTypeName = "AdCaseTypeName",
            DisDiagCausDeath = "DisDiagCausDeath",
            DisDateH = "DisDateH",
            DisDate = "DisDate",
            DisStatus = "DisStatus",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            DisDiagResult = "DisDiagResult",
            AbortionType = "AbortionType",
            MridFacilityId = "MridFacilityId",
            MridPatName = "MridPatName",
            AdAgeTypeName = "AdAgeTypeName",
            MridPatFatName = "MridPatFatName",
            WardidWardName = "WardidWardName",
            WardidWardNameD = "WardidWardNameD",
            AbortionTypeName = "AbortionTypeName",
            MRN = "MRN"
        }
    }
}
declare namespace EMR.Regs {
    namespace TblAdmissionsDischargeService {
        const baseUrl = "Regs/TblAdmissionsDischarge";
        function Create(request: Serenity.SaveRequest<TblAdmissionsDischargeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblAdmissionsDischargeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblAdmissionsDischargeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblAdmissionsDischargeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Regs/TblAdmissionsDischarge/Create",
            Update = "Regs/TblAdmissionsDischarge/Update",
            Delete = "Regs/TblAdmissionsDischarge/Delete",
            Retrieve = "Regs/TblAdmissionsDischarge/Retrieve",
            List = "Regs/TblAdmissionsDischarge/List"
        }
    }
}
declare namespace EMR.Regs {
}
declare namespace EMR.Regs {
    interface TblDischargeForm {
        Mrid: Serenity.IntegerEditor;
        MRN: Serenity.StringEditor;
        Wardid: Serenity.IntegerEditor;
        DisDiagnosis: Serenity.StringEditor;
        DisDate: Serenity.DateEditor;
        DisDateH: Serenity.StringEditor;
        DisStatus: Serenity.StringEditor;
        UserName: Serenity.StringEditor;
        LastUpdated: Serenity.DateEditor;
        TenantId: Serenity.IntegerEditor;
        DisDiagResult: Serenity.IntegerEditor;
    }
    class TblDischargeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Regs {
    interface TblDischargeRow {
        DisId?: number;
        Mrid?: number;
        Wardid?: number;
        DisDiagnosis?: string;
        DisDate?: string;
        DisDateH?: string;
        DisStatus?: string;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        DisDiagResult?: number;
        MRN?: string;
    }
    namespace TblDischargeRow {
        const idProperty = "DisId";
        const nameProperty = "DisDiagnosis";
        const localTextPrefix = "Regs.TblDischarge";
        const enum Fields {
            DisId = "DisId",
            Mrid = "Mrid",
            Wardid = "Wardid",
            DisDiagnosis = "DisDiagnosis",
            DisDate = "DisDate",
            DisDateH = "DisDateH",
            DisStatus = "DisStatus",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            DisDiagResult = "DisDiagResult",
            MRN = "MRN"
        }
    }
}
declare namespace EMR.Regs {
    namespace TblDischargeService {
        const baseUrl = "Regs/TblDischarge";
        function Create(request: Serenity.SaveRequest<TblDischargeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblDischargeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblDischargeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblDischargeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Regs/TblDischarge/Create",
            Update = "Regs/TblDischarge/Update",
            Delete = "Regs/TblDischarge/Delete",
            Retrieve = "Regs/TblDischarge/Retrieve",
            List = "Regs/TblDischarge/List"
        }
    }
}
declare namespace EMR.Regs {
}
declare namespace EMR.Regs {
    interface TblNewBornManagementForm {
        AdId: Serenity.StringEditor;
        NbStatus: Serenity.LookupEditor;
        NbOutcome: Serenity.LookupEditor;
        NbWeight: Serenity.LookupEditor;
        NbNumber: Serenity.LookupEditor;
        NbGender: Serenity.LookupEditor;
    }
    class TblNewBornManagementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Regs {
    interface TblNewBornManagementRow {
        NbId?: number;
        AdId?: number;
        NbStatus?: number;
        NbOutcome?: number;
        NbWeight?: number;
        NbNumber?: number;
        NbGender?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        AdMrid?: number;
        AdWardid?: number;
        AdAdDiagnosis?: number;
        NewbornStatus?: string;
        Newbornoutcome?: string;
        Newbornweight?: string;
        Newbornchild?: string;
        Newborngender?: string;
    }
    namespace TblNewBornManagementRow {
        const idProperty = "NbId";
        const nameProperty = "UserName";
        const localTextPrefix = "Regs.TblNewBornManagement";
        const enum Fields {
            NbId = "NbId",
            AdId = "AdId",
            NbStatus = "NbStatus",
            NbOutcome = "NbOutcome",
            NbWeight = "NbWeight",
            NbNumber = "NbNumber",
            NbGender = "NbGender",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            AdMrid = "AdMrid",
            AdWardid = "AdWardid",
            AdAdDiagnosis = "AdAdDiagnosis",
            NewbornStatus = "NewbornStatus",
            Newbornoutcome = "Newbornoutcome",
            Newbornweight = "Newbornweight",
            Newbornchild = "Newbornchild",
            Newborngender = "Newborngender"
        }
    }
}
declare namespace EMR.Regs {
    namespace TblNewBornManagementService {
        const baseUrl = "Regs/TblNewBornManagement";
        function Create(request: Serenity.SaveRequest<TblNewBornManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblNewBornManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblNewBornManagementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblNewBornManagementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Regs/TblNewBornManagement/Create",
            Update = "Regs/TblNewBornManagement/Update",
            Delete = "Regs/TblNewBornManagement/Delete",
            Retrieve = "Regs/TblNewBornManagement/Retrieve",
            List = "Regs/TblNewBornManagement/List"
        }
    }
}
declare namespace EMR.Regs {
}
declare namespace EMR.Regs {
    interface TblOperationsForm {
        AdId: Serenity.StringEditor;
        WardId: Serenity.LookupEditor;
        Wvid: Serenity.LookupEditor;
        AdValue: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
    }
    class TblOperationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Regs {
    interface TblOperationsRow {
        Evid?: number;
        Wvid?: number;
        WardId?: number;
        AdId?: number;
        AdValue?: number;
        Remarks?: string;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        WvidWrdid?: number;
        WvidDiagnTreatComp?: number;
        WvidVarNameEnglish?: string;
        WvidVarNameDari?: string;
        WvidVarNamePashto?: string;
        WvidVarSpecification?: string;
        AdMrid?: number;
        Wardname?: string;
        DiseaseName?: string;
    }
    namespace TblOperationsRow {
        const idProperty = "Evid";
        const nameProperty = "Remarks";
        const localTextPrefix = "Regs.TblOperations";
        const enum Fields {
            Evid = "Evid",
            Wvid = "Wvid",
            WardId = "WardId",
            AdId = "AdId",
            AdValue = "AdValue",
            Remarks = "Remarks",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            WvidWrdid = "WvidWrdid",
            WvidDiagnTreatComp = "WvidDiagnTreatComp",
            WvidVarNameEnglish = "WvidVarNameEnglish",
            WvidVarNameDari = "WvidVarNameDari",
            WvidVarNamePashto = "WvidVarNamePashto",
            WvidVarSpecification = "WvidVarSpecification",
            AdMrid = "AdMrid",
            Wardname = "Wardname",
            DiseaseName = "DiseaseName"
        }
    }
}
declare namespace EMR.Regs {
    namespace TblOperationsService {
        const baseUrl = "Regs/TblOperations";
        function Create(request: Serenity.SaveRequest<TblOperationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblOperationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblOperationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblOperationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Regs/TblOperations/Create",
            Update = "Regs/TblOperations/Update",
            Delete = "Regs/TblOperations/Delete",
            Retrieve = "Regs/TblOperations/Retrieve",
            List = "Regs/TblOperations/List"
        }
    }
}
declare namespace EMR.Regs {
}
declare namespace EMR.Regs {
    interface TblPatDetailsForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        PatLocation: Serenity.StringEditor;
        MariId: Serenity.LookupEditor;
        PatPhone: Serenity.StringEditor;
        Eid: Serenity.LookupEditor;
        Oid: Serenity.LookupEditor;
        PatDdateH: Common.ShamsiDatePickerEditor;
        PatDdate: Serenity.DateEditor;
    }
    class TblPatDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Regs {
    interface TblPatDetailsRow {
        PdId?: number;
        Mrid?: number;
        ProvinceId?: number;
        DistrictId?: number;
        PatLocation?: string;
        MariId?: number;
        PatPhone?: string;
        Eid?: number;
        Oid?: number;
        PatDdate?: string;
        PatDdateH?: string;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        MridFacilityId?: number;
        MridPatName?: string;
        MridPatFatName?: string;
        MariPatMaritalStatusDari?: string;
        EidEducationDari?: string;
        OidOccupationDari?: string;
        ProvinceDari?: string;
        MRN?: string;
    }
    namespace TblPatDetailsRow {
        const idProperty = "PdId";
        const nameProperty = "PatLocation";
        const localTextPrefix = "Regs.TblPatDetails";
        const enum Fields {
            PdId = "PdId",
            Mrid = "Mrid",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            PatLocation = "PatLocation",
            MariId = "MariId",
            PatPhone = "PatPhone",
            Eid = "Eid",
            Oid = "Oid",
            PatDdate = "PatDdate",
            PatDdateH = "PatDdateH",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            MridFacilityId = "MridFacilityId",
            MridPatName = "MridPatName",
            MridPatFatName = "MridPatFatName",
            MariPatMaritalStatusDari = "MariPatMaritalStatusDari",
            EidEducationDari = "EidEducationDari",
            OidOccupationDari = "OidOccupationDari",
            ProvinceDari = "ProvinceDari",
            MRN = "MRN"
        }
    }
}
declare namespace EMR.Regs {
    namespace TblPatDetailsService {
        const baseUrl = "Regs/TblPatDetails";
        function Create(request: Serenity.SaveRequest<TblPatDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblPatDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblPatDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblPatDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Regs/TblPatDetails/Create",
            Update = "Regs/TblPatDetails/Update",
            Delete = "Regs/TblPatDetails/Delete",
            Retrieve = "Regs/TblPatDetails/Retrieve",
            List = "Regs/TblPatDetails/List"
        }
    }
}
declare namespace EMR.Regs {
}
declare namespace EMR.Regs {
    interface TblPatientNextOfKeenForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        NoKNameD: Serenity.StringEditor;
        NoKPhone: Serenity.StringEditor;
        NoKRelationType: Serenity.LookupEditor;
        NoKAdd: Serenity.StringEditor;
    }
    class TblPatientNextOfKeenForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Regs {
    interface TblPatientNextOfKeenRow {
        PatNoKid?: number;
        NoKNameD?: string;
        Mrid?: number;
        NoKPhone?: string;
        NoKRelationType?: number;
        NoKAdd?: string;
        LastUpdated?: string;
        UserName?: string;
        TenantId?: number;
        MridFacilityId?: number;
        MridPatName?: string;
        MridPatFatName?: string;
        RelationTypeName?: string;
        MRN?: string;
    }
    namespace TblPatientNextOfKeenRow {
        const idProperty = "PatNoKid";
        const nameProperty = "NoKNameD";
        const localTextPrefix = "Regs.TblPatientNextOfKeen";
        const enum Fields {
            PatNoKid = "PatNoKid",
            NoKNameD = "NoKNameD",
            Mrid = "Mrid",
            NoKPhone = "NoKPhone",
            NoKRelationType = "NoKRelationType",
            NoKAdd = "NoKAdd",
            LastUpdated = "LastUpdated",
            UserName = "UserName",
            TenantId = "TenantId",
            MridFacilityId = "MridFacilityId",
            MridPatName = "MridPatName",
            MridPatFatName = "MridPatFatName",
            RelationTypeName = "RelationTypeName",
            MRN = "MRN"
        }
    }
}
declare namespace EMR.Regs {
    namespace TblPatientNextOfKeenService {
        const baseUrl = "Regs/TblPatientNextOfKeen";
        function Create(request: Serenity.SaveRequest<TblPatientNextOfKeenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblPatientNextOfKeenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblPatientNextOfKeenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblPatientNextOfKeenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Regs/TblPatientNextOfKeen/Create",
            Update = "Regs/TblPatientNextOfKeen/Update",
            Delete = "Regs/TblPatientNextOfKeen/Delete",
            Retrieve = "Regs/TblPatientNextOfKeen/Retrieve",
            List = "Regs/TblPatientNextOfKeen/List"
        }
    }
}
declare namespace EMR.Regs {
}
declare namespace EMR.Regs {
    interface TblPatientsForm {
        FacilityId: Serenity.LookupEditor;
        MRN: Serenity.StringEditor;
        PatName: Serenity.StringEditor;
        PatFatName: Serenity.StringEditor;
        PatHusbandName: Serenity.StringEditor;
        PatRealationName: Serenity.StringEditor;
        PatGender: Serenity.LookupEditor;
        PatBlooldGroup: Serenity.LookupEditor;
        PatTazkera: Serenity.StringEditor;
    }
    class TblPatientsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Regs {
    interface TblPatientsRow {
        Mrid?: number;
        FacilityId?: number;
        PatName?: string;
        PatFatName?: string;
        PatRealationName?: string;
        PatGender?: number;
        PatHusbandName?: string;
        PatTazkera?: string;
        PatBlooldGroup?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        FacilityFacilityName?: string;
        FacilityFacilityNameDari?: string;
        FacilityFacilityNamePashto?: string;
        FacilityFacilityType?: number;
        MRN?: string;
        Gender?: string;
        BloodGroup?: string;
    }
    namespace TblPatientsRow {
        const idProperty = "Mrid";
        const nameProperty = "PatName";
        const localTextPrefix = "Regs.TblPatients";
        const lookupKey = "Regs.TblPatients";
        function getLookup(): Q.Lookup<TblPatientsRow>;
        const enum Fields {
            Mrid = "Mrid",
            FacilityId = "FacilityId",
            PatName = "PatName",
            PatFatName = "PatFatName",
            PatRealationName = "PatRealationName",
            PatGender = "PatGender",
            PatHusbandName = "PatHusbandName",
            PatTazkera = "PatTazkera",
            PatBlooldGroup = "PatBlooldGroup",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            FacilityFacilityName = "FacilityFacilityName",
            FacilityFacilityNameDari = "FacilityFacilityNameDari",
            FacilityFacilityNamePashto = "FacilityFacilityNamePashto",
            FacilityFacilityType = "FacilityFacilityType",
            MRN = "MRN",
            Gender = "Gender",
            BloodGroup = "BloodGroup"
        }
    }
}
declare namespace EMR.Regs {
    namespace TblPatientsService {
        const baseUrl = "Regs/TblPatients";
        function Create(request: Serenity.SaveRequest<TblPatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblPatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblPatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblPatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UpdateHealthFacilities(request: Serenity.ServiceRequest, onSuccess?: (response: System.Int32) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Regs/TblPatients/Create",
            Update = "Regs/TblPatients/Update",
            Delete = "Regs/TblPatients/Delete",
            Retrieve = "Regs/TblPatients/Retrieve",
            List = "Regs/TblPatients/List",
            UpdateHealthFacilities = "Regs/TblPatients/UpdateHealthFacilities"
        }
    }
}
declare namespace EMR.Regs {
}
declare namespace EMR.Regs {
    interface TblReferralForm {
        AdId: Serenity.StringEditor;
        FacilityId: Serenity.LookupEditor;
        WardId: Serenity.LookupEditor;
        RefDiagnosis: Serenity.LookupEditor;
        RefDate: Serenity.DateEditor;
        RefDateH: Common.ShamsiDatePickerEditor;
        RefType: Serenity.LookupEditor;
    }
    class TblReferralForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Regs {
    interface TblReferralRow {
        RefId?: number;
        AdId?: number;
        FacilityId?: number;
        WardId?: number;
        RefDiagnosis?: number;
        RefDate?: string;
        RefDateH?: string;
        RefType?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        WardName?: string;
        DiseaseName?: string;
        FacilityName?: string;
        AdMrid?: number;
    }
    namespace TblReferralRow {
        const idProperty = "RefId";
        const nameProperty = "DiseaseName";
        const localTextPrefix = "Regs.TblReferral";
        const enum Fields {
            RefId = "RefId",
            AdId = "AdId",
            FacilityId = "FacilityId",
            WardId = "WardId",
            RefDiagnosis = "RefDiagnosis",
            RefDate = "RefDate",
            RefDateH = "RefDateH",
            RefType = "RefType",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            WardName = "WardName",
            DiseaseName = "DiseaseName",
            FacilityName = "FacilityName",
            AdMrid = "AdMrid"
        }
    }
}
declare namespace EMR.Regs {
    namespace TblReferralService {
        const baseUrl = "Regs/TblReferral";
        function Create(request: Serenity.SaveRequest<TblReferralRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblReferralRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblReferralRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblReferralRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Regs/TblReferral/Create",
            Update = "Regs/TblReferral/Update",
            Delete = "Regs/TblReferral/Delete",
            Retrieve = "Regs/TblReferral/Retrieve",
            List = "Regs/TblReferral/List"
        }
    }
}
declare namespace EMR.Regs {
}
declare namespace EMR.Regs {
    interface TblTestExaminationsForm {
        AdId: Serenity.StringEditor;
        EdId: Serenity.LookupEditor;
        TestExaminations: Serenity.LookupEditor;
        Diagnosis: Serenity.LookupEditor;
    }
    class TblTestExaminationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Regs {
    interface TblTestExaminationsRow {
        PatTestId?: number;
        EdId?: number;
        AdId?: number;
        TestExaminations?: number;
        Diagnosis?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        TestName?: string;
        DeptName?: string;
        Diagnosisname?: string;
        AdMrid?: number;
    }
    namespace TblTestExaminationsRow {
        const idProperty = "PatTestId";
        const nameProperty = "TestName";
        const localTextPrefix = "Regs.TblTestExaminations";
        const enum Fields {
            PatTestId = "PatTestId",
            EdId = "EdId",
            AdId = "AdId",
            TestExaminations = "TestExaminations",
            Diagnosis = "Diagnosis",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            TestName = "TestName",
            DeptName = "DeptName",
            Diagnosisname = "Diagnosisname",
            AdMrid = "AdMrid"
        }
    }
}
declare namespace EMR.Regs {
    namespace TblTestExaminationsService {
        const baseUrl = "Regs/TblTestExaminations";
        function Create(request: Serenity.SaveRequest<TblTestExaminationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblTestExaminationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblTestExaminationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblTestExaminationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Regs/TblTestExaminations/Create",
            Update = "Regs/TblTestExaminations/Update",
            Delete = "Regs/TblTestExaminations/Delete",
            Retrieve = "Regs/TblTestExaminations/Retrieve",
            List = "Regs/TblTestExaminations/List"
        }
    }
}
declare namespace EMR {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace EMR.Structure {
}
declare namespace EMR.Structure {
    interface BedReportDetailsForm {
        ReportId: Serenity.IntegerEditor;
        WardId: Serenity.LookupEditor;
        BedActive: Serenity.IntegerEditor;
    }
    class BedReportDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Structure {
    interface BedReportDetailsRow {
        Id?: number;
        ReportId?: number;
        WardId?: number;
        BedActive?: number;
        TenantId?: number;
        ReportFacilityId?: number;
        ReportYear?: number;
        ReportMonth?: number;
        ReportComment?: string;
        ReportUserName?: string;
        ReportLastUpdated?: string;
        ReportTenantId?: number;
        WardWardName?: string;
        WardWardNameD?: string;
        WardWardNumBeds?: number;
    }
    namespace BedReportDetailsRow {
        const idProperty = "Id";
        const nameProperty = "WardWardName";
        const localTextPrefix = "Structure.BedReportDetails";
        const enum Fields {
            Id = "Id",
            ReportId = "ReportId",
            WardId = "WardId",
            BedActive = "BedActive",
            TenantId = "TenantId",
            ReportFacilityId = "ReportFacilityId",
            ReportYear = "ReportYear",
            ReportMonth = "ReportMonth",
            ReportComment = "ReportComment",
            ReportUserName = "ReportUserName",
            ReportLastUpdated = "ReportLastUpdated",
            ReportTenantId = "ReportTenantId",
            WardWardName = "WardWardName",
            WardWardNameD = "WardWardNameD",
            WardWardNumBeds = "WardWardNumBeds"
        }
    }
}
declare namespace EMR.Structure {
    namespace BedReportDetailsService {
        const baseUrl = "Structure/BedReportDetails";
        function Create(request: Serenity.SaveRequest<BedReportDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BedReportDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BedReportDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BedReportDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Structure/BedReportDetails/Create",
            Update = "Structure/BedReportDetails/Update",
            Delete = "Structure/BedReportDetails/Delete",
            Retrieve = "Structure/BedReportDetails/Retrieve",
            List = "Structure/BedReportDetails/List"
        }
    }
}
declare namespace EMR.Structure {
}
declare namespace EMR.Structure {
    interface BedReportsForm {
        FacilityId: Serenity.LookupEditor;
        Year: Serenity.IntegerEditor;
        Month: Serenity.IntegerEditor;
        Comment: Serenity.StringEditor;
        DetailList: BedReportDetailsEditor;
    }
    class BedReportsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Structure {
    interface BedReportsRow {
        ReportId?: number;
        FacilityId?: number;
        Year?: number;
        Month?: number;
        Comment?: string;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        FacilityDistrictId?: number;
        FacilityFacilityName?: string;
        FacilityLat?: number;
        FacilityLon?: number;
        DetailList?: BedReportDetailsRow[];
    }
    namespace BedReportsRow {
        const idProperty = "ReportId";
        const nameProperty = "Comment";
        const localTextPrefix = "Structure.BedReports";
        const enum Fields {
            ReportId = "ReportId",
            FacilityId = "FacilityId",
            Year = "Year",
            Month = "Month",
            Comment = "Comment",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            FacilityDistrictId = "FacilityDistrictId",
            FacilityFacilityName = "FacilityFacilityName",
            FacilityLat = "FacilityLat",
            FacilityLon = "FacilityLon",
            DetailList = "DetailList"
        }
    }
}
declare namespace EMR.Structure {
    namespace BedReportsService {
        const baseUrl = "Structure/BedReports";
        function Create(request: Serenity.SaveRequest<BedReportsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BedReportsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BedReportsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BedReportsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Structure/BedReports/Create",
            Update = "Structure/BedReports/Update",
            Delete = "Structure/BedReports/Delete",
            Retrieve = "Structure/BedReports/Retrieve",
            List = "Structure/BedReports/List"
        }
    }
}
declare namespace EMR.Structure {
}
declare namespace EMR.Structure {
    interface TblDutyForm {
        EmpId: Serenity.StringEditor;
        WardId: Serenity.IntegerEditor;
        DutYear: Serenity.IntegerEditor;
        DutMonth: Serenity.IntegerEditor;
        UserName: Serenity.StringEditor;
        LastUpdated: Serenity.DateEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class TblDutyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Structure {
    interface TblDutyRow {
        DutId?: number;
        EmpId?: string;
        WardId?: number;
        DutYear?: number;
        DutMonth?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
    }
    namespace TblDutyRow {
        const idProperty = "DutId";
        const nameProperty = "EmpId";
        const localTextPrefix = "Structure.TblDuty";
        const enum Fields {
            DutId = "DutId",
            EmpId = "EmpId",
            WardId = "WardId",
            DutYear = "DutYear",
            DutMonth = "DutMonth",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId"
        }
    }
}
declare namespace EMR.Structure {
    namespace TblDutyService {
        const baseUrl = "Structure/TblDuty";
        function Create(request: Serenity.SaveRequest<TblDutyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblDutyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblDutyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblDutyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Structure/TblDuty/Create",
            Update = "Structure/TblDuty/Update",
            Delete = "Structure/TblDuty/Delete",
            Retrieve = "Structure/TblDuty/Retrieve",
            List = "Structure/TblDuty/List"
        }
    }
}
declare namespace EMR.Structure {
}
declare namespace EMR.Structure {
    interface TblEmpForm {
        EmpName: Serenity.StringEditor;
        EmpNameD: Serenity.StringEditor;
        EmpFatherName: Serenity.StringEditor;
        EmpFatherNameD: Serenity.StringEditor;
        EmpLastName: Serenity.StringEditor;
        EmpLastNameD: Serenity.StringEditor;
        UserName: Serenity.StringEditor;
        LastUpdated: Serenity.DateEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class TblEmpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Structure {
    interface TblEmpRow {
        EmId?: number;
        EmpName?: string;
        EmpNameD?: string;
        EmpFatherName?: string;
        EmpFatherNameD?: string;
        EmpLastName?: string;
        EmpLastNameD?: string;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
    }
    namespace TblEmpRow {
        const idProperty = "EmId";
        const nameProperty = "EmpName";
        const localTextPrefix = "Structure.TblEmp";
        const enum Fields {
            EmId = "EmId",
            EmpName = "EmpName",
            EmpNameD = "EmpNameD",
            EmpFatherName = "EmpFatherName",
            EmpFatherNameD = "EmpFatherNameD",
            EmpLastName = "EmpLastName",
            EmpLastNameD = "EmpLastNameD",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId"
        }
    }
}
declare namespace EMR.Structure {
    namespace TblEmpService {
        const baseUrl = "Structure/TblEmp";
        function Create(request: Serenity.SaveRequest<TblEmpRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblEmpRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblEmpRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblEmpRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Structure/TblEmp/Create",
            Update = "Structure/TblEmp/Update",
            Delete = "Structure/TblEmp/Delete",
            Retrieve = "Structure/TblEmp/Retrieve",
            List = "Structure/TblEmp/List"
        }
    }
}
declare namespace EMR.Texts {
}
declare namespace EMR.Verifications {
}
declare namespace EMR.Verifications {
    interface CbloodtransfusionsForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Serenity.StringEditor;
        BloodGroupId: Serenity.LookupEditor;
        Recomquantity: Serenity.IntegerEditor;
        Transmitquantity: Serenity.IntegerEditor;
        BloodstatusId: Serenity.LookupEditor;
        RecDateTime: Serenity.DateTimeEditor;
        SRecDate: Common.ShamsiDatePickerEditor;
        TransDateTime: Serenity.DateTimeEditor;
        STransDate: Serenity.StringEditor;
    }
    class CbloodtransfusionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Verifications {
    interface CbloodtransfusionsRow {
        TransfusionId?: number;
        Mrid?: number;
        VisitId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        BloodGroupId?: number;
        Recomquantity?: number;
        Transmitquantity?: number;
        BloodstatusId?: number;
        RecDateTime?: string;
        SRecDate?: string;
        TransDateTime?: string;
        STransDate?: string;
        Bloodstatus?: string;
        BloodGroup?: string;
    }
    namespace CbloodtransfusionsRow {
        const idProperty = "TransfusionId";
        const nameProperty = "SDateOfVisit";
        const localTextPrefix = "Verifications.Cbloodtransfusions";
        const enum Fields {
            TransfusionId = "TransfusionId",
            Mrid = "Mrid",
            VisitId = "VisitId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            BloodGroupId = "BloodGroupId",
            Recomquantity = "Recomquantity",
            Transmitquantity = "Transmitquantity",
            BloodstatusId = "BloodstatusId",
            RecDateTime = "RecDateTime",
            SRecDate = "SRecDate",
            TransDateTime = "TransDateTime",
            STransDate = "STransDate",
            Bloodstatus = "Bloodstatus",
            BloodGroup = "BloodGroup"
        }
    }
}
declare namespace EMR.Verifications {
    namespace CbloodtransfusionsService {
        const baseUrl = "Verifications/Cbloodtransfusions";
        function Create(request: Serenity.SaveRequest<CbloodtransfusionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CbloodtransfusionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CbloodtransfusionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CbloodtransfusionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Verifications/Cbloodtransfusions/Create",
            Update = "Verifications/Cbloodtransfusions/Update",
            Delete = "Verifications/Cbloodtransfusions/Delete",
            Retrieve = "Verifications/Cbloodtransfusions/Retrieve",
            List = "Verifications/Cbloodtransfusions/List"
        }
    }
}
declare namespace EMR.Verifications {
}
declare namespace EMR.Verifications {
    interface CdiagnosisForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        StageId: Serenity.LookupEditor;
        SelfDiagnosisId: Serenity.LookupEditor;
        SelfDiagnosisDate: Serenity.DateEditor;
        InitialDiagnosisId: Serenity.LookupEditor;
        InitialDiagnosisDate: Serenity.DateEditor;
        TopomainId: Serenity.LookupEditor;
        ToposubId: Serenity.LookupEditor;
        FinalDiagnosisId: Serenity.LookupEditor;
        FinalDiagnosisDate: Serenity.DateEditor;
        ComorbidityId: Serenity.LookupEditor;
        Comorbidity2Id: Serenity.LookupEditor;
        Comorbidity3Id: Serenity.LookupEditor;
    }
    class CdiagnosisForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Verifications {
    interface CdiagnosisRow {
        DiagnosisId?: number;
        Mrid?: number;
        VisitId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        SelfDiagnosisId?: number;
        SelfDiagnosisDate?: string;
        InitialDiagnosisId?: number;
        InitialDiagnosisDate?: string;
        FinalDiagnosisId?: number;
        FinalDiagnosisDate?: string;
        ComorbidityId?: number;
        TopomainId?: number;
        ToposubId?: number;
        StageId?: number;
        Comorbidity2Id?: number;
        Comorbidity3Id?: number;
        TopoMain?: string;
        TopoSub?: string;
        SelfDiagnosis?: string;
        InitialDiagnosis?: string;
        FinalDiagnosis?: string;
        Comorbidity?: string;
    }
    namespace CdiagnosisRow {
        const idProperty = "DiagnosisId";
        const nameProperty = "SDateOfVisit";
        const localTextPrefix = "Verifications.Cdiagnosis";
        const enum Fields {
            DiagnosisId = "DiagnosisId",
            Mrid = "Mrid",
            VisitId = "VisitId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            SelfDiagnosisId = "SelfDiagnosisId",
            SelfDiagnosisDate = "SelfDiagnosisDate",
            InitialDiagnosisId = "InitialDiagnosisId",
            InitialDiagnosisDate = "InitialDiagnosisDate",
            FinalDiagnosisId = "FinalDiagnosisId",
            FinalDiagnosisDate = "FinalDiagnosisDate",
            ComorbidityId = "ComorbidityId",
            TopomainId = "TopomainId",
            ToposubId = "ToposubId",
            StageId = "StageId",
            Comorbidity2Id = "Comorbidity2Id",
            Comorbidity3Id = "Comorbidity3Id",
            TopoMain = "TopoMain",
            TopoSub = "TopoSub",
            SelfDiagnosis = "SelfDiagnosis",
            InitialDiagnosis = "InitialDiagnosis",
            FinalDiagnosis = "FinalDiagnosis",
            Comorbidity = "Comorbidity"
        }
    }
}
declare namespace EMR.Verifications {
    namespace CdiagnosisService {
        const baseUrl = "Verifications/Cdiagnosis";
        function Create(request: Serenity.SaveRequest<CdiagnosisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CdiagnosisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CdiagnosisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CdiagnosisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Verifications/Cdiagnosis/Create",
            Update = "Verifications/Cdiagnosis/Update",
            Delete = "Verifications/Cdiagnosis/Delete",
            Retrieve = "Verifications/Cdiagnosis/Retrieve",
            List = "Verifications/Cdiagnosis/List"
        }
    }
}
declare namespace EMR.Verifications {
}
declare namespace EMR.Verifications {
    interface CimagingsForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        ImagingId: Serenity.LookupEditor;
        TestImage: Serenity.MultipleImageUploadEditor;
        Note: Serenity.HtmlReportContentEditor;
    }
    class CimagingsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Verifications {
    interface CimagingsRow {
        Id?: number;
        Mrid?: number;
        VisitId?: number;
        ImagingId?: number;
        TestImage?: string;
        Note?: string;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        ImagingName?: string;
    }
    namespace CimagingsRow {
        const idProperty = "Id";
        const nameProperty = "TestImage";
        const localTextPrefix = "Verifications.Cimagings";
        const enum Fields {
            Id = "Id",
            Mrid = "Mrid",
            VisitId = "VisitId",
            ImagingId = "ImagingId",
            TestImage = "TestImage",
            Note = "Note",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            ImagingName = "ImagingName"
        }
    }
}
declare namespace EMR.Verifications {
    namespace CimagingsService {
        const baseUrl = "Verifications/Cimagings";
        function Create(request: Serenity.SaveRequest<CimagingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CimagingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CimagingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CimagingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Verifications/Cimagings/Create",
            Update = "Verifications/Cimagings/Update",
            Delete = "Verifications/Cimagings/Delete",
            Retrieve = "Verifications/Cimagings/Retrieve",
            List = "Verifications/Cimagings/List"
        }
    }
}
declare namespace EMR.Verifications {
}
declare namespace EMR.Verifications {
    interface ClabtestsForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateTimeEditor;
        SDateOfVisit: Serenity.StringEditor;
        LabTestId: Serenity.LookupEditor;
        Result: Serenity.StringEditor;
        NormalRange: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        LabDateTime: Serenity.DateTimeEditor;
        SlabDate: Serenity.StringEditor;
    }
    class ClabtestsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Verifications {
    interface ClabtestsRow {
        Id?: number;
        Mrid?: number;
        VisitId?: number;
        LabTestId?: number;
        Result?: string;
        NormalRange?: string;
        Unit?: string;
        LabDateTime?: string;
        SlabDate?: string;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        LabTestName?: string;
    }
    namespace ClabtestsRow {
        const idProperty = "Id";
        const nameProperty = "Result";
        const localTextPrefix = "Verifications.Clabtests";
        const enum Fields {
            Id = "Id",
            Mrid = "Mrid",
            VisitId = "VisitId",
            LabTestId = "LabTestId",
            Result = "Result",
            NormalRange = "NormalRange",
            Unit = "Unit",
            LabDateTime = "LabDateTime",
            SlabDate = "SlabDate",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            LabTestName = "LabTestName"
        }
    }
}
declare namespace EMR.Verifications {
    namespace ClabtestsService {
        const baseUrl = "Verifications/Clabtests";
        function Create(request: Serenity.SaveRequest<ClabtestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClabtestsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClabtestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClabtestsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Verifications/Clabtests/Create",
            Update = "Verifications/Clabtests/Update",
            Delete = "Verifications/Clabtests/Delete",
            Retrieve = "Verifications/Clabtests/Retrieve",
            List = "Verifications/Clabtests/List"
        }
    }
}
declare namespace EMR.Verifications {
}
declare namespace EMR.Verifications {
    interface CmedadministrationForm {
        OrderId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        Comment: Serenity.HtmlNoteContentEditor;
        RecDateTime: Serenity.DateTimeEditor;
        RecSDate: Common.ShamsiDatePickerEditor;
        AppDateTime: Serenity.DateTimeEditor;
        AppSDate: Common.ShamsiDatePickerEditor;
    }
    class CmedadministrationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Verifications {
    interface CmedadministrationRow {
        MedadminId?: number;
        OrderId?: number;
        Comment?: string;
        Quantity?: number;
        RecDateTime?: string;
        RecSDate?: string;
        AppDateTime?: string;
        AppSDate?: string;
        Medicine?: string;
    }
    namespace CmedadministrationRow {
        const idProperty = "MedadminId";
        const nameProperty = "Comment";
        const localTextPrefix = "Verifications.Cmedadministration";
        const enum Fields {
            MedadminId = "MedadminId",
            OrderId = "OrderId",
            Comment = "Comment",
            Quantity = "Quantity",
            RecDateTime = "RecDateTime",
            RecSDate = "RecSDate",
            AppDateTime = "AppDateTime",
            AppSDate = "AppSDate",
            Medicine = "Medicine"
        }
    }
}
declare namespace EMR.Verifications {
    namespace CmedadministrationService {
        const baseUrl = "Verifications/Cmedadministration";
        function Create(request: Serenity.SaveRequest<CmedadministrationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CmedadministrationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CmedadministrationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CmedadministrationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Verifications/Cmedadministration/Create",
            Update = "Verifications/Cmedadministration/Update",
            Delete = "Verifications/Cmedadministration/Delete",
            Retrieve = "Verifications/Cmedadministration/Retrieve",
            List = "Verifications/Cmedadministration/List"
        }
    }
}
declare namespace EMR.Verifications {
}
declare namespace EMR.Verifications {
    interface CmedprescriptionsForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Serenity.StringEditor;
        MedicineId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        DailyDose: Serenity.StringEditor;
        Comment: Serenity.HtmlNoteContentEditor;
    }
    class CmedprescriptionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Verifications {
    interface CmedprescriptionsRow {
        OrderId?: number;
        Mrid?: number;
        VisitId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        MedicineId?: number;
        Quantity?: number;
        DailyDose?: string;
        Comment?: string;
        InsideSale?: boolean;
        MedicineName?: string;
    }
    namespace CmedprescriptionsRow {
        const idProperty = "OrderId";
        const nameProperty = "SDateOfVisit";
        const localTextPrefix = "Verifications.Cmedprescriptions";
        const enum Fields {
            OrderId = "OrderId",
            Mrid = "Mrid",
            VisitId = "VisitId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            MedicineId = "MedicineId",
            Quantity = "Quantity",
            DailyDose = "DailyDose",
            Comment = "Comment",
            InsideSale = "InsideSale",
            MedicineName = "MedicineName"
        }
    }
}
declare namespace EMR.Verifications {
    namespace CmedprescriptionsService {
        const baseUrl = "Verifications/Cmedprescriptions";
        function Create(request: Serenity.SaveRequest<CmedprescriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CmedprescriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CmedprescriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CmedprescriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Verifications/Cmedprescriptions/Create",
            Update = "Verifications/Cmedprescriptions/Update",
            Delete = "Verifications/Cmedprescriptions/Delete",
            Retrieve = "Verifications/Cmedprescriptions/Retrieve",
            List = "Verifications/Cmedprescriptions/List"
        }
    }
}
declare namespace EMR.Verifications {
}
declare namespace EMR.Verifications {
    interface CpatienthistoryForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Serenity.StringEditor;
        HistoryId: Serenity.LookupEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }
    class CpatienthistoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Verifications {
    interface CpatienthistoryRow {
        Id?: number;
        Mrid?: number;
        VisitId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        HistoryId?: number;
        Note?: string;
        HistoryName?: string;
    }
    namespace CpatienthistoryRow {
        const idProperty = "Id";
        const nameProperty = "SDateOfVisit";
        const localTextPrefix = "Verifications.Cpatienthistory";
        const enum Fields {
            Id = "Id",
            Mrid = "Mrid",
            VisitId = "VisitId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            HistoryId = "HistoryId",
            Note = "Note",
            HistoryName = "HistoryName"
        }
    }
}
declare namespace EMR.Verifications {
    namespace CpatienthistoryService {
        const baseUrl = "Verifications/Cpatienthistory";
        function Create(request: Serenity.SaveRequest<CpatienthistoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CpatienthistoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CpatienthistoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CpatienthistoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Verifications/Cpatienthistory/Create",
            Update = "Verifications/Cpatienthistory/Update",
            Delete = "Verifications/Cpatienthistory/Delete",
            Retrieve = "Verifications/Cpatienthistory/Retrieve",
            List = "Verifications/Cpatienthistory/List"
        }
    }
}
declare namespace EMR.Verifications {
}
declare namespace EMR.Verifications {
    interface CpatientsForm {
        Mrn: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        EthnicityId: Serenity.LookupEditor;
        GrandFather: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        SDateOfBirth: Common.ShamsiDatePickerEditor;
        AgeInYear: Serenity.IntegerEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        RefertoDoctor: Serenity.LookupEditor;
    }
    class CpatientsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Verifications {
    interface CpatientsRow {
        Mrid?: number;
        Mrn?: string;
        FirstName?: string;
        LastName?: string;
        FatherName?: string;
        GenderId?: number;
        DateOfBirth?: string;
        SDateOfBirth?: string;
        AgeInYear?: number;
        GrandFather?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        EthnicityId?: number;
        RefertoDoctor?: number;
        EthnicityName?: string;
        GenderName?: string;
        ProvinceName?: string;
        DistrictName?: string;
    }
    namespace CpatientsRow {
        const idProperty = "Mrid";
        const nameProperty = "Mrn";
        const localTextPrefix = "Verifications.Cpatients";
        const enum Fields {
            Mrid = "Mrid",
            Mrn = "Mrn",
            FirstName = "FirstName",
            LastName = "LastName",
            FatherName = "FatherName",
            GenderId = "GenderId",
            DateOfBirth = "DateOfBirth",
            SDateOfBirth = "SDateOfBirth",
            AgeInYear = "AgeInYear",
            GrandFather = "GrandFather",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            EthnicityId = "EthnicityId",
            RefertoDoctor = "RefertoDoctor",
            EthnicityName = "EthnicityName",
            GenderName = "GenderName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName"
        }
    }
}
declare namespace EMR.Verifications {
    namespace CpatientsService {
        const baseUrl = "Verifications/Cpatients";
        function Create(request: Serenity.SaveRequest<CpatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CpatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CpatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CpatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Verifications/Cpatients/Create",
            Update = "Verifications/Cpatients/Update",
            Delete = "Verifications/Cpatients/Delete",
            Retrieve = "Verifications/Cpatients/Retrieve",
            List = "Verifications/Cpatients/List"
        }
    }
}
declare namespace EMR.Verifications {
}
declare namespace EMR.Verifications {
    interface CphysicalexaminationForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Serenity.StringEditor;
        GroupId: Serenity.LookupEditor;
        PhysExamId: Serenity.LookupEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }
    class CphysicalexaminationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Verifications {
    interface CphysicalexaminationRow {
        Id?: number;
        Mrid?: number;
        VisitId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        GroupId?: number;
        PhysExamId?: number;
        Note?: string;
        PhysExamName?: string;
        PhysExamGroup?: string;
    }
    namespace CphysicalexaminationRow {
        const idProperty = "Id";
        const nameProperty = "SDateOfVisit";
        const localTextPrefix = "Verifications.Cphysicalexamination";
        const enum Fields {
            Id = "Id",
            Mrid = "Mrid",
            VisitId = "VisitId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            GroupId = "GroupId",
            PhysExamId = "PhysExamId",
            Note = "Note",
            PhysExamName = "PhysExamName",
            PhysExamGroup = "PhysExamGroup"
        }
    }
}
declare namespace EMR.Verifications {
    namespace CphysicalexaminationService {
        const baseUrl = "Verifications/Cphysicalexamination";
        function Create(request: Serenity.SaveRequest<CphysicalexaminationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CphysicalexaminationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CphysicalexaminationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CphysicalexaminationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Verifications/Cphysicalexamination/Create",
            Update = "Verifications/Cphysicalexamination/Update",
            Delete = "Verifications/Cphysicalexamination/Delete",
            Retrieve = "Verifications/Cphysicalexamination/Retrieve",
            List = "Verifications/Cphysicalexamination/List"
        }
    }
}
declare namespace EMR.Verifications {
}
declare namespace EMR.Verifications {
    interface CrecommendationsForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Serenity.StringEditor;
        RecomId: Serenity.LookupEditor;
        Note: Serenity.HtmlNoteContentEditor;
    }
    class CrecommendationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Verifications {
    interface CrecommendationsRow {
        RecommandationId?: number;
        Mrid?: number;
        VisitId?: number;
        RecomId?: number;
        Note?: string;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        RecomRecommandName?: string;
    }
    namespace CrecommendationsRow {
        const idProperty = "RecommandationId";
        const nameProperty = "Note";
        const localTextPrefix = "Verifications.Crecommendations";
        const enum Fields {
            RecommandationId = "RecommandationId",
            Mrid = "Mrid",
            VisitId = "VisitId",
            RecomId = "RecomId",
            Note = "Note",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            RecomRecommandName = "RecomRecommandName"
        }
    }
}
declare namespace EMR.Verifications {
    namespace CrecommendationsService {
        const baseUrl = "Verifications/Crecommendations";
        function Create(request: Serenity.SaveRequest<CrecommendationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CrecommendationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CrecommendationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CrecommendationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Verifications/Crecommendations/Create",
            Update = "Verifications/Crecommendations/Update",
            Delete = "Verifications/Crecommendations/Delete",
            Retrieve = "Verifications/Crecommendations/Retrieve",
            List = "Verifications/Crecommendations/List"
        }
    }
}
declare namespace EMR.Verifications {
}
declare namespace EMR.Verifications {
    interface CvisitsForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        OccupationId: Serenity.LookupEditor;
        MaritalStatusId: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        TypeofvisitId: Serenity.LookupEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Serenity.StringEditor;
    }
    class CvisitsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Verifications {
    interface CvisitsRow {
        VisitId?: number;
        Mrid?: number;
        OccupationId?: number;
        MaritalStatusId?: number;
        DateOfVisit?: string;
        PhoneNumber?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        SDateOfVisit?: string;
        TypeofvisitId?: number;
        OccupationName?: string;
        MaritalStatusName?: string;
        ProvinceName?: string;
        DistrictName?: string;
        MRN?: string;
        Typeofvisit?: string;
    }
    namespace CvisitsRow {
        const idProperty = "VisitId";
        const nameProperty = "PhoneNumber";
        const localTextPrefix = "Verifications.Cvisits";
        const enum Fields {
            VisitId = "VisitId",
            Mrid = "Mrid",
            OccupationId = "OccupationId",
            MaritalStatusId = "MaritalStatusId",
            DateOfVisit = "DateOfVisit",
            PhoneNumber = "PhoneNumber",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            SDateOfVisit = "SDateOfVisit",
            TypeofvisitId = "TypeofvisitId",
            OccupationName = "OccupationName",
            MaritalStatusName = "MaritalStatusName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName",
            MRN = "MRN",
            Typeofvisit = "Typeofvisit"
        }
    }
}
declare namespace EMR.Verifications {
    namespace CvisitsService {
        const baseUrl = "Verifications/Cvisits";
        function Create(request: Serenity.SaveRequest<CvisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CvisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CvisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CvisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Verifications/Cvisits/Create",
            Update = "Verifications/Cvisits/Update",
            Delete = "Verifications/Cvisits/Delete",
            Retrieve = "Verifications/Cvisits/Retrieve",
            List = "Verifications/Cvisits/List"
        }
    }
}
declare namespace EMR.Verifications {
}
declare namespace EMR.Verifications {
    interface CvitalsignsForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Common.ShamsiDatePickerEditor;
        Weight: Serenity.IntegerEditor;
        Height: Serenity.IntegerEditor;
        Pulse: Serenity.IntegerEditor;
        Rr: Serenity.IntegerEditor;
        Temp: Serenity.IntegerEditor;
        Bp: Serenity.StringEditor;
        Hr: Serenity.IntegerEditor;
        O2: Serenity.IntegerEditor;
        Pain: Serenity.IntegerEditor;
        VitalDateTime: Serenity.DateTimeEditor;
        SVitalDate: Common.ShamsiDatePickerEditor;
    }
    class CvitalsignsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.Verifications {
    interface CvitalsignsRow {
        VitalId?: number;
        Mrid?: number;
        VisitId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        Pulse?: number;
        Rr?: number;
        Temp?: number;
        Bp?: string;
        Weight?: number;
        Height?: number;
        Hr?: number;
        O2?: number;
        Pain?: number;
        VitalDateTime?: string;
        SVitalDate?: string;
    }
    namespace CvitalsignsRow {
        const idProperty = "Mrid";
        const nameProperty = "SDateOfVisit";
        const localTextPrefix = "Verifications.Cvitalsigns";
        const enum Fields {
            VitalId = "VitalId",
            Mrid = "Mrid",
            VisitId = "VisitId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            Pulse = "Pulse",
            Rr = "Rr",
            Temp = "Temp",
            Bp = "Bp",
            Weight = "Weight",
            Height = "Height",
            Hr = "Hr",
            O2 = "O2",
            Pain = "Pain",
            VitalDateTime = "VitalDateTime",
            SVitalDate = "SVitalDate"
        }
    }
}
declare namespace EMR.Verifications {
    namespace CvitalsignsService {
        const baseUrl = "Verifications/Cvitalsigns";
        function Create(request: Serenity.SaveRequest<CvitalsignsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CvitalsignsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CvitalsignsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CvitalsignsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Verifications/Cvitalsigns/Create",
            Update = "Verifications/Cvitalsigns/Update",
            Delete = "Verifications/Cvitalsigns/Delete",
            Retrieve = "Verifications/Cvitalsigns/Retrieve",
            List = "Verifications/Cvitalsigns/List"
        }
    }
}
declare namespace EMR.VitalSigns {
}
declare namespace EMR.VitalSigns {
    interface CyclevisitsForm {
        ScheduleId: Serenity.StringEditor;
        ActualDate: Serenity.DateEditor;
        SActualDate: Common.ShamsiDatePickerEditor;
        CareTypeId: Serenity.LookupEditor;
    }
    class CyclevisitsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.VitalSigns {
    interface CyclevisitsRow {
        SessionId?: number;
        ScheduleId?: number;
        ActualDate?: string;
        SActualDate?: string;
        CareTypeId?: number;
        UserId?: number;
        Updated?: string;
        ScheduleVisitId?: number;
        ScheduleCycleId?: number;
        SchedulePlanDate?: string;
        ScheduleSPlanDate?: string;
        ScheduleComment?: string;
        Caretype?: string;
    }
    namespace CyclevisitsRow {
        const idProperty = "SessionId";
        const nameProperty = "SActualDate";
        const localTextPrefix = "VitalSigns.Cyclevisits";
        const enum Fields {
            SessionId = "SessionId",
            ScheduleId = "ScheduleId",
            ActualDate = "ActualDate",
            SActualDate = "SActualDate",
            CareTypeId = "CareTypeId",
            UserId = "UserId",
            Updated = "Updated",
            ScheduleVisitId = "ScheduleVisitId",
            ScheduleCycleId = "ScheduleCycleId",
            SchedulePlanDate = "SchedulePlanDate",
            ScheduleSPlanDate = "ScheduleSPlanDate",
            ScheduleComment = "ScheduleComment",
            Caretype = "Caretype"
        }
    }
}
declare namespace EMR.VitalSigns {
    namespace CyclevisitsService {
        const baseUrl = "VitalSigns/Cyclevisits";
        function Create(request: Serenity.SaveRequest<CyclevisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CyclevisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CyclevisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CyclevisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "VitalSigns/Cyclevisits/Create",
            Update = "VitalSigns/Cyclevisits/Update",
            Delete = "VitalSigns/Cyclevisits/Delete",
            Retrieve = "VitalSigns/Cyclevisits/Retrieve",
            List = "VitalSigns/Cyclevisits/List"
        }
    }
}
declare namespace EMR.VitalSigns {
}
declare namespace EMR.VitalSigns {
    interface SchedulingForm {
        VisitId: Serenity.StringEditor;
        CycleId: Serenity.IntegerEditor;
        PlanDate: Serenity.DateEditor;
        SPlanDate: Common.ShamsiDatePickerEditor;
        Comment: Serenity.HtmlContentEditor;
    }
    class SchedulingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.VitalSigns {
    interface SchedulingRow {
        ScheduleId?: number;
        VisitId?: number;
        CycleId?: number;
        PlanDate?: string;
        SPlanDate?: string;
        Comment?: string;
        UserId?: number;
        Updated?: string;
        CycleCyclename?: string;
        CycleCycledescription?: string;
    }
    namespace SchedulingRow {
        const idProperty = "ScheduleId";
        const nameProperty = "SPlanDate";
        const localTextPrefix = "VitalSigns.Scheduling";
        const enum Fields {
            ScheduleId = "ScheduleId",
            VisitId = "VisitId",
            CycleId = "CycleId",
            PlanDate = "PlanDate",
            SPlanDate = "SPlanDate",
            Comment = "Comment",
            UserId = "UserId",
            Updated = "Updated",
            CycleCyclename = "CycleCyclename",
            CycleCycledescription = "CycleCycledescription"
        }
    }
}
declare namespace EMR.VitalSigns {
    namespace SchedulingService {
        const baseUrl = "VitalSigns/Scheduling";
        function Create(request: Serenity.SaveRequest<SchedulingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SchedulingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SchedulingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SchedulingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "VitalSigns/Scheduling/Create",
            Update = "VitalSigns/Scheduling/Update",
            Delete = "VitalSigns/Scheduling/Delete",
            Retrieve = "VitalSigns/Scheduling/Retrieve",
            List = "VitalSigns/Scheduling/List"
        }
    }
}
declare namespace EMR.VitalSigns {
}
declare namespace EMR.VitalSigns {
    interface VitalPatientsForm {
        Mrn: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        DateOfBirth: Serenity.DateEditor;
        AgeInYear: Serenity.IntegerEditor;
        EthnicityId: Serenity.LookupEditor;
        RefertoDoctor: Serenity.LookupEditor;
    }
    class VitalPatientsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.VitalSigns {
    interface VitalPatientsRow {
        Mrid?: number;
        Mrn?: string;
        FirstName?: string;
        LastName?: string;
        FatherName?: string;
        GenderId?: number;
        DateOfBirth?: string;
        AgeInYear?: number;
        UserId?: number;
        Updated?: string;
        EthnicityId?: number;
        RefertoDoctor?: number;
        EthnicityName?: string;
        GenderName?: string;
    }
    namespace VitalPatientsRow {
        const idProperty = "Mrid";
        const nameProperty = "Mrn";
        const localTextPrefix = "VitalSigns.VitalPatients";
        const enum Fields {
            Mrid = "Mrid",
            Mrn = "Mrn",
            FirstName = "FirstName",
            LastName = "LastName",
            FatherName = "FatherName",
            GenderId = "GenderId",
            DateOfBirth = "DateOfBirth",
            AgeInYear = "AgeInYear",
            UserId = "UserId",
            Updated = "Updated",
            EthnicityId = "EthnicityId",
            RefertoDoctor = "RefertoDoctor",
            EthnicityName = "EthnicityName",
            GenderName = "GenderName"
        }
    }
}
declare namespace EMR.VitalSigns {
    namespace VitalPatientsService {
        const baseUrl = "VitalSigns/VitalPatients";
        function Create(request: Serenity.SaveRequest<VitalPatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VitalPatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VitalPatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VitalPatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "VitalSigns/VitalPatients/Create",
            Update = "VitalSigns/VitalPatients/Update",
            Delete = "VitalSigns/VitalPatients/Delete",
            Retrieve = "VitalSigns/VitalPatients/Retrieve",
            List = "VitalSigns/VitalPatients/List"
        }
    }
}
declare namespace EMR.VitalSigns {
}
declare namespace EMR.VitalSigns {
    interface VitalvisitsForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        OccupationId: Serenity.LookupEditor;
        MaritalStatusId: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        TypeofvisitId: Serenity.LookupEditor;
        DateOfVisit: Serenity.DateEditor;
        CycleId: Serenity.LookupEditor;
    }
    class VitalvisitsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.VitalSigns {
    interface VitalvisitsRow {
        VisitId?: number;
        Mrid?: number;
        OccupationId?: number;
        MaritalStatusId?: number;
        DateOfVisit?: string;
        PhoneNumber?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        UserId?: number;
        Updated?: string;
        TypeofvisitId?: number;
        OccupationName?: string;
        MaritalStatusName?: string;
        ProvinceName?: string;
        DistrictName?: string;
        MRN?: string;
        Typeofvisit?: string;
        CycleId?: number;
    }
    namespace VitalvisitsRow {
        const idProperty = "VisitId";
        const nameProperty = "PhoneNumber";
        const localTextPrefix = "VitalSigns.Vitalvisits";
        const enum Fields {
            VisitId = "VisitId",
            Mrid = "Mrid",
            OccupationId = "OccupationId",
            MaritalStatusId = "MaritalStatusId",
            DateOfVisit = "DateOfVisit",
            PhoneNumber = "PhoneNumber",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            UserId = "UserId",
            Updated = "Updated",
            TypeofvisitId = "TypeofvisitId",
            OccupationName = "OccupationName",
            MaritalStatusName = "MaritalStatusName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName",
            MRN = "MRN",
            Typeofvisit = "Typeofvisit",
            CycleId = "CycleId"
        }
    }
}
declare namespace EMR.VitalSigns {
    namespace VitalvisitsService {
        const baseUrl = "VitalSigns/Vitalvisits";
        function Create(request: Serenity.SaveRequest<VitalvisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VitalvisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VitalvisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VitalvisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "VitalSigns/Vitalvisits/Create",
            Update = "VitalSigns/Vitalvisits/Update",
            Delete = "VitalSigns/Vitalvisits/Delete",
            Retrieve = "VitalSigns/Vitalvisits/Retrieve",
            List = "VitalSigns/Vitalvisits/List"
        }
    }
}
declare namespace EMR.VitalSigns {
}
declare namespace EMR.VitalSigns {
    interface VVitalSignsForm {
        VisitId: Serenity.StringEditor;
        Weight: Serenity.IntegerEditor;
        Height: Serenity.IntegerEditor;
        Pulse: Serenity.IntegerEditor;
        Rr: Serenity.IntegerEditor;
        Temp: Serenity.IntegerEditor;
        Bp: Serenity.StringEditor;
        Hr: Serenity.IntegerEditor;
        O2: Serenity.IntegerEditor;
        Pain: Serenity.IntegerEditor;
        VitalDateTime: Serenity.DateTimeEditor;
        SVitalDate: Common.ShamsiDatePickerEditor;
    }
    class VVitalSignsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMR.VitalSigns {
    interface VVitalSignsRow {
        VitalId?: number;
        VisitId?: number;
        Pulse?: number;
        Rr?: number;
        Temp?: number;
        Bp?: string;
        Weight?: number;
        Height?: number;
        Hr?: number;
        O2?: number;
        Pain?: number;
        UserId?: number;
        Updated?: string;
        VitalDateTime?: string;
        SVitalDate?: string;
    }
    namespace VVitalSignsRow {
        const idProperty = "VitalId";
        const nameProperty = "Bp";
        const localTextPrefix = "VitalSigns.VVitalSigns";
        const enum Fields {
            VitalId = "VitalId",
            VisitId = "VisitId",
            Pulse = "Pulse",
            Rr = "Rr",
            Temp = "Temp",
            Bp = "Bp",
            Weight = "Weight",
            Height = "Height",
            Hr = "Hr",
            O2 = "O2",
            Pain = "Pain",
            UserId = "UserId",
            Updated = "Updated",
            VitalDateTime = "VitalDateTime",
            SVitalDate = "SVitalDate"
        }
    }
}
declare namespace EMR.VitalSigns {
    namespace VVitalSignsService {
        const baseUrl = "VitalSigns/VVitalSigns";
        function Create(request: Serenity.SaveRequest<VVitalSignsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VVitalSignsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VVitalSignsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VVitalSignsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "VitalSigns/VVitalSigns/Create",
            Update = "VitalSigns/VVitalSigns/Update",
            Delete = "VitalSigns/VVitalSigns/Delete",
            Retrieve = "VitalSigns/VVitalSigns/Retrieve",
            List = "VitalSigns/VVitalSigns/List"
        }
    }
}
declare namespace EMR.LanguageList {
    function getValue(): string[][];
}
declare namespace EMR.ScriptInitialization {
}
declare namespace EMR.Common {
    class ShamsiDatePickerEditor extends Serenity.Widget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        constructor(container: JQuery);
        private updateElementContent;
        value: string;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
    }
}
declare namespace EMR.Administration {
    class DashboardUrlDialog extends Serenity.EntityDialog<DashboardUrlRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DashboardUrlForm;
    }
}
declare namespace EMR.Administration {
    class DashboardUrlGrid extends Serenity.EntityGrid<DashboardUrlRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DashboardUrlDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace EMR.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace EMR.Administration {
    class ModulesDialog extends Serenity.EntityDialog<ModulesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ModulesForm;
    }
}
declare namespace EMR.Administration {
    class ModulesGrid extends Serenity.EntityGrid<ModulesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ModulesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace EMR.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace EMR.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace EMR.Administration {
    class TenantDialog extends Serenity.EntityDialog<TenantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TenantForm;
    }
}
declare namespace EMR.Administration {
    class TenantGrid extends Serenity.EntityGrid<TenantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TenantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace EMR.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getPropertyItems(): Serenity.PropertyItem[];
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace EMR.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace EMR.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace EMR.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace EMR.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace EMR.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace EMR {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace EMR.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace EMR.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace EMR.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace EMR.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace EMR.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace EMR.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace EMR {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace EMR.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace EMR.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace EMR.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace EMR.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace EMR.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace EMR.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace EMR.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace EMR.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace EMR.Configs {
    class BloodStatusDialog extends Serenity.EntityDialog<BloodStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BloodStatusForm;
    }
}
declare namespace EMR.Configs {
    class BloodStatusGrid extends Serenity.EntityGrid<BloodStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BloodStatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class CaretypesDialog extends Serenity.EntityDialog<CaretypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CaretypesForm;
    }
}
declare namespace EMR.Configs {
    class CaretypesGrid extends Serenity.EntityGrid<CaretypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CaretypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class CountriesDialog extends Serenity.EntityDialog<CountriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CountriesForm;
    }
}
declare namespace EMR.Configs {
    class CountriesGrid extends Serenity.EntityGrid<CountriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CountriesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class CyclesDialog extends Serenity.EntityDialog<CyclesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CyclesForm;
    }
}
declare namespace EMR.Configs {
    class CyclesGrid extends Serenity.EntityGrid<CyclesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CyclesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class EthnicityDialog extends Serenity.EntityDialog<EthnicityRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EthnicityForm;
    }
}
declare namespace EMR.Configs {
    class EthnicityGrid extends Serenity.EntityGrid<EthnicityRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EthnicityDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class LkpFormDialog extends Serenity.EntityDialog<LkpFormRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpFormForm;
    }
}
declare namespace EMR.Configs {
    class LkpFormGrid extends Serenity.EntityGrid<LkpFormRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpFormDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class LkpHistoryDialog extends Serenity.EntityDialog<LkpHistoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpHistoryForm;
    }
}
declare namespace EMR.Configs {
    class LkpHistoryGrid extends Serenity.EntityGrid<LkpHistoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpHistoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class LkpImagingDialog extends Serenity.EntityDialog<LkpImagingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpImagingForm;
    }
}
declare namespace EMR.Configs {
    class LkpImagingGrid extends Serenity.EntityGrid<LkpImagingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpImagingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class LkpLabTestDialog extends Serenity.EntityDialog<LkpLabTestRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpLabTestForm;
    }
}
declare namespace EMR.Configs {
    class LkpLabTestGrid extends Serenity.EntityGrid<LkpLabTestRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpLabTestDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class LkpLosstypesDialog extends Serenity.EntityDialog<LkpLosstypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpLosstypesForm;
    }
}
declare namespace EMR.Configs {
    class LkpLosstypesGrid extends Serenity.EntityGrid<LkpLosstypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpLosstypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Configs {
    class LkpManufacturerDialog extends Serenity.EntityDialog<LkpManufacturerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpManufacturerForm;
    }
}
declare namespace EMR.Configs {
    class LkpManufacturerGrid extends Serenity.EntityGrid<LkpManufacturerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpManufacturerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class LkpPatientTypeDialog extends Serenity.EntityDialog<LkpPatientTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpPatientTypeForm;
    }
}
declare namespace EMR.Configs {
    class LkpPatientTypeGrid extends Serenity.EntityGrid<LkpPatientTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpPatientTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class LkpPhysExamGroupDialog extends Serenity.EntityDialog<LkpPhysExamGroupRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpPhysExamGroupForm;
    }
}
declare namespace EMR.Configs {
    class LkpPhysExamGroupGrid extends Serenity.EntityGrid<LkpPhysExamGroupRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpPhysExamGroupDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class LkpPhysExamsDialog extends Serenity.EntityDialog<LkpPhysExamsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpPhysExamsForm;
    }
}
declare namespace EMR.Configs {
    class LkpPhysExamsGrid extends Serenity.EntityGrid<LkpPhysExamsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpPhysExamsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class LkpRecommandsDialog extends Serenity.EntityDialog<LkpRecommandsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpRecommandsForm;
    }
}
declare namespace EMR.Configs {
    class LkpRecommandsGrid extends Serenity.EntityGrid<LkpRecommandsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpRecommandsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class LkpTestTypesDialog extends Serenity.EntityDialog<LkpTestTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpTestTypesForm;
    }
}
declare namespace EMR.Configs {
    class LkpTestTypesGrid extends Serenity.EntityGrid<LkpTestTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpTestTypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class LkpUnitDialog extends Serenity.EntityDialog<LkpUnitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpUnitForm;
    }
}
declare namespace EMR.Configs {
    class LkpUnitGrid extends Serenity.EntityGrid<LkpUnitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpUnitDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class LkpVendorDialog extends Serenity.EntityDialog<LkpVendorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpVendorForm;
    }
}
declare namespace EMR.Configs {
    class LkpVendorGrid extends Serenity.EntityGrid<LkpVendorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpVendorDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class StagesDialog extends Serenity.EntityDialog<StagesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StagesForm;
    }
}
declare namespace EMR.Configs {
    class StagesGrid extends Serenity.EntityGrid<StagesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StagesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Configs {
    class TblAbortionTypeDialog extends Serenity.EntityDialog<TblAbortionTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblAbortionTypeForm;
    }
}
declare namespace EMR.Configs {
    class TblAbortionTypeGrid extends Serenity.EntityGrid<TblAbortionTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblAbortionTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblAgeTypesDialog extends Serenity.EntityDialog<TblAgeTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblAgeTypesForm;
    }
}
declare namespace EMR.Configs {
    class TblAgeTypesGrid extends Serenity.EntityGrid<TblAgeTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblAgeTypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblBloodGroupDialog extends Serenity.EntityDialog<TblBloodGroupRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblBloodGroupForm;
    }
}
declare namespace EMR.Configs {
    class TblBloodGroupGrid extends Serenity.EntityGrid<TblBloodGroupRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblBloodGroupDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblCaseTypesDialog extends Serenity.EntityDialog<TblCaseTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblCaseTypesForm;
    }
}
declare namespace EMR.Configs {
    class TblCaseTypesGrid extends Serenity.EntityGrid<TblCaseTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblCaseTypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblChildDialog extends Serenity.EntityDialog<TblChildRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblChildForm;
    }
}
declare namespace EMR.Configs {
    class TblChildGrid extends Serenity.EntityGrid<TblChildRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblChildDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblDeptDialog extends Serenity.EntityDialog<TblDeptRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblDeptForm;
    }
}
declare namespace EMR.Configs {
    class TblDeptGrid extends Serenity.EntityGrid<TblDeptRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblDeptDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblDiagnosisDialog extends Serenity.EntityDialog<TblDiagnosisRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblDiagnosisForm;
    }
}
declare namespace EMR.Configs {
    class TblDiagnosisGrid extends Serenity.EntityGrid<TblDiagnosisRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblDiagnosisDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblDiseasesCategoryDialog extends Serenity.EntityDialog<TblDiseasesCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblDiseasesCategoryForm;
    }
}
declare namespace EMR.Configs {
    class TblDiseasesCategoryGrid extends Serenity.EntityGrid<TblDiseasesCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblDiseasesCategoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblEducationDialog extends Serenity.EntityDialog<TblEducationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblEducationForm;
    }
}
declare namespace EMR.Configs {
    class TblEducationGrid extends Serenity.EntityGrid<TblEducationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblEducationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblExaminationsDetailsDialog extends Serenity.EntityDialog<TblExaminationsDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblExaminationsDetailsForm;
    }
}
declare namespace EMR.Configs {
    class TblExaminationsDetailsGrid extends Serenity.EntityGrid<TblExaminationsDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblExaminationsDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblGenderDialog extends Serenity.EntityDialog<TblGenderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblGenderForm;
    }
}
declare namespace EMR.Configs {
    class TblGenderGrid extends Serenity.EntityGrid<TblGenderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblGenderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblMaritalStatusDialog extends Serenity.EntityDialog<TblMaritalStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblMaritalStatusForm;
    }
}
declare namespace EMR.Configs {
    class TblMaritalStatusGrid extends Serenity.EntityGrid<TblMaritalStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblMaritalStatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblNbResultDialog extends Serenity.EntityDialog<TblNbResultRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblNbResultForm;
    }
}
declare namespace EMR.Configs {
    class TblNbResultGrid extends Serenity.EntityGrid<TblNbResultRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblNbResultDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblNbstatusDialog extends Serenity.EntityDialog<TblNbstatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblNbstatusForm;
    }
}
declare namespace EMR.Configs {
    class TblNbstatusGrid extends Serenity.EntityGrid<TblNbstatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblNbstatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblNbWeightDialog extends Serenity.EntityDialog<TblNbWeightRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblNbWeightForm;
    }
}
declare namespace EMR.Configs {
    class TblNbWeightGrid extends Serenity.EntityGrid<TblNbWeightRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblNbWeightDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblOccupationDialog extends Serenity.EntityDialog<TblOccupationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblOccupationForm;
    }
}
declare namespace EMR.Configs {
    class TblOccupationGrid extends Serenity.EntityGrid<TblOccupationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblOccupationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblOutcomesMotherDialog extends Serenity.EntityDialog<TblOutcomesMotherRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblOutcomesMotherForm;
    }
}
declare namespace EMR.Configs {
    class TblOutcomesMotherGrid extends Serenity.EntityGrid<TblOutcomesMotherRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblOutcomesMotherDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblPositionsDialog extends Serenity.EntityDialog<TblPositionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblPositionsForm;
    }
}
declare namespace EMR.Configs {
    class TblPositionsGrid extends Serenity.EntityGrid<TblPositionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblPositionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblProfessionsDialog extends Serenity.EntityDialog<TblProfessionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblProfessionsForm;
    }
}
declare namespace EMR.Configs {
    class TblProfessionsGrid extends Serenity.EntityGrid<TblProfessionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblProfessionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblRelationDialog extends Serenity.EntityDialog<TblRelationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblRelationForm;
    }
}
declare namespace EMR.Configs {
    class TblRelationGrid extends Serenity.EntityGrid<TblRelationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblRelationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblWardGrid extends Serenity.EntityGrid<TblWardRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblWardDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblWardCheckGrid extends Serenity.EntityGrid<TblWardRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected getButtons(): Serenity.ToolButton[];
        readonly selectedItems: TblWardRow[];
    }
}
declare namespace EMR.Configs {
    class TblWardDialog extends Serenity.EntityDialog<TblWardRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblWardForm;
    }
}
declare namespace EMR.Configs {
    class TblWardPickerDialog extends Serenity.EntityDialog<Configs.TblWardRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblWardForm;
        private checkGrid;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        readonly selectedItems: TblWardRow[];
        onSuccess: (selected: TblWardRow[]) => boolean;
    }
}
declare namespace EMR.Configs {
    class TblWardDiseasesDialog extends Serenity.EntityDialog<TblWardDiseasesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblWardDiseasesForm;
    }
}
declare namespace EMR.Configs {
    class TblWardDiseasesGrid extends Serenity.EntityGrid<TblWardDiseasesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblWardDiseasesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TblWrdVarDialog extends Serenity.EntityDialog<TblWrdVarRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblWrdVarForm;
    }
}
declare namespace EMR.Configs {
    class TblWrdVarGrid extends Serenity.EntityGrid<TblWrdVarRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblWrdVarDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Configs {
    class TopographyMainDialog extends Serenity.EntityDialog<TopographyMainRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TopographyMainForm;
    }
}
declare namespace EMR.Configs {
    class TopographyMainGrid extends Serenity.EntityGrid<TopographyMainRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TopographyMainDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Configs {
    class TopographySubDialog extends Serenity.EntityDialog<TopographySubRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TopographySubForm;
    }
}
declare namespace EMR.Configs {
    class TopographySubGrid extends Serenity.EntityGrid<TopographySubRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TopographySubDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Configs {
    class TypeofvisitDialog extends Serenity.EntityDialog<TypeofvisitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TypeofvisitForm;
    }
}
declare namespace EMR.Configs {
    class TypeofvisitGrid extends Serenity.EntityGrid<TypeofvisitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TypeofvisitDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.FM {
    class LkpServicesDialog extends Serenity.EntityDialog<LkpServicesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpServicesForm;
    }
}
declare namespace EMR.FM {
    class LkpServicesGrid extends Serenity.EntityGrid<LkpServicesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpServicesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.FM {
    class LkpServiceTypesDialog extends Serenity.EntityDialog<LkpServiceTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LkpServiceTypesForm;
    }
}
declare namespace EMR.FM {
    class LkpServiceTypesGrid extends Serenity.EntityGrid<LkpServiceTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LkpServiceTypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.FM {
    class TblFeePaymentDialog extends Serenity.EntityDialog<TblFeePaymentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: TblFeePaymentForm;
    }
}
declare namespace EMR.FM {
    class TblFeePaymentGrid extends Serenity.EntityGrid<TblFeePaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblFeePaymentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbar(): void;
        protected createQuickSearchInput(): void;
    }
}
declare namespace EMR.FM {
    class TblPrintDetailsDialog extends Serenity.EntityDialog<TblPrintDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblPrintDetailsForm;
    }
}
declare namespace EMR.FM {
    class TblPrintDetailsGrid extends Serenity.EntityGrid<TblPrintDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblPrintDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.FM {
    class TblFeePaymentTabDialog extends TblFeePaymentDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.FM {
    class TblFeePaymentTabGrid extends TblFeePaymentGrid {
        protected getDialogType(): typeof TblFeePaymentTabDialog;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _Mrid;
        Mrid: number;
    }
}
declare namespace EMR.FM {
    class UserFeePatientsDialog extends Serenity.EntityDialog<UserFeePatientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserFeePatientsForm;
        private feePaymentGrid;
        private loadedState;
        getToolbarButtons(): Serenity.ToolButton[];
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: UserFeePatientsRow): void;
        private setMRN;
    }
}
declare namespace EMR.FM {
    class UserFeePatientsGrid extends Serenity.EntityGrid<UserFeePatientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserFeePatientsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Imaging {
    class ImagePatientsDialog extends Serenity.EntityDialog<ImagePatientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ImagePatientsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private imagePatients;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: ImagePatientsRow): void;
    }
}
declare namespace EMR.Imaging {
    class ImagePatientsGrid extends Serenity.EntityGrid<ImagePatientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImagePatientsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Imaging {
    class ImagevisitsDialog extends Serenity.EntityDialog<ImagevisitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ImagevisitsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private imagePatientsGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: ImagevisitsRow): void;
    }
}
declare namespace EMR.Imaging {
    class ImagevisitsTabDialog extends ImagevisitsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Imaging {
    class ImagevisitsGrid extends Serenity.EntityGrid<ImagevisitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImagevisitsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Imaging {
    class ImagevisitsTabGrid extends ImagevisitsGrid {
        protected getDialogType(): typeof ImagevisitsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Imaging {
    class ImgImagingsDialog extends Serenity.EntityDialog<ImgImagingsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ImgImagingsForm;
    }
}
declare namespace EMR.Imaging {
    class ImgImagingsTabDialog extends ImgImagingsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Imaging {
    class ImgImagingsGrid extends Serenity.EntityGrid<ImgImagingsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImgImagingsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Imaging {
    class ImgImagingsTabGrid extends ImgImagingsGrid {
        protected getDialogType(): typeof ImgImagingsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.LabTest {
    class LabPatientsDialog extends Serenity.EntityDialog<LabPatientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LabPatientsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private labVisits;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: LabPatientsRow): void;
    }
}
declare namespace EMR.LabTest {
    class LabPatientsGrid extends Serenity.EntityGrid<LabPatientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LabPatientsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.LabTest {
    class LabvisitsDialog extends Serenity.EntityDialog<LabvisitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LabvisitsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private labTestVisits;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: LabvisitsRow): void;
    }
}
declare namespace EMR.LabTest {
    class LabvisitsTabDialog extends LabvisitsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.LabTest {
    class LabvisitsGrid extends Serenity.EntityGrid<LabvisitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LabvisitsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.LabTest {
    class LabvisitsTabGrid extends LabvisitsGrid {
        protected getDialogType(): typeof LabvisitsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.LabTest {
    class LabTestsDialog extends Serenity.EntityDialog<LabTestsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LabTestsForm;
        constructor();
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.LabTest {
    class LabTestsGrid extends Serenity.EntityGrid<LabTestsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LabTestsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.LabTest {
    class LabTestsTabDialog extends LabTestsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.LabTest {
    class LabTestsTabGrid extends LabTestsGrid {
        protected getDialogType(): typeof LabTestsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.Locations {
    class DistrictsDialog extends Serenity.EntityDialog<DistrictsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DistrictsForm;
    }
}
declare namespace EMR.Locations {
    class DistrictsGrid extends Serenity.EntityGrid<DistrictsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DistrictsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Locations {
    class FacilityInfoDialog extends Serenity.EntityDialog<FacilityInfoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: FacilityInfoForm;
    }
}
declare namespace EMR.Locations {
    class FacilityInfoGrid extends Serenity.EntityGrid<FacilityInfoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FacilityInfoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Locations {
    class FacilityTypesDialog extends Serenity.EntityDialog<FacilityTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: FacilityTypesForm;
    }
}
declare namespace EMR.Locations {
    class FacilityTypesGrid extends Serenity.EntityGrid<FacilityTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FacilityTypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Locations {
    class ProvincesDialog extends Serenity.EntityDialog<ProvincesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProvincesForm;
    }
}
declare namespace EMR.Locations {
    class ProvincesGrid extends Serenity.EntityGrid<ProvincesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProvincesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Medadmins {
    class BloodTransfusionsDialog extends Serenity.EntityDialog<BloodTransfusionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BloodTransfusionsForm;
        constructor();
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.Medadmins {
    class BloodTransfusionsGrid extends Serenity.EntityGrid<BloodTransfusionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BloodTransfusionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Medadmins {
    class MedadministrationDialog extends Serenity.EntityDialog<MedadministrationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MedadministrationForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        constructor();
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.Medadmins {
    class MedadministrationGrid extends Serenity.EntityGrid<MedadministrationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MedadministrationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Medadmins {
    class MedadminpatientsDialog extends Serenity.EntityDialog<MedadminpatientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MedadminpatientsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private medVisitsGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: MedvisitsRow): void;
    }
}
declare namespace EMR.Medadmins {
    class MedadminpatientsGrid extends Serenity.EntityGrid<MedadminpatientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MedadminpatientsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Medadmins {
    class MedvisitsDialog extends Serenity.EntityDialog<MedvisitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MedvisitsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private prescriptionsGrid;
        private medBloodTransfusionGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: MedvisitsRow): void;
    }
}
declare namespace EMR.Medadmins {
    class MedvisitsTabDialog extends MedvisitsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Medadmins {
    class MedvisitsGrid extends Serenity.EntityGrid<MedvisitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MedvisitsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Medadmins {
    class MedvisitsTabGrid extends MedvisitsGrid {
        protected getDialogType(): typeof MedvisitsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Medadmins {
    class BloodTransfusionsTabDialog extends BloodTransfusionsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Medadmins {
    class BloodTransfusionsTabGrid extends BloodTransfusionsGrid {
        protected getDialogType(): typeof BloodTransfusionsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.Medadmins {
    class MPrescriptionsDialog extends Serenity.EntityDialog<MPrescriptionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MPrescriptionsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private opdMedAdministration;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: MedadministrationRow): void;
    }
}
declare namespace EMR.Medadmins {
    class MPrescriptionsTabDialog extends MPrescriptionsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Medadmins {
    class MPrescriptionsGrid extends Serenity.EntityGrid<MPrescriptionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MPrescriptionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Medadmins {
    class MPrescriptionsTabGrid extends MPrescriptionsGrid {
        protected getDialogType(): typeof MPrescriptionsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.Medadmins {
    class MMedadministrationTabDialog extends MedadministrationDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Medadmins {
    class MMedadministrationTabGrid extends MedadministrationGrid {
        protected getDialogType(): typeof MMedadministrationTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _OrderId;
        OrderId: number;
    }
}
declare namespace EMR.Medadmins {
    class VisitsmedicineDialog extends Serenity.EntityDialog<VisitsmedicineRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VisitsmedicineForm;
    }
}
declare namespace EMR.Medadmins {
    class VisitsmedicineGrid extends Serenity.EntityGrid<VisitsmedicineRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VisitsmedicineDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.OPD {
    class DiagnosisDialog extends Serenity.EntityDialog<DiagnosisRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: DiagnosisForm;
    }
}
declare namespace EMR.OPD {
    class DiagnosisGrid extends Serenity.EntityGrid<DiagnosisRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DiagnosisDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.OPD {
    class ImagingsDialog extends Serenity.EntityDialog<ImagingsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ImagingsForm;
    }
}
declare namespace EMR.OPD {
    class ImagingsGrid extends Serenity.EntityGrid<ImagingsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImagingsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.OPD {
    class LabTestDialog extends Serenity.EntityDialog<LabTestRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LabTestForm;
        constructor();
        private setLabID;
    }
}
declare namespace EMR.OPD {
    class LabTestGrid extends Serenity.EntityGrid<LabTestRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LabTestDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.OPD {
    class OpdBloodTransfusionsDialog extends Serenity.EntityDialog<OpdBloodTransfusionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OpdBloodTransfusionsForm;
        constructor();
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.OPD {
    class OpdBloodTransfusionsGrid extends Serenity.EntityGrid<OpdBloodTransfusionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OpdBloodTransfusionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.OPD {
    class OpdMedadministrationDialog extends Serenity.EntityDialog<OpdMedadministrationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OpdMedadministrationForm;
        constructor();
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.OPD {
    class OpdMedadministrationGrid extends Serenity.EntityGrid<OpdMedadministrationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OpdMedadministrationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.OPD {
    class PatientHistoryDialog extends Serenity.EntityDialog<PatientHistoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PatientHistoryForm;
    }
}
declare namespace EMR.OPD {
    class PatientHistoryGrid extends Serenity.EntityGrid<PatientHistoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PatientHistoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.OPD {
    class PatientsDialog extends Serenity.EntityDialog<PatientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PatientsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private patientVisits;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: PatientsRow): void;
    }
}
declare namespace EMR.OPD {
    class PatientsGrid extends Serenity.EntityGrid<PatientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PatientsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.OPD {
    class VisitsDialog extends Serenity.EntityDialog<VisitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VisitsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private vitalsignGrid;
        private patienthistoryGrid;
        private physicalexaminationGrid;
        private labtestGrid;
        private medprescriptionsGrid;
        private imagingGrid;
        private recommendationsGrid;
        private diagnosisGrid;
        private bloodTransfusionGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: VisitsRow): void;
    }
}
declare namespace EMR.OPD {
    class VisitsTabDialog extends VisitsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.OPD {
    class VisitsGrid extends Serenity.EntityGrid<VisitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VisitsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.OPD {
    class VisitsTabGrid extends VisitsGrid {
        protected getDialogType(): typeof VisitsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _Mrid;
        Mrid: number;
    }
}
declare namespace EMR.OPD {
    class PhysicalExaminationDialog extends Serenity.EntityDialog<PhysicalExaminationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PhysicalExaminationForm;
    }
}
declare namespace EMR.OPD {
    class PhysicalExaminationGrid extends Serenity.EntityGrid<PhysicalExaminationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PhysicalExaminationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.OPD {
    class OpdMedadministrationTabDialog extends OpdMedadministrationDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.OPD {
    class OpdMedadministrationTabGrid extends OpdMedadministrationGrid {
        protected getDialogType(): typeof OpdMedadministrationTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _OrderId;
        OrderId: number;
    }
}
declare namespace EMR.OPD {
    class PrescriptionsDialog extends Serenity.EntityDialog<PrescriptionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PrescriptionsForm;
        private opdMedAdministration;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: PrescriptionsRow): void;
    }
}
declare namespace EMR.OPD {
    class PrescriptionsGrid extends Serenity.EntityGrid<PrescriptionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PrescriptionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.OPD {
    class RecommedationsDialog extends Serenity.EntityDialog<RecommedationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RecommedationsForm;
    }
}
declare namespace EMR.OPD {
    class RecommedationsGrid extends Serenity.EntityGrid<RecommedationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RecommedationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.OPD {
    class DiagnosisTabDialog extends DiagnosisDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.OPD {
    class DiagnosisTabGrid extends DiagnosisGrid {
        protected getDialogType(): typeof DiagnosisTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.OPD {
    class ImagingsTabDialog extends ImagingsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.OPD {
    class ImagingsTabGrid extends ImagingsGrid {
        protected getDialogType(): typeof ImagingsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.OPD {
    class LabTestTabDialog extends LabTestDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.OPD {
    class LabTestTabGrid extends LabTestGrid {
        protected getDialogType(): typeof LabTestTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.Pharmacy {
    class MedPrescriptionsDialog extends Serenity.EntityDialog<MedPrescriptionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MedPrescriptionsForm;
    }
}
declare namespace EMR.OPD {
    class MedPrescriptionsTabDialog extends Pharmacy.MedPrescriptionsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Pharmacy {
    class MedPrescriptionsGrid extends Serenity.EntityGrid<MedPrescriptionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MedPrescriptionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.OPD {
    class MedPrescriptionsTabGrid extends Pharmacy.MedPrescriptionsGrid {
        protected getDialogType(): typeof MedPrescriptionsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.OPD {
    class OpdBloodTransfusionsTabDialog extends OpdBloodTransfusionsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.OPD {
    class OpdBloodTransfusionsTabGrid extends OpdBloodTransfusionsGrid {
        protected getDialogType(): typeof OpdBloodTransfusionsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.OPD {
    class PatientHistoryTabDialog extends PatientHistoryDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.OPD {
    class PatientHistoryTabGrid extends PatientHistoryGrid {
        protected getDialogType(): typeof PatientHistoryTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.OPD {
    class PhysicalExaminationTabDialog extends PhysicalExaminationDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.OPD {
    class PhysicalExaminationTabGrid extends PhysicalExaminationGrid {
        protected getDialogType(): typeof PhysicalExaminationTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.OPD {
    class PrescriptionsTabDialog extends PrescriptionsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.OPD {
    class PrescriptionsTabGrid extends PrescriptionsGrid {
        protected getDialogType(): typeof PrescriptionsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.OPD {
    class RecommedationsTabDialog extends RecommedationsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.OPD {
    class RecommedationsTabGrid extends RecommedationsGrid {
        protected getDialogType(): typeof RecommedationsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.OPD {
    class VschedulingDialog extends Serenity.EntityDialog<VschedulingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VschedulingForm;
        constructor();
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.OPD {
    class SchedulesTabDialog extends VschedulingDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.OPD {
    class VschedulingGrid extends Serenity.EntityGrid<VschedulingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VschedulingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.OPD {
    class SchedulesTabGrid extends VschedulingGrid {
        protected getDialogType(): typeof SchedulesTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.OPD {
    class VitalSignsDialog extends Serenity.EntityDialog<VitalSignsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VitalSignsForm;
        constructor();
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.OPD {
    class VitalSignsTabDialog extends VitalSignsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.OPD {
    class VitalSignsGrid extends Serenity.EntityGrid<VitalSignsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VitalSignsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.OPD {
    class VitalSignsTabGrid extends VitalSignsGrid {
        protected getDialogType(): typeof VitalSignsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.Pharmacy {
    class MedicinelossesDialog extends Serenity.EntityDialog<MedicinelossesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: MedicinelossesForm;
    }
}
declare namespace EMR.Pharmacy {
    class MedicinelossesGrid extends Serenity.EntityGrid<MedicinelossesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MedicinelossesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Pharmacy {
    class MedicinesGrid extends Serenity.EntityGrid<MedicinesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MedicinesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getItemCssClass(item: Pharmacy.MedicinesRow, index: number): any;
    }
}
declare namespace EMR.Pharmacy {
    class MedicineCheckGrid extends Serenity.EntityGrid<MedicinesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected getButtons(): Serenity.ToolButton[];
        readonly selectedItems: MedicinesRow[];
    }
}
declare namespace EMR.Pharmacy {
    class MedicinelossesTabDialog extends MedicinelossesDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Pharmacy {
    class MedicinelossesTabGrid extends MedicinelossesGrid {
        protected getDialogType(): typeof MedicinelossesTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MedicineId;
        MedicineId: number;
    }
}
declare namespace EMR.Pharmacy {
    class MedicinePickerDialog extends Serenity.EntityDialog<Pharmacy.MedicinesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MedicinesForm;
        private checkGrid;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        readonly selectedItems: MedicinesRow[];
        onSuccess: (selected: MedicinesRow[]) => boolean;
    }
}
declare namespace EMR.Pharmacy {
    class MedicinesDialog extends Serenity.EntityDialog<MedicinesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MedicinesForm;
        private medicineLossesGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: MedicinelossesRow): void;
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.Pharmacy {
    class MedPatientsDialog extends Serenity.EntityDialog<MedPatientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MedPatientsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private patientVisits;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: MedPatientsRow): void;
    }
}
declare namespace EMR.Pharmacy {
    class MedPatientsGrid extends Serenity.EntityGrid<MedPatientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MedPatientsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Pharmacy {
    class MedvisitsDialog extends Serenity.EntityDialog<MedvisitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MedvisitsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private prescriptionGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: MedvisitsRow): void;
    }
}
declare namespace EMR.Pharmacy {
    class MedvisitsTabDialog extends MedvisitsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Pharmacy {
    class MedvisitsGrid extends Serenity.EntityGrid<MedvisitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MedvisitsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Pharmacy {
    class MedvisitsTabGrid extends MedvisitsGrid {
        protected getDialogType(): typeof MedvisitsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Pharmacy {
    class MedPrescriptionsTabDialog extends MedPrescriptionsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Pharmacy {
    class MedPrescriptionsTabGrid extends MedPrescriptionsGrid {
        protected getDialogType(): typeof MedPrescriptionsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.Register {
    class PatAttendantsDialog extends Serenity.EntityDialog<PatAttendantsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PatAttendantsForm;
    }
}
declare namespace EMR.Register {
    class PatAttendantsGrid extends Serenity.EntityGrid<PatAttendantsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PatAttendantsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Register {
    class RegoutpatientsDialog extends Serenity.EntityDialog<RegoutpatientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegoutpatientsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private patientVisits;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: RegoutpatientsRow): void;
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.Register {
    class RegoutpatientsGrid extends Serenity.EntityGrid<RegoutpatientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RegoutpatientsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Register {
    class RegvisitsDialog extends Serenity.EntityDialog<RegvisitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegvisitsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private attendantInfo;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: RegvisitsRow): void;
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.Register {
    class RegvisitsTabDialog extends RegvisitsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Register {
    class RegvisitsGrid extends Serenity.EntityGrid<RegvisitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RegvisitsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Register {
    class RegvisitsTabGrid extends RegvisitsGrid {
        protected getDialogType(): typeof RegvisitsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _Mrid;
        readonly Mrid: number;
        MrId: number;
    }
}
declare namespace EMR.Register {
    class PatAttendantsTabDialog extends PatAttendantsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Register {
    class PatAttendantsTabGrid extends PatAttendantsGrid {
        protected getDialogType(): typeof PatAttendantsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.Regs {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace EMR.Regs {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace EMR.Regs {
    class TblNewBornManagementDialog extends Serenity.EntityDialog<TblNewBornManagementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblNewBornManagementForm;
    }
}
declare namespace EMR.Regs {
    class AdmissionsNewBornManagementDialog extends TblNewBornManagementDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Regs {
    class TblNewBornManagementGrid extends Serenity.EntityGrid<TblNewBornManagementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblNewBornManagementDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Regs {
    class AdmissionsNewBornManagementGrid extends TblNewBornManagementGrid {
        protected getDialogType(): typeof AdmissionsNewBornManagementDialog;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private __AdId;
        AdId: number;
    }
}
declare namespace EMR.Regs {
    class TblOperationsDialog extends Serenity.EntityDialog<TblOperationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblOperationsForm;
        constructor();
    }
}
declare namespace EMR.Regs {
    class AdmissionsOperationsDialog extends TblOperationsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Regs {
    class TblOperationsGrid extends Serenity.EntityGrid<TblOperationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblOperationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Regs {
    class AdmissionsOperationsGrid extends TblOperationsGrid {
        protected getDialogType(): typeof AdmissionsOperationsDialog;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private __AdId;
        AdId: number;
    }
}
declare namespace EMR.Regs {
    class TblReferralDialog extends Serenity.EntityDialog<TblReferralRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblReferralForm;
        constructor();
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.Regs {
    class AdmissionsReferalDialog extends TblReferralDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Regs {
    class TblReferralGrid extends Serenity.EntityGrid<TblReferralRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblReferralDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Regs {
    class AdmissionsReferalGrid extends TblReferralGrid {
        protected getDialogType(): typeof AdmissionsReferalDialog;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private __AdId;
        AdId: number;
    }
}
declare namespace EMR.Regs {
    class TblTestExaminationsDialog extends Serenity.EntityDialog<TblTestExaminationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblTestExaminationsForm;
    }
}
declare namespace EMR.Regs {
    class AdmissionsTestResultsDialog extends TblTestExaminationsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Regs {
    class TblTestExaminationsGrid extends Serenity.EntityGrid<TblTestExaminationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblTestExaminationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Regs {
    class AdmissionsTestResultsGrid extends TblTestExaminationsGrid {
        protected getDialogType(): typeof AdmissionsTestResultsDialog;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private __AdId;
        AdId: number;
    }
}
declare namespace EMR.Regs {
    class TblAdmissionsDischargeDialog extends Serenity.EntityDialog<TblAdmissionsDischargeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblAdmissionsDischargeForm;
        private AdmissionNewBornGrid;
        private AdmissionReferalsGrid;
        private AdmissionsTestResultGrid;
        private AdmisionOperations;
        private loadedState;
        constructor();
        private getStatusDeath;
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: TblAdmissionsDischargeRow): void;
        private unhideAbortionType;
        private unhideDeathResult;
        private unhideAbortionTypeForm;
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.Regs {
    class TblAdmissionsDischargeGrid extends Serenity.EntityGrid<TblAdmissionsDischargeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblAdmissionsDischargeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Regs {
    class TblDischargeDialog extends Serenity.EntityDialog<TblDischargeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblDischargeForm;
    }
}
declare namespace EMR.Regs {
    class TblDischargeGrid extends Serenity.EntityGrid<TblDischargeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblDischargeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Regs {
    class TblPatDetailsDialog extends Serenity.EntityDialog<TblPatDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblPatDetailsForm;
        constructor();
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.Regs {
    class TblPatDetailsGrid extends Serenity.EntityGrid<TblPatDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblPatDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Regs {
    class TblPatientNextOfKeenDialog extends Serenity.EntityDialog<TblPatientNextOfKeenRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblPatientNextOfKeenForm;
    }
}
declare namespace EMR.Regs {
    class TblPatientNextOfKeenGrid extends Serenity.EntityGrid<TblPatientNextOfKeenRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblPatientNextOfKeenDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Regs {
    class AdmissionsDischargeDialog extends TblDischargeDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Regs {
    class AdmissionsDischargeGrid extends TblDischargeGrid {
        protected getDialogType(): typeof AdmissionsDischargeDialog;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private __Mrid;
        Mrid: number;
    }
}
declare namespace EMR.Regs {
    class TblPatientsAdmissionsDischargeDialog extends TblAdmissionsDischargeDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Regs {
    class TblPatientsAdmissionsDischargeDialog extends TblAdmissionsDischargeDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Regs {
    class TblPatientsAdmissionsDischargeGrid extends TblAdmissionsDischargeGrid {
        protected getDialogType(): typeof TblPatientsAdmissionsDischargeDialog;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _Mrid;
        Mrid: number;
    }
}
declare namespace EMR.Regs {
    class TblPatientsDialog extends Serenity.EntityDialog<TblPatientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblPatientsForm;
        private PatDetailsGrid;
        private PatAdmissionDischarge;
        private PatientsNextOfKeen;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: TblPatientsRow): void;
        private setMRN;
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
    }
}
declare namespace EMR.Regs {
    class TblPatientsGrid extends Serenity.EntityGrid<TblPatientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblPatientsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Regs {
    class TblPatientsNextOfKeenDialog extends TblPatientNextOfKeenDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Regs {
    class TblPatientsNextOfKeenGrid extends TblPatientNextOfKeenGrid {
        protected getDialogType(): typeof TblPatientsNextOfKeenDialog;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _Mrid;
        Mrid: number;
    }
}
declare namespace EMR.Regs {
    class TblPatientsPatDetailsDialog extends TblPatDetailsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Regs {
    class TblPatientsPatDetailsGrid extends TblPatDetailsGrid {
        protected getDialogType(): typeof TblPatientsPatDetailsDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _Mrid;
        Mrid: number;
    }
}
declare namespace EMR.Structure {
    class BedReportDetailsDialog extends Serenity.EntityDialog<BedReportDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BedReportDetailsForm;
    }
}
declare namespace EMR.Structure {
    class BedReportDetailsEditor extends Common.GridEditorBase<BedReportDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BedReportDetailsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Structure {
    class BedReportDetailsEditorDialog extends Common.GridEditorDialog<BedReportDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: BedReportDetailsForm;
    }
}
declare namespace EMR.Structure {
    class BedReportDetailsGrid extends Serenity.EntityGrid<BedReportDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BedReportDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Structure {
    class BedReportsDialog extends Serenity.EntityDialog<BedReportsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BedReportsForm;
    }
}
declare namespace EMR.Structure {
    class BedReportsGrid extends Serenity.EntityGrid<BedReportsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BedReportsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Structure {
    class TblDutyDialog extends Serenity.EntityDialog<TblDutyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblDutyForm;
    }
}
declare namespace EMR.Structure {
    class TblDutyGrid extends Serenity.EntityGrid<TblDutyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblDutyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Structure {
    class TblEmpDialog extends Serenity.EntityDialog<TblEmpRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TblEmpForm;
    }
}
declare namespace EMR.Structure {
    class TblEmpGrid extends Serenity.EntityGrid<TblEmpRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblEmpDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Verifications {
    class CbloodtransfusionsDialog extends Serenity.EntityDialog<CbloodtransfusionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CbloodtransfusionsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CbloodtransfusionsGrid extends Serenity.EntityGrid<CbloodtransfusionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CbloodtransfusionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CdiagnosisDialog extends Serenity.EntityDialog<CdiagnosisRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CdiagnosisForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CdiagnosisGrid extends Serenity.EntityGrid<CdiagnosisRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CdiagnosisDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CimagingsDialog extends Serenity.EntityDialog<CimagingsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CimagingsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CimagingsGrid extends Serenity.EntityGrid<CimagingsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CimagingsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class ClabtestsDialog extends Serenity.EntityDialog<ClabtestsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClabtestsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class ClabtestsGrid extends Serenity.EntityGrid<ClabtestsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClabtestsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CmedadministrationDialog extends Serenity.EntityDialog<CmedadministrationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CmedadministrationForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CmedadministrationGrid extends Serenity.EntityGrid<CmedadministrationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CmedadministrationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CcmedadministrationTabDialog extends CmedadministrationDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Verifications {
    class CcmedadministrationTabGrid extends CmedadministrationGrid {
        protected getDialogType(): typeof CmedadministrationTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _OrderId;
        OrderId: number;
    }
}
declare namespace EMR.Verifications {
    class CmedprescriptionsDialog extends Serenity.EntityDialog<CmedprescriptionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CmedprescriptionsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private cmedadministrationTabGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CmedprescriptionsRow): void;
    }
}
declare namespace EMR.Verifications {
    class CmedprescriptionsGrid extends Serenity.EntityGrid<CmedprescriptionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CmedprescriptionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CpatienthistoryDialog extends Serenity.EntityDialog<CpatienthistoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CpatienthistoryForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CpatienthistoryGrid extends Serenity.EntityGrid<CpatienthistoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CpatienthistoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CbloodtransfusionsTabDialog extends CbloodtransfusionsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Verifications {
    class CbloodtransfusionsTabGrid extends CbloodtransfusionsGrid {
        protected getDialogType(): typeof CbloodtransfusionsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Verifications {
    class CdiagnosisTabDialog extends CdiagnosisDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Verifications {
    class CdiagnosisTabGrid extends CdiagnosisGrid {
        protected getDialogType(): typeof CdiagnosisTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Verifications {
    class CimagingsTabDialog extends CimagingsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Verifications {
    class CimagingsTabGrid extends CimagingsGrid {
        protected getDialogType(): typeof CimagingsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Verifications {
    class ClabtestsTabDialog extends ClabtestsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Verifications {
    class ClabtestsTabGrid extends ClabtestsGrid {
        protected getDialogType(): typeof ClabtestsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Verifications {
    class CmedadministrationTabDialog extends CmedadministrationDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Verifications {
    class CmedadministrationTabGrid extends CmedadministrationGrid {
        protected getDialogType(): typeof CmedadministrationTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Verifications {
    class CmedprescriptionsTabDialog extends CmedprescriptionsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Verifications {
    class CmedprescriptionsTabGrid extends CmedprescriptionsGrid {
        protected getDialogType(): typeof CmedprescriptionsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Verifications {
    class CpatienthistoryTabDialog extends CpatienthistoryDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Verifications {
    class CpatienthistoryTabGrid extends CpatienthistoryGrid {
        protected getDialogType(): typeof CpatienthistoryTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Verifications {
    class CpatientsDialog extends Serenity.EntityDialog<CpatientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CpatientsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private cvisitsTabGrid;
        private cvitalsignsGrid;
        private cpatienthistoryGrid;
        private cphysicalexaminationGrid;
        private clabtestsGrid;
        private cimagingsGrid;
        private cdiagnosisGrid;
        private cmedprescriptionsGrid;
        private crecommendationsGrid;
        private cbloodtransfusionsGrid;
        private cmedadministrationGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CpatientsRow): void;
    }
}
declare namespace EMR.Verifications {
    class CpatientsGrid extends Serenity.EntityGrid<CpatientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CpatientsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CphysicalexaminationDialog extends Serenity.EntityDialog<CphysicalexaminationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CphysicalexaminationForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CphysicalexaminationTabDialog extends CphysicalexaminationDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Verifications {
    class CphysicalexaminationGrid extends Serenity.EntityGrid<CphysicalexaminationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CphysicalexaminationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CphysicalexaminationTabGrid extends CphysicalexaminationGrid {
        protected getDialogType(): typeof CphysicalexaminationTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Verifications {
    class CrecommendationsDialog extends Serenity.EntityDialog<CrecommendationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CrecommendationsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CrecommendationsTabDialog extends CrecommendationsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Verifications {
    class CrecommendationsGrid extends Serenity.EntityGrid<CrecommendationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CrecommendationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CrecommendationsTabGrid extends CrecommendationsGrid {
        protected getDialogType(): typeof CrecommendationsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Verifications {
    class CvisitsDialog extends Serenity.EntityDialog<CvisitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CvisitsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CvisitsTabDialog extends CvisitsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Verifications {
    class CvisitsGrid extends Serenity.EntityGrid<CvisitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CvisitsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CvisitsTabGrid extends CvisitsGrid {
        protected getDialogType(): typeof CvisitsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.Verifications {
    class CvitalsignsDialog extends Serenity.EntityDialog<CvitalsignsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CvitalsignsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CvitalsignsTabDialog extends CvitalsignsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.Verifications {
    class CvitalsignsGrid extends Serenity.EntityGrid<CvitalsignsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CvitalsignsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.Verifications {
    class CvitalsignsTabGrid extends CvitalsignsGrid {
        protected getDialogType(): typeof CvitalsignsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.VitalSigns {
    class CyclevisitsDialog extends Serenity.EntityDialog<CyclevisitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CyclevisitsForm;
        constructor();
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.VitalSigns {
    class CyclevisitsGrid extends Serenity.EntityGrid<CyclevisitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CyclevisitsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.VitalSigns {
    class CyclevisitsTabDialog extends CyclevisitsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.VitalSigns {
    class CyclevisitsTabGrid extends CyclevisitsGrid {
        protected getDialogType(): typeof CyclevisitsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _ScheduleId;
        ScheduleId: number;
    }
}
declare namespace EMR.VitalSigns {
    class SchedulingDialog extends Serenity.EntityDialog<SchedulingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SchedulingForm;
        private cyclevisitsGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: SchedulingRow): void;
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.VitalSigns {
    class SchedulingGrid extends Serenity.EntityGrid<SchedulingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SchedulingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMR.VitalSigns {
    class VitalPatientsDialog extends Serenity.EntityDialog<VitalPatientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VitalPatientsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private vitalSignsGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: VitalPatientsRow): void;
    }
}
declare namespace EMR.VitalSigns {
    class VitalPatientsGrid extends Serenity.EntityGrid<VitalPatientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VitalPatientsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.VitalSigns {
    class VitalvisitsDialog extends Serenity.EntityDialog<VitalvisitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VitalvisitsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private vitalSignsGrid;
        private schedulingGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: VitalvisitsRow): void;
    }
}
declare namespace EMR.VitalSigns {
    class VitalvisitsTabDialog extends VitalvisitsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.VitalSigns {
    class VitalvisitsGrid extends Serenity.EntityGrid<VitalvisitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VitalvisitsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.VitalSigns {
    class VitalvisitsTabGrid extends VitalvisitsGrid {
        protected getDialogType(): typeof VitalvisitsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _MrId;
        MrId: number;
    }
}
declare namespace EMR.VitalSigns {
    class SchedulingTabDialog extends SchedulingDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.VitalSigns {
    class SchedulingTabGrid extends SchedulingGrid {
        protected getDialogType(): typeof SchedulingDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.VitalSigns {
    class VVitalSignsDialog extends Serenity.EntityDialog<VVitalSignsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VVitalSignsForm;
        constructor();
    }
}
declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;
declare namespace EMR.VitalSigns {
    class VVitalSignsTabDialog extends VVitalSignsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace EMR.VitalSigns {
    class VVitalSignsGrid extends Serenity.EntityGrid<VVitalSignsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VVitalSignsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace EMR.VitalSigns {
    class VVitalSignsTabGrid extends VVitalSignsGrid {
        protected getDialogType(): typeof VVitalSignsTabDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _VisitId;
        VisitId: number;
    }
}
declare namespace EMR.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace EMR.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace EMR.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
