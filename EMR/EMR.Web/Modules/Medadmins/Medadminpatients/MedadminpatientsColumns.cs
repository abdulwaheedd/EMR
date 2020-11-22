﻿
namespace EMR.Medadmins.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Medadmins.Medadminpatients")]
    [BasedOnRow(typeof(Entities.MedadminpatientsRow), CheckNames = true)]
    public class MedadminpatientsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(1, descending: true)]
        public Int64 Mrid { get; set; }
        [EditLink]
        [Width(120)]
        public String Mrn { get; set; }
        [Width(180)]
        public String FirstName { get; set; }
        [Width(180)]
        public String LastName { get; set; }
        [Width(180)]
        public String FatherName { get; set; }
        [Width(180)]
        public string GenderName { get; set; }
        [Width(180)]
        public DateTime DateOfBirth { get; set; }
        [Width(120)]
        public Int32 AgeInYear { get; set; }
        [Width(180)]
        public string EthnicityName { get; set; }
    }
}