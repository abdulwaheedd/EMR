namespace EMR.Texts {

    declare namespace Db {

        namespace Administration {

            namespace DashboardUrl {
                export const Active: string;
                export const Id: string;
                export const Url: string;
            }

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Modules {
                export const ModuleDescription: string;
                export const ModuleId: string;
                export const ModuleName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
                export const TenantId: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Tenant {
                export const FacilityId: string;
                export const FacilityName: string;
                export const TenantId: string;
                export const TenantName: string;
            }

            namespace Translation {
                export const AdmissionDateBigger: string;
                export const AdmissionDateSmaller: string;
                export const CustomText: string;
                export const DischargeDateEqualToday: string;
                export const DischargeDateInvalid: string;
                export const DischargeLessThanAdmission: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const FacilityID: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Configs {

            namespace BloodStatus {
                export const BId: string;
                export const Bloodstatus: string;
            }

            namespace Caretypes {
                export const Caretype: string;
                export const Id: string;
            }

            namespace Countries {
                export const Agriculture: string;
                export const Arable: string;
                export const Area: string;
                export const Birthrate: string;
                export const Climate: string;
                export const CoastlineRatio: string;
                export const Country: string;
                export const CountryId: string;
                export const Crops: string;
                export const Deathrate: string;
                export const Gdp: string;
                export const Industry: string;
                export const InfantMortality1000: string;
                export const LiteracyPerc: string;
                export const NetMigration: string;
                export const Other: string;
                export const Phones: string;
                export const PopDensity: string;
                export const Population: string;
                export const Region: string;
                export const Service: string;
            }

            namespace Cycles {
                export const CycleId: string;
                export const Cycledescription: string;
                export const Cyclename: string;
            }

            namespace Ethnicity {
                export const EthnicityId: string;
                export const EthnicityName: string;
            }

            namespace LkpForm {
                export const FormId: string;
                export const FormName: string;
            }

            namespace LkpHistory {
                export const HistoryId: string;
                export const HistoryName: string;
            }

            namespace LkpImaging {
                export const ImagingId: string;
                export const ImagingName: string;
                export const Note: string;
            }

            namespace LkpLabTest {
                export const LabTestId: string;
                export const LabTestName: string;
                export const NormalRange: string;
                export const SubTypeTestId: string;
                export const TestPrice: string;
                export const TestTypeName: string;
                export const Unit: string;
            }

            namespace LkpLosstypes {
                export const LosstypeId: string;
                export const Name: string;
            }

            namespace LkpManufacturer {
                export const CellPhoneNo: string;
                export const CountryId: string;
                export const Email: string;
                export const ManufacturerId: string;
                export const ManufacturerName: string;
                export const ManufacturerType: string;
                export const Website: string;
            }

            namespace LkpPatientType {
                export const TypeId: string;
                export const TypeNameDari: string;
                export const TypeNameEn: string;
                export const TypeNamePashto: string;
            }

            namespace LkpPhysExamGroup {
                export const GroupId: string;
                export const GroupName: string;
            }

            namespace LkpPhysExams {
                export const GroupEamName: string;
                export const GroupId: string;
                export const GroupName: string;
                export const PhysExamId: string;
                export const PhysExamName: string;
            }

            namespace LkpRecommands {
                export const RecomId: string;
                export const RecommandName: string;
            }

            namespace LkpTestTypes {
                export const TestTypeId: string;
                export const TestTypeName: string;
            }

            namespace LkpUnit {
                export const UnitId: string;
                export const UnitName: string;
            }

            namespace LkpVendor {
                export const CellPhoneNo: string;
                export const Email: string;
                export const VendorId: string;
                export const VendorName: string;
                export const VendorRegNo: string;
                export const VendorType: string;
            }

            namespace Stages {
                export const StageId: string;
                export const Stagename: string;
            }

            namespace TblAbortionType {
                export const AbortionId: string;
                export const AbortionTypeDari: string;
                export const AbortionTypeEn: string;
                export const AbortionTypePashto: string;
            }

            namespace TblAgeTypes {
                export const AgeTypeName: string;
                export const AgeTypeNameDari: string;
                export const AgeTypeNameEn: string;
                export const AgeTypeNamePashto: string;
                export const AgetypeId: string;
            }

            namespace TblBloodGroup {
                export const BloodGroup: string;
                export const BloodGroupId: string;
            }

            namespace TblCaseTypes {
                export const CaseId: string;
                export const CaseTypeName: string;
                export const CasetypeDari: string;
                export const CasetypeEn: string;
                export const CasetypePashto: string;
            }

            namespace TblChild {
                export const ChildDari: string;
                export const ChildEn: string;
                export const ChildId: string;
                export const ChildPashto: string;
                export const NbChild: string;
            }

            namespace TblDept {
                export const DeptName: string;
                export const DeptNameD: string;
                export const DeptNameP: string;
                export const DpId: string;
            }

            namespace TblDiagnosis {
                export const DiagNosis: string;
                export const DiagnosisDari: string;
                export const DiagnosisEn: string;
                export const DiagnosisId: string;
                export const DiagnosisPashto: string;
            }

            namespace TblDiseasesCategory {
                export const DiseasesCatDari: string;
                export const DiseasesCatPashto: string;
                export const DiseasesCategory: string;
                export const Id: string;
                export const Wardid: string;
            }

            namespace TblEducation {
                export const EducationDari: string;
                export const EducationEng: string;
                export const EducationName: string;
                export const Eid: string;
            }

            namespace TblExaminationsDetails {
                export const DepartmentName: string;
                export const DpId: string;
                export const EdName: string;
                export const Edid: string;
            }

            namespace TblGender {
                export const Gender: string;
                export const GenderDa: string;
                export const GenderEng: string;
                export const GenderId: string;
                export const GenderPs: string;
            }

            namespace TblMaritalStatus {
                export const MariId: string;
                export const MaritalStatus: string;
                export const PatMaritalStatusDari: string;
                export const PatMaritalStatusEng: string;
            }

            namespace TblNbResult {
                export const NbResult: string;
                export const NbResultDari: string;
                export const NbResultEn: string;
                export const NbResultId: string;
                export const NbResultPashto: string;
            }

            namespace TblNbWeight {
                export const NbWeight: string;
                export const NbWeightDari: string;
                export const NbWeightEn: string;
                export const NbWeightId: string;
                export const NbWeightPashto: string;
            }

            namespace TblNbstatus {
                export const NbStatus: string;
                export const NbstatusDari: string;
                export const NbstatusEng: string;
                export const NbstatusId: string;
                export const NbstatusPashto: string;
            }

            namespace TblOccupation {
                export const OccupationDari: string;
                export const OccupationEng: string;
                export const OccupationName: string;
                export const Oid: string;
            }

            namespace TblOutcomesMother {
                export const OutcomeDari: string;
                export const OutcomeEng: string;
                export const OutcomeId: string;
                export const OutcomeName: string;
            }

            namespace TblPositions {
                export const DeptId: string;
                export const EmpId: string;
                export const LastUpdated: string;
                export const PosDate: string;
                export const PosDateH: string;
                export const PosId: string;
                export const ProId: string;
                export const TenantId: string;
                export const UserName: string;
            }

            namespace TblProfessions {
                export const ProId: string;
                export const ProName: string;
                export const ProNameD: string;
            }

            namespace TblRelation {
                export const Relation: string;
                export const RelationId: string;
                export const RelationName: string;
                export const RelationNameEng: string;
            }

            namespace TblWard {
                export const Ward: string;
                export const WardId: string;
                export const WardName: string;
                export const WardNameD: string;
                export const WardNumBeds: string;
            }

            namespace TblWardDisease {
                export const DiagnosisTreatment: string;
                export const DiseaseDariName: string;
                export const DiseasesCat: string;
                export const DiseasesCategory: string;
                export const DiseasesCode: string;
                export const DiseasesName: string;
                export const HmirCode: string;
                export const HmirCodeId: string;
                export const Status: string;
                export const WId: string;
                export const WardCode: string;
            }

            namespace TblWardDiseases {
                export const DiseaseDariName: string;
                export const DiseaseName: string;
                export const DiseasesCat: string;
                export const DiseasesCategory: string;
                export const DiseasesCode: string;
                export const DiseasesName: string;
                export const HmirCode: string;
                export const HmirCodeId: string;
                export const Status: string;
                export const WId: string;
                export const WardCode: string;
                export const WvId: string;
            }

            namespace TblWrdVar {
                export const DiagnTreatComp: string;
                export const VarNameDari: string;
                export const VarNameEnglish: string;
                export const VarNamePashto: string;
                export const VarSpecification: string;
                export const Wrdid: string;
                export const WrdidLastUpdated: string;
                export const WrdidUserName: string;
                export const WrdidWardName: string;
                export const WrdidWardNameD: string;
                export const WrdidWardNumBeds: string;
                export const Wvid: string;
                export const WwardDiseaseName: string;
            }

            namespace TopographyMain {
                export const Icd0Code: string;
                export const TopographyMName: string;
                export const TopomainId: string;
            }

            namespace TopographySub {
                export const Icd0Code: string;
                export const TopographySName: string;
                export const TopomainIcd0Code: string;
                export const TopomainId: string;
                export const TopomainTopographyMName: string;
                export const ToposubId: string;
            }

            namespace Typeofvisit {
                export const Id: string;
                export const TypeOfVisit: string;
            }
        }

        namespace Expenditure {

            namespace Note {
                export const EntityId: string;
                export const EntityType: string;
                export const InsertDate: string;
                export const InsertUserDisplayName: string;
                export const InsertUserId: string;
                export const NoteId: string;
                export const Text: string;
            }
        }

        namespace FM {

            namespace LkpServiceTypes {
                export const ServiceType: string;
                export const ServiceTypeDari: string;
                export const ServiceTypeEn: string;
                export const ServiceTypeId: string;
                export const ServiceTypePashto: string;
            }

            namespace LkpServices {
                export const DiscountRate: string;
                export const ServiceDari: string;
                export const ServiceEn: string;
                export const ServiceId: string;
                export const ServicePashto: string;
                export const ServicePrice: string;
                export const ServiceTypeId: string;
                export const ServiceTypeServiceTypeDari: string;
                export const ServiceTypeServiceTypeEn: string;
                export const ServiceTypeServiceTypePashto: string;
                export const Status: string;
            }

            namespace TblFeePayment {
                export const DateCreated: string;
                export const FeeId: string;
                export const LastUpdated: string;
                export const Mrid: string;
                export const ServiceFee: string;
                export const ServiceId: string;
                export const ServiceTypeServiceType: string;
                export const Times: string;
                export const UserName: string;
            }

            namespace TblPrintDetails {
                export const DateTimePrinted: string;
                export const FeeId: string;
                export const PrintId: string;
                export const PrintedBy: string;
            }

            namespace UserFeePatients {
                export const FacilityFacilityNameDari: string;
                export const FacilityId: string;
                export const Gender: string;
                export const LastUpdated: string;
                export const Mrid: string;
                export const Mrn: string;
                export const PatFatName: string;
                export const PatGender: string;
                export const PatHusbandName: string;
                export const PatName: string;
                export const PatRealationName: string;
                export const TenantId: string;
                export const UserName: string;
            }
        }

        namespace Imaging {

            namespace ImagePatients {
                export const AgeInYear: string;
                export const DateOfBirth: string;
                export const EthnicityId: string;
                export const EthnicityName: string;
                export const FatherName: string;
                export const FirstName: string;
                export const GenderId: string;
                export const GenderName: string;
                export const LastName: string;
                export const Mrid: string;
                export const Mrn: string;
                export const RefertoDoctor: string;
                export const Updated: string;
                export const UserId: string;
            }

            namespace Imagevisits {
                export const CycleId: string;
                export const DateOfVisit: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const Location: string;
                export const MRN: string;
                export const MaritalStatusId: string;
                export const MaritalStatusName: string;
                export const Mrid: string;
                export const OccupationId: string;
                export const OccupationName: string;
                export const PhoneNumber: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const Typeofvisit: string;
                export const TypeofvisitId: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace ImgImagings {
                export const Id: string;
                export const ImagingId: string;
                export const ImagingName: string;
                export const MRID: string;
                export const MRN: string;
                export const Note: string;
                export const TestImage: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }
        }

        namespace LabTest {

            namespace LabPatients {
                export const AgeInYear: string;
                export const DateOfBirth: string;
                export const EthnicityId: string;
                export const EthnicityName: string;
                export const FatherName: string;
                export const FirstName: string;
                export const GenderId: string;
                export const GenderName: string;
                export const LastName: string;
                export const Mrid: string;
                export const Mrn: string;
                export const RefertoDoctor: string;
                export const Updated: string;
                export const UserId: string;
            }

            namespace LabTests {
                export const Id: string;
                export const LabDateTime: string;
                export const LabTestId: string;
                export const LabTestName: string;
                export const NormalRange: string;
                export const Result: string;
                export const SlabDate: string;
                export const TestTypeId: string;
                export const TestTypeName: string;
                export const Unit: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
                export const VisitMrid: string;
            }

            namespace Labvisits {
                export const CycleId: string;
                export const DateOfVisit: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const Location: string;
                export const MRN: string;
                export const MaritalStatusId: string;
                export const MaritalStatusName: string;
                export const Mrid: string;
                export const OccupationId: string;
                export const OccupationName: string;
                export const PhoneNumber: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const Typeofvisit: string;
                export const TypeofvisitId: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }
        }

        namespace Locations {

            namespace Districts {
                export const DistrictDari: string;
                export const DistrictEng: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const DistrictPashto: string;
                export const ProvinceDari: string;
                export const ProvinceEng: string;
                export const ProvinceId: string;
                export const ProvincePashto: string;
            }

            namespace FacilityInfo {
                export const DistProvinceId: string;
                export const DistrictDari: string;
                export const DistrictEng: string;
                export const DistrictId: string;
                export const DistrictPashto: string;
                export const FacilityFullName: string;
                export const FacilityId: string;
                export const FacilityName: string;
                export const FacilityNameDari: string;
                export const FacilityNamePashto: string;
                export const FacilityType: string;
                export const FacilityTypeFacType: string;
                export const FacilityTypeFacTypeDari: string;
                export const FacilityTypeFacTypePashto: string;
                export const GpsLattitude: string;
                export const GpsLongtitude: string;
                export const GrantId: string;
                export const Implementer: string;
                export const Lat: string;
                export const Lon: string;
                export const NoOfPatients: string;
                export const ProvinAbbrv: string;
                export const TenantId: string;
                export const ViliCode: string;
            }

            namespace FacilityInfoRefer {
                export const FacilityFullName: string;
                export const FacilityId: string;
                export const FacilityName: string;
                export const FacilityNameDari: string;
                export const FacilityNamePashto: string;
            }

            namespace FacilityTypes {
                export const FacType: string;
                export const FacTypeCode: string;
                export const FacTypeDari: string;
                export const FacTypePashto: string;
            }

            namespace Provinces {
                export const ProvPop: string;
                export const ProvinceAbbrv: string;
                export const ProvinceDari: string;
                export const ProvinceEng: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const ProvincePashto: string;
            }
        }

        namespace Medadmins {

            namespace BloodTransfusions {
                export const BloodGroup: string;
                export const BloodGroupId: string;
                export const Bloodstatus: string;
                export const BloodstatusId: string;
                export const RecDateTime: string;
                export const Recomquantity: string;
                export const SRecDate: string;
                export const STransDate: string;
                export const TranUserId: string;
                export const TransDateTime: string;
                export const TransUpdated: string;
                export const TransfusionId: string;
                export const Transmitquantity: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace MPrescriptions {
                export const Comment: string;
                export const DailyDose: string;
                export const MedicineId: string;
                export const MedicineName: string;
                export const OrderId: string;
                export const Quantity: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace Medadministration {
                export const AppDateTime: string;
                export const AppSDate: string;
                export const AppUpdated: string;
                export const AppUserId: string;
                export const Comment: string;
                export const MedadminId: string;
                export const Medicine: string;
                export const OrderId: string;
                export const Quantity: string;
                export const RecDateTime: string;
                export const RecSDate: string;
                export const Updated: string;
                export const UserId: string;
            }

            namespace Medadminpatients {
                export const AgeInYear: string;
                export const DateOfBirth: string;
                export const EthnicityId: string;
                export const EthnicityName: string;
                export const FatherName: string;
                export const FirstName: string;
                export const GenderId: string;
                export const GenderName: string;
                export const LastName: string;
                export const Mrid: string;
                export const Mrn: string;
                export const RefertoDoctor: string;
                export const Updated: string;
                export const UserId: string;
            }

            namespace Medvisits {
                export const CycleId: string;
                export const DateOfVisit: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const Location: string;
                export const MRN: string;
                export const MaritalStatusId: string;
                export const MaritalStatusName: string;
                export const Mrid: string;
                export const OccupationId: string;
                export const OccupationName: string;
                export const PhoneNumber: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const Typeofvisit: string;
                export const TypeofvisitId: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace OpdBloodTransfusions {
                export const BloodGroup: string;
                export const BloodGroupId: string;
                export const Bloodstatus: string;
                export const BloodstatusId: string;
                export const RecDateTime: string;
                export const Recomquantity: string;
                export const SRecDate: string;
                export const STransDate: string;
                export const TranUserId: string;
                export const TransDateTime: string;
                export const TransUpdated: string;
                export const TransfusionId: string;
                export const Transmitquantity: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace OpdMedadministration {
                export const AppDateTime: string;
                export const AppSDate: string;
                export const AppUpdated: string;
                export const AppUserId: string;
                export const Comment: string;
                export const MedadminId: string;
                export const Medicine: string;
                export const OrderId: string;
                export const Quantity: string;
                export const RecDateTime: string;
                export const RecSDate: string;
                export const Updated: string;
                export const UserId: string;
            }

            namespace Visitsmedicine {
                export const Medicine: string;
                export const Mrid: string;
                export const OrderId: string;
                export const VisitId: string;
            }
        }

        namespace OPD {

            namespace Diagnosis {
                export const Comorbidity: string;
                export const Comorbidity2Id: string;
                export const Comorbidity3Id: string;
                export const ComorbidityId: string;
                export const DiagnosisId: string;
                export const FinalDiagnosis: string;
                export const FinalDiagnosisDate: string;
                export const FinalDiagnosisId: string;
                export const InitialDiagnosis: string;
                export const InitialDiagnosisDate: string;
                export const InitialDiagnosisId: string;
                export const Note: string;
                export const SelfDiagnosis: string;
                export const SelfDiagnosisDate: string;
                export const SelfDiagnosisId: string;
                export const StageId: string;
                export const TopoMain: string;
                export const TopoSub: string;
                export const TopomainId: string;
                export const ToposubId: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
                export const VisitMrid: string;
            }

            namespace Imagings {
                export const Id: string;
                export const ImagingId: string;
                export const ImagingName: string;
                export const Note: string;
                export const TestImage: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace LabTest {
                export const Id: string;
                export const LabDateTime: string;
                export const LabTestId: string;
                export const LabTestName: string;
                export const NormalRange: string;
                export const Result: string;
                export const SlabDate: string;
                export const TestTypeId: string;
                export const TestTypeName: string;
                export const Unit: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
                export const VisitMrid: string;
            }

            namespace PatientHistory {
                export const HistoryId: string;
                export const HistoryName: string;
                export const Id: string;
                export const Note: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace Patients {
                export const AgeInYear: string;
                export const DateOfBirth: string;
                export const EthnicityId: string;
                export const EthnicityName: string;
                export const FatherName: string;
                export const FirstName: string;
                export const GenderId: string;
                export const GenderName: string;
                export const LastName: string;
                export const Mrid: string;
                export const Mrn: string;
                export const RefertoDoctor: string;
                export const Updated: string;
                export const UserId: string;
            }

            namespace PhysicalExamination {
                export const GroupId: string;
                export const Id: string;
                export const Note: string;
                export const PhysExamGroup: string;
                export const PhysExamId: string;
                export const PhysExamName: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace Prescriptions {
                export const Comment: string;
                export const DailyDose: string;
                export const MedicineId: string;
                export const MedicineName: string;
                export const OrderId: string;
                export const Quantity: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace Recommedations {
                export const Note: string;
                export const RecomId: string;
                export const RecomRecommandName: string;
                export const RecommandationId: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
                export const VisitMrid: string;
            }

            namespace Visits {
                export const CycleId: string;
                export const DateOfVisit: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const Location: string;
                export const MRN: string;
                export const MaritalStatusId: string;
                export const MaritalStatusName: string;
                export const Mrid: string;
                export const OccupationId: string;
                export const OccupationName: string;
                export const PhoneNumber: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const Typeofvisit: string;
                export const TypeofvisitId: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace VitalSigns {
                export const Bp: string;
                export const Height: string;
                export const Hr: string;
                export const O2: string;
                export const Pain: string;
                export const Pulse: string;
                export const Rr: string;
                export const SVitalDate: string;
                export const Temp: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
                export const VitalDateTime: string;
                export const VitalId: string;
                export const Weight: string;
            }

            namespace Vscheduling {
                export const Comment: string;
                export const CycleCyclename: string;
                export const CycleId: string;
                export const PlanDate: string;
                export const SPlanDate: string;
                export const ScheduleId: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }
        }

        namespace Pharmacy {

            namespace MedPatients {
                export const AgeInYear: string;
                export const DateOfBirth: string;
                export const EthnicityId: string;
                export const EthnicityName: string;
                export const FatherName: string;
                export const FirstName: string;
                export const GenderId: string;
                export const GenderName: string;
                export const LastName: string;
                export const Mrid: string;
                export const Mrn: string;
                export const RefertoDoctor: string;
                export const Updated: string;
                export const UserId: string;
            }

            namespace MedPrescriptions {
                export const Comment: string;
                export const DailyDose: string;
                export const InsideSale: string;
                export const MedicineId: string;
                export const MedicineName: string;
                export const OrderId: string;
                export const Quantity: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace Medicinelosses {
                export const Id: string;
                export const LosstypeId: string;
                export const LosstypeName: string;
                export const MedicineBatchNo: string;
                export const MedicineBrandName: string;
                export const MedicineDiscontinue: string;
                export const MedicineExpiryDate: string;
                export const MedicineFormId: string;
                export const MedicineGenericName: string;
                export const MedicineId: string;
                export const MedicineInDate: string;
                export const MedicineMid: string;
                export const MedicineQuantity: string;
                export const MedicineQuantityUsed: string;
                export const MedicineReorderLevel: string;
                export const MedicineSExpiryDate: string;
                export const MedicineSInDate: string;
                export const MedicineStrength: string;
                export const MedicineUnitPrice: string;
                export const MedicineUpdated: string;
                export const MedicineUserId: string;
                export const MedicineVid: string;
                export const OutDate: string;
                export const Quantity: string;
                export const Updated: string;
                export const UserId: string;
            }

            namespace Medicines {
                export const Balance: string;
                export const BatchNo: string;
                export const BrandName: string;
                export const DaysToExpire: string;
                export const Discontinue: string;
                export const ExpiryDate: string;
                export const FormFormName: string;
                export const FormId: string;
                export const GenericName: string;
                export const InDate: string;
                export const MedicineId: string;
                export const MedicineName: string;
                export const Mid: string;
                export const MidManufacturerName: string;
                export const Quantity: string;
                export const QuantityUsed: string;
                export const ReorderLevel: string;
                export const SExpiryDate: string;
                export const SInDate: string;
                export const Strength: string;
                export const UnitPrice: string;
                export const Updated: string;
                export const UserId: string;
                export const Vid: string;
                export const VidVendorName: string;
            }

            namespace Medvisits {
                export const CycleId: string;
                export const DateOfVisit: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const Location: string;
                export const MRN: string;
                export const MaritalStatusId: string;
                export const MaritalStatusName: string;
                export const Mrid: string;
                export const OccupationId: string;
                export const OccupationName: string;
                export const PhoneNumber: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const Typeofvisit: string;
                export const TypeofvisitId: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }
        }

        namespace Register {

            namespace Nameslist {
                export const FacilityId: string;
                export const FullName: string;
                export const Id: string;
                export const ShortName: string;
            }

            namespace PatAttendants {
                export const Address: string;
                export const AttendantId: string;
                export const AttendantName: string;
                export const FatherName: string;
                export const GenderId: string;
                export const GenderName: string;
                export const Phone: string;
                export const RelationName: string;
                export const RelationType: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace Regoutpatients {
                export const AgeInYear: string;
                export const DateOfBirth: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const EthnicityId: string;
                export const EthnicityName: string;
                export const FatherName: string;
                export const FirstName: string;
                export const GenderId: string;
                export const GenderName: string;
                export const GrandFather: string;
                export const LastName: string;
                export const Location: string;
                export const Mrid: string;
                export const Mrn: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const RefertoDoctor: string;
                export const SDateOfBirth: string;
                export const Updated: string;
                export const UserId: string;
            }

            namespace Regvisits {
                export const CycleId: string;
                export const DateOfVisit: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const DurationOfStay: string;
                export const Location: string;
                export const MRN: string;
                export const MaritalStatusId: string;
                export const MaritalStatusName: string;
                export const Mrid: string;
                export const OccupationId: string;
                export const OccupationName: string;
                export const PhoneNumber: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const SDateOfVisit: string;
                export const Typeofvisit: string;
                export const TypeofvisitId: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }
        }

        namespace Regs {

            namespace HfNoOfPatients {
                export const FacilityId: string;
                export const NoOfPatients: string;
            }

            namespace TblAdmissionsDischarge {
                export const AbortionType: string;
                export const AbortionTypeName: string;
                export const AdAge: string;
                export const AdAgeType: string;
                export const AdAgeTypeName: string;
                export const AdCaseType: string;
                export const AdCaseTypeName: string;
                export const AdDate: string;
                export const AdDateH: string;
                export const AdDiagnosis: string;
                export const AdId: string;
                export const DisDate: string;
                export const DisDateH: string;
                export const DisDiagCausDeath: string;
                export const DisDiagResult: string;
                export const DisStatus: string;
                export const LastUpdated: string;
                export const MRN: string;
                export const Mrid: string;
                export const MridFacilityId: string;
                export const MridPatFatName: string;
                export const MridPatName: string;
                export const TenantId: string;
                export const UserName: string;
                export const Wardid: string;
                export const WardidWardName: string;
                export const WardidWardNameD: string;
            }

            namespace TblDischarge {
                export const DisDate: string;
                export const DisDateH: string;
                export const DisDiagResult: string;
                export const DisDiagnosis: string;
                export const DisId: string;
                export const DisStatus: string;
                export const LastUpdated: string;
                export const MRN: string;
                export const Mrid: string;
                export const TenantId: string;
                export const UserName: string;
                export const Wardid: string;
            }

            namespace TblNewBornManagement {
                export const AdAdDiagnosis: string;
                export const AdId: string;
                export const AdMrid: string;
                export const AdWardid: string;
                export const LastUpdated: string;
                export const NbGender: string;
                export const NbId: string;
                export const NbNumber: string;
                export const NbOutcome: string;
                export const NbStatus: string;
                export const NbWeight: string;
                export const NewbornStatus: string;
                export const Newbornchild: string;
                export const Newborngender: string;
                export const Newbornoutcome: string;
                export const Newbornweight: string;
                export const TenantId: string;
                export const UserName: string;
            }

            namespace TblOperations {
                export const AdId: string;
                export const AdMrid: string;
                export const AdValue: string;
                export const DiseaseName: string;
                export const Evid: string;
                export const LastUpdated: string;
                export const Remarks: string;
                export const TenantId: string;
                export const UserName: string;
                export const WardId: string;
                export const Wardname: string;
                export const Wvid: string;
                export const WvidDiagnTreatComp: string;
                export const WvidVarNameDari: string;
                export const WvidVarNameEnglish: string;
                export const WvidVarNamePashto: string;
                export const WvidVarSpecification: string;
                export const WvidWrdid: string;
            }

            namespace TblPatDetails {
                export const DistrictId: string;
                export const Eid: string;
                export const EidEducationDari: string;
                export const LastUpdated: string;
                export const MRN: string;
                export const MariId: string;
                export const MariPatMaritalStatusDari: string;
                export const Mrid: string;
                export const MridFacilityId: string;
                export const MridPatFatName: string;
                export const MridPatName: string;
                export const Oid: string;
                export const OidOccupationDari: string;
                export const PatDdate: string;
                export const PatDdateH: string;
                export const PatLocation: string;
                export const PatPhone: string;
                export const PdId: string;
                export const ProvinceDari: string;
                export const ProvinceId: string;
                export const TenantId: string;
                export const UserName: string;
            }

            namespace TblPatientNextOfKeen {
                export const LastUpdated: string;
                export const MRN: string;
                export const Mrid: string;
                export const MridFacilityId: string;
                export const MridPatFatName: string;
                export const MridPatName: string;
                export const NoKAdd: string;
                export const NoKNameD: string;
                export const NoKPhone: string;
                export const NoKRelationType: string;
                export const PatNoKid: string;
                export const RelationTypeName: string;
                export const TenantId: string;
                export const UserName: string;
            }

            namespace TblPatients {
                export const BloodGroup: string;
                export const FacilityFacilityName: string;
                export const FacilityFacilityNameDari: string;
                export const FacilityFacilityNamePashto: string;
                export const FacilityFacilityType: string;
                export const FacilityId: string;
                export const Gender: string;
                export const LastUpdated: string;
                export const MRN: string;
                export const Mrid: string;
                export const PatBlooldGroup: string;
                export const PatFatName: string;
                export const PatGender: string;
                export const PatHusbandName: string;
                export const PatName: string;
                export const PatRealationName: string;
                export const PatTazkera: string;
                export const TenantId: string;
                export const UserName: string;
            }

            namespace TblReferral {
                export const AdId: string;
                export const AdMrid: string;
                export const DiseaseName: string;
                export const FacilityId: string;
                export const FacilityName: string;
                export const LastUpdated: string;
                export const RefDate: string;
                export const RefDateH: string;
                export const RefDiagnosis: string;
                export const RefId: string;
                export const RefType: string;
                export const TenantId: string;
                export const UserName: string;
                export const WardId: string;
                export const WardName: string;
            }

            namespace TblTestExaminations {
                export const AdId: string;
                export const AdMrid: string;
                export const DeptName: string;
                export const Diagnosis: string;
                export const Diagnosisname: string;
                export const EdId: string;
                export const LastUpdated: string;
                export const PatTestId: string;
                export const TenantId: string;
                export const TestExaminations: string;
                export const TestName: string;
                export const UserName: string;
            }
        }

        namespace Structure {

            namespace BedReportDetails {
                export const BedActive: string;
                export const Id: string;
                export const ReportComment: string;
                export const ReportFacilityId: string;
                export const ReportId: string;
                export const ReportLastUpdated: string;
                export const ReportMonth: string;
                export const ReportTenantId: string;
                export const ReportUserName: string;
                export const ReportYear: string;
                export const TenantId: string;
                export const WardId: string;
                export const WardWardName: string;
                export const WardWardNameD: string;
                export const WardWardNumBeds: string;
            }

            namespace BedReports {
                export const Comment: string;
                export const DetailList: string;
                export const FacilityDistrictId: string;
                export const FacilityFacilityName: string;
                export const FacilityId: string;
                export const FacilityLat: string;
                export const FacilityLon: string;
                export const LastUpdated: string;
                export const Month: string;
                export const ReportId: string;
                export const TenantId: string;
                export const UserName: string;
                export const Year: string;
            }

            namespace TblDuty {
                export const DutId: string;
                export const DutMonth: string;
                export const DutYear: string;
                export const EmpId: string;
                export const LastUpdated: string;
                export const TenantId: string;
                export const UserName: string;
                export const WardId: string;
            }

            namespace TblEmp {
                export const EmId: string;
                export const EmpFatherName: string;
                export const EmpFatherNameD: string;
                export const EmpLastName: string;
                export const EmpLastNameD: string;
                export const EmpName: string;
                export const EmpNameD: string;
                export const LastUpdated: string;
                export const TenantId: string;
                export const UserName: string;
            }
        }

        namespace Verifications {

            namespace Cbloodtransfusions {
                export const BloodGroup: string;
                export const BloodGroupId: string;
                export const Bloodstatus: string;
                export const BloodstatusId: string;
                export const DateOfVisit: string;
                export const Mrid: string;
                export const RecDateTime: string;
                export const Recomquantity: string;
                export const SDateOfVisit: string;
                export const SRecDate: string;
                export const STransDate: string;
                export const TransDateTime: string;
                export const TransfusionId: string;
                export const Transmitquantity: string;
                export const VisitId: string;
            }

            namespace Cdiagnosis {
                export const Comorbidity: string;
                export const Comorbidity2Id: string;
                export const Comorbidity3Id: string;
                export const ComorbidityId: string;
                export const DateOfVisit: string;
                export const DiagnosisId: string;
                export const FinalDiagnosis: string;
                export const FinalDiagnosisDate: string;
                export const FinalDiagnosisId: string;
                export const InitialDiagnosis: string;
                export const InitialDiagnosisDate: string;
                export const InitialDiagnosisId: string;
                export const Mrid: string;
                export const SDateOfVisit: string;
                export const SelfDiagnosis: string;
                export const SelfDiagnosisDate: string;
                export const SelfDiagnosisId: string;
                export const StageId: string;
                export const TopoMain: string;
                export const TopoSub: string;
                export const TopomainId: string;
                export const ToposubId: string;
                export const VisitId: string;
            }

            namespace Cimagings {
                export const DateOfVisit: string;
                export const Id: string;
                export const ImagingId: string;
                export const ImagingName: string;
                export const Mrid: string;
                export const Note: string;
                export const SDateOfVisit: string;
                export const TestImage: string;
                export const VisitId: string;
            }

            namespace Clabtests {
                export const DateOfVisit: string;
                export const Id: string;
                export const LabDateTime: string;
                export const LabTestId: string;
                export const LabTestName: string;
                export const Mrid: string;
                export const NormalRange: string;
                export const Result: string;
                export const SDateOfVisit: string;
                export const SlabDate: string;
                export const Unit: string;
                export const VisitId: string;
            }

            namespace Cmedadministration {
                export const AppDateTime: string;
                export const AppSDate: string;
                export const Comment: string;
                export const MedadminId: string;
                export const Medicine: string;
                export const OrderId: string;
                export const Quantity: string;
                export const RecDateTime: string;
                export const RecSDate: string;
            }

            namespace Cmedprescriptions {
                export const Comment: string;
                export const DailyDose: string;
                export const DateOfVisit: string;
                export const InsideSale: string;
                export const MedicineId: string;
                export const MedicineName: string;
                export const Mrid: string;
                export const OrderId: string;
                export const Quantity: string;
                export const SDateOfVisit: string;
                export const VisitId: string;
            }

            namespace Cpatienthistory {
                export const DateOfVisit: string;
                export const HistoryId: string;
                export const HistoryName: string;
                export const Id: string;
                export const Mrid: string;
                export const Note: string;
                export const SDateOfVisit: string;
                export const VisitId: string;
            }

            namespace Cpatients {
                export const AgeInYear: string;
                export const DateOfBirth: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const EthnicityId: string;
                export const EthnicityName: string;
                export const FatherName: string;
                export const FirstName: string;
                export const GenderId: string;
                export const GenderName: string;
                export const GrandFather: string;
                export const LastName: string;
                export const Location: string;
                export const Mrid: string;
                export const Mrn: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const RefertoDoctor: string;
                export const SDateOfBirth: string;
            }

            namespace Cphysicalexamination {
                export const DateOfVisit: string;
                export const GroupId: string;
                export const Id: string;
                export const Mrid: string;
                export const Note: string;
                export const PhysExamGroup: string;
                export const PhysExamId: string;
                export const PhysExamName: string;
                export const SDateOfVisit: string;
                export const VisitId: string;
            }

            namespace Crecommendations {
                export const DateOfVisit: string;
                export const Mrid: string;
                export const Note: string;
                export const RecomId: string;
                export const RecomRecommandName: string;
                export const RecommandationId: string;
                export const SDateOfVisit: string;
                export const VisitId: string;
            }

            namespace Cvisits {
                export const DateOfVisit: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const Location: string;
                export const MRN: string;
                export const MaritalStatusId: string;
                export const MaritalStatusName: string;
                export const Mrid: string;
                export const OccupationId: string;
                export const OccupationName: string;
                export const PhoneNumber: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const SDateOfVisit: string;
                export const Typeofvisit: string;
                export const TypeofvisitId: string;
                export const VisitId: string;
            }

            namespace Cvitalsigns {
                export const Bp: string;
                export const DateOfVisit: string;
                export const Height: string;
                export const Hr: string;
                export const Mrid: string;
                export const O2: string;
                export const Pain: string;
                export const Pulse: string;
                export const Rr: string;
                export const SDateOfVisit: string;
                export const SVitalDate: string;
                export const Temp: string;
                export const VisitId: string;
                export const VitalDateTime: string;
                export const VitalId: string;
                export const Weight: string;
            }
        }

        namespace VitalSigns {

            namespace Cyclevisits {
                export const ActualDate: string;
                export const CareTypeId: string;
                export const Caretype: string;
                export const SActualDate: string;
                export const ScheduleComment: string;
                export const ScheduleCycleId: string;
                export const ScheduleId: string;
                export const SchedulePlanDate: string;
                export const ScheduleSPlanDate: string;
                export const ScheduleVisitId: string;
                export const SessionId: string;
                export const Updated: string;
                export const UserId: string;
            }

            namespace Scheduling {
                export const Comment: string;
                export const CycleCycledescription: string;
                export const CycleCyclename: string;
                export const CycleId: string;
                export const PlanDate: string;
                export const SPlanDate: string;
                export const ScheduleId: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }

            namespace VVitalSigns {
                export const Bp: string;
                export const Height: string;
                export const Hr: string;
                export const O2: string;
                export const Pain: string;
                export const Pulse: string;
                export const Rr: string;
                export const SVitalDate: string;
                export const Temp: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
                export const VitalDateTime: string;
                export const VitalId: string;
                export const Weight: string;
            }

            namespace VitalPatients {
                export const AgeInYear: string;
                export const DateOfBirth: string;
                export const EthnicityId: string;
                export const EthnicityName: string;
                export const FatherName: string;
                export const FirstName: string;
                export const GenderId: string;
                export const GenderName: string;
                export const LastName: string;
                export const Mrid: string;
                export const Mrn: string;
                export const RefertoDoctor: string;
                export const Updated: string;
                export const UserId: string;
            }

            namespace Vitalvisits {
                export const CycleId: string;
                export const DateOfVisit: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const Location: string;
                export const MRN: string;
                export const MaritalStatusId: string;
                export const MaritalStatusName: string;
                export const Mrid: string;
                export const OccupationId: string;
                export const OccupationName: string;
                export const PhoneNumber: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const Typeofvisit: string;
                export const TypeofvisitId: string;
                export const Updated: string;
                export const UserId: string;
                export const VisitId: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterOwner: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    EMR['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{DashboardUrl:{Active:1,Id:1,Url:1},Language:{Id:1,LanguageId:1,LanguageName:1},Modules:{ModuleDescription:1,ModuleId:1,ModuleName:1},Role:{RoleId:1,RoleName:1,TenantId:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Tenant:{FacilityId:1,FacilityName:1,TenantId:1,TenantName:1},Translation:{AdmissionDateBigger:1,AdmissionDateSmaller:1,CustomText:1,DischargeDateEqualToday:1,DischargeDateInvalid:1,DischargeLessThanAdmission:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,FacilityID:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Configs:{BloodStatus:{BId:1,Bloodstatus:1},Caretypes:{Caretype:1,Id:1},Countries:{Agriculture:1,Arable:1,Area:1,Birthrate:1,Climate:1,CoastlineRatio:1,Country:1,CountryId:1,Crops:1,Deathrate:1,Gdp:1,Industry:1,InfantMortality1000:1,LiteracyPerc:1,NetMigration:1,Other:1,Phones:1,PopDensity:1,Population:1,Region:1,Service:1},Cycles:{CycleId:1,Cycledescription:1,Cyclename:1},Ethnicity:{EthnicityId:1,EthnicityName:1},LkpForm:{FormId:1,FormName:1},LkpHistory:{HistoryId:1,HistoryName:1},LkpImaging:{ImagingId:1,ImagingName:1,Note:1},LkpLabTest:{LabTestId:1,LabTestName:1,NormalRange:1,SubTypeTestId:1,TestPrice:1,TestTypeName:1,Unit:1},LkpLosstypes:{LosstypeId:1,Name:1},LkpManufacturer:{CellPhoneNo:1,CountryId:1,Email:1,ManufacturerId:1,ManufacturerName:1,ManufacturerType:1,Website:1},LkpPatientType:{TypeId:1,TypeNameDari:1,TypeNameEn:1,TypeNamePashto:1},LkpPhysExamGroup:{GroupId:1,GroupName:1},LkpPhysExams:{GroupEamName:1,GroupId:1,GroupName:1,PhysExamId:1,PhysExamName:1},LkpRecommands:{RecomId:1,RecommandName:1},LkpTestTypes:{TestTypeId:1,TestTypeName:1},LkpUnit:{UnitId:1,UnitName:1},LkpVendor:{CellPhoneNo:1,Email:1,VendorId:1,VendorName:1,VendorRegNo:1,VendorType:1},Stages:{StageId:1,Stagename:1},TblAbortionType:{AbortionId:1,AbortionTypeDari:1,AbortionTypeEn:1,AbortionTypePashto:1},TblAgeTypes:{AgeTypeName:1,AgeTypeNameDari:1,AgeTypeNameEn:1,AgeTypeNamePashto:1,AgetypeId:1},TblBloodGroup:{BloodGroup:1,BloodGroupId:1},TblCaseTypes:{CaseId:1,CaseTypeName:1,CasetypeDari:1,CasetypeEn:1,CasetypePashto:1},TblChild:{ChildDari:1,ChildEn:1,ChildId:1,ChildPashto:1,NbChild:1},TblDept:{DeptName:1,DeptNameD:1,DeptNameP:1,DpId:1},TblDiagnosis:{DiagNosis:1,DiagnosisDari:1,DiagnosisEn:1,DiagnosisId:1,DiagnosisPashto:1},TblDiseasesCategory:{DiseasesCatDari:1,DiseasesCatPashto:1,DiseasesCategory:1,Id:1,Wardid:1},TblEducation:{EducationDari:1,EducationEng:1,EducationName:1,Eid:1},TblExaminationsDetails:{DepartmentName:1,DpId:1,EdName:1,Edid:1},TblGender:{Gender:1,GenderDa:1,GenderEng:1,GenderId:1,GenderPs:1},TblMaritalStatus:{MariId:1,MaritalStatus:1,PatMaritalStatusDari:1,PatMaritalStatusEng:1},TblNbResult:{NbResult:1,NbResultDari:1,NbResultEn:1,NbResultId:1,NbResultPashto:1},TblNbWeight:{NbWeight:1,NbWeightDari:1,NbWeightEn:1,NbWeightId:1,NbWeightPashto:1},TblNbstatus:{NbStatus:1,NbstatusDari:1,NbstatusEng:1,NbstatusId:1,NbstatusPashto:1},TblOccupation:{OccupationDari:1,OccupationEng:1,OccupationName:1,Oid:1},TblOutcomesMother:{OutcomeDari:1,OutcomeEng:1,OutcomeId:1,OutcomeName:1},TblPositions:{DeptId:1,EmpId:1,LastUpdated:1,PosDate:1,PosDateH:1,PosId:1,ProId:1,TenantId:1,UserName:1},TblProfessions:{ProId:1,ProName:1,ProNameD:1},TblRelation:{Relation:1,RelationId:1,RelationName:1,RelationNameEng:1},TblWard:{Ward:1,WardId:1,WardName:1,WardNameD:1,WardNumBeds:1},TblWardDisease:{DiagnosisTreatment:1,DiseaseDariName:1,DiseasesCat:1,DiseasesCategory:1,DiseasesCode:1,DiseasesName:1,HmirCode:1,HmirCodeId:1,Status:1,WId:1,WardCode:1},TblWardDiseases:{DiseaseDariName:1,DiseaseName:1,DiseasesCat:1,DiseasesCategory:1,DiseasesCode:1,DiseasesName:1,HmirCode:1,HmirCodeId:1,Status:1,WId:1,WardCode:1,WvId:1},TblWrdVar:{DiagnTreatComp:1,VarNameDari:1,VarNameEnglish:1,VarNamePashto:1,VarSpecification:1,Wrdid:1,WrdidLastUpdated:1,WrdidUserName:1,WrdidWardName:1,WrdidWardNameD:1,WrdidWardNumBeds:1,Wvid:1,WwardDiseaseName:1},TopographyMain:{Icd0Code:1,TopographyMName:1,TopomainId:1},TopographySub:{Icd0Code:1,TopographySName:1,TopomainIcd0Code:1,TopomainId:1,TopomainTopographyMName:1,ToposubId:1},Typeofvisit:{Id:1,TypeOfVisit:1}},Expenditure:{Note:{EntityId:1,EntityType:1,InsertDate:1,InsertUserDisplayName:1,InsertUserId:1,NoteId:1,Text:1}},FM:{LkpServiceTypes:{ServiceType:1,ServiceTypeDari:1,ServiceTypeEn:1,ServiceTypeId:1,ServiceTypePashto:1},LkpServices:{DiscountRate:1,ServiceDari:1,ServiceEn:1,ServiceId:1,ServicePashto:1,ServicePrice:1,ServiceTypeId:1,ServiceTypeServiceTypeDari:1,ServiceTypeServiceTypeEn:1,ServiceTypeServiceTypePashto:1,Status:1},TblFeePayment:{DateCreated:1,FeeId:1,LastUpdated:1,Mrid:1,ServiceFee:1,ServiceId:1,ServiceTypeServiceType:1,Times:1,UserName:1},TblPrintDetails:{DateTimePrinted:1,FeeId:1,PrintId:1,PrintedBy:1},UserFeePatients:{FacilityFacilityNameDari:1,FacilityId:1,Gender:1,LastUpdated:1,Mrid:1,Mrn:1,PatFatName:1,PatGender:1,PatHusbandName:1,PatName:1,PatRealationName:1,TenantId:1,UserName:1}},Imaging:{ImagePatients:{AgeInYear:1,DateOfBirth:1,EthnicityId:1,EthnicityName:1,FatherName:1,FirstName:1,GenderId:1,GenderName:1,LastName:1,Mrid:1,Mrn:1,RefertoDoctor:1,Updated:1,UserId:1},Imagevisits:{CycleId:1,DateOfVisit:1,DistrictId:1,DistrictName:1,Location:1,MRN:1,MaritalStatusId:1,MaritalStatusName:1,Mrid:1,OccupationId:1,OccupationName:1,PhoneNumber:1,ProvinceId:1,ProvinceName:1,Typeofvisit:1,TypeofvisitId:1,Updated:1,UserId:1,VisitId:1},ImgImagings:{Id:1,ImagingId:1,ImagingName:1,MRID:1,MRN:1,Note:1,TestImage:1,Updated:1,UserId:1,VisitId:1}},LabTest:{LabPatients:{AgeInYear:1,DateOfBirth:1,EthnicityId:1,EthnicityName:1,FatherName:1,FirstName:1,GenderId:1,GenderName:1,LastName:1,Mrid:1,Mrn:1,RefertoDoctor:1,Updated:1,UserId:1},LabTests:{Id:1,LabDateTime:1,LabTestId:1,LabTestName:1,NormalRange:1,Result:1,SlabDate:1,TestTypeId:1,TestTypeName:1,Unit:1,Updated:1,UserId:1,VisitId:1,VisitMrid:1},Labvisits:{CycleId:1,DateOfVisit:1,DistrictId:1,DistrictName:1,Location:1,MRN:1,MaritalStatusId:1,MaritalStatusName:1,Mrid:1,OccupationId:1,OccupationName:1,PhoneNumber:1,ProvinceId:1,ProvinceName:1,Typeofvisit:1,TypeofvisitId:1,Updated:1,UserId:1,VisitId:1}},Locations:{Districts:{DistrictDari:1,DistrictEng:1,DistrictId:1,DistrictName:1,DistrictPashto:1,ProvinceDari:1,ProvinceEng:1,ProvinceId:1,ProvincePashto:1},FacilityInfo:{DistProvinceId:1,DistrictDari:1,DistrictEng:1,DistrictId:1,DistrictPashto:1,FacilityFullName:1,FacilityId:1,FacilityName:1,FacilityNameDari:1,FacilityNamePashto:1,FacilityType:1,FacilityTypeFacType:1,FacilityTypeFacTypeDari:1,FacilityTypeFacTypePashto:1,GpsLattitude:1,GpsLongtitude:1,GrantId:1,Implementer:1,Lat:1,Lon:1,NoOfPatients:1,ProvinAbbrv:1,TenantId:1,ViliCode:1},FacilityInfoRefer:{FacilityFullName:1,FacilityId:1,FacilityName:1,FacilityNameDari:1,FacilityNamePashto:1},FacilityTypes:{FacType:1,FacTypeCode:1,FacTypeDari:1,FacTypePashto:1},Provinces:{ProvPop:1,ProvinceAbbrv:1,ProvinceDari:1,ProvinceEng:1,ProvinceId:1,ProvinceName:1,ProvincePashto:1}},Medadmins:{BloodTransfusions:{BloodGroup:1,BloodGroupId:1,Bloodstatus:1,BloodstatusId:1,RecDateTime:1,Recomquantity:1,SRecDate:1,STransDate:1,TranUserId:1,TransDateTime:1,TransUpdated:1,TransfusionId:1,Transmitquantity:1,Updated:1,UserId:1,VisitId:1},MPrescriptions:{Comment:1,DailyDose:1,MedicineId:1,MedicineName:1,OrderId:1,Quantity:1,Updated:1,UserId:1,VisitId:1},Medadministration:{AppDateTime:1,AppSDate:1,AppUpdated:1,AppUserId:1,Comment:1,MedadminId:1,Medicine:1,OrderId:1,Quantity:1,RecDateTime:1,RecSDate:1,Updated:1,UserId:1},Medadminpatients:{AgeInYear:1,DateOfBirth:1,EthnicityId:1,EthnicityName:1,FatherName:1,FirstName:1,GenderId:1,GenderName:1,LastName:1,Mrid:1,Mrn:1,RefertoDoctor:1,Updated:1,UserId:1},Medvisits:{CycleId:1,DateOfVisit:1,DistrictId:1,DistrictName:1,Location:1,MRN:1,MaritalStatusId:1,MaritalStatusName:1,Mrid:1,OccupationId:1,OccupationName:1,PhoneNumber:1,ProvinceId:1,ProvinceName:1,Typeofvisit:1,TypeofvisitId:1,Updated:1,UserId:1,VisitId:1},OpdBloodTransfusions:{BloodGroup:1,BloodGroupId:1,Bloodstatus:1,BloodstatusId:1,RecDateTime:1,Recomquantity:1,SRecDate:1,STransDate:1,TranUserId:1,TransDateTime:1,TransUpdated:1,TransfusionId:1,Transmitquantity:1,Updated:1,UserId:1,VisitId:1},OpdMedadministration:{AppDateTime:1,AppSDate:1,AppUpdated:1,AppUserId:1,Comment:1,MedadminId:1,Medicine:1,OrderId:1,Quantity:1,RecDateTime:1,RecSDate:1,Updated:1,UserId:1},Visitsmedicine:{Medicine:1,Mrid:1,OrderId:1,VisitId:1}},OPD:{Diagnosis:{Comorbidity:1,Comorbidity2Id:1,Comorbidity3Id:1,ComorbidityId:1,DiagnosisId:1,FinalDiagnosis:1,FinalDiagnosisDate:1,FinalDiagnosisId:1,InitialDiagnosis:1,InitialDiagnosisDate:1,InitialDiagnosisId:1,Note:1,SelfDiagnosis:1,SelfDiagnosisDate:1,SelfDiagnosisId:1,StageId:1,TopoMain:1,TopoSub:1,TopomainId:1,ToposubId:1,Updated:1,UserId:1,VisitId:1,VisitMrid:1},Imagings:{Id:1,ImagingId:1,ImagingName:1,Note:1,TestImage:1,Updated:1,UserId:1,VisitId:1},LabTest:{Id:1,LabDateTime:1,LabTestId:1,LabTestName:1,NormalRange:1,Result:1,SlabDate:1,TestTypeId:1,TestTypeName:1,Unit:1,Updated:1,UserId:1,VisitId:1,VisitMrid:1},PatientHistory:{HistoryId:1,HistoryName:1,Id:1,Note:1,Updated:1,UserId:1,VisitId:1},Patients:{AgeInYear:1,DateOfBirth:1,EthnicityId:1,EthnicityName:1,FatherName:1,FirstName:1,GenderId:1,GenderName:1,LastName:1,Mrid:1,Mrn:1,RefertoDoctor:1,Updated:1,UserId:1},PhysicalExamination:{GroupId:1,Id:1,Note:1,PhysExamGroup:1,PhysExamId:1,PhysExamName:1,Updated:1,UserId:1,VisitId:1},Prescriptions:{Comment:1,DailyDose:1,MedicineId:1,MedicineName:1,OrderId:1,Quantity:1,Updated:1,UserId:1,VisitId:1},Recommedations:{Note:1,RecomId:1,RecomRecommandName:1,RecommandationId:1,Updated:1,UserId:1,VisitId:1,VisitMrid:1},Visits:{CycleId:1,DateOfVisit:1,DistrictId:1,DistrictName:1,Location:1,MRN:1,MaritalStatusId:1,MaritalStatusName:1,Mrid:1,OccupationId:1,OccupationName:1,PhoneNumber:1,ProvinceId:1,ProvinceName:1,Typeofvisit:1,TypeofvisitId:1,Updated:1,UserId:1,VisitId:1},VitalSigns:{Bp:1,Height:1,Hr:1,O2:1,Pain:1,Pulse:1,Rr:1,SVitalDate:1,Temp:1,Updated:1,UserId:1,VisitId:1,VitalDateTime:1,VitalId:1,Weight:1},Vscheduling:{Comment:1,CycleCyclename:1,CycleId:1,PlanDate:1,SPlanDate:1,ScheduleId:1,Updated:1,UserId:1,VisitId:1}},Pharmacy:{MedPatients:{AgeInYear:1,DateOfBirth:1,EthnicityId:1,EthnicityName:1,FatherName:1,FirstName:1,GenderId:1,GenderName:1,LastName:1,Mrid:1,Mrn:1,RefertoDoctor:1,Updated:1,UserId:1},MedPrescriptions:{Comment:1,DailyDose:1,InsideSale:1,MedicineId:1,MedicineName:1,OrderId:1,Quantity:1,Updated:1,UserId:1,VisitId:1},Medicinelosses:{Id:1,LosstypeId:1,LosstypeName:1,MedicineBatchNo:1,MedicineBrandName:1,MedicineDiscontinue:1,MedicineExpiryDate:1,MedicineFormId:1,MedicineGenericName:1,MedicineId:1,MedicineInDate:1,MedicineMid:1,MedicineQuantity:1,MedicineQuantityUsed:1,MedicineReorderLevel:1,MedicineSExpiryDate:1,MedicineSInDate:1,MedicineStrength:1,MedicineUnitPrice:1,MedicineUpdated:1,MedicineUserId:1,MedicineVid:1,OutDate:1,Quantity:1,Updated:1,UserId:1},Medicines:{Balance:1,BatchNo:1,BrandName:1,DaysToExpire:1,Discontinue:1,ExpiryDate:1,FormFormName:1,FormId:1,GenericName:1,InDate:1,MedicineId:1,MedicineName:1,Mid:1,MidManufacturerName:1,Quantity:1,QuantityUsed:1,ReorderLevel:1,SExpiryDate:1,SInDate:1,Strength:1,UnitPrice:1,Updated:1,UserId:1,Vid:1,VidVendorName:1},Medvisits:{CycleId:1,DateOfVisit:1,DistrictId:1,DistrictName:1,Location:1,MRN:1,MaritalStatusId:1,MaritalStatusName:1,Mrid:1,OccupationId:1,OccupationName:1,PhoneNumber:1,ProvinceId:1,ProvinceName:1,Typeofvisit:1,TypeofvisitId:1,Updated:1,UserId:1,VisitId:1}},Register:{Nameslist:{FacilityId:1,FullName:1,Id:1,ShortName:1},PatAttendants:{Address:1,AttendantId:1,AttendantName:1,FatherName:1,GenderId:1,GenderName:1,Phone:1,RelationName:1,RelationType:1,Updated:1,UserId:1,VisitId:1},Regoutpatients:{AgeInYear:1,DateOfBirth:1,DistrictId:1,DistrictName:1,EthnicityId:1,EthnicityName:1,FatherName:1,FirstName:1,GenderId:1,GenderName:1,GrandFather:1,LastName:1,Location:1,Mrid:1,Mrn:1,ProvinceId:1,ProvinceName:1,RefertoDoctor:1,SDateOfBirth:1,Updated:1,UserId:1},Regvisits:{CycleId:1,DateOfVisit:1,DistrictId:1,DistrictName:1,DurationOfStay:1,Location:1,MRN:1,MaritalStatusId:1,MaritalStatusName:1,Mrid:1,OccupationId:1,OccupationName:1,PhoneNumber:1,ProvinceId:1,ProvinceName:1,SDateOfVisit:1,Typeofvisit:1,TypeofvisitId:1,Updated:1,UserId:1,VisitId:1}},Regs:{HfNoOfPatients:{FacilityId:1,NoOfPatients:1},TblAdmissionsDischarge:{AbortionType:1,AbortionTypeName:1,AdAge:1,AdAgeType:1,AdAgeTypeName:1,AdCaseType:1,AdCaseTypeName:1,AdDate:1,AdDateH:1,AdDiagnosis:1,AdId:1,DisDate:1,DisDateH:1,DisDiagCausDeath:1,DisDiagResult:1,DisStatus:1,LastUpdated:1,MRN:1,Mrid:1,MridFacilityId:1,MridPatFatName:1,MridPatName:1,TenantId:1,UserName:1,Wardid:1,WardidWardName:1,WardidWardNameD:1},TblDischarge:{DisDate:1,DisDateH:1,DisDiagResult:1,DisDiagnosis:1,DisId:1,DisStatus:1,LastUpdated:1,MRN:1,Mrid:1,TenantId:1,UserName:1,Wardid:1},TblNewBornManagement:{AdAdDiagnosis:1,AdId:1,AdMrid:1,AdWardid:1,LastUpdated:1,NbGender:1,NbId:1,NbNumber:1,NbOutcome:1,NbStatus:1,NbWeight:1,NewbornStatus:1,Newbornchild:1,Newborngender:1,Newbornoutcome:1,Newbornweight:1,TenantId:1,UserName:1},TblOperations:{AdId:1,AdMrid:1,AdValue:1,DiseaseName:1,Evid:1,LastUpdated:1,Remarks:1,TenantId:1,UserName:1,WardId:1,Wardname:1,Wvid:1,WvidDiagnTreatComp:1,WvidVarNameDari:1,WvidVarNameEnglish:1,WvidVarNamePashto:1,WvidVarSpecification:1,WvidWrdid:1},TblPatDetails:{DistrictId:1,Eid:1,EidEducationDari:1,LastUpdated:1,MRN:1,MariId:1,MariPatMaritalStatusDari:1,Mrid:1,MridFacilityId:1,MridPatFatName:1,MridPatName:1,Oid:1,OidOccupationDari:1,PatDdate:1,PatDdateH:1,PatLocation:1,PatPhone:1,PdId:1,ProvinceDari:1,ProvinceId:1,TenantId:1,UserName:1},TblPatientNextOfKeen:{LastUpdated:1,MRN:1,Mrid:1,MridFacilityId:1,MridPatFatName:1,MridPatName:1,NoKAdd:1,NoKNameD:1,NoKPhone:1,NoKRelationType:1,PatNoKid:1,RelationTypeName:1,TenantId:1,UserName:1},TblPatients:{BloodGroup:1,FacilityFacilityName:1,FacilityFacilityNameDari:1,FacilityFacilityNamePashto:1,FacilityFacilityType:1,FacilityId:1,Gender:1,LastUpdated:1,MRN:1,Mrid:1,PatBlooldGroup:1,PatFatName:1,PatGender:1,PatHusbandName:1,PatName:1,PatRealationName:1,PatTazkera:1,TenantId:1,UserName:1},TblReferral:{AdId:1,AdMrid:1,DiseaseName:1,FacilityId:1,FacilityName:1,LastUpdated:1,RefDate:1,RefDateH:1,RefDiagnosis:1,RefId:1,RefType:1,TenantId:1,UserName:1,WardId:1,WardName:1},TblTestExaminations:{AdId:1,AdMrid:1,DeptName:1,Diagnosis:1,Diagnosisname:1,EdId:1,LastUpdated:1,PatTestId:1,TenantId:1,TestExaminations:1,TestName:1,UserName:1}},Structure:{BedReportDetails:{BedActive:1,Id:1,ReportComment:1,ReportFacilityId:1,ReportId:1,ReportLastUpdated:1,ReportMonth:1,ReportTenantId:1,ReportUserName:1,ReportYear:1,TenantId:1,WardId:1,WardWardName:1,WardWardNameD:1,WardWardNumBeds:1},BedReports:{Comment:1,DetailList:1,FacilityDistrictId:1,FacilityFacilityName:1,FacilityId:1,FacilityLat:1,FacilityLon:1,LastUpdated:1,Month:1,ReportId:1,TenantId:1,UserName:1,Year:1},TblDuty:{DutId:1,DutMonth:1,DutYear:1,EmpId:1,LastUpdated:1,TenantId:1,UserName:1,WardId:1},TblEmp:{EmId:1,EmpFatherName:1,EmpFatherNameD:1,EmpLastName:1,EmpLastNameD:1,EmpName:1,EmpNameD:1,LastUpdated:1,TenantId:1,UserName:1}},Verifications:{Cbloodtransfusions:{BloodGroup:1,BloodGroupId:1,Bloodstatus:1,BloodstatusId:1,DateOfVisit:1,Mrid:1,RecDateTime:1,Recomquantity:1,SDateOfVisit:1,SRecDate:1,STransDate:1,TransDateTime:1,TransfusionId:1,Transmitquantity:1,VisitId:1},Cdiagnosis:{Comorbidity:1,Comorbidity2Id:1,Comorbidity3Id:1,ComorbidityId:1,DateOfVisit:1,DiagnosisId:1,FinalDiagnosis:1,FinalDiagnosisDate:1,FinalDiagnosisId:1,InitialDiagnosis:1,InitialDiagnosisDate:1,InitialDiagnosisId:1,Mrid:1,SDateOfVisit:1,SelfDiagnosis:1,SelfDiagnosisDate:1,SelfDiagnosisId:1,StageId:1,TopoMain:1,TopoSub:1,TopomainId:1,ToposubId:1,VisitId:1},Cimagings:{DateOfVisit:1,Id:1,ImagingId:1,ImagingName:1,Mrid:1,Note:1,SDateOfVisit:1,TestImage:1,VisitId:1},Clabtests:{DateOfVisit:1,Id:1,LabDateTime:1,LabTestId:1,LabTestName:1,Mrid:1,NormalRange:1,Result:1,SDateOfVisit:1,SlabDate:1,Unit:1,VisitId:1},Cmedadministration:{AppDateTime:1,AppSDate:1,Comment:1,MedadminId:1,Medicine:1,OrderId:1,Quantity:1,RecDateTime:1,RecSDate:1},Cmedprescriptions:{Comment:1,DailyDose:1,DateOfVisit:1,InsideSale:1,MedicineId:1,MedicineName:1,Mrid:1,OrderId:1,Quantity:1,SDateOfVisit:1,VisitId:1},Cpatienthistory:{DateOfVisit:1,HistoryId:1,HistoryName:1,Id:1,Mrid:1,Note:1,SDateOfVisit:1,VisitId:1},Cpatients:{AgeInYear:1,DateOfBirth:1,DistrictId:1,DistrictName:1,EthnicityId:1,EthnicityName:1,FatherName:1,FirstName:1,GenderId:1,GenderName:1,GrandFather:1,LastName:1,Location:1,Mrid:1,Mrn:1,ProvinceId:1,ProvinceName:1,RefertoDoctor:1,SDateOfBirth:1},Cphysicalexamination:{DateOfVisit:1,GroupId:1,Id:1,Mrid:1,Note:1,PhysExamGroup:1,PhysExamId:1,PhysExamName:1,SDateOfVisit:1,VisitId:1},Crecommendations:{DateOfVisit:1,Mrid:1,Note:1,RecomId:1,RecomRecommandName:1,RecommandationId:1,SDateOfVisit:1,VisitId:1},Cvisits:{DateOfVisit:1,DistrictId:1,DistrictName:1,Location:1,MRN:1,MaritalStatusId:1,MaritalStatusName:1,Mrid:1,OccupationId:1,OccupationName:1,PhoneNumber:1,ProvinceId:1,ProvinceName:1,SDateOfVisit:1,Typeofvisit:1,TypeofvisitId:1,VisitId:1},Cvitalsigns:{Bp:1,DateOfVisit:1,Height:1,Hr:1,Mrid:1,O2:1,Pain:1,Pulse:1,Rr:1,SDateOfVisit:1,SVitalDate:1,Temp:1,VisitId:1,VitalDateTime:1,VitalId:1,Weight:1}},VitalSigns:{Cyclevisits:{ActualDate:1,CareTypeId:1,Caretype:1,SActualDate:1,ScheduleComment:1,ScheduleCycleId:1,ScheduleId:1,SchedulePlanDate:1,ScheduleSPlanDate:1,ScheduleVisitId:1,SessionId:1,Updated:1,UserId:1},Scheduling:{Comment:1,CycleCycledescription:1,CycleCyclename:1,CycleId:1,PlanDate:1,SPlanDate:1,ScheduleId:1,Updated:1,UserId:1,VisitId:1},VVitalSigns:{Bp:1,Height:1,Hr:1,O2:1,Pain:1,Pulse:1,Rr:1,SVitalDate:1,Temp:1,Updated:1,UserId:1,VisitId:1,VitalDateTime:1,VitalId:1,Weight:1},VitalPatients:{AgeInYear:1,DateOfBirth:1,EthnicityId:1,EthnicityName:1,FatherName:1,FirstName:1,GenderId:1,GenderName:1,LastName:1,Mrid:1,Mrn:1,RefertoDoctor:1,Updated:1,UserId:1},Vitalvisits:{CycleId:1,DateOfVisit:1,DistrictId:1,DistrictName:1,Location:1,MRN:1,MaritalStatusId:1,MaritalStatusName:1,Mrid:1,OccupationId:1,OccupationName:1,PhoneNumber:1,ProvinceId:1,ProvinceName:1,Typeofvisit:1,TypeofvisitId:1,Updated:1,UserId:1,VisitId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterOwner:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

