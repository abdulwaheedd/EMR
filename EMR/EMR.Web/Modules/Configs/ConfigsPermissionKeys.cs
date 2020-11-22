using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.Configs
{
    public class PermissionKeys
    {
        [DisplayName("Age Types")]
        public class TblAgeTypes
        {
            public const string Insert = "Configs:TblAgeTypes:Insert";
            public const string Update = "Configs:TblAgeTypes:Update";
            public const string Delete = "Configs:TblAgeTypes:Delete";
            public const string View = "Configs:TblAgeTypes:View";
        }

        [DisplayName("Blood Groups")]
        public class TblBloodGroup
        {
            public const string Insert = "Configs:TblBloodGroup:Insert";
            public const string Update = "Configs:TblBloodGroup:Update";
            public const string Delete = "Configs:TblBloodGroup:Delete";
            public const string View = "Configs:TblBloodGroup:View";
        }

        [DisplayName("Case Types")]
        public class TblCaseTypes
        {
            public const string Insert = "Configs:TblCaseTypes:Insert";
            public const string Update = "Configs:TblCaseTypes:Update";
            public const string Delete = "Configs:TblCaseTypes:Delete";
            public const string View = "Configs:TblCaseTypes:View";
        }

        [DisplayName("Which child")]
        public class TblChild
        {
            public const string Insert = "Configs:TblChild:Insert";
            public const string Update = "Configs:TblChild:Update";
            public const string Delete = "Configs:TblChild:Delete";
            public const string View = "Configs:TblChild:View";
        }
        
        [DisplayName("Lab Department")]
        public class TblDept
        {
            public const string Insert = "Configs:TblDept:Insert";
            public const string Update = "Configs:TblDept:Update";
            public const string Delete = "Configs:TblDept:Delete";
            public const string View = "Configs:TblDept:View";
        }
                
        [DisplayName("Diagnosis")]
        public class TblDiagnosis
        {
            public const string Insert = "Configs:TblDiagnosis:Insert";
            public const string Update = "Configs:TblDiagnosis:Update";
            public const string Delete = "Configs:TblDiagnosis:Delete";
            public const string View = "Configs:TblDiagnosis:View";
        }
                        
        [DisplayName("Diseases category")]
        public class TblDiseasesCategory
        {
            public const string Insert = "Configs:TblDiseasesCategory:Insert";
            public const string Update = "Configs:TblDiseasesCategory:Update";
            public const string Delete = "Configs:TblDiseasesCategory:Delete";
            public const string View = "Configs:TblDiseasesCategory:View";
        }
                                
        [DisplayName("Education")]
        public class TblEducation
        {
            public const string Insert = "Configs:TblEducation:Insert";
            public const string Update = "Configs:TblEducation:Update";
            public const string Delete = "Configs:TblEducation:Delete";
            public const string View = "Configs:TblEducation:View";
        }
                                        
        [DisplayName("Test types")]
        public class TblExaminationsDetails
        {
            public const string Insert = "Configs:TblExaminationsDetails:Insert";
            public const string Update = "Configs:TblExaminationsDetails:Update";
            public const string Delete = "Configs:TblExaminationsDetails:Delete";
            public const string View = "Configs:TblExaminationsDetails:View";
        }          
        
        [DisplayName("Gender")]
        public class TblGender
        {
            public const string Insert = "Configs:TblGender:Insert";
            public const string Update = "Configs:TblGender:Update";
            public const string Delete = "Configs:TblGender:Delete";
            public const string View = "Configs:TblGender:View";
        }
                
        [DisplayName("Marital status")]
        public class TblMaritalStatus
        {
            public const string Insert = "Configs:TblMaritalStatus:Insert";
            public const string Update = "Configs:TblMaritalStatus:Update";
            public const string Delete = "Configs:TblMaritalStatus:Delete";
            public const string View = "Configs:TblMaritalStatus:View";
        }
                        
        [DisplayName("Newborn result/outcome")]
        public class TblNbResult
        {
            public const string Insert = "Configs:TblNbResult:Insert";
            public const string Update = "Configs:TblNbResult:Update";
            public const string Delete = "Configs:TblNbResult:Delete";
            public const string View = "Configs:TblNbResult:View";
        }
                                
        [DisplayName("Newborn status")]
        public class TblNbstatus
        {
            public const string Insert = "Configs:TblNbstatus:Insert";
            public const string Update = "Configs:TblNbstatus:Update";
            public const string Delete = "Configs:TblNbstatus:Delete";
            public const string View = "Configs:TblNbstatus:View";
        }
                                        
        [DisplayName("Newborn weight")]
        public class TblNbWeight
        {
            public const string Insert = "Configs:TblNbWeight:Insert";
            public const string Update = "Configs:TblNbWeight:Update";
            public const string Delete = "Configs:TblNbWeight:Delete";
            public const string View = "Configs:TblNbWeight:View";
        }
                                                
        [DisplayName("Occupation")]
        public class TblOccupation
        {
            public const string Insert = "Configs:TblOccupation:Insert";
            public const string Update = "Configs:TblOccupation:Update";
            public const string Delete = "Configs:TblOccupation:Delete";
            public const string View = "Configs:TblOccupation:View";
        }
                                                        
        [DisplayName("Patient exit status")]
        public class TblOutcomesMother
        {
            public const string Insert = "Configs:TblOutcomesMother:Insert";
            public const string Update = "Configs:TblOutcomesMother:Update";
            public const string Delete = "Configs:TblOutcomesMother:Delete";
            public const string View = "Configs:TblOutcomesMother:View";
        }
                                                                
        [DisplayName("Positions")]
        public class TblPositions
        {
            public const string Insert = "Configs:TblPositions:Insert";
            public const string Update = "Configs:TblPositions:Update";
            public const string Delete = "Configs:TblPositions:Delete";
            public const string View = "Configs:TblPositions:View";
        }
                                                                        
        [DisplayName("Professions")]
        public class TblProfessions
        {
            public const string Insert = "Configs:TblProfessions:Insert";
            public const string Update = "Configs:TblProfessions:Update";
            public const string Delete = "Configs:TblProfessions:Delete";
            public const string View = "Configs:TblProfessions:View";
        }
                                                                                
        [DisplayName("Relation")]
        public class TblRelation
        {
            public const string Insert = "Configs:TblRelation:Insert";
            public const string Update = "Configs:TblRelation:Update";
            public const string Delete = "Configs:TblRelation:Delete";
            public const string View = "Configs:TblRelation:View";
        }
                                                                                        
        [DisplayName("Wards")]
        public class TblWard
        {
            public const string Insert = "Configs:TblWard:Insert";
            public const string Update = "Configs:TblWard:Update";
            public const string Delete = "Configs:TblWard:Delete";
            public const string View = "Configs:TblWard:View";
        }
                                                                                                
        [DisplayName("List of diseases")]
        public class TblWardDiseases
        {
            public const string Insert = "Configs:TblWardDiseases:Insert";
            public const string Update = "Configs:TblWardDiseases:Update";
            public const string Delete = "Configs:TblWardDiseases:Delete";
            public const string View = "Configs:TblWardDiseases:View";
        }
                                                                                                        
        [DisplayName("Disease seriousness type")]
        public class TblWrdVar
        {
            public const string Insert = "Configs:TblWrdVar:Insert";
            public const string Update = "Configs:TblWrdVar:Update";
            public const string Delete = "Configs:TblWrdVar:Delete";
            public const string View = "Configs:TblWrdVar:View";
        }

        [DisplayName("Abortion types")]
        public class TblAbortionType
        {
            public const string Insert = "Configs:TblAbortionType:Insert";
            public const string Update = "Configs:TblAbortionType:Update";
            public const string Delete = "Configs:TblAbortionType:Delete";
            public const string View = "Configs:TblAbortionType:View";
        }

        [DisplayName("Ethnicity")]
        public class Ethnicity
        {
            public const string Insert = "Configs:Ethnicity:Insert";
            public const string Update = "Configs:Ethnicity:Update";
            public const string Delete = "Configs:Ethnicity:Delete";
            public const string View = "Configs:Ethnicity:View";
        }
        [DisplayName("History List")]
        public class LkpHistory
        {
            public const string Insert = "Configs:LkpHistory:Insert";
            public const string Update = "Configs:LkpHistory:Update";
            public const string Delete = "Configs:LkpHistory:Delete";
            public const string View = "Configs:LkpHistory:View";
        }
        [DisplayName("Imagings List")]
        public class LkpImaging
        {
            public const string Insert = "Configs:LkpImaging:Insert";
            public const string Update = "Configs:LkpImaging:Update";
            public const string Delete = "Configs:LkpImaging:Delete";
            public const string View = "Configs:LkpImaging:View";
        }
        [DisplayName("Lab Tests")]
        public class LkpLabTest
        {
            public const string Insert = "Configs:LkpLabTest:Insert";
            public const string Update = "Configs:LkpLabTest:Update";
            public const string Delete = "Configs:LkpLabTest:Delete";
            public const string View = "Configs:LkpLabTest:View";
        }
        [DisplayName("Physical Exams")]
        public class LkpPhysExams
        {
            public const string Insert = "Configs:LkpPhysExams:Insert";
            public const string Update = "Configs:LkpPhysExams:Update";
            public const string Delete = "Configs:LkpPhysExams:Delete";
            public const string View = "Configs:LkpPhysExams:View";
        }

        [DisplayName("Physical Exam Types")]
        public class LkpPhysGroup
        {
            public const string Insert = "Configs:LkpPhysGroup:Insert";
            public const string Update = "Configs:LkpPhysGroup:Update";
            public const string Delete = "Configs:LkpPhysGroup:Delete";
            public const string View = "Configs:LkpPhysGroup:View";
        }

        [DisplayName("Recommandations")]
        public class LkpRecommands
        {
            public const string Insert = "Configs:LkpRecommands:Insert";
            public const string Update = "Configs:LkpRecommands:Update";
            public const string Delete = "Configs:LkpRecommands:Delete";
            public const string View = "Configs:LkpRecommands:View";
        }

        [DisplayName("Medicine Forms")]
        public class LkpForm
        {
            public const string Insert = "Configs:LkpForm:Insert";
            public const string Update = "Configs:LkpForm:Update";
            public const string Delete = "Configs:LkpForm:Delete";
            public const string View = "Configs:LkpForm:View";
        }
        [DisplayName("Manufacturers")]
        public class LkpManufacturer
        {
            public const string Insert = "Configs:LkpManufacturer:Insert";
            public const string Update = "Configs:LkpManufacturer:Update";
            public const string Delete = "Configs:LkpManufacturer:Delete";
            public const string View = "Configs:LkpManufacturer:View";
        }

        [DisplayName("Suppliers")]
        public class LkpVendor
        {
            public const string Insert = "Configs:LkpVendor:Insert";
            public const string Update = "Configs:LkpVendor:Update";
            public const string Delete = "Configs:LkpVendor:Delete";
            public const string View = "Configs:LkpVendor:View";
        }
        [DisplayName("Medicine Units")]
        public class LkpUnit
        {
            public const string Insert = "Configs:LkpUnit:Insert";
            public const string Update = "Configs:LkpUnit:Update";
            public const string Delete = "Configs:LkpUnit:Delete";
            public const string View = "Configs:LkpUnit:View";
        }

        [DisplayName("Type of visits")]
        public class Typeofvisit
        {
            public const string Insert = "Configs:Typeofvisit:Insert";
            public const string Update = "Configs:Typeofvisit:Update";
            public const string Delete = "Configs:Typeofvisit:Delete";
            public const string View = "Configs:Typeofvisit:View";
        }
        [DisplayName("Test Types")]
        public class LkpTestTypes
        {
            public const string Insert = "Configs:LkpTestTypes:Insert";
            public const string Update = "Configs:LkpTestTypes:Update";
            public const string Delete = "Configs:LkpTestTypes:Delete";
            public const string View = "Configs:LkpTestTypes:View";
        }

        [DisplayName("Physical Examp Group")]
        public class LkpPhysExamGroup
        {
            public const string Insert = "Configs:LkpPhysExamGroup:Insert";
            public const string Update = "Configs:LkpPhysExamGroup:Update";
            public const string Delete = "Configs:LkpPhysExamGroup:Delete";
            public const string View = "Configs:LkpPhysExamGroup:View";
        }
        [DisplayName("Countries")]
        public class Countries
        {
            public const string Insert = "Configs:Countries:Insert";
            public const string Update = "Configs:Countries:Update";
            public const string Delete = "Configs:Countries:Delete";
            public const string View = "Configs:Countries:View";
        }

        [DisplayName("Loss types")]
        public class LkpLosstypes
        {
            public const string Insert = "Configs:LkpLosstypes:Insert";
            public const string Update = "Configs:LkpLosstypes:Update";
            public const string Delete = "Configs:LkpLosstypes:Delete";
            public const string View = "Configs:LkpLosstypes:View";
        }
        
        [DisplayName("Topography Main")]
        public class TopographyMain
        {
            public const string Insert = "Configs:TopographyMain:Insert";
            public const string Update = "Configs:TopographyMain:Update";
            public const string Delete = "Configs:TopographyMain:Delete";
            public const string View = "Configs:TopographyMain:View";
        }        
        [DisplayName("Topography Sub")]
        public class TopographySub
        {
            public const string Insert = "Configs:TopographySub:Insert";
            public const string Update = "Configs:TopographySub:Update";
            public const string Delete = "Configs:TopographySub:Delete";
            public const string View = "Configs:TopographySub:View";
        }

        [DisplayName("Cycles lists")]
        public class Cycles
        {
            public const string Insert = "Configs:Cycles:Insert";
            public const string Update = "Configs:Cycles:Update";
            public const string Delete = "Configs:Cycles:Delete";
            public const string View = "Configs:Cycles:View";
        }
        
        [DisplayName("Care Depts")]
        public class Caretypes
        {
            public const string Insert = "Configs:Caretypes:Insert";
            public const string Update = "Configs:Caretypes:Update";
            public const string Delete = "Configs:Caretypes:Delete";
            public const string View = "Configs:Caretypes:View";
        }        
        [DisplayName("Stages")]
        public class Stages
        {
            public const string Insert = "Configs:Stages:Insert";
            public const string Update = "Configs:Stages:Update";
            public const string Delete = "Configs:Stages:Delete";
            public const string View = "Configs:Stages:View";
        }

        [DisplayName("Blood status")]
        public class BloodStatus
        {
            public const string Insert = "Configs:BloodStatus:Insert";
            public const string Update = "Configs:BloodStatus:Update";
            public const string Delete = "Configs:BloodStatus:Delete";
            public const string View = "Configs:BloodStatus:View";
        }
        [Description("[General]")]
        public const string General = "Configs:General";
    }
}