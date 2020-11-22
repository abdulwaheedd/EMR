using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.Verifications
{
    public class PermissionKeys
    {
        [DisplayName("Blood Transfusion")]
        public class Cbloodtransfusions
        {
            public const string Insert = "Verifications:Cbloodtransfusions:Insert";
            public const string Update = "Verifications:Cbloodtransfusions:Update";
            public const string Delete = "Verifications:Cbloodtransfusions:Delete";
            public const string View = "Verifications:Cbloodtransfusions:View";
        }

        [DisplayName("Diagnosis")]
        public class Cdiagnosis
        {
            public const string Insert = "Verifications:Cdiagnosis:Insert";
            public const string Update = "Verifications:Cdiagnosis:Update";
            public const string Delete = "Verifications:Cdiagnosis:Delete";
            public const string View = "Verifications:Cdiagnosis:View";
        }

        [DisplayName("Imagings")]
        public class Cimagings
        {
            public const string Insert = "Verifications:Cimagings:Insert";
            public const string Update = "Verifications:Cimagings:Update";
            public const string Delete = "Verifications:Cimagings:Delete";
            public const string View = "Verifications:Cimagings:View";
        }
        
        [DisplayName("Lab Tests")]
        public class Clabtests
        {
            public const string Insert = "Verifications:Clabtests:Insert";
            public const string Update = "Verifications:Clabtests:Update";
            public const string Delete = "Verifications:Clabtests:Delete";
            public const string View = "Verifications:Clabtests:View";
        }
                
        [DisplayName("Medicine administration")]
        public class Cmedadministration
        {
            public const string Insert = "Verifications:Cmedadministration:Insert";
            public const string Update = "Verifications:Cmedadministration:Update";
            public const string Delete = "Verifications:Cmedadministration:Delete";
            public const string View = "Verifications:Cmedadministration:View";
        }
                        
        [DisplayName("Medicine prescriptions")]
        public class Cmedprescriptions
        {
            public const string Insert = "Verifications:Cmedprescriptions:Insert";
            public const string Update = "Verifications:Cmedprescriptions:Update";
            public const string Delete = "Verifications:Cmedprescriptions:Delete";
            public const string View = "Verifications:Cmedprescriptions:View";
        }     
        

        [DisplayName("Patient hisotry")]
        public class Cpatienthistory
        {
            public const string Insert = "Verifications:Cpatienthistory:Insert";
            public const string Update = "Verifications:Cpatienthistory:Update";
            public const string Delete = "Verifications:Cpatienthistory:Delete";
            public const string View = "Verifications:Cpatienthistory:View";
        }
                

        [DisplayName("Patient details")]
        public class Cpatients
        {
            public const string Insert = "Verifications:Cpatients:Insert";
            public const string Update = "Verifications:Cpatients:Update";
            public const string Delete = "Verifications:Cpatients:Delete";
            public const string View = "Verifications:Cpatients:View";
        }                

        [DisplayName("Physical examination")]
        public class Cphysicalexamination
        {
            public const string Insert = "Verifications:Cphysicalexamination:Insert";
            public const string Update = "Verifications:Cphysicalexamination:Update";
            public const string Delete = "Verifications:Cphysicalexamination:Delete";
            public const string View = "Verifications:Cphysicalexamination:View";
        }
        
        [DisplayName("Diets")]
        public class Crecommendations
        {
            public const string Insert = "Verifications:Crecommendations:Insert";
            public const string Update = "Verifications:Crecommendations:Update";
            public const string Delete = "Verifications:Crecommendations:Delete";
            public const string View = "Verifications:Crecommendations:View";
        }     
        
        [DisplayName("Visits")]
        public class Cvisits
        {
            public const string Insert = "Verifications:Cvisits:Insert";
            public const string Update = "Verifications:Cvisits:Update";
            public const string Delete = "Verifications:Cvisits:Delete";
            public const string View = "Verifications:Cvisits:View";
        }
         
        
        [DisplayName("Vital signs")]
        public class Cvitalsigns
        {
            public const string Insert = "Verifications:Cvitalsigns:Insert";
            public const string Update = "Verifications:Cvitalsigns:Update";
            public const string Delete = "Verifications:Cvitalsigns:Delete";
            public const string View = "Verifications:Cvitalsigns:View";
        }

        [Description("[General]")]
        public const string General = "Verifications:General";
    }
}