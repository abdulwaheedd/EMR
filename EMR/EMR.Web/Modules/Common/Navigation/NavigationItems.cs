using Serenity.Navigation;
using regs = EMR.Regs.Pages;
using configs = EMR.Configs.Pages;
using locations = EMR.Locations.Pages;
using structure = EMR.Structure.Pages;
using Fee = EMR.FM.Pages;
using admin = EMR.Administration.Pages;
using opd = EMR.OPD.Pages;
using phar = EMR.Pharmacy.Pages;
using lab = EMR.LabTest.Pages;
using Nurse = EMR.Medadmins.Pages;

[assembly: NavigationLink(100, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationLink(101, "Dashboard/Main Dashboard", typeof(EMR.Common.Pages.DashboardController), action: "Index", icon: "fa-list")]
[assembly: NavigationLink(102, "Dashboard/Admission & discharges", typeof(EMR.Common.Pages.DashboardController), action: "Admissions", icon: "fa-list")]
[assembly: NavigationLink(103, "Dashboard/Annual Trend", typeof(EMR.Common.Pages.DashboardController), action: "Annual", icon: "fa-list")]
[assembly: NavigationLink(104, "Dashboard/Inpatients", typeof(EMR.Common.Pages.DashboardController), action: "Inpatients", icon: "fa-list")]
[assembly: NavigationLink(105, "Dashboard/Abortions", typeof(EMR.Common.Pages.DashboardController), action: "Abortions", icon: "fa-list")]
[assembly: NavigationLink(106, "Dashboard/Age Group", typeof(EMR.Common.Pages.DashboardController), action: "AgeGroup", icon: "fa-list")]
[assembly: NavigationLink(107, "Dashboard/Top 10 Disease", typeof(EMR.Common.Pages.DashboardController), action: "Top10Disease", icon: "fa-list")]
[assembly: NavigationLink(108, "Dashboard/User Fee", typeof(EMR.Common.Pages.DashboardController), action: "UserFee", icon: "fa-list")]
[assembly: NavigationLink(1030, "Dashboard/Update Data", typeof(EMR.Controllers.RunUpdaterController), action: "Index", icon: "fa-list")]

[assembly: NavigationLink(180, "Reports", url: "~/", permission: "", icon: "fa-area-chart")]
[assembly: NavigationLink(181, "Reports/HMIR Report", typeof(EMR.Controllers.hmirController), action: "Index", icon: "fa-file-excel-o")]

[assembly: NavigationLink(200, "Registration", url: "~/", permission: "", icon: "fa fa-ambulance")]
[assembly: NavigationLink(201, "Registration/Inpatient",  typeof(regs.TblPatientsController), icon: "fa-heart-o")]
[assembly: NavigationLink(202, "Registration/Outpatients",  typeof(EMR.Register.Pages.RegoutpatientsController), icon: "fa-heart-o")]

[assembly: NavigationMenu(205, "Vitals", icon: "fa fa-heartbeat")]
[assembly: NavigationLink(206, "Vitals/Vital Signs", typeof(EMR.VitalSigns.Pages.VitalPatientsController), icon: "fa fa-stethoscope")]

[assembly: NavigationLink(210, "Nursing", url: "~/", permission: "", icon: "fa fa-medkit")]
[assembly: NavigationLink(211, "Nursing/Administration", typeof(Nurse.MedadminpatientsController), icon: "fa fa-medkit")]


[assembly: NavigationLink(220, "OPD", url: "~/", permission: "", icon: "fa fa-building")]
[assembly: NavigationLink(221, "OPD/Patients", typeof(opd.PatientsController), icon: "fa-bed")]
//[assembly: NavigationLink(222, "OPD/Visits", typeof(opd.VisitsController), icon: "fa-bed")]

//[assembly: NavigationLink(230, "IPD", url: "~/", permission: "", icon: "fa-bed")]
//[assembly: NavigationLink(231, "IPD/Patients", typeof(opd.PatientsController), icon: "fa-bed")]

[assembly: NavigationLink(241, "Lab", url: "~/", permission: "", icon: "fa fa-magic")]
[assembly: NavigationLink(242, "Lab/Lab Patients", typeof(lab.LabPatientsController), icon: "fa fa-add fa-magic")]
[assembly: NavigationLink(243, "Lab/Tests types", typeof(configs.LkpLabTestController), icon: "fa fa-add fa-magic")]

[assembly: NavigationLink(245, "Imaging", url: "~/", permission: "", icon: "fa fa-image")]
[assembly: NavigationLink(246, "Imaging/Imagings", typeof(EMR.Imaging.Pages.ImagePatientsController), icon: "fa fa-image")]
[assembly: NavigationLink(247, "Imaging/Image Types", typeof(configs.LkpImagingController), icon: "fa fa-image")]


[assembly: NavigationLink(250, "Pharmacy", url: "~/", permission: "", icon: "fa fa-medkit")]
[assembly: NavigationLink(251, "Pharmacy/Medicines", typeof(phar.MedicinesController), icon: "fa fa-medkit")]
[assembly: NavigationLink(252, "Pharmacy/Prescription", typeof(phar.MedPatientsController), icon: "fa fa-medkit")]

[assembly: NavigationLink(260, "Structure", url: "~/", permission: "", icon: "fa fa-building")]
[assembly: NavigationLink(261, "Structure/Bed Reporting", typeof(structure.BedReportsController), icon: "fa-bed")]


[assembly: NavigationLink(270, "User Fee", url: "~/", permission: "", icon: "fa fa-money")]
[assembly: NavigationLink(271, "User Fee/Add Fee", typeof(Fee.UserFeePatientsController), icon: "fa fa-add fa-usd")]
[assembly: NavigationLink(272, "User Fee/Service Types", typeof(Fee.LkpServiceTypesController), icon: "fa fa-tasks")]
[assembly: NavigationLink(273, "User Fee/Services", typeof(Fee.LkpServicesController), icon: "fa fa-tasks")]
[assembly: NavigationLink(274, "User Fee/Dashboard", typeof(EMR.Common.Pages.DashboardController), action: "UserFee", icon: "fa-list")]


[assembly: NavigationLink(300, "Configs", url: "~/", permission: "", icon: "fa fa-gears spin")]
[assembly: NavigationLink(301, "Configs/Locations", url: "~/", permission: "", icon: "fa fa-map")]
[assembly: NavigationLink(302, "Configs/Locations/Provinces", typeof(locations.ProvincesController), icon: " fa-map-o")]
[assembly: NavigationLink(303, "Configs/Locations/Districts", typeof(locations.DistrictsController), icon: " fa-map-o")]
[assembly: NavigationLink(304, "Configs/Locations/Health facilities", typeof(locations.FacilityInfoController), icon: " fa-map-o")]
[assembly: NavigationLink(305, "Configs/Locations/Facility types", typeof(locations.FacilityTypesController), icon: "fa-map-pin")]
[assembly: NavigationLink(306, "Configs/Newborn",  icon: "fa-th-list", url: "~/", permission: "")]
[assembly: NavigationLink(307, "Configs/Newborn/Nth Child",typeof(configs.TblChildController), icon: " far fa-child",Permission="Configs/Child")]
[assembly: NavigationLink(308, "Configs/Newborn/NB result types", typeof(configs.TblNbResultController), icon: " far fa-child")]
[assembly: NavigationLink(309, "Configs/Newborn/NB status", typeof(configs.TblNbstatusController), icon: " fa-th-list")]
[assembly: NavigationLink(310, "Configs/Newborn/NB weight status", typeof(configs.TblNbWeightController), icon: " fa-th-list")]
[assembly: NavigationLink(311, "Configs/Diseases", url: "~/", permission: "", icon: "fa-th-list")]
[assembly: NavigationLink(312, "Configs/Diseases/Diseases", typeof(configs.TblWardDiseasesController), icon: "fa-plus-square")]
[assembly: NavigationLink(313, "Configs/Diseases/Disease categories",  typeof(configs.TblDiseasesCategoryController), icon: "fa-object-group")]
[assembly: NavigationLink(314, "Configs/Bios", url: "~/", permission: "", icon: "fa-th-list")]
[assembly: NavigationLink(315, "Configs/Bios/Education", typeof(configs.TblEducationController), icon: "fa-certificate")]
[assembly: NavigationLink(316, "Configs/Bios/Occupation", typeof(configs.TblOccupationController), icon: "fa-spinner spin")]
[assembly: NavigationLink(317, "Configs/Bios/Blood groups", typeof(configs.TblBloodGroupController), icon: "fa-tint")]
[assembly: NavigationLink(318, "Configs/Bios/Marital status", typeof(configs.TblMaritalStatusController), icon: "fa-umbrella")]
[assembly: NavigationLink(319, "Configs/Bios/Gender", typeof(configs.TblGenderController), icon: " fa-user-md")]
[assembly: NavigationLink(320, "Configs/Bios/Profession", typeof(configs.TblProfessionsController), icon: "fa-university")]
[assembly: NavigationLink(321, "Configs/Bios/Relationships", typeof(configs.TblRelationController), icon: "fa-link")]
[assembly: NavigationLink(322, "Configs/Wards", typeof(configs.TblWardController), icon: "fa-exchange")]
[assembly: NavigationLink(323, "Configs/Departments", typeof(configs.TblDeptController), icon: "fa-th-list")]
[assembly: NavigationLink(324, "Configs/Exam types", typeof(configs.TblExaminationsDetailsController), icon: "fa-th-large")]
[assembly: NavigationLink(325, "Configs/Outcomes", typeof(configs.TblOutcomesMotherController), icon: "fa-th-large")]
[assembly: NavigationLink(326, "Configs/Operation type", typeof(configs.TblWrdVarController), icon: " fa-user-md")]
[assembly: NavigationLink(327, "Configs/Age type", typeof(configs.TblAgeTypesController), icon: " fa-th-list")]
[assembly: NavigationLink(328, "Configs/Case type",typeof(configs.TblCaseTypesController), icon: " fa-th-list")]
[assembly: NavigationLink(329, "Configs/Diagnosis",typeof(configs.TblDiagnosisController), icon: "fa-th-list")]
[assembly: NavigationLink(330, "Configs/Abortion types",typeof(configs.TblAbortionTypeController), icon: "fa-th-list")]

[assembly: NavigationLink(301, "Configs/Oncology", url: "~/", permission: "", icon: "fa-th-list")]
[assembly: NavigationLink(301, "Configs/Oncology/Pharmacy", url: "~/", permission: "", icon: "fa-th-list")]
[assembly: NavigationLink(331, "Configs/Oncology/Pharmacy/Manufacturer",typeof(configs.LkpManufacturerController), icon: "fa-th-list")]
[assembly: NavigationLink(332, "Configs/Oncology/Pharmacy/Supplier",typeof(configs.LkpVendorController), icon: "fa-th-list")]
[assembly: NavigationLink(333, "Configs/Oncology/Pharmacy/Forms",typeof(configs.LkpFormController), icon: "fa-th-list")]
[assembly: NavigationLink(334, "Configs/Oncology/Pharmacy/Units",typeof(configs.LkpUnitController), icon: "fa-th-list")]
[assembly: NavigationLink(334, "Configs/Oncology/Pharmacy/Countries",typeof(configs.CountriesController), icon: "fa-th-list")]
[assembly: NavigationLink(335, "Configs/Oncology/Imagings", typeof(configs.LkpImagingController), icon: "fa-th-list")]
[assembly: NavigationLink(335, "Configs/Oncology/Test Types", typeof(configs.LkpTestTypesController), icon: "fa-th-list")]
[assembly: NavigationLink(336, "Configs/Oncology/Lab Tests", typeof(configs.LkpLabTestController), icon: "fa-th-list")]
[assembly: NavigationLink(337, "Configs/Oncology/History", typeof(configs.LkpHistoryController), icon: "fa-th-list")]
[assembly: NavigationLink(338, "Configs/Oncology/Phys Exam Group", typeof(configs.LkpPhysExamGroupController), icon: "fa-th-list")]
[assembly: NavigationLink(339, "Configs/Oncology/Physical Exams", typeof(configs.LkpPhysExamsController), icon: "fa-th-list")]
[assembly: NavigationLink(340, "Configs/Oncology/Type of Visit", typeof(configs.TypeofvisitController), icon: "fa-th-list")]
[assembly: NavigationLink(341, "Configs/Oncology/Ethnicity", typeof(configs.EthnicityController), icon: "fa-th-list")]
[assembly: NavigationLink(342, "Configs/Oncology/Recommendations", typeof(configs.LkpRecommandsController), icon: "fa-th-list")]
[assembly: NavigationLink(342, "Configs/Oncology/Topography main", typeof(configs.TopographyMainController), icon: "fa-th-list")]
[assembly: NavigationLink(342, "Configs/Oncology/Topography details", typeof(configs.TopographySubController), icon: "fa-th-list")]
[assembly: NavigationLink(342, "Configs/Oncology/Waste types", typeof(configs.LkpLosstypesController), icon: "fa-th-list")]
[assembly: NavigationLink(342, "Configs/Oncology/Care Type", typeof(configs.CaretypesController), icon: "fa-th-list")]
[assembly: NavigationLink(342, "Configs/Oncology/Stage", typeof(configs.StagesController), icon: "fa-th-list")]
[assembly: NavigationLink(342, "Configs/Oncology/Cycles", typeof(configs.CyclesController), icon: "fa-th-list")]


[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Administration/Exceptions Log", url: "~/errorlog.axd", permission: EMR.Administration.PermissionKeys.Security, icon: "fa-ban", Target = "_blank")]
[assembly: NavigationLink(9000, "Administration/Languages", typeof(admin.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(admin.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(admin.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(admin.UserController), icon: "fa-users")]
[assembly: NavigationLink(9000, "Administration/Tenants", typeof(admin.TenantController), icon: " fa-key")]
[assembly: NavigationLink(9000, "Administration/Modules", typeof(admin.ModulesController), icon: " fa-key")]
[assembly: NavigationLink(9000, "Administration/Dashboard URL", typeof(admin.DashboardUrlController), icon: " fa-key")]